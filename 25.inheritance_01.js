class Parent{
hello_01(params){
    console.log("hello 01")
}

hello_02(params){
    console.log("hello 02")
}

}

class Child extends Parent{

}

var obj = new Child()
obj.hello_01()
obj.hello_02()