const {defaults} = require('jest-config');
module.exports = {
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
    bail: 1,
    clearMocks: true,
    collectCoverage: true,
    collectCoverageFrom: ['components/**/*.js', 'pages/**/*.js'],
    coverageReporters: ['lcov', 'text'],
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  moduleNameMapper: {
    "\\.(css|less|scss|sss|styl)$": "<rootDir>/node_modules/jest-css-modules"
  }
};