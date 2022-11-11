import  MyClass  from '../src/myClass.js'
import {expect} from 'chai'
const myObj = new MyClass()
import sinon from 'sinon'


describe("Test suite for MyClass", function () {
  it("Test the add method", function () { 
      expect (myObj.add(1,2)).to.equal(3)
  })
  it("Spy the add method", function () { 
    const spy = sinon.spy(myObj, 'add')
    const arg1 = 10
    const arg2 = 20
    myObj.callAnotherFn(arg1, arg2)
    // sinon.assert.calledOnce(spy)
    expect(spy.calledOnce).to.be.true
    expect(spy.calledOnceWith(arg1, arg2)).to.be.true
  })

  it('should call the callback fn', function () {
    let callbackspy = sinon.spy()
    myObj.callTheCallback(callbackspy)
    expect(callbackspy.calledOnce).to.be.true
    
})
})