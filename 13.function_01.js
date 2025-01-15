// simple func
function Myname(){
    var x = 10
    var y = 12
    var z = x+y
    console.log(z)
}
Myname()

// perameterized func
function Myname_(x,y){
    var z = x+y
    console.log(z)
}
Myname_(10,50)

//rest perameter

function Myname_1(...x){
    console.log(x)
}
Myname_1(10,50,12,2,5,5,4)

// returning function

function Myname_2(){
    return "Rafsan"
}
console.log(Myname_2())

// anonymous func

var myfunc = function(){
    return "Hello, it is an anonymous function"
}
console.log(myfunc())