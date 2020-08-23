//map, filter, find, smart way to run for loop

 const numbers=[1,2,3,4,6];
// const output =[];
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result =element * element;
//     output.push(result);
// }
// console.log(output);

// const result = numbers.map(function(element){
//     return element*element;
// })
const result = numbers.map (element => element* element)
console.log(result);

const isThere= numbers.filter ( element => element <6)
console.log(isThere);
const give = numbers.find( element => element >1 )
console.log(give);