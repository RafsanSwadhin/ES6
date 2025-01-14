// global scope : in the global scope , the variable can be accessed from any part of
// the js code
// local scope: in the local scope , the variable can be accessed within a function 
// where it is decleared



// var name = "rafsan" // global scope
function MyFun(){
    var name = "rafsan" // local scope
    console.log(name)
}
MyFun()

