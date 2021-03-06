
const newInput = document.querySelector('#newEntry');
const form = document.querySelector(".taskAdder");
let listEl = document.getElementById('myTasks');
 


form.addEventListener('submit', (event)=>{
    event.preventDefault(); 
    addNewTodo(event);
    console.log(newInput) 
    newInput.value = '';
})
    

function addNewTodo(event)  {
let template = `<li class="todo-item">${newInput.value}</li>`; 
listEl.innerHTML += template;
}



