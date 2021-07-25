export default {
  clearMocks: true,
  coverageDirectory: "coverage",
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageReporters: [
    "text-summary",
  ],
  coverageProvider: "v8",
  testEnvironment: "node",
  preset: 'ts-jest',
  testMatch: [""],
};
