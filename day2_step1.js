import fs from 'fs';

const input = fs.readFileSync('./day2.txt', { encoding: 'utf8', flag: 'r' }).split('\n');

const RED = 12;
const GREEN = 13;
const BLUE = 14;

const regex = /Game ([0-9][0-9]?|[2-9][0-9]?|100):/g;

const colors = [{ red: 12 }, { green: 13 }, { blue: 14 }];

let notGood = [];

const a =
	input
		.map(line => {
			return line.replace(regex, '').split(';');
		});


// console.log(a);

a.forEach((arr, i) => {
	arr.forEach(line => line.split(',')
		.forEach(item => {
			let value = '';
			for (const char of item) {
				if (!isNaN(char)) value += char;
			}
			for (const color of colors) {
				if (item.includes(Object.keys(color)[0]) && Number(value) > Object.values(color)[0]) {
					notGood.push(i + 1);
				};
			}

		}));
})

notGood = [...new Set(notGood)];

const result = [];

for (let i = 0; i < 100; i++) {
	if (!notGood.includes(i + 1)) result.push(i + 1);
}

console.log(result.reduce((acc, item) => acc + item, 0));



