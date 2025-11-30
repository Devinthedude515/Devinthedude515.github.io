const surpriseButton = document.getElementById("surprise-button");


// Array of exotic fruits
const fruits = [
    { name: "Dragon Fruit", fact: "🐉Rich in antioxidants and boosts immunity.🐉" },
    { name: "Rambutan", fact: "Tastes like a sweet grape with floral notes." },
    { name: "Starfruit", fact: "Crisp, refreshing, and shaped like a star." },
    { name: "Horned Melon", fact: "Bright green jelly-like center with tangy flavor." },
    { name: "Mangosteen", fact: "Known as the 'Queen of Fruits' for its sweet taste." },
    { name: "Lychee", fact: "Juicy, fragrant, and packed with vitamin C." },
    { name: "Passionfruit", fact: "Tart, tropical, and full of crunchy seeds." }
];

// Working randomFruit function
function randomFruit() {
    const index = Math.floor(Math.random() * fruits.length);
    const fruit = fruits[index];

    const output = document.getElementById("fruit-of-day");
    output.innerHTML = `<b>${fruit.name}</b> ${fruit.fact}`;
}

document.addEventListener('DOMContentLoaded', () => {

    surpriseButton.addEventListener("click", randomFruit);

});


