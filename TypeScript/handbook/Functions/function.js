let deckArrowSyntax = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
        // Note: the line below is now an arrow function, allowing us to capture "this" right here
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);
            return {
                suit: this.suits[pickedSuit],
                card: pickedCard % 13
            };
        }
    }
}

let cardPickerArrow = deckArrowSyntax.createCardPicker();
let pickedCardArrow = cardPickerArrow();

console.log(`card: ${pickedCardArrow.card} of ${pickedCardArrow.suit}`)