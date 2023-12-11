import fs from 'fs';

const input = fs.readFileSync('./day2.txt', { encoding: 'utf8', flag: 'r' }).split('\n');

const regex = /Game ([0-9][0-9]?|[2-9][0-9]?|100):/g;

let notGood = [];

const a =
	input
		.map(line => {
			return line.replace(regex, '').split(';');
		});


// console.log(a);

const b = a.map((arr, i) => {
	const colors = [{ name: 'red', value: 0 }, { name: 'green', value: 0 }, { name: 'blue', value: 0 }];
	arr.forEach(line => line.split(',')
		.forEach(item => {
			let value = '';
			for (const char of item) {
				if (!isNaN(char)) value += char;
			}
			for (const color of colors) {
				if (item.includes(color.name) && Number(value) > color.value) {
					color.value = Number(value);
				};
			}
		}));
		
	return { id: i + 1, red: colors[0].value, green: colors[1].value, blue: colors[2].value };
})

// console.log(b);

const powers = b.map(obj => {
	const { red, green, blue } = obj;
	return red * green * blue;
});

// console.log(powers);

const result = powers.reduce((acc, item) => acc + item, 0);

console.log(result);

