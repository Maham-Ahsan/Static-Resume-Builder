
document.getElementById('FormResume')?.addEventListener('submit', function (event) {
    event.preventDefault();

    // Personal Information
    const profilePictureInput = document.getElementById('profilePicture');
    const firstNameElement = document.getElementById('firstName');
    const lastNameElement = document.getElementById('lastName');
    const phoneElement = document.getElementById('phone');
    const emailElement = document.getElementById('email');
    const addressElement = document.getElementById('address');
    const genderElement = document.getElementById('gender');
    const nationalityElement = document.getElementById('nationality');

    // Education
    const educationElement = document.getElementById('education');

    // Work Experience
    const workExperienceElement = document.getElementById('workExperience');

    // Skills
    const skillsElement = document.getElementById('skills');

    // Additional Information
    const additionalInfoElement = document.getElementById('additionalInfo');

    if (profilePictureInput && firstNameElement && lastNameElement && phoneElement && emailElement &&
        addressElement && genderElement && nationalityElement && educationElement &&
        workExperienceElement && skillsElement) {
        
        const firstName = firstNameElement.value;
        const lastName = lastNameElement.value;
        const phone = phoneElement.value;
        const email = emailElement.value;
        const address = addressElement.value;
        const gender = genderElement.value;
        const nationality = nationalityElement.value;
        const education = educationElement.value;
        const workExperience = workExperienceElement.value;
        const skills = skillsElement.value;
        const additionalInfo = additionalInfoElement.value;

        // Picture element
        const profilePictureFile = profilePictureInput.files?.[0];
        const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";

        // Resume output
        const resumeOutput = `
            <h2>Resume</h2>
            <h3>Personal Information</h3>
            ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">` : ''}
            <p><strong>First Name:</strong> ${firstName}</p>
            <p><strong>Last Name:</strong> ${lastName}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Address:</strong> ${address}</p>
            <p><strong>Gender:</strong> ${gender}</p>
            <p><strong>Nationality:</strong> ${nationality}</p>
            <h3>Education</h3>
            <p>${education}</p>
            <h3>Work Experience</h3>
            <p>${workExperience}</p>
            <h3>Skills</h3>
            <p>${skills}</p>
            <h3>Additional Information</h3>
            <p>${additionalInfo}</p>
        `;

        const resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        } else {
            console.error('Cannot find resume output element');
        }
    } else {
        console.error('Cannot find one or more form elements');
    }
});

