const number = 3.6462;
// Math.floor
// Math.ceil
// Math.round

// const random = Math.random();
// const between10 = random * 10;
// const rounded = Math.round(between10);
// console.log(rounded);
const founded = []
for(let i = 0;i < 10; i++){
    const random = Math.random() * 100;
    const picked = Math.round(random);
    if(founded.indexOf(founded) == -1){
        founded.push(picked)
    }
    else{
        console.log(founded,picked);
    }   
}
console.log(founded);