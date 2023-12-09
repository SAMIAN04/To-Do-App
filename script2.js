document.addEventListener('DOMContentLoaded', initialize);

function initialize() {
    // DOM elements
    const inputTask = document.querySelector('input');
    const addButton = document.querySelector('.add');
    const listContainer = document.querySelector('ul');
    const plusButton = document.querySelector('#plus');
    const doneButton = document.querySelector('#done');
    const advanceTaskSection = document.querySelector('.advanceTask');
    const inputAdvance = document.querySelector('.input-advance');
    const inputDate = document.getElementById('inputdate');
    const inputTime = document.getElementById(`inputtime`);
    const backButton = document.querySelector('.backbtn');
    const mainSection = document.getElementById('main');

    // Event listeners
    addButton.addEventListener('click', addTask);
    listContainer.addEventListener('change', removeTask);
    plusButton.addEventListener('click', showAdvanceTask);
    doneButton.addEventListener('click', addAdvanceTask);
    backButton.addEventListener('click', goBack);

    // Load tasks from localStorage on page load
    loadTasks();

    function addTask() {
        if (inputTask.value === '') {
            alert('Please write your task before adding.');
        } else {
            listContainer.innerHTML += `<li class="li"><input type = "checkbox" class="chek"><p>${inputTask.value}</p></li>`;
            inputTask.value = '';
            saveTasks();
        }
    }

    function removeTask(e) {

        setTimeout(() => {
            e.target.parentNode.remove()
              saveTasks()
        }, 700);
        
         e.target.parentNode.classList.add(`liremove`)

         saveTasks();
    }

    function showAdvanceTask() {
        advanceTaskSection.classList.add('show');
        mainSection.classList.add('hidemain');
    }

    function addAdvanceTask() {
        if (inputAdvance.value === '') {
            alert('Please write your task before adding.');
        } else {
            const taskDate = inputDate.value;
            const tasktime = inputTime.value; 
            if (inputDate.value == ``&& inputTime.value == ``) {
                listContainer.innerHTML += `<li class="li"><input type = "checkbox" class="chek"><p>${inputAdvance.value}</p></li>`;
            advanceTaskSection.classList.remove('show');
            mainSection.classList.remove('hidemain');
            inputAdvance.value = '';
            inputDate.value = ``;
            inputTime.value = ``;
            saveTasks();
            }   
            else{
                listContainer.innerHTML += `<li class="li"><input type = "checkbox" class="chek"><p>${inputAdvance.value}</p><div class="date">${taskDate}</div><div class="time" >${inputTime.value}</div></li>`;
                advanceTaskSection.classList.remove('show');
                mainSection.classList.remove('hidemain');
                inputAdvance.value = '';
                inputDate.value = ``;
                inputTime.value = ``;
                saveTasks();
            }      
            
        }
    }

    function goBack() {
        advanceTaskSection.classList.remove('show');
        mainSection.classList.remove('hidemain');
        new Notification('Going back!');
    }

    function saveTasks() {
        // Save tasks to localStorage with a slight delay to ensure it's updated after changes
    
            localStorage.setItem('data', listContainer.innerHTML);
    }

    function loadTasks() {
        // Load tasks from localStorage on page load
        listContainer.innerHTML = localStorage.getItem('data');
    }
}//ending 

// what the fuck i just stuck on this  fucking checkbox animation
// okay let's see what can i do next for my javascript journey
//okay signing off
