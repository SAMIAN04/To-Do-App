 document.addEventListener(`DOMContentLoaded`,run)
 function run() {
    const input1 = document.querySelector(`input`)
    const addButton = document.querySelector(`.add`)
    const listContainer = document.querySelector(`ul`)
    const plus = document.querySelector(`#plus`)
    const donebtn = document.querySelector(`#done`)
    const advanceTask = document.querySelector(`.advanceTask`)
    const inputAdvance = document.querySelector(`.input-advance`)
    const gdate = document.getElementById(`inputdate`).value 
    const back = document.querySelector(`.backbtn`) 
    
    const main = document.getElementById(`main`)

    addButton.addEventListener(`click`,addTask)
     function addTask(){
      
        
        
          if (input1.value ==``) {
               alert(`First write your task stupid`)
              }
          else{
               listContainer.innerHTML += `<li class="li"><input type = "checkbox" class="chek" ><img src="cheked.png" class="chekd" alt=""></div><p>${input1.value}</p></li>`
      
              }
              input1.value = ``
        
     // save()
     
        
   }
   
   listContainer.addEventListener(`change`,removeTask)

   function removeTask(e){
     setTimeout(() => {
         
          console.log(`fuck`)
          e.target.parentNode.remove()
        
         
         
     }, 100);
     
     e.target.classList.add(`chekdshow`)
     e.target.parentNode.parentNode.classList.add(`liremove`)
     // save()
   }
   function save() {
     setInterval(() => {
          localStorage.setItem(`data`,listContainer.innerHTML)
     }, 100);
     
   }
   function get() {
     listContainer.innerHTML = localStorage.getItem(`data`)
   }

    plus.addEventListener(`click`,advanceTaskShow)

function advanceTaskShow() {

     advanceTask.classList.add(`show`)
     // plus.classList.add(`plushide`)
     main.classList.add(`hidemain`)

}

donebtn.addEventListener(`click`,addAdvanceTask)
function addAdvanceTask() {
     if (inputAdvance.value ==``) {
          alert(`First write your task stupid`)
         }
     else{
          console.log(`fuck off`)
          listContainer.innerHTML += `<li class="li"><div class="chek"><img src="cheked.png" class="chekd" alt=""></div><p>${inputAdvance.value}</p><span class = "date">${gdate}</span></li></li>`
          advanceTask.classList.remove(`show`)
          // plus.classList.remove(`plushide`)
          main.classList.remove(`hidemain`)
         }
         inputAdvance.value = ``
       
        
   
 save()
}
const chek = document.querySelector(`.chek`)
console.log(chek)
back.addEventListener(`click`,backfun)
function backfun() {
     advanceTask.classList.remove(`show`)
          //  plus.classList.remove(`plushide`)
          main.classList.remove(`hidemain`)
            new Notification(`fuhjkk`);
}
//    get()






   }//main function end