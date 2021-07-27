//Define UI Vars

const form= document.querySelector('#task-form');
const taskList= document.querySelector('.collection');
const clearBtn= document.querySelector('.clear-tasks');
const filter= document.querySelector('#filter');
const taskInput= document.querySelector('#task');

//Load All Event Listners
 
 loadEventListeners();

//Load all event listeners
function loadEventListeners() {
   //Add task event
    form.addEventListener('submit', addTask);

    //Remove task Event
     taskList.addEventListener('click',removeTask);

     //Clear Task event
      clearBtn.addEventListener('click', clearTasks);

     //Filter Task Event
      filter.addEventListener('keyup',filterTasks);
}

//Add task
function addTask(e) {
      
    if(taskInput.value === ''){
        alert('Add a task');
    }

   //Create li Element
    const li= document.createElement('li');
      
     li.className= 'collection-item';

     li.appendChild(document.createTextNode(taskInput.value)); 

     const link= document.createElement('a');

     link.className= 'delete-item secondary-content';

     link.innerHTML = '<i class="fa fa-remove"></i>';

     li.appendChild(link);

    // console.log(li);

      taskList.appendChild(li);
    
     //Store in Local Storage
      storeTaskInLocalStorage(taskInput.value);

     //Clear Input
      taskInput.value= ''; 

      e.preventDefault();
}

 //Store Task
   function storeTaskInLocalStorage(task) {

     let tasks;

     if(localStorage.getItem('tasks') === null){
       tasks =[];

     } else{

        tasks= JSON.parse(localStorage.getItem('tasks'));
     }

      tasks.push(task);

      localStorage.setItem('tasks', JSON.stringify(tasks));
   }

//Remove Task

  function removeTask(e) {
      
    if(e.target.parentElement.classList.contains('delete-item')){

      if(confirm('Are You Sure?'));
       e.target.parentElement.parentElement.remove();
    }
  }

 //Clear Tasks
   function clearTasks(){
    // taskList.innerHTML= '';
  
     while(taskList.firstChild){
       taskList.removeChild(taskList.firstChild);
     }
   } 

  //Filter Tasks
    function filterTasks(e){

      const text= e.target.value.toLowerCase();

      document.querySelectorAll('.collection-item').forEach(function(task) {
        
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1){
           task.style.display= 'block';
        } else{
           task.style.display= 'none';
        }
      });
    }