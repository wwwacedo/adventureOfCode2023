import fs from 'fs';

const input = fs.readFileSync('day3/day3.txt', { encoding: 'utf8', flag: 'r' }).split('\n');

const EXACT_NUMBER_OF_GEARS = 2;
const numbers = [];
const gears = [];
const gear_ratios = [];

input.forEach((line, index) => {
	for (let i = 0; i < line.length; i++) {
		let number = '';
		if(!isNaN(line[i])) {
			number += line[i];
			const initial = i;
			for(let j = i + 1; j < line.length; j++) {
				if(!isNaN(line[j])) {
					number += line[j];
					i++;
					if(j === line.length - 1) {
						numbers.push({ line: index, initial: initial, final: i, number: number });
						break;
					}
				} else {
					numbers.push({ line: index, initial: initial, final: i, number: number });
					break;
				}
			}
		}
	}
})

input.forEach((line, index) => {
	for (let i = 0; i < line.length; i++) {
		if(line[i] === '*') {
			gears.push({ line: index, position: i });
		}
	}
})

gears.forEach(item => {
	const { line, position } = item;
	const parts = [];
	numbers
		.filter(item => item.line === line - 1 || item.line === line || item.line === line + 1)
		.forEach(item => {
			for(let i = item.initial; i <= item.final; i++) {
				if(i === position - 1 || i === position || i === position + 1) {
					parts.push(item);
					break;
				}
			}
		})
	if(parts.length === EXACT_NUMBER_OF_GEARS) {
		const numbers = parts.map(item => Number(item.number));
		gear_ratios.push(numbers[0] * numbers[1]);
	}
})

console.log(gear_ratios.reduce((acc, item) => acc + item, 0));

