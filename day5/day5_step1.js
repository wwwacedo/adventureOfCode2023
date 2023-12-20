import fs from 'fs';

const input = fs.readFileSync('day5/day5.txt', { encoding: 'utf8', flag: 'r' }).split('\n');


const seeds = input[1].split(" ").map(item => Number(item));

function extractDataFromTxt(initialLine, finalLine) {
    const initial = initialLine - 1;
    const final = finalLine || initialLine + 1;
    const result = [];
    for (let i = initial; i < final; i++) {
        const line = input[i];
        const [des, src, len] = line.split(" ").map(item => Number(item));
        result.push({ dest: des, source: src, len: len })
    }
    return result;
}

const seedToSoil = extractDataFromTxt(5, 37);
const soilToFertilizer = extractDataFromTxt(40, 80);
const fertilizerToWater = extractDataFromTxt(83, 124);
const waterToLight = extractDataFromTxt(127, 153);
const lightToTemperature = extractDataFromTxt(156, 193);
const temperatureToHumidity = extractDataFromTxt(196, 208);
const humidityToLocation = extractDataFromTxt(211, 236);


function extractData(initArray, transformArray) {
    let flag = false;
    const result = initArray.map(seed => {
        for (const a of transformArray) {
            if (seed >= a.source && seed < a.source + a.len) {
                return seed - a.source + a.dest;
            }
        }
        if (!flag) return seed;
    })
    return result;
}

const a = extractData(seeds, seedToSoil)
const b = extractData(a, soilToFertilizer)
const c = extractData(b, fertilizerToWater)
const d = extractData(c, waterToLight)
const e = extractData(d, lightToTemperature)
const f = extractData(e, temperatureToHumidity)
const g = extractData(f, humidityToLocation)
console.log(Math.min(...g))



