module.exports = {
  preset: 'ts-jest',
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/src/$1'
  },
  moduleFileExtensions: ['js', 'vue', 'json', 'ts'],
  transform: {
    '.*\\.(vue)$': 'vue-jest',
    '^.+\\.ts$': 'ts-jest'
  },
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.jest.json',
      diagnostics: false
    },
    'vue-jest': {
      tsConfig: 'tsconfig.jest.json',
      babelConfig: false
    }
  },
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/components/**/*.vue',
    '<rootDir>/src/pages/**/*.vue'
  ]
  // coverageDirectory: '__coverage__',
  // coverageReporters: ['html', 'text-summary']
}
