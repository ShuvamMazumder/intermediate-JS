//Apply map, filter, find on an array of objects
const students =[
    {id:56 , name:'shuvam'},
    {id:49 , name: 'himel'},
    {id:74, name: 'shafin'},

];
 var studentNames =[];
// for (let i = 0; i < students.length; i++) {
//     const element = students[i];
//     const result = element.name;
//     studentNames.push(result);
// }


const names = students.map(s => s.name); //values -> parameter => parameter.expression
const ids = students.map( s => s.id);
const biggerId = students.filter ( s => s.id>50)
console.log(names);
console.log(ids);
console.log(biggerId);