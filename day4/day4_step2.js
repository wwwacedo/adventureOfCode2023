import fs from 'fs';

const input = fs.readFileSync('day4/day4.txt', { encoding: 'utf8', flag: 'r' }).split('\n');
const regex = /Card\s*\d*:\s*/;
const cards = [];

let counter = 0;

const teste1 = input
	.map(line => line.replace(regex, "")
		.split(" ")
		.filter(item => item !== ""))

teste1.forEach((arr, i) => {
	const card = arr.join(" ").split(" | ").map(arr => arr.split(" "))
	let cardPoints = 0;
	for (const number of card[1]) {
		if (card[0].includes(number)) {
			cardPoints++;
		}
	}
	cards.push({ number: i + 1, points: cardPoints });
})

cards.forEach(card => {
	let copies = [];
	if (card.points !== 0) {
		counter++;
		for (let i = 1; i <= card.points; i++) {
			const copy = cards.find(item => item.number === card.number + i);
			copy ? copies.push(copy) : null;
			copy ? counter++ : null;
		}
		while (!copies.every(item => item.points === 0)) {
			const newCopies = [];
			for (const copy of copies) {
				for (let i = 1; i <= copy.points; i++) {
					if (i > cards.length) break;
					const newCopy = cards.find(item => item.number === copy.number + i);
					newCopy ? newCopies.push(newCopy) : null;
					newCopy ? counter++ : null;
				}
			}
			copies.length = 0;
			copies = newCopies.map(item => item);
		};

	} else {
		counter++;
	}
})



console.log(counter)
