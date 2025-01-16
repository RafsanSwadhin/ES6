class Parent{
    hello_01(){
        console.log("hello 01")
    }
    
    hello_02(){
        console.log("hello 02")
    }
    
    }
    
    class Child extends Parent{
        demo(){
            super.hello_01()
            super.hello_02()
        }
    
    }
    
    var obj = new Child()
    obj.demo()