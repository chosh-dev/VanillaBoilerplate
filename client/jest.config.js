export default async () => {
  return {
    testEnvironment: 'jsdom',
    transform: {},
    rootDir: './',
    moduleFileExtensions: ['js', 'jsx'],
    moduleNameMapper: {
      '^_core(.*)$': '<rootDir>/src/core$1',
      '^_components(.*)$': '<rootDir>/src/components$1',
      '^_styles(.*)$': '<rootDir>/src/_styles$1',
      '^_images(.*)$': '<rootDir>/src/images$1',
      '^_utils(.*)$': '<rootDir>/src/utils$1',
      '^_store(.*)$': '<rootDir>/src/store$1',
      '^_actions(.*)$': '<rootDir>/src/store/actions$1',
      '^_types(.*)$': '<rootDir>/src/store/types$1',
    },
  };
};
