/// <reference path="../typings/main.d.ts" />
import mocha = require("mocha");
import chai = require("chai");
let should: Chai.Should = chai.should();

import HelloWorld from "../src/index";

describe("Hello World", () => {
  let helloWorld: HelloWorld = new HelloWorld();
  it("should print hello world and return 0", () => {
    helloWorld.hello().should.equal("Hello world");
  });
});