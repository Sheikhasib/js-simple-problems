// // const numbers = [72,46,74,54,43,87];
// let sum = 0;
// for(let i = 0;i<numbers.length;i++){
//     const element = numbers[i];
//     console.log(element);
//     sum = sum + element;
// }
// console.log(sum);

function arrayTotal(numbers){
    let sum=0;
    for(let i=0;i<numbers.length;i++){
        const element = numbers[i];
        sum = sum + element;     
    }
    return sum;
}

const total = arrayTotal([32,45,67]);
console.log('Array total:',total);