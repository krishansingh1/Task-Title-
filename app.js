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
}

//Add task
function addTask() {
     
}