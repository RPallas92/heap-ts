module.exports = {
  roots: ["./"],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  testRegex: "(spec|test)\\.tsx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.test.json"
    }
  },
  testURL: "http://localhost",
  testEnvironment: "node"
}
