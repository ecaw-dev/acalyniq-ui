const skillsContainer = document.querySelector('.skills-container');
const addSkillBtn = document.querySelector('.add-skill');
const addSkillInput = document.querySelector('#skills');




const skillsArray = []

function removeSkill(element) {
    element.parentElement.remove();
    skillsArray.splice(skillsArray.indexOf(element.parentElement.children[0].textContent), 1)
}


addSkillBtn.addEventListener('click', () => {

    if(skillsArray.length >= 5) {
        alert('You can add only 5 skills')
        return
    }
    const skill = addSkillInput.value.trim();
    const newSkill = `
     <div class="skill">
        <h5>${skill}</h5>
        <button type="button" onclick="removeSkill(this)" class="remove-skill"><i class="fa-solid fa-xmark"></i></button>
     </div>
    `

    skillsArray.push(skill)
    skillsContainer.innerHTML += newSkill

    addSkillInput.value = '';
});
