
const newInput = document.querySelector('#newEntry');
const form = document.querySelector(".taskAdder");
const listEl = document.getElementById('myTasks');
const clearEl = document.querySelector('#clearAll');
const completList = document.querySelector('#completList'); 
let todos = JSON.parse(localStorage.getItem('items')) || [];
render();


        //add items
form.addEventListener('submit', (event)=>{
    event.preventDefault(); 
    addNewTodo(event);
    newInput.value = '';
})
const addNewTodo = () => {
  if (newInput.value === "") alert("cannot be empty")
  const newTodo = {
    id: (Date.now() + Math.random()).toString(),
    title: newInput.value,
    isDone: false
  }
  todos.push(newTodo);
  save()
  render();
}
function render() {
  clearElements();
  todos.forEach ((todo) => {
    const template = `
    <li class="listItem" data-id = ${todo.id}>
        <input type='checkbox' ${todo.isDone ? "checked" : null} />
        <p class=' ${todo.isDone ?  "todo-item completed" : "todo-item"}' id='itemText' contenteditable='${!todo.isDone}'>${todo.title}
      </p>
      <img class="closeIcon" src="src/images/iconDelete.svg"/>
    </li>`;
    listEl.insertAdjacentHTML("beforeend", template);
  })
}
function clearElements() {
  listEl.innerHTML = "";}
  

    
listEl.addEventListener('click', (event) =>{
     let clickedEl = event.target;
      if (clickedEl.classList.contains("closeIcon")) {       
        eraseTodo(clickedEl);
      }
                     // Edit Items
      if (clickedEl.tagName.toLowerCase() === "p") {
        clickedEl.onkeydown = (event) => {
          if (event.key === "Enter") {
            event.preventDefault(); // prevents line breaks
            const newText = clickedEl.textContent;
            if (clickedEl.textContent.length < 2) {
              return alert("Todo item cannot be empty or less then two chars.");
            }
            const clickedItemId = clickedEl.parentElement.dataset.id;   // find data-id from clicked html item
            const currTodo = todos.find((todo) => clickedItemId === todo.id);   // find current todo obj based on id
            currTodo.title = newText;   // update clicked todo title with edited text 
            currTodo.isEditable = false;     // update isEditable property for our curent todo Item
            save()
            render();
          }
        };
      }
          //completed items 
      if (clickedEl.tagName.toLowerCase() === 'input') {
        let checkId = clickedEl.parentElement.dataset.id;
        const checkedItem = todos.find((todo) => checkId === todo.id);
        console.log(checkedItem)
        
        if (clickedEl.checked) {
          checkedItem.isDone = true;
          save();
          render();
        } else {
          checkedItem.isDone = false;
          save();
          render();
        }    
      }
    })

          //delete Items
const eraseTodo = (clickedEl) => {
  const clickedItemId = clickedEl.parentElement.dataset.id;
  todos = todos.filter((todo, index) => {
  return todo.id !== clickedItemId;
  })
  save();
  render(); 
}
clearEl.addEventListener('click', () =>{   
    todos.length = 0;
    save();
   render();   
}) 
function save() {
  localStorage.setItem('items', JSON.stringify(todos)); 
}

          // Filter Elements
completList.addEventListener('click', () =>{

const completEl = document.getElementsByClassName("completed");

console.log(completEl)

if (completEl.style.display === "block") {
  completEl.parentElement.style.display = "none";
} else {
  completEl.style.display = "block";
}

//document.querySelectorAll('.listItem .completed').classList.toggle("completed");
})