const cards = [
    {card: 'AAB'}, 
    {card: 'ACB'}, 
    {card: 'AAA'}]

console.log(cards.sort((a, b) => {
    if (a.card > b.card) return 1;
    if (a.card < b.card) return -1;
    return 0;
}))