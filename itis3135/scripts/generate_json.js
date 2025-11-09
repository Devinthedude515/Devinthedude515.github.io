// generate_json.js

export function generateJSON(formData) {
    // formData should be an object with all the form fields, courses, and links
    return {
        firstName: formData.firstName,
        preferredName: formData.preferredName,
        middleInitial: formData.middleInitial,
        lastName: formData.lastName,
        divider: formData.divider,
        mascotAdjective: formData.mascotAdjective,
        mascotAnimal: formData.mascotAnimal,
        image: formData.image || "", // optional, can add file path or URL
        imageCaption: formData.imageCaption,
        personalStatement: formData.personalStatement,
        personalBackground: formData.personalBackground,
        professionalBackground: formData.professionalBackground,
        primaryComputer: formData.primaryComputer,
        courses: formData.courses || [],
        links: formData.links || []
    };
}