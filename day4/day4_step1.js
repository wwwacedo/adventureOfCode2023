import fs from 'fs';

const input = fs.readFileSync('day4/day4.txt', { encoding: 'utf8', flag: 'r' }).split('\n');


const regex = /Card\s\d*:/;
const points = [];

input
	.map(line => line.replace(regex, "")
		.trim()
		.split(" ")
		.filter(item => item !== ""))
	.forEach(arr => {
		const card = arr.join(" ").split(" | ").map(arr => arr.split(" "))
		let cardPoints = 0;
		for (const number of card[1]) {
			if (card[0].includes(number)) {
				cardPoints++;
			}
		}
		points.push(cardPoints);
	})

console.log(points.filter(point => point !== 0).map(point => Math.pow(2, point - 1)).reduce((acc, initial) => acc + initial, 0))


