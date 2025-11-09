import { generateJSON } from './generate_json.js';
import { generateHTML } from './generate_html.js';
const firstName = document.getElementById("firstName");
const middleInitial = document.getElementById("middleInitial");
const prefName = document.getElementById("prefName");
const lastName = document.getElementById("lastName");
const ackStatement = document.getElementById("ackStatement");
const ackDate = document.getElementById("ackDate");
const charMascot = document.getElementById("charMascot");
const animalMascot = document.getElementById("animalMascot");
const mascotSymbol = document.getElementById("mascotSymbol");
const imgUpload = document.getElementById("imgUpload");
const imgCaption = document.getElementById("imgCaption");
const perStatement = document.getElementById("perStatement");
const perBackground = document.getElementById("perBackground");
const profBackground = document.getElementById("profBackground");
const PC = document.getElementById("PC");
const ackCheckbox = document.getElementById('ackCheckbox');
const coursesTaking = document.getElementById("courses-taking");
const addButton = document.getElementById("add-course");
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const funOrInt = document.getElementById("funOrInt");
const share = document.getElementById("share");
const home = document.getElementById("home");
const GitHub = document.getElementById("GitHub");
const GitHubio = document.getElementById("GitHubio");
const LinkedIn = document.getElementById("LinkedIn");
const FCC = document.getElementById("FCC");
const submitButton = document.getElementById("submitButton");
const reset = document.getElementById("reset");
const form = document.getElementById("byo-form");


const fields = [
    firstName, middleInitial, prefName, lastName,
    ackStatement, ackCheckbox, ackDate, charMascot, animalMascot,
    mascotSymbol, imgUpload, imgCaption, perStatement, 
    perBackground, profBackground, PC, coursesTaking,
    quote, author, funOrInt, share,
    home, GitHub, GitHubio, LinkedIn, FCC
].filter(Boolean);

const emptyFields = () => {
    return fields.some((field) => field.ariaValueMax.trim === '');
};


const formElement = document.getElementById("byo-form");
  formElement.addEventListener("submit", (e) => e.preventDefault()); // prevents page refresh / default behavior

document.addEventListener('DOMContentLoaded', () => {
    //improve hiding of
    const outputDiv = document.getElementById("outputDiv");
    // Function to re-number all course labels
    function updateCourseNumbers() {
        const courseItems = coursesTaking.querySelectorAll('.course-item');
        courseItems.forEach((item, index) => {
            const label = item.querySelector('label');
            label.textContent = `Course ${index + 1}: `;
        });
    }
    //function to add a single course input group
    function addCourseField(defaultValue){
        //create a wrapper div to hold everything for one course
        const wrapper = document.createElement('div');
        wrapper.classList.add('course-item');
        //create the input
        const input = document.createElement('input');
        input.type = 'text';
        input.value = defaultValue;
        //create label
        const label = document.createElement('label');
        label.textContent = 'Class: ';
        input.value = defaultValue;
        //Create the reason textarea
        const reason = document.createElement('textarea');
        reason.placeholder = 'Reason for taking this course';
        //create the remove button
        const removeButton = document.createElement('button');
        removeButton.type = 'button';
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => {
            wrapper.remove();
        });
        //append everything to the wrapper
        wrapper.append(label, input, reason, removeButton);
        coursesTaking.appendChild(wrapper);
        //update the course numbers
        updateCourseNumbers();
    }
    //add new blank course
    addButton.addEventListener('click', () => addCourseField(''));
    //Pre load courses
    const classes = ['ITIS 3160', 'ITIS 3135', 'ITIS 3146', 'ITIS 3155'];
    classes.forEach((classItem) => {
        addCourseField(classItem);
    });

    function collectFormData() {
        // Collect courses
        const courses = [];
        const courseItems = coursesTaking.querySelectorAll('.course-item');
        courseItems.forEach((item) => {
            const nameInput = item.querySelector('input');
            const reasonInput = item.querySelector('textarea');
            if (nameInput && nameInput.value.trim() !== '') {
                courses.push({
                    name: nameInput.value.trim(),
                    reason: reasonInput ? reasonInput.value.trim() : ""
                });
            }
        });

        // Collect links
        const links = [
            { name: "Home", href: home.value },
            { name: "GitHub", href: GitHub.value },
            { name: "GitHub.io", href: GitHubio.value },
            { name: "LinkedIn", href: LinkedIn.value },
            { name: "freeCodeCamp", href: FCC.value }
        ];

        return {
            firstName: firstName.value,
            preferredName: prefName.value,
            middleInitial: middleInitial.value,
            lastName: lastName.value,
            divider: mascotSymbol.value,
            mascotAdjective: charMascot.value,
            mascotAnimal: animalMascot.value,
            image: imgUpload.files[0] ? URL.createObjectURL(imgUpload.files[0]) : "",
            imageCaption: imgCaption.value,
            personalStatement: perStatement.value,
            personalBackground: perBackground.value,
            professionalBackground: profBackground.value,
            primaryComputer: PC.value,
            courses,
            links
        };
    }//end of collect form data

    submitButton.addEventListener('click', () => {
        // Clear previous output
            outputDiv.innerHTML = '';
        // Collect all required fields
            const requiredFields = [
            'firstName',
            'middleInitial',
            'lastName',
            'mascotSymbol',
            'charMascot',
            'animalMascot',
            'perStatement',
            'perBackground',
            'profBackground',
            'funOrInt',
            'quote',
            'author',
            'home',
            'GitHub',
            'GitHubio',
            'LinkedIn',
            'FCC'
            ];

            // Check if any required field is empty
            const emptyFields = requiredFields.filter((id) => {
                const field = document.getElementById(id);
                return !field.value.trim();
            });

            // If there are empty fields, prevent submission
            if (emptyFields.length > 0) {
                event.preventDefault();
                alert(`Please fill in all required fields before submitting.\n\nMissing: ${emptyFields.join(', ')}`);
                return;
            }
            // Check uploaded image type
            const imageField = imgUpload; // from your fields array
            if (imageField.files.length === 0) {
                alert('Please upload an image.');
                return;
            }

            //check the acknowledge is entered
            if (!ackCheckbox.checked) {
                event.preventDefault(); // stop form submission
                alert('Please check the acknowledgement box before submitting.');
                return;
            }

            const allowedTypes = ['image/png', 'image/jpg', 'image/jpeg'];
            //check if allowed
            if (!allowedTypes.includes(imageField.files[0].type)){
                alert('Invalid File upload, please se PNG or JPG.');
                return;
            }

            function getCoursesHTML() {
                const courseItems = coursesTaking.querySelectorAll('.course-item');
                let html = '<ul>';
                courseItems.forEach((item) => {
                    const courseInput = item.querySelector('input');
                    const reasonInput = item.querySelector('textarea');
                    const courseName = courseInput ? courseInput.value.trim() : '';
                    const reason = reasonInput ? reasonInput.value.trim() : '';
                    if (courseName) {
                        html += `<li><b>${courseName}</b>${reason ? ` – ${reason}` : ''}</li>`;
                    }
                });
                html += '</ul>';
                return html;
            }

            // Display the form
            const imgFile = imgUpload.files[0];
            outputDiv.innerHTML = `
            <h2>Introduction</h2>
            <h2>${firstName.value} ${middleInitial.value}. "${prefName.value}" ${lastName.value} ${mascotSymbol.value} ${charMascot.value} ${animalMascot.value}</h2>
                <figure>
                    <img src="${URL.createObjectURL(imgFile)}" alt="${imgCaption.value}">
                    <figcaption>${imgCaption.value}</figcaption>
                </figure>
                <ul>
                    <li><b><u><span>Personal Statement:</b></u> <span> ${perStatement.value}</li>
                    <li><b><u><span>Personal Background:</b></u> </span> ${perBackground.value}</li>
                    <li><b><u><span>Professional Background:</b></u> </span> ${profBackground.value}</li>
                    <li><b><u><span>Primary Computer Platform:</b></u> </span> ${PC.value}</li>
                    <li><b><u><span>Courses I'm Taking:</b></u> </span> ${getCoursesHTML()} </li>
                    <li><b><u><span>Funny/Interesting thing to remember me by:</b></u> </span> ${funOrInt.value}</li>
                    <li><b><u><span>Anything Else:</b></u> </span> ${share.value}</li>
                    <li><b><u>Quote:</b></u> "${quote.value}" -<i>${author.value}</i></li>
                </ul>
                <nav>
                    <a href="${home.value}" target="_blank">CLT Web </a> || 
                    <a href="${GitHub.value}" target="_blank"> GitHub </a> || 
                    <a href="${GitHubio.value}" target="_blank"> GitHub.io </a> || 
                    <a href="${FCC.value}" target="_blank"> freeCodeCamp </a> || 
                    <a href="${LinkedIn.value}" target="_blank">LinkedIn</a>
                </nav>
            `;

            // Hide the form after generating the page
            form.style.display = 'none';

            // Create a container for new buttons
            const buttonContainer = document.createElement("div");
            buttonContainer.id = "after-submit-buttons";
            buttonContainer.style.marginTop = "20px";
            buttonContainer.style.display = "flex";
            buttonContainer.style.gap = "10px";
            buttonContainer.style.alignItems = "center";

            // Create the JSON button
            const jsonButton = document.createElement("button");
            jsonButton.textContent = "Show JSON";
            jsonButton.id = "showJSON";
            jsonButton.type = "button";
            
            // Create the HTML button
            const htmlButton = document.createElement("button");
            htmlButton.textContent = "Show HTML";
            htmlButton.id = "showHTML";
            htmlButton.type = "button";

            // Append both to container
            buttonContainer.appendChild(jsonButton);
            buttonContainer.appendChild(htmlButton);

            // Add a small confirmation message below the output
            const successMsg = document.createElement("p");
            successMsg.textContent = "✅ Form submitted successfully!";
            successMsg.style.color = "green";
            successMsg.style.fontWeight = "bold";
            successMsg.style.marginTop = "10px";

            // Append success message and buttons **after the rendered form output**
            outputDiv.appendChild(successMsg);
            outputDiv.appendChild(buttonContainer);

            jsonButton.addEventListener("click", () => {
            let jsonPopup = document.getElementById("jsonPopup");
            if (!jsonPopup) {
                jsonPopup = document.createElement("div");
                jsonPopup.id = "jsonPopup";
                jsonPopup.style.border = "2px solid #0077cc";
                jsonPopup.style.borderRadius = "10px";
                jsonPopup.style.padding = "15px";
                jsonPopup.style.backgroundColor = "#f0f8ff";
                jsonPopup.style.marginTop = "15px";
                jsonPopup.style.maxHeight = "300px";
                jsonPopup.style.overflowY = "auto";
                outputDiv.appendChild(jsonPopup);
            }

            const formData = collectFormData();
            jsonPopup.innerHTML = `
                <h3>JSON Output</h3>
                <pre>${JSON.stringify(generateJSON(formData), null, 2)}</pre>
                <button type="button" style="margin-top:10px;" onclick="this.parentNode.style.display='none'">Close JSON</button>
            `;
            jsonPopup.style.display = "block";
        });

        htmlButton.addEventListener("click", () => {
            let htmlPopup = document.getElementById("htmlPopup");
            if (!htmlPopup) {
                htmlPopup = document.createElement("div");
                htmlPopup.id = "htmlPopup";
                htmlPopup.style.border = "2px solid #28a745";
                htmlPopup.style.borderRadius = "10px";
                htmlPopup.style.padding = "15px";
                htmlPopup.style.backgroundColor = "#f0fff0";
                htmlPopup.style.marginTop = "15px";
                htmlPopup.style.maxHeight = "300px";
                htmlPopup.style.overflowY = "auto";
                outputDiv.appendChild(htmlPopup);
            }

            const formData = collectFormData();
            const escapedHTML = generateHTML(formData)
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;");

            htmlPopup.innerHTML = `
                <h3>HTML Output</h3>
                <pre>${escapedHTML}</pre>
                <button type="button" style="margin-top:10px;" onclick="this.parentNode.style.display='none'">Close HTML</button>
            `;
            htmlPopup.style.display = "block";
        });
    });//end of submit button event listener

});

//create clear all button
const clearAllButton = document.getElementById("clear-all");
clearAllButton.addEventListener('click', () => {
    //ensure user wants to clear
    if (!confirm("Are you sure you want to erase all fields?")) return;

    // Loop through and clear
    fields.forEach((field) => {
        // Clear input and textarea elements
        if (field.tagName === "INPUT" || field.tagName === "TEXTAREA") {
        field.value = "";
        }
        // Clear file input
        else if (field.tagName === "INPUT" && field.type === "file") {
        field.value = "";
        }
        // Clear divs or containers (like dynamic content)
        else if (field.tagName === "DIV") {
        field.innerHTML = "";
        }
    });

    //clear images and caption
    if (imgUpload) imgUpload.value = "";
    if (imgCaption) imgCaption.value = "";

    //remove all dynamically added courses
    const coursesTaking = document.getElementById("courses-taking");
    if (coursesTaking) coursesTaking.innerHTML = "";

    //clear mascot div
    if (mascotSymbol) mascotSymbol.innerHTML = "";
});

// When checkbox is checked, fill in the date
ackCheckbox.addEventListener('change', () => {
  if (ackCheckbox.checked) {
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-US'); // e.g., 10/26/2025
    ackDate.value = formattedDate;
  } else {
    ackDate.value = ''; // clear date if unchecked
  }
});

