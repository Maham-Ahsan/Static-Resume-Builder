//Listing Element

document.getElementById('resumeForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

//get refrences to form element using their IDs
//type Assertion
//personal information:
  const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;
  const nameElement = document.getElementById('name') as HTMLInputElement;
  const lastNameElement = document.getElementById('lastName') as HTMLInputElement;
  const phoneElement = document.getElementById('phone') as HTMLInputElement;
  const emailElement = document.getElementById('email') as HTMLInputElement;
  const addressElement = document.getElementById('address') as HTMLInputElement;
  const genderElement = document.getElementById('gender') as HTMLInputElement;
  const nationalityElement = document.getElementById('nationality') as HTMLInputElement;

  //education:
  const degreeElement = document.getElementById('degree') as HTMLInputElement;
  const majorElement = document.getElementById('major') as HTMLInputElement;
  const graduationYearElement = document.getElementById('graduationYear') as HTMLInputElement;

  //work experience:
  const companyElement = document.getElementById('company') as HTMLInputElement;
  const positionElement = document.getElementById('position') as HTMLInputElement;
  const startDateElement = document.getElementById('startDate') as HTMLInputElement;
  const endDateElement = document.getElementById('endDate') as HTMLInputElement;

  //skills:
  const skillsElement = document.getElementById('skills') as HTMLTextAreaElement;

  //additional information:
  const hobbiesElement = document.getElementById('hobbies') as HTMLInputElement;
  const languagesElement = document.getElementById('languages') as HTMLInputElement;
  const referencesElement = document.getElementById('references') as HTMLTextAreaElement;

  if(profilePictureInput && nameElement && lastNameElement && phoneElement && emailElement && addressElement && genderElement && nationalityElement && degreeElement && companyElement && skillsElement){
     const name = nameElement.value;
     const lastName = lastNameElement;
     const phone = phoneElement.value;
     const email = emailElement.value;
     const address = addressElement.value;
     const gender = genderElement.value;
     const nationality = nationalityElement.value;
     const degree = degreeElement.value;
     const company = companyElement.value;
     const skills = skillsElement.value;

  //Picture element
  const profilePicturefile = profilePictureInput.files?.[0];
  const profilePictureURL = profilePicturefile ? URL.createObjectURL(profilePicturefile):"";

  //Resume output
  const resumeOutput = `
  <h2>Resume</h2>
  <h3>Personal Information</h3>
  ${profilePictureURL? `<img src="${profilePictureURL}" alt="Profile Picture" class= "profilePicture">`:''}
  <p><strong>Name:</strong> ${name} </p>
  <p><strong>Last Name:</strong> ${lastName} </p>
  <p><strong>Phone:</strong> ${phone} </p>
  <p><strong>Email:</strong> ${email} </p>
  <p><strong>Address:</strong> ${address} </p>
  <p><strong>Gender:</strong> ${gender} </p>
  <p><strong>Nationality:</strong> ${nationality} </p>

  <h3>Education</h3>
  <p><strong>Degree:</strong> ${degree} </p>

  <h3>Work Experience</h3>
  <p><strong>Company:</strong> ${company} </p>

  <h3>Skills</h3>
  <p>${skills} </p>

  <h3>Additional Information</h3>
  <p><strong>Hobbies:</strong> ${hobbiesElement.value} </p?
  <p><strong>Languages:</strong> ${languagesElement.value} </p>
  <p><strong>References:</strong> ${referencesElement.value} </p>
  `;

  const resumeOutputElement = document.getElementById('resumeOutput')
  if(resumeOutputElement){
    resumeOutputElement.innerHTML = resumeOutput;
  } else {
    console.error('Cannot find resume output element');
  } 
} else {
    console.error('Cannot find one or more form elements')
}
})