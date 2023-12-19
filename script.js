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
    const inputhour = document.getElementById(`hour`);
    const inputminute = document.getElementById(`minute`);
    const inputam = document.getElementById(`am`);
    const inputdate = document.getElementById(`date`);
    const inputmonth = document.getElementById(`month`);
    const inputyear = document.getElementById(`year`);
    const mainSection = document.getElementById('main');
    const backButton = document.querySelector(`.backbtn`);
    inputyear.innerHTML += `<option value="${ new Date().getFullYear()}" >${new Date().getFullYear()}</option>`;
    inputyear.innerHTML += `<option value="${ new Date().getFullYear()+1}" >${new Date().getFullYear()+1}</option>`

    console.log(Notification.permission );
    
    // Options for date and time formatting
    const options = {
        timeZone: 'Asia/Dhaka',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour12: true,
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        month: 'numeric',
    };

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
            listContainer.innerHTML += `<li class="li">
            <input type="checkbox" class="chek">
            <label for="myCheckbox" class ="lebel"></label>
            <p>${inputTask.value}</p></li>`;
            inputTask.value = '';
            saveTasks();
        }
    }

    function removeTask(e) {
        setTimeout(() => {
            e.target.parentNode.remove();
            saveTasks();
        }, 700);

        e.target.parentNode.classList.add(`liremove`);
        saveTasks();
    }

    function showAdvanceTask() {
       
        if (Notification.permission == `default`) {
            // alert(`If you want to use remainder Feature Please Allow notification`)
            Notification.requestPermission();
        }
        else{
            advanceTaskSection.classList.add('show');
            mainSection.classList.add('hidemain');
        }
    }

    function addAdvanceTask() {
        if (inputAdvance.value === '') {
            alert('Please write your task before adding.');
        } else {
            listContainer.innerHTML += `<li class="li">
            <input type="checkbox" class="chek">
            <label for="myCheckbox" class ="lebel"></label>
            <p>${inputAdvance.value}</p>
            <div class="date">${inputdate.value}/${inputmonth.value}/${inputyear.value}</div>
            <div class="time">${inputhour.value}:${inputminute.value}:${inputam.value}</div>
            </li>`;
            inputAdvance.value =``;
            goBack();

            
        }
        saveTasks();
        
    }
       setInterval(() => {
        listContainer.childNodes.forEach(task =>{
            let taskTime = task.childNodes.length == 11 ? task.childNodes[9].innerHTML : ``;
            let taskminute = taskTime.slice(3,5)
            let taskdate = task.childNodes.length == 11 ? task.childNodes[7].innerHTML : ``;
                let etime = getTime().etime
                let eminute = getTime().minute
                let esecond = getTime().second
                let date = getTime().date
                let month = getTime().month
                let year = getTime().year
                let fulldate = `${date}/${month}/${year}`
           
                if (taskTime  == etime && esecond == `00` && taskdate == fulldate) {
                    new Notification(task.querySelector('p').innerHTML);
                    
                  }
                
         else if (taskdate == fulldate && taskTime < etime && task.childNodes.length == 11 ){
            task.classList.add(`over`)

         }
          else if (taskdate < fulldate && taskTime >= etime && task.childNodes.length == 11   ){
            
            task.classList.add(`over`)

          }
          else if ( taskdate < fulldate && taskTime <= etime && task.childNodes.length == 11 ){
            task.classList.add(`over`)
          }
         })
        
         }, 500);
      
   
    function goBack() {
        advanceTaskSection.classList.remove('show');
        mainSection.classList.remove('hidemain');
        
        
    }
  // this function is made for extracting exact times
    function getTime() {
        
        const formatter = new Intl.DateTimeFormat('en-US', options);
        let now = formatter.format(new Date());
        const timeArray = now.split(' ');
        const fulldate = timeArray[0].replace(`,`,``);
        const fulltime = timeArray[1];
        const amPm = timeArray[2];
       const date =  new Date().getDate();
       const month = new Date().getMonth();
       const year = new Date().getFullYear()
        const nowhour = fulltime.slice(0, 2);
        
        const nowminute = nowhour.includes(':') ? fulltime.slice(2, 4) : fulltime.slice(3, 5);
        const hour = nowhour.includes(':') ? '0' + nowhour.slice(0, 1) : nowhour;
        const minute = nowminute.includes(':') ? '0' + nowminute.slice(1,2 ) : nowminute;
        const nowsecond = nowhour.includes(':')  ? fulltime.slice(5, 7) : fulltime.slice(6, 8);
        const edatetime = {
            hour:hour,
            minute:minute,
            fulltime:fulltime,
            etime : `${hour}:${minute}:${amPm}`,
            second : nowsecond,
            
            date :date,
            month : month + 1,
            year : year,


        }
        return edatetime;
        
        
    }
    
    
    setInterval(() => {
        getTime();
    }, 10);
    function saveTasks() {
        localStorage.setItem('data', listContainer.innerHTML);
    }

    function loadTasks() {
        listContainer.innerHTML = localStorage.getItem('data');
    }

    
}  // ending



// Hey if you are reading this code at first thanks for reading my code
// I wrote all of this code using my android phone 
// If you are learning how to code i have a massage for you 
// My massage is don't find excuse when you learning anything 
// It dosen't matter what you have 
// The matter is who you are and what you want to do 
// want to Became  a winner or a excuse finder
// If you want to beacme a winner so go ahead write code and make somthing
// Otherwise keep looking for excuses