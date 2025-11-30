const surpriseButton = document.getElementById("surprise-button");
const factButton = document.getElementById("fact-button");
const serviceButton = document.getElementById("service-button");
const productButton = document.getElementById("product-button");

// Array of exotic fruits
const fruits = [
    { name: "Dragon Fruit", fact: "🐉🍉Rich in antioxidants and boosts immunity.🍉🐉" },
    { name: "Rambutan", fact: "🍓✨Tastes like a sweet grape with floral notes.✨🍓" },
    { name: "Starfruit", fact: "⭐🍏Crisp, refreshing, and shaped like a star.🍏⭐" },
    { name: "Horned Melon", fact: "🦄🥝Bright green jelly-like center with tangy flavor.🥝🦄" },
    { name: "Mangosteen", fact: "👑🍈Known as the 'Queen of Fruits' for its sweet taste.🍈👑" },
    { name: "Lychee", fact: "🍒🌸Juicy, fragrant, and packed with vitamin C.🌸🍒" },
    { name: "Passionfruit", fact: "💛🍋Tart, tropical, and full of crunchy seeds.🍋💛" }
];

//Array of facts for user to interact with
const facts = [
  {info: "Most fruits are packed with vitamin C, which boosts immunity and improves skin health.."},
  {info: "Fruits contain antioxidants that help fight inflammation and protect your cells."},
  {info: "Fruits are full of natural sugars and carbs, giving you quick and healthy energy."},
  {info: "Fruits are high in fiber, which supports gut health and helps maintain regular digestion."},
  {info: "Many fruits have a high water content, helping keep the body hydrated."}
];

// Array of services for user to interact with
const services = [
  { season: "Spring", info: "Passionfruit, Rambutan, Feijoa (Pineapple Guava), Loquat" },
  { season: "Summer", info: "Dragon Fruit, Starfruit (Carambola), Mangosteen, Lychee" },
  { season: "Fall", info: "Persimmon, Horned Melon (Kiwano), Papaya, Cherimoya (Custard Apple)" },
  { season: "Winter", info: "Pomegranate, Tangerine Varieties, Kumquat, Satsuma Mandarin" }
];

//Array of Uncommon fruits
const uncommon = [
    {produce: "🐉🍉"},
    {produce: "⭐🍏"},
    {produce: "🦄🥝"},
    {produce: "👑🍈"},
    {produce: "💛🍋"}
];

// Working randomFruit function
function randomFruit() {
    const index = Math.floor(Math.random() * fruits.length);
    const fruit = fruits[index];

    const output = document.getElementById("fruit-of-day");
    output.innerHTML = `<b>${fruit.name}</b> ${fruit.fact}`;
}

function randomFact() {
    // Pick a random fact
    const index = Math.floor(Math.random() * facts.length);
    const selected = facts[index];

    const output = document.getElementById("fact-display");

    // Remove + re-add animation class so it restarts
    output.classList.remove("slide-in");
    void output.offsetWidth; // <- forces browser to reflow
    output.classList.add("slide-in");

    // Update the displayed fact
    output.innerHTML = `${selected.info}`;
}

// Working randomFruit function
function randomSeason() {
    const index = Math.floor(Math.random() * services.length);
    const service = services[index];

    const output = document.getElementById("type-of-service");

    // Remove and re-add flip class to restart animation
    output.classList.remove("flip");
    void output.offsetWidth; // force reflow
    output.classList.add("flip");

    output.innerHTML = `<b>${service.season}</b> ${service.info}`;
}

//random produce function
function randomProduce() {
    const index = Math.floor(Math.random() * uncommon.length);
    const product = uncommon[index];

    const output = document.getElementById("type-of-product");

    // Remove and re-add flip class to restart animation
    output.classList.remove("fade");
    void output.offsetWidth; // force reflow
    output.classList.add("fade");

    output.innerHTML = `${product.produce}`;
}

document.addEventListener('DOMContentLoaded', () => {
    surpriseButton.addEventListener("click", randomFruit);
    factButton.addEventListener("click", randomFact);
});

document.addEventListener('DOMContentLoaded', () => {
    serviceButton.addEventListener("click", randomSeason);
});

document.addEventListener('DOMContentLoaded', () => {
    productButton.addEventListener("click", randomProduce);
});



