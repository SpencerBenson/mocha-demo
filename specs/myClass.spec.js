import  MyClass  from '../src/myClass.js'
import {expect} from 'chai'
const myObj = new MyClass()


describe("Test suite for MyClass", function () {
  it("Test the add method", function () { 
      expect (myObj.add(1,2)).to.equal(3)
  })
})