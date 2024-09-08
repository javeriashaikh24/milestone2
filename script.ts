

document.getElementById('resumeForm')?.addEventListener('submit' , function(event){
    event.preventDefault();




    //type aseertion
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLInputElement;
    const experienceElement = document.getElementById('experience') as HTMLInputElement;
    const skillsElement = document.getElementById('skills') as HTMLInputElement;
    
    // Ensure the block is properly enclosed with curly braces
    if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;
    

    
    //creat resume output
    const resumeOutput =
    `<h2>Resume</h2>
    <p><strong>Name:</strong> ${name} </p>
      <p><strong>Email:</strong> ${email} </p>
        <p><strong>Phone Number:</strong> ${phone} </p>


          <h3>Education:</h3>
           <p>${name} </p>

            <h3>Experience </h3>
            <p>${name} </p>

              <h3>Skills:</h3> 
              <p> ${name} </p>`;


    //  const resumeOutputElement = document.getElementById('resumeOutput')
    //  if(resumeOutputElement){
    //     resumeOutputElement.innerHTML = resumeOutput
    //  }else{
    //     console.error('the resume output element is missing')
    //  }else{
    //     console.error('one or more output elements are missing')
    //  }
//     const resumeOutputElement = document.getElementById('resumeOutput');
// if (resumeOutputElement) {
//     // Assuming resumeOutput is defined and holds the value you want to set
//     resumeOutputElement.innerHTML = resumeOutput;
// } else {
//     console.error('The resume output element is missing');
// }
// }
// })


const resumeOutputElement = document.getElementById('resumeOutput');
if(resumeOutputElement){
    resumeOutputElement.innerHTML = resumeOutput;
    
}else{
    console.error('the resume output');
}
}
})
