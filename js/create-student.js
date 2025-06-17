const skillsContainer = document.querySelector('.skills-container');
const addSkillBtn = document.querySelector('.add-skill');
const addSkillInput = document.querySelector('#skills');




const skillsArray = []

function removeSkill(element) {
    element.parentElement.remove();
    skillsArray.splice(skillsArray.indexOf(element.parentElement.children[0].textContent), 1)
}


addSkillBtn.addEventListener('click', () => {

    if(addSkillInput.value == '') {
        alert('Please select a skill')
        return
    }

    if(skillsArray.length >= 5) {
        alert('You can add only 5 skills')
        return
    }

    if(skillsArray.includes(addSkillInput.value.toLowerCase())) {
        alert('You can not add the same skill twice')
        return
    }

    const skill = addSkillInput.value.trim();
    const newSkill = `
     <div class="skill">
        <h5>${skill}</h5>
        <button type="button" onclick="removeSkill(this)" class="remove-skill"><i class="fa-solid fa-xmark"></i></button>
     </div>
    `

    skillsArray.push(skill.toLowerCase())
    skillsContainer.innerHTML += newSkill

    addSkillInput.value = '';
});
