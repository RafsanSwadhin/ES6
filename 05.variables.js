//using let:
// is assigned the block scope
// cannot be re-decleared
// can be re-assigned a value


//using const:
// it is block scope
// cannot be re-decleared
// cannot be re-assigned a value


//using var:
// can be re-decleared
// can be re-assigned a value


var name = "Rafsan"
name = "Jani" //re-assign same with let  but with const it is not possible 
console.log(name)

var school = "Mzs"
var school = "vgs" // re-decleared, with const,let it is  not possible
console.log(school)