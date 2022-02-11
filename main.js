let todos = [
    { id: 1, title: "Create a button" },
    { id: 2, title: "Create a edit button" },
    { id: 3, title: "Create a delete button" },
    { id: 4, title: "Create a add button" }
]

// constants
const form1 = document.querySelector("#form1"),
    form2 = document.querySelector("#form2"),
    form3 = document.querySelector("#form3");
    todos_ul1 = document.querySelector("#ul1"),
    todos_ul2 = document.querySelector("#ul2"),
    todos_ul3 = document.querySelector("#ul3");
    
// writeToDos1
const WriteTodos1 = () => {
    todos_ul1.innerHTML = "";
  
    todos.map((todo, index) => {
        todos_ul1.innerHTML += `<li>
        <span>${index+1}. ${todo.title}</span>
        <span>
            <i onclick="EditToDo1(${todo.id})" class="btn bi bi-pencil-square"></i>
            <i onclick="DeleteToDo1(${todo.id})" class="bi bi-trash"></i>
        </span>
    </li>`
    })
}
// WriteTodos2
const WriteTodos2 = () => {
    
    todos_ul2.innerHTML = "";
    
    todos.map((todo, index) => {
        todos_ul2.innerHTML += `<li>
        <span>${index+1}. ${todo.title}</span>
        <span>
            <i onclick="EditToDo2(${todo.id})" class="btn bi bi-pencil-square"></i>
            <i onclick="DeleteToDo2(${todo.id})" class="bi bi-trash"></i>
        </span>
    </li>`
    })
}
// WriteTodos3
const WriteTodos3 = () => {
    
    todos_ul3.innerHTML = "";
    todos.map((todo, index) => {
        todos_ul3.innerHTML += `<li>
        <span>${index+1}. ${todo.title}</span>
        <span>
            <i onclick="EditToDo3(${todo.id})" class="btn bi bi-pencil-square"></i>
            <i onclick="DeleteToDo3(${todo.id})" class="bi bi-trash"></i>
        </span>
    </li>`
    })
}
// create via form1
form1.onsubmit = (e) => {
    e.preventDefault();
    let newToDo = {
        id: Date.now(),
        title: e.target[0].value
    };
    if (newToDo.title !== "") todos.push(newToDo); 
    else alert("Fill the gap!");
    WriteTodos1();
  
    form1.reset();
}
// create via form2
form2.onsubmit = (e) => {
    e.preventDefault();
    let newToDo = {
        id: Date.now(),
        title: e.target[0].value
    };
    if (newToDo.title !== "") todos.push(newToDo); 
    else alert("Fill the gap!");
    
    WriteTodos2();
   
    form2.reset();
}
// create via form3
form3.onsubmit = (e) => {
    e.preventDefault();
    let newToDo = {
        id: Date.now(),
        title: e.target[0].value
    };
    if (newToDo.title !== "") todos.push(newToDo); 
    else alert("Fill the gap!");
    
    WriteTodos3();
    form3.reset();
}
const DeleteToDo1 = (id) =>{
    let confirmation = window.confirm("Are you sure to delete this item?");
    if(confirmation){
        todos=todos.filter(user => user.id !== id);
        WriteTodos1();
    }
}
const DeleteToDo2 = (id) =>{
    let confirmation = window.confirm("Are you sure to delete this item?");
    if(confirmation){
        todos=todos.filter(user => user.id !== id);
        WriteTodos2();
    }
}
const DeleteToDo3 = (id) =>{
    let confirmation = window.confirm("Are you sure to delete this item?");
    if(confirmation){
        todos=todos.filter(user => user.id !== id);
        WriteTodos3();
    }
}
window.onload = () => WriteTodos1(),WriteTodos2() ,WriteTodos3() 