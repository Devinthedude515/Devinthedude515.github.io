const generateJSONBtn = document.getElementById("generateJSON");

generateJSONBtn.addEventListener("click", () => {
    const text = `
    {
        "firstName": "Devin",
        "prefName": "none",
        "middleInitial": "G",
        "lastName": "Williams",
        "mascotSymbol": "|",
        "charMascot": "Deceptive",
        "animalMascot": "Pegasus",
        "imgUpload": "images/Headshot_resized.jpeg",
        "imgCaption": "At the beach on the eastern coast of Florida (2024)",
        "perStatement": "...",
        "perBackground": "Grew up north of Charlotte, and have always had a love of computers.",
        "profBackground": "This is my first semester as an Instructional Assistant/Teachers Assistant, but before that I was a Peer Tutor for CCI.",
        "academicBackground": "I’m currently a Junior at UNC Charlotte studying computer science with a focus in Cybersecurity. Before that I attended Highschool in Mooresville, North Carolina.",
        "subjectBackground": "...",
        "PC": "The laptop I use for university is a Macbook Pro M2 14 inch. I also use a custom built Windows 11 computer."}
    `;
});