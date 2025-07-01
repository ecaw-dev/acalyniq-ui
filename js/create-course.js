const objectivesContainer = document.querySelector('.objectives-container');
const addObjectiveBtn = document.querySelector('.add-objective');
const addObjectiveInput = document.querySelector('#objectives');




const objectivesArray = []

function removeObjective(element) {
    element.parentElement.parentElement.remove();
    objectivesArray.splice(objectivesArray.indexOf(element.parentElement.children[0].textContent), 1)
}

addObjectiveBtn.addEventListener('click', () => {

    if (addObjectiveInput.value == '') {
        alert('Please select a Objective')
        return
    }

    if (objectivesArray.length >= 5) {
        alert('You can add only 5 Objectives')
        return
    }

    if (objectivesArray.includes(addObjectiveInput.value.toLowerCase())) {
        alert('You can not add the same Objective twice')
        return
    }

    const objective = addObjectiveInput.value.trim();
    const newObjective = `
     <li class="objective">
     <div>
        <h5>${objective}</h5>
        <button type="button" onclick="removeObjective(this)" class="remove-Objective"><i class="fa-solid fa-xmark"></i></button>
     
     </div>
        </li>
    `

    objectivesArray.push(objective.toLowerCase())
    objectivesContainer.innerHTML += newObjective

    addObjectiveInput.value = '';
});
