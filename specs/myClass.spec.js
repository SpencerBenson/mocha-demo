import  MyClass  from '../src/MyClass.js'
import chai, { expect} from 'chai'
const myObj = new MyClass()
import sinon from 'sinon'
import  chaiAsPromised from "chai-as-promised"

chai.use(chaiAsPromised);


describe.skip("Test suite for MyClass", function () {
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
  it('Mock the sayHello method', function () {
    const sinonMock = sinon.mock(myObj)
    const expectation = sinonMock.expects("sayHello")
    expectation.exactly(1)
    expectation.withExactArgs('Hello there!')
    myObj.callAnotherFn(10, 20)
    sinonMock.verify()
  })
})

describe.skip('Test Suit Stubs', function () {
  it('Stub the add method', function () {
    const sinonStub = sinon.stub(myObj, 'add')
    // sinonStub.withArgs(10, 20).returns(100)
    // expect(myObj.callAnotherFn(10,20)).to.be.equal(100)
    sinonStub.withArgs(10, 20)
      .onFirstCall()
      .returns(100)
      .onSecondCall()
    .returns(200)
    expect(myObj.callAnotherFn(10,20)).to.be.equal(100)
    expect(myObj.callAnotherFn(10,20)).to.be.equal(200)
  })

})
  describe('Test the promise', function () {
    after(function () {
      console.log("------after the test suite executes")
    })
   before(function () {
      console.log("------before the test suite executes")
    })
    afterEach(function () {
      console.log("------after each the test suite executes")
    })
    beforeEach(function () {
     sinon.restore()
      console.log("------before each the test suite executes")
    })
    it("Promise test case", async () => { 
      const result = await myObj.testPromise()
      expect(result).to.be.equal(6);
    })
    it("Promise test case with chai as promised", () => { 

      return expect(myObj.testPromise()).to.eventually.equal(6)
    })
  })