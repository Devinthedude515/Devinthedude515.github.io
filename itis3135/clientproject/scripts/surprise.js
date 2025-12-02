const surpriseButton = document.getElementById("surprise-button");
const factButton = document.getElementById("fact-button");
const serviceButton = document.getElementById("service-button");
const productButton = document.getElementById("product-button");
const gardeningButton = document.getElementById("gardening-button");

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

//Array of what to bring gardening class
const gardening = [
    {item: "🌱 Seed packets for your favorite fruits and vegetables."},
    {item: "🧤 Gardening gloves to protect your hands while working with soil."},
    {item: "🪴 Small pots or containers for starting seedlings indoors."},
    {item: "😁 A positive attidude and a willingness to learn 📖"}
];

//global counter for array index
let factIndex = 0;

// Working Fruit function
function Fruit() {
    const fruit = fruits[factIndex];

    const output = document.getElementById("fruit-of-day");
    output.innerHTML = `<b>${fruit.name}</b> ${fruit.fact}`;

    // Remove + re-add animation class so it restarts
    output.classList.remove("slide-in");
    void output.offsetWidth; // <- forces browser to reflow
    output.classList.add("slide-in");

    // Move to the next index, wrap at end
    factIndex = (factIndex + 1) % fruits.length;
}


function Fact() {
    // Pick a fact
    const selected = facts[factIndex];
    const output = document.getElementById("fact-display");

    // Remove + re-add animation class so it restarts
    output.classList.remove("slide-in");
    void output.offsetWidth; // <- forces browser to reflow
    output.classList.add("slide-in");

    // Update the displayed fact
    output.innerHTML = `${selected.info}`;

    // Move to the next index, wrap at end
    factIndex = (factIndex + 1) % facts.length;
}

// Working Fruit function
function Season() {
    const service = services[factIndex];
    const output = document.getElementById("type-of-service");

    // Remove and re-add flip class to restart animation
    output.classList.remove("flip");
    void output.offsetWidth; // force reflow
    output.classList.add("flip");

    output.innerHTML = `<b>${service.season}</b> ${service.info}`;

    // Move to the next index, wrap at end
    factIndex = (factIndex + 1) % services.length;
}

// produce function
function Produce() {
    const product = uncommon[factIndex];

    const output = document.getElementById("type-of-product");

    // Remove and re-add flip class to restart animation
    output.classList.remove("fade");
    void output.offsetWidth; // force reflow
    output.classList.add("fade");

    output.innerHTML = `${product.produce}`;

    // Move to the next index, wrap at end
    factIndex = (factIndex + 1) % uncommon.length;
}

//gardening function
function Gardening() {
    const garden = gardening[factIndex];

    const output = document.getElementById("type-of-gardening");

    // Remove and re-add flip class to restart animation
    output.classList.remove("flip");
    void output.offsetWidth; // force reflow
    output.classList.add("flip");

    output.innerHTML = `${garden.item}`;

    // Move to the next index, wrap at end
    factIndex = (factIndex + 1) % gardening.length;
}

document.addEventListener('DOMContentLoaded', () => {
    surpriseButton.addEventListener("click", Fruit);
    factButton.addEventListener("click", Fact);
});

document.addEventListener('DOMContentLoaded', () => {
    serviceButton.addEventListener("click", Season);
    gardeningButton.addEventListener("click", Gardening);
});

document.addEventListener('DOMContentLoaded', () => {
    productButton.addEventListener("click", Produce);
});



