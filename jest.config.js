module.exports = {
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
      tsConfig: 'tsconfig.json',
      diagnostics: false
    },
    'vue-jest': {
      babelConfig: false
    }
  },
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/components/**/*.vue',
    '<rootDir>/src/pages/**/*.vue'
  ]
}
