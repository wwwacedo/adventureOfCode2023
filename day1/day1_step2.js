import fs from 'fs';

const input = fs.readFileSync('day1/day1.txt', { encoding: 'utf8', flag: 'r' }).split('\n');

const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
const digits = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

const a = input.map(str => {
	let newString = '';
	for(const i of str) newString += !isNaN(i) ? ` ${i} ` : i;
	return newString.trim();
});

// console.log(a);

const b = a.map(string => string.split(' ').filter(char => char !== ''));

// console.log(b);	

const d = b.map(arr => {
	return arr.map(el => {
		if (el.length === 1) {
			return el;
		} else {
			const length = el.length;
			const temp = [];
			for (let i = 0; i < length - 1; i++) {
				const string = el[i] + el[i + 1];
				for (let j = 0; j < digits.length; j++) {
					if (digits[j].startsWith(string) && el.includes(digits[j])) {
						temp.push(numbers[j]);
						break;
					}
				}
			}
			return temp.join('');
		}

	});
});

// console.log(d);

const e = d	.map(arr => {
	return arr.map(el => {
		if (el.length === 1) {
			return isNaN(el) ? '' : el;
		} else {
			return el.split('').join(' ');
		}
	})
}).map(arr => arr.join(' '));

// console.log(e);

const f = e.map(str => {
	return str.split(' ').filter(el => el !== '').join('');
});

// console.log(f);

const g = f
	.map(el => {
		if (el.length === 1) return el + el;
		else if (el.length === 2) return el;
		else return el[0] + el[el.length - 1];
	})
	.map(el => parseInt(el));

// console.log(g);

const h = g.reduce((a, b) => a + b, 0);

console.log(h);

