class MyClass{
  constructor() {
      console.log("Initiate")
  }

  add(arg1, arg2) {
    return arg1 +arg2
  }

  sayHello(str) {
    console.log(str)
  }

  callAnotherFn(arg1, arg2) {
    this.sayHello("Hello there!")
    return this.add(arg1, arg2)
  }

  callTheCallback(callback) {
    callback()
  }
}



export default MyClass