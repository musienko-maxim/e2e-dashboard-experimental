module.exports = {
    // "preset": "jest-puppeteer"
  preset: "ts-jest",
  testTimeout: 30000,
//   testEnvironment: "node",
  globals: {
    "ts-jest": {
      isolatedModules: true,
    },
  },
  transform: {
    '^.+\\.ts$': 'ts-jest'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleDirectories: ["js", ".", "node_modules"],
  verbose: true
}
