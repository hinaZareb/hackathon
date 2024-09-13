var form = document.getElementById('resume-form');
var resumeDisplay = document.getElementById('resume-display');
var shareableLinkContainer = document.getElementById('url-link-container');
var shareableLink = document.getElementById('url-link');
var downloadPdfButton = document.getElementById('download-pdf');
// Form submission
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // Input
    var username = document.getElementById('username').value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Save form data with username key
    var resumeData = {
        name: name,
        email: email,
        phone: phone,
        education: education,
        experience: experience,
        skills: skills,
    };
    localStorage.setItem(username, JSON.stringify(resumeData));
    // Create resume dynamic
    var resumeHtml = "\n\n        <h2><b>Shareable Resume</b></h2>\n        <h3>Personal Information:</h3>\n        <p><b>Name:</b> ".concat(name, "</p>\n        <p><b>Email:</b> ").concat(email, "</p>\n        <p><b>Phone:</b> ").concat(phone, "</p>\n        <h3>Education:</h3>\n        <p>").concat(education, "</p>\n        <h3>Experience:</h3>\n        <p>").concat(experience, "</p>\n        <h3>Skills:</h3>\n        <p>").concat(skills, "</p>\n    ");
    // Display created resume
    resumeDisplay.innerHTML = resumeHtml;
    resumeDisplay.contentEditable = 'true';
    // Shareable URL
    //const shareableURL = `${window.location.origin}?username=${encodeURIComponent(username)}`;
    var shareableURL = "".concat(window.location.href.split('?')[0], "?username=").concat(encodeURIComponent(username));
    console.log('Generated Shareable URL:', shareableURL); // Debugging
    // Display shareable link
    shareableLinkContainer.style.display = 'block';
    shareableLink.href = shareableURL;
    shareableLink.textContent = shareableURL;
});
// Handle PDF button
downloadPdfButton.addEventListener('click', function () {
    window.print();
});
// Handle URL parameter on page load
window.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get('username');
    if (username) {
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData);
            document.getElementById('username').value = username;
            document.getElementById('name').value = resumeData.name;
            document.getElementById('email').value = resumeData.email;
            document.getElementById('phone').value = resumeData.phone;
            document.getElementById('education').value = resumeData.education;
            document.getElementById('experience').value = resumeData.experience;
            document.getElementById('skills').value = resumeData.skills;
            resumeDisplay.innerHTML += "\n            <h2><b>Editable Resume</b></h2>\n            <h3>Personal Information:</h3>\n            <p><b>Name:</b> ".concat(resumeData.name, "</p>\n            <p><b>Email:</b> ").concat(resumeData.email, "</p>\n            <p><b>Phone:</b> ").concat(resumeData.phone, "</p>\n            <h3>Education:</h3>\n            <p>").concat(resumeData.education, "</p>\n            <h3>Experience:</h3>\n            <p>").concat(resumeData.experience, "</p>\n            <h3>Skills:</h3>\n            <p>").concat(resumeData.skills, "</p>\n        ");
        }
        else {
            console.error('No data found for username:', username);
        }
    }
});
