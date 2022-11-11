class MyClass{
  constructor() {
      console.log("Initiate")
  }

  add(arg1, arg2) {
    return arg1 +arg2
  }

  callAnotherFn(arg1, arg2) {
    return this.add(arg1, arg2)
  }

  callTheCallback(callback) {
    callback()
  }
}



export default MyClass