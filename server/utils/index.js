const CustomError = (status, msg) => {
  const err = new Error(msg);
  err.status = status;
  return err;
};

module.exports = { CustomError };
