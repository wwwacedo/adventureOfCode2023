const time = 46857582
const distance = 208141212571410
let counter = 0;

for (let i = 1; i <= time; i++) {
    const dist = i * (time - i);
    if(dist > distance) counter++;
}


console.log(counter); //36919753