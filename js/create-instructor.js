const gradesContainer = document.querySelector('.grades-container');
const addGradeBtn = document.querySelector('.add-grade');
const addGradeInput = document.querySelector('#grades');




const gradesArray = []

function removeGrade(element) {
    element.parentElement.remove();
    gradesArray.splice(gradesArray.indexOf(element.parentElement.children[0].textContent), 1)
}


addGradeBtn.addEventListener('click', () => {


    if (addGradeInput.value == '') {
        alert('Please select a grade')
        return
    }

    if(gradesArray.length >= 5) {
        alert('You can add only 5 grades')
        return
    }

    if(gradesArray.includes(addGradeInput.value)) {
        alert('You can not add the same grade twice')
        return
    }

    const grade = addGradeInput.value.trim();
    const gradeText = addGradeInput.querySelector("option[value='" + addGradeInput.value + "']").textContent
    const newgrade = `
     <div class="grade">
        <h5>${gradeText}</h5>
        <button type="button" onclick="removeGrade(this)" class="remove-grade"><i class="fa-solid fa-xmark"></i></button>
     </div>
    `;

    gradesArray.push(grade)
    gradesContainer.innerHTML += newgrade

    addGradeInput.value = '';
});
