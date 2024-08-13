
// function capitalize(str){
//     str = str.toLowerCase()
//     console.log(str.replace(str[0],str[0].toUpperCase()))

// }
// capitalize('str')

function truncate(str){
    let length = str.length
    console.log(length > 20 
        ? str.slice(0,20)+'...' :str)

}
truncate('a quick brown fox jumps over the lazy dog')