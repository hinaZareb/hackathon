const form = document.getElementById('resume-form') as HTMLFormElement;



const resumeDisplay = document.getElementById('resume-display') as HTMLDivElement

//form submission
form.addEventListener('submit', (event: Event)=> {
    event.preventDefault();

    //input
    const name = (document.getElementById('name')as HTMLInputElement).value
    const email = (document.getElementById('email')as HTMLInputElement).value
    const phone = (document.getElementById('phone')as HTMLInputElement).value
    const education = (document.getElementById('education')as HTMLInputElement).value
    const experience = (document.getElementById('experience')as HTMLInputElement).value
    const skills = (document.getElementById('skills')as HTMLInputElement).value


   

    // create resume dynamic
    const resumeHtml =`
    
    <h2><b>Editable Resume</b></h2>
    <h3>Personal Information: </h3>
    <p><b>Name:</b>${name}</p>
    <p><b>Email:</b>${email}</p>
    <p><b>Phone:</b>${phone}</p>

    <h3>Education: </h3>
    <p>${education}</P>

    <h3>Experience: </h3>
    <p> ${experience}</P>

    <h3>Skills: </h3>
    <p>${skills}</P>
    `;

    //display created resume
    if(resumeDisplay){
        resumeDisplay.innerHTML  = resumeHtml
        resumeDisplay.contentEditable="true"
    }else{
        console.error('the resume display element is missing');
    }



});
