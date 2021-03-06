
const newInputValue = document.querySelector('#newEntry').value;

//form.addEventListener('submit', addNewTodo());
//inputValue = '';
//event.preventDefault();     //  ???


const addNewTodo = () => {
    const listEl = document.getElementById('myTasks');
    const template = `<li class="todo-item">${newInputValue}</li>`;
    listEl.innerHTML += template;
}





console.log("template") 