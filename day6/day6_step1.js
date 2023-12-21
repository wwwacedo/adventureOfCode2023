const time = [46, 85, 75, 82]
const distance = [208, 1412, 1257, 1410]

const all = time.map((t, index) => {
    const opt = [];
    for(let i = 1; i <= t; i++) {
        opt.push({ holding: i, distance: i * (t - i) });
    }
    return opt.filter(item => item.distance > distance[index]).length
})

let result = 1;

all.forEach(n => {
    result *= n;
});

console.log(result); //1108800