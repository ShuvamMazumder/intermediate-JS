//double equal (==) vs triple equal (===), implicit conversion
//2 ==3 : false
//2 == '2' : true
//2=== '2 : false
//1 == true : true
//1 === true : false
//0 == false : true
//0 === false : false
const first = 2;
const second = '2';
if (first == second){
    console.log('condition is true');
}
else{
    console.log('condition is false');
}