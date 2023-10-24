let todoList = JSON.parse(localStorage.getItem('Tasks')) || [];
displayTasks();
function addTask(){
    let taskElement = document.querySelector('#newTask');
    let dateElement = document.querySelector('#newDate');
    let taskValue = taskElement.value;
    let dateValue = dateElement.value;
    obj = {
        item : taskValue,
        date : dateValue
    }
    todoList.push(obj);
    localStorage.setItem('Tasks', JSON.stringify(todoList))
    taskElement.value = '';
    dateElement.value = '';
    displayTasks();
}

function displayTasks(){
    let containerElement = document.querySelector('.todo-list-display');
    newHtml = '';
    for (let index = 0; index < todoList.length; index++){
        let task = todoList[index].item;
        let date = todoList[index].date;
        newHtml += `
        <span> ${task}</span>
        <span> ${date}</span>
        <button id= 'btn-delete' onclick = "todoList.splice(${index},1);
        localStorage.setItem('Tasks', JSON.stringify(todoList));
        displayTasks()
        ">Delete</button>
        `
    }
    containerElement.innerHTML = newHtml;
}