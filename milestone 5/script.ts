const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplay = document.getElementById('resume-display') as HTMLDivElement;
const shareableLinkContainer = document.getElementById('url-link-container') as HTMLDivElement;
const shareableLink = document.getElementById('url-link') as HTMLAnchorElement;
const downloadPdfButton = document.getElementById('download-pdf') as HTMLButtonElement;

// Form submission
form.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    // Input
    const username = (document.getElementById('username') as HTMLInputElement).value;
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

    

    // Save form data with username key
    const resumeData = {
        name,
        email,
        phone,
        education,
        experience,
        skills,
    };
    localStorage.setItem(username, JSON.stringify(resumeData));

    // Create resume dynamic
    const resumeHtml = `

        <h2><b>Shareable Resume</b></h2>
        <h3>Personal Information:</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <h3>Education:</h3>
        <p>${education}</p>
        <h3>Experience:</h3>
        <p>${experience}</p>
        <h3>Skills:</h3>
        <p>${skills}</p>
    `;

    // Display created resume
    resumeDisplay.innerHTML = resumeHtml;
    resumeDisplay.contentEditable = 'true';

    // Shareable URL
    //const shareableURL = `${window.location.origin}?username=${encodeURIComponent(username)}`;
    const shareableURL = `${window.location.href.split('?')[0]}?username=${encodeURIComponent(username)}`;
    console.log('Generated Shareable URL:', shareableURL); // Debugging


    // Display shareable link
    shareableLinkContainer.style.display = 'block';
    shareableLink.href = shareableURL;
    shareableLink.textContent = shareableURL;
});

// Handle PDF button
downloadPdfButton.addEventListener('click', () => {
    window.print();
});

// Handle URL parameter on page load
window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username');

    if (username) {
        const savedResumeData = localStorage.getItem(username);

        if (savedResumeData) {
            const resumeData = JSON.parse(savedResumeData);

            (document.getElementById('username') as HTMLInputElement).value = username;
            (document.getElementById('name') as HTMLInputElement).value = resumeData.name;
            (document.getElementById('email') as HTMLInputElement).value = resumeData.email;
            (document.getElementById('phone') as HTMLInputElement).value = resumeData.phone;
            (document.getElementById('education') as HTMLTextAreaElement).value = resumeData.education;
            (document.getElementById('experience') as HTMLTextAreaElement).value = resumeData.experience;
            (document.getElementById('skills') as HTMLTextAreaElement).value = resumeData.skills;

           
           
           
           
        

        resumeDisplay.innerHTML += `
            <h2><b>Editable Resume</b></h2>
            <h3>Personal Information:</h3>
            <p><b>Name:</b> ${resumeData.name}</p>
            <p><b>Email:</b> ${resumeData.email}</p>
            <p><b>Phone:</b> ${resumeData.phone}</p>
            <h3>Education:</h3>
            <p>${resumeData.education}</p>
            <h3>Experience:</h3>
            <p>${resumeData.experience}</p>
            <h3>Skills:</h3>
            <p>${resumeData.skills}</p>
        `;
    } else {
        console.error('No data found for username:', username);
    }
}
})

        
    

