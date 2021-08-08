const business = 1350;
const minister = 250;
const army = 600;
// if(business>minister){
//     console.log('Business is bigger');
// }
// else{
//     console.log('minister is bigger');
// }

// Task 1:create a function that takes three numbers as input parameter and returns you the largest number of the three

// Task 2:write a function find the smallest of three numbers

function findLargest(first,second){
    if(first>second){
        return first;
    }
    else{
        return second;
    }
}

const largest = findLargest(356,764);
console.log('largest is:',largest);

// Compare three
// if(business > minister && business > army){
//     console.log('Business is bigger');
// }
// else if(minister > business && minister > army){
//     console.log('Minister is bigger');
// }
// else {
//     console.log('army is bigger');
// }

var max = Math.max(business,minister,army);
// console.log('largest is max',max);