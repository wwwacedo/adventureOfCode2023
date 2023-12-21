import fs from 'fs';

const hands = fs.readFileSync('day7/day7.txt', { encoding: 'utf8', flag: 'r' }).split('\n');

const order = ['A', 'K', 'Q', 'T', '9', '8', '7', '6', '5', '4', '3', '2', 'J'];
const newOrder = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'L', 'M', 'N'];

const fiveOfAKind = []; //1
const fourOfAKind = []; //2
const oneTripleOnePair = []; //2
const threeOfAKind = []; //3
const twoPairs = []; //3
const onePair = []; //4
const other = []; //5

const objCards = hands.map(hand => {
    const [cards, bid] = hand.split(' ');
    const obj = { bid: Number(bid) };
    const newCards = cards.split('').map(card => newOrder[order.indexOf(card)])
    obj.cards = newCards.join('');
    for (let card of newCards) {
        if (obj[card]) obj[card]++;
        else obj[card] = 1;
    }
    if (obj['N']) {
        const entries = Object.entries(obj).filter(key => key[0] !== 'bid' && key[0] !== 'cards' && key[0] !== 'N').sort();
        let bigestKey = '';
        let bigestValue = 0;
        entries.forEach(entry => {
            if (entry[1] > bigestValue) {
                bigestValue = entry[1];
                bigestKey = entry[0];
            }
        })
        const value = obj['N'];
        delete obj['N'];
        if(!bigestKey) bigestKey = 'A';
        obj[bigestKey] += value;
    }
    return obj;
})


objCards.forEach(obj => {
    const validKeys = Object.entries(obj)
        .filter(item => item[0] !== 'bid')
        .filter(item => item[0] !== 'cards');
    const values = []
    for (let key of validKeys) {
        values.push(key[1])
    }

    switch (values.length) {
        case 5:
            other.push(obj);
            break;
        case 4:
            onePair.push(obj);
            break;
        case 3:
            if (values.includes(3)) threeOfAKind.push(obj)
            else twoPairs.push(obj)
            break;
        case 2:
            if (values.includes(4)) fourOfAKind.push(obj)
            else oneTripleOnePair.push(obj)
            break;
        case 1:
            fiveOfAKind.push(obj);
            break;
    }
})

function ordenaArray(arr) {
    if (!arr) return;
    return arr.sort((a, b) => {
        if (a.cards > b.cards) return 1;
        if (a.cards < b.cards) return -1;
        return 0;
    });
}

const sorted = [
    ...ordenaArray(fiveOfAKind),
    ...ordenaArray(fourOfAKind),
    ...ordenaArray(oneTripleOnePair),
    ...ordenaArray(threeOfAKind),
    ...ordenaArray(twoPairs),
    ...ordenaArray(onePair),
    ...ordenaArray(other)];

const result = sorted
    .map((obj, index) => {
        return (sorted.length - index) * obj.bid
    })
    .reduce((acc, init) => acc + init, 0)


console.log(result)
