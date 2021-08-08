function largestElement(numbers){
    let largest = numbers[0];
    for(let i=0;i<numbers.length;i++){
        const element = numbers[i];
        if(element>largest){
            largest = element;
        }
    }
    return largest;
}
const ages = [24,66,33,67,78,43];
const oldest = largestElement(ages);
const oldest2 = largestElement([-12,-4,-15]);
console.log('oldest',oldest2);

// Task:find the lowest element of an array