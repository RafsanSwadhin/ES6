function Calculation(...numbers){
    // if want more perameter we can write function Calculation(a,b,...numbers)
    let sum = 0
    for (let i of numbers ){
        sum = sum+i
    }
    console.log('sum is:',sum)
}
Calculation(1,1,2,3,4,5,6,7)