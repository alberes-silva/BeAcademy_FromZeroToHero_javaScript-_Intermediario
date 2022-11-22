/* immediately invoked function expression ou IIFE */
// (function(){
//     alert('Hello, world');
// }
// )();

// (function (message){
//     alert(message);
// }
// )('Hello, world!');

/* Arrow function */

/*function sum(a){
    return a + 100;
} */

const sum = a => a + 100

console.log(sum(3))

//exemplo com map()
const materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
];

// const newArray = materials.map(
//     function showLength(materials){
//         return materials.length
//     }
// );

const newArray = materials.map(material => material.length)
console.log(newArray)