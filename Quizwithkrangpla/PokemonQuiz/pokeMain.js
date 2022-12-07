const poke = require('./pokeList.js').pokeList;
//เริ่มเขียนต่อจากตรงนี้

function pokemon (poke){
    let pokeArray = []
    for (const item of poke) {
        if(item !== null && item.type === 'fire'){
            pokeArray.push(item)
        }
        
    }
    return pokeArray.sort(function(a,b){
        return a.id-b.id
    })
}

// const findPokeByType = (poke) => {
//     let arr = []
//     for(let item of poke) {
//         if(item !== null && item.type === 'fire'){
//             arr.push(item)
//         }
//     }
//     return arr.sort(function (a , b){
//     return parseInt (a-b)-parseInt(b.id)
// })
// }


console.log(pokemon(poke))