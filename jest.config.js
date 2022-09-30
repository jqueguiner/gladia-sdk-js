/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./tests/mandatoryAssertions.js'],
  transformIgnorePatterns: ['/node_modules/(?!(@vespaiach)/)', '\\.pnp\\.[^\\/]+$'],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.jest.json',
    },
  },
};
