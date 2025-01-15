var Rafsan = {shirt:true, shirtColor:"white",smile:true, swatter:true, swatterColor:"blue"}



var RafsanPro  = {
    shirt:{
        color:"Black",
        quality:"Good",
        price:"220taka"
    },
    swatter:{
        color:"White",
        quality:"Good",
        price:"555taka"       
    },
    face:{
        smilling:"Yes",
        chosma:"No",
        teeth:"White"
    }
}

console.log(Rafsan['swatter'])
console.log(RafsanPro['swatter'])
console.log(RafsanPro['swatter']['price'])