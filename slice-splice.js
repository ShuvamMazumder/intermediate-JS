//Array slice, splice, array join elements

const num = [1,2,3,4,5,6,7,8,9];
//slice
const part = num.slice(2,5);
console.log(part);
console.log(num);
//splice
const removed = num.splice(2,5);
console.log(removed);
console.log(num);
//join
const together = num.join('');
console.log(together);
console.log(num);