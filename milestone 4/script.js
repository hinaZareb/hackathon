var form = document.getElementById('resume-form');
var profilePicInput = document.getElementById('profile-pic');
var resumeDisplay = document.getElementById('resume-display');
//form submission
form.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    //input
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Handle profile picture
    var profilePic = (_a = profilePicInput.files) === null || _a === void 0 ? void 0 : _a[0];
    var profilePicUrl = '';
    if (profilePic) {
        profilePicUrl = URL.createObjectURL(profilePic);
    }
    // create resume dynamic
    var resumeHtml = "\n     ".concat(profilePicUrl ? "<img src=\"".concat(profilePicUrl, "\" id=\"profile-pic-preview\" alt=\"Profile Picture\">") : '', "\n    <h2><b>Editable Resume</b></h2>\n    <h3>Personal Information: </h3>\n    <p><b>Name:</b><span contenteditable= \"true\"> ").concat(name, "</span></p>\n    <p><b>Email:</b><span contenteditable= \"true\">").concat(email, "</span></p>\n    <p><b>Phone:</b><span contenteditable= \"true\">").concat(phone, "</span></p>\n\n    <h3>Education: </h3>\n    <p contenteditable= \"true\">").concat(education, "</P>\n\n    <h3>Experience: </h3>\n    <p contenteditable= \"true\">").concat(experience, "</P>\n\n    <h3>Skills: </h3>\n    <p contenteditable= \"true\">").concat(skills, "</P>\n    ");
    //display created resume
    if (resumeDisplay) {
        resumeDisplay.innerHTML = resumeHtml;
    }
    else {
        console.error('the resume display element is missing');
    }
});
