const colors = [{red: 12}, {green: 13}, {blue: 14}];

for (const color of colors) {
	console.log(Object.keys(color)[0]);
	console.log(Object.values(color)[0]);
}

// range in js
const initial = 2
const final = 4
const numberRange = Array.from({length: final - initial + 1}, (_, i) => i + initial)

const position = 6
const positionRange = [position - 1, position, position + 1]

if(numberRange.includes(position - 1) || numberRange.includes(position) || numberRange.includes(position + 1)) {
	console.log('yes')
}