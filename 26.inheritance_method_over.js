class Parent{
    hello_01(){
        console.log("hello 01")
    }
    
    hello_02(){
        console.log("hello 02")
    }
    
    }
    
    class Child extends Parent{
        hello_01(){
            console.log("oh vhieeeeee")
        }
    
    }
    
    var obj = new Child()
    obj.hello_01()
    obj.hello_02()