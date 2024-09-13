var form = document.getElementById('resume-form');
var resumeDisplay = document.getElementById('resume-display');
//form submission
form.addEventListener('submit', function (event) {
    event.preventDefault();
    //input
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // create resume dynamic
    var resumeHtml = "\n    \n    <h2><b>Editable Resume</b></h2>\n    <h3>Personal Information: </h3>\n    <p><b>Name:</b>".concat(name, "</p>\n    <p><b>Email:</b>").concat(email, "</p>\n    <p><b>Phone:</b>").concat(phone, "</p>\n\n    <h3>Education: </h3>\n    <p>").concat(education, "</P>\n\n    <h3>Experience: </h3>\n    <p> ").concat(experience, "</P>\n\n    <h3>Skills: </h3>\n    <p>").concat(skills, "</P>\n    ");
    //display created resume
    if (resumeDisplay) {
        resumeDisplay.innerHTML = resumeHtml;
        resumeDisplay.contentEditable = "true";
    }
    else {
        console.error('the resume display element is missing');
    }
});
