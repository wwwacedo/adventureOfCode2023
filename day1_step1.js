import fs from 'fs';

const input = fs.readFileSync('./day1.txt', { encoding: 'utf8', flag: 'r' }).split('\n');

let allStringsSplitado = input.map(string => string.split(""));

allStringsSplitado = allStringsSplitado.map(arr => {
	return arr.filter(char => {
		return !isNaN(char);
	});
}); 

const onlyNumbers = allStringsSplitado.map(arr => {
	if(arr.length == 1) {
		return arr[0] + arr[0];
	} else if (arr.length == 2) {
		return arr[0] + arr[1];
	} else {
		return arr[0] + arr[arr.length - 1];
	}
});

console.log(onlyNumbers.map(num => parseInt(num)).reduce((a, b) => a + b));


