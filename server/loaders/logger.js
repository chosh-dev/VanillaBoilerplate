const winston = require("winston");
const morgan = require("morgan");
const { mode } = require("../config");

const loggerLoader = ({ app }) => {
  initWinston({ app });
  initMorgan({ app });
};

const initWinston = ({ app }) => {
  const level = mode == "development" ? "debug" : "warn";

  const levels = {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    debug: 4,
  };

  const winstonLevelColor = {
    error: "red",
    warn: "orange",
    info: "green",
    http: "white",
    debug: "white",
  };

  winston.addColors(winstonLevelColor);

  const format = winston.format.combine(
    winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss:ms" }),
    winston.format.colorize({ all: true }),
    winston.format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
  );

  const transports = [
    new winston.transports.File({
      filename: "logs/error.log",
      level: "error",
    }),
    new winston.transports.File({ filename: "logs/all.log" }),
  ];

  app.logger = winston.createLogger({
    level,
    levels,
    format,
    transports,
  });

  if (mode !== "production") {
    app.logger.add(new winston.transports.Console());
  }
};

const initMorgan = ({ app }) => {
  const morganFormat = `:method :url :status :res[content-length] - :response-time ms`;
  const morganMiddleware = morgan(morganFormat, {
    stream: {
      write: message => app.logger.http(message.substring(0, message.lastIndexOf("\n"))),
    },
    skip: !mode === "development",
  });

  app.use(morganMiddleware);
};

module.exports = loggerLoader;
