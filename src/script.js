
const newInput = document.querySelector('#newEntry');
const form = document.querySelector(".taskAdder");
const listEl = document.getElementById('myTasks');
const clearEl = document.querySelector('#clearAll') 
 

        //add items

form.addEventListener('submit', (event)=>{
    event.preventDefault(); 
    addNewTodo(event);
    newInput.value = '';
})
function addNewTodo(event)  {
    let template = `<li class="todo-item"><p contenteditable>${newInput.value}</p> 
    <div class="itemButtons"> <img class="editIcon" src="src/images/iconedit.svg"> 
    <img class="closeIcon" src="src/images/iconDelete.svg"></div></li>`; 
    listEl.innerHTML += template;
}
       

listEl.addEventListener('click', (event) =>{
    const clickedEl = event.target;
    if (clickedEl.classList.contains("closeIcon")) {       
    eraseTodo(clickedEl);}
    if (clickedEl.classList.contains("editIcon")) {
    editTask(clickedEl);}
    console.log(event.target)
})

     // Edit Items
const editTask = () => {
    
}


    //delete Items

const eraseTodo = (targetItem) => {
    listEl.removeChild(targetItem.closest('li'));
}

clearEl.addEventListener('click', () =>{
    listEl.innerHTML = '';
})
