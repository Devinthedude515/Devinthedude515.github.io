// generate_html.js

export function generateHTML(formData) {
    // Build a list of courses HTML
    const coursesHTML = (formData.courses || []).map((course) =>
        `<li><b>${course.name}</b>${course.reason ? ` – ${course.reason}` : ""}</li>`
    ).join("");

    // Build links HTML
    const linksHTML = (formData.links || []).map((link) =>
        `<a href="${link.href}" target="_blank">${link.name}</a>`
    ).join(" || ");

    return `
        <h2>Introduction HTML</h2>
        <h3>${formData.firstName} ${formData.middleInitial}. "${formData.preferredName}" ${formData.lastName} ${formData.divider} ${formData.mascotAdjective} ${formData.mascotAnimal}</h3>
        <figure>
            <img src="${formData.image || ''}" alt="${formData.imageCaption}">
            <figcaption>${formData.imageCaption}</figcaption>
        </figure>
        <ul>
            <li><strong>Personal Statement:</strong> ${formData.personalStatement}</li>
            <li><strong>Personal Background:</strong> ${formData.personalBackground}</li>
            <li><strong>Professional Background:</strong> ${formData.professionalBackground}</li>
            <li><strong>Primary Computer:</strong> ${formData.primaryComputer}</li>
            <li><strong>Courses:</strong> <ul>${coursesHTML}</ul></li>
        </ul>
        <nav>${linksHTML}</nav>
    `;
}