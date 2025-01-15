var myMap = new Map()

myMap.set("key1","Bangladesh1")
myMap.set("key2","Bangladesh2")
myMap.set("key3","Bangladesh3")
myMap.set("key4","Bangladesh4")
myMap.set("key5","Bangladesh5")
myMap.set("key6","Bangladesh6")
myMap.set("key7","Bangladesh7")

//myMap.delete("key1") 
// myMap.clear() // all clear
//console.log(myMap.get("key4"))

if (myMap.has("key8")){
    console.log("Yes")
}
else{
    console.log("No")
}
for (let mykey of myMap.keys()){
    console.log(mykey)
}

for (let myvalue of myMap.values()){
    console.log(myvalue)
}