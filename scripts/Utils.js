const inputElement = document.getElementById("inputField");
const addButton = document.getElementById("addToDo");
const todolist = document.getElementById("toDoList");
let idx = 0;
const addTodo = () => {
  let newTodo = document.createElement("li");
  newTodo.style.display = "flex";
  let content = document.createElement("span");
  if (inputElement.value === "") alert("입력하라 내용을");
  else {
    newTodo.id = idx;
    newTodo.className = "todo";
    content.innerText = inputElement.value;
    newTodo.appendChild(content);
    newTodo.appendChild(getDonetButton(idx));
    newTodo.appendChild(getMinusButton(idx));
    todolist.appendChild(newTodo);
    idx += 1;
    inputElement.value = "";
  }
};

const enterToAdd = (event) => {
  if (event.keyCode === 13) {
    addTodo();
  }
};

const removeTodo = (e) => {};

const getDonetButton = (idx) => {
  let doneButton = document.createElement("button");
  doneButton.innerText = "✔️";
  doneButton.id = idx;
  doneButton.onclick = (e) => {
    const tmpTodo = document.getElementById(e.target.id);
    if (tmpTodo.className === "done") tmpTodo.className = "todo";
    else {
      tmpTodo.className = "done";
    }
  };
  return doneButton;
};

const getMinusButton = (idx) => {
  let minusButton = document.createElement("button");
  minusButton.innerText = "❎";
  minusButton.id = idx;
  minusButton.onclick = (e) => {
    const tmpTodo = document.getElementById(e.target.id);
    todolist.removeChild(tmpTodo);
  };
  return minusButton;
};

addButton.addEventListener("click", () => addTodo());
inputElement.addEventListener("keydown", (event) => enterToAdd(event));
