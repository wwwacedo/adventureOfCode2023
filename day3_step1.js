// line -> initial = 1, final = lenght
// para cada linha, verificar se o caracter é especial
// se for um caracter especial, memorizar o numero da linha e coluna
// [ {l: 2, c: 4}, {...}, ... ]
// definir a área de influencia do caracter especial: 
	// if line = l - 1, col = c - 1 || c || c + 1
	// if line = l, 	col = c - 1 || c + 1
	// if line = l + 1, col = c - 1 || c || c + 1

import fs from 'fs';

const input = fs.readFileSync('./day3.txt', { encoding: 'utf8', flag: 'r' }).split('\n');

const numbers = [];
const especial = [];
let selected = [];

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

// console.log(numbers);

input.forEach((line, index) => {
	for (let i = 0; i < line.length; i++) {
		if(isNaN(line[i]) && line[i] !== '.') {
			especial.push({ line: index, position: i, caracter: line[i] });
		}
	}
})

// console.log(especial);

especial.forEach(item => {
	const { line, position, caracter } = item;
	numbers
		.filter(item => item.line === line - 1 || item.line === line || item.line === line + 1)
		.forEach(item => {
			for(let i = item.initial; i <= item.final; i++) {
				if(i === position - 1 || i === position || i === position + 1) {
					selected.push(item);
					break;
				}
			}
		})
})

selected = [...new Set(selected)];

// console.log(selected);

selected = selected.map(item => Number(item.number));

console.log(selected.reduce((acc, item) => acc + item, 0));

