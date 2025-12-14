const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector("#todo-list");
const toDoInput = toDoForm.querySelector("input");

let toDos = [];

function saveToDo() {
    localStorage.setItem("todos", JSON.stringify(toDos))
}

function deleteToDo(e) {
    const li = e.target.parentElement;
    toDos = toDos.filter((item) => item.id !== parseInt(li.id));
    saveToDo();
    li.remove();
}

function CreateToDo(toDoObj) {
    const li = document.createElement("li");
    li.id = toDoObj.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    span.innerText = toDoObj.text;
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function ToDoSubmit(e) {
    e.preventDefault();
    const toDo = toDoInput.value;
    toDoInput.value = ""
    toDoObject = {
        text: toDo,
        id: Date.now()
    }
    toDos.push(toDoObject);
    CreateToDo(toDoObject);
    saveToDo();
}

toDoForm.addEventListener("submit", ToDoSubmit);

const savedToDo = localStorage.getItem("todos");
if (savedToDo !== null) {
    const parsedToDos = JSON.parse(savedToDo);
    toDos = parsedToDos;
    parsedToDos.forEach(CreateToDo);
}
