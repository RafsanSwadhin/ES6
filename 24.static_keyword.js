// without static keyword there is a relation between class properiest with object
// with static there is a relation between class properties with class

// class MyClass{
//     hello(){
//         console.log("hello vhi")
//     }
// }

// var obj = new MyClass
// obj.hello()


class MyClass{
    static hello(){
        console.log("hello vhi")
    }
}

MyClass.hello()