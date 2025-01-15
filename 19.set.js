var mySet = new Set()

mySet.add('Ban')
mySet.add('Ind')
mySet.add('Aus')
mySet.add('USA')
mySet.add('Pak')
mySet.add('Ban') // this will not be counted

//mySet.clear() all remove
//mySet.delete("Pak")
//console.log(mySet.size)

console.log(mySet.values())
console.log(mySet)

if (mySet.has('Dha')){
    console.log('Yes')
}
else{
    console.log('No')
}

