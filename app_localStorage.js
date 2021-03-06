//* ======================================================
//*                     TODO APP
//* ======================================================

const addBtn=document.getElementById("todo-button");
const todoInput=document.getElementById("todo-input")
const todoUl=document.querySelector("#todo-ul");

let todos=JSON.parse(localStorage.getItem("todos")) || [];

renderSavedTodos();


function renderSavedTodos(){
   todos.forEach((todo)=>{
    const {id,content,isDone}=todo;
    todoUl.innerHTML +=
        `<li>
        <i class="fa fa-check"></i>
        <p>${todo.content}</p>
        <i class="fa fa-trash"></i>
        </li>`

   })
}
function createListElement(){
    
}

window.onload=function(){
    todoInput.focus();
}

addBtn.addEventListener("click",(e)=>{

    if(!todoInput.value){
        alert("Please enter your todo")
    }else{
        const todoObject={
            id:new Date().getTime(),
            isDone:false,
            content:todoInput.value

        };
        todos.push(todoObject);
       
        localStorage.setItem("todos",JSON.stringify(todos))
      

        todoUl.innerHTML +=
        `<li>
        <i class="fa fa-check"></i>
        <p>${todoInput.value}</p>
        <i class="fa fa-trash"></i>
        </li>`
        todoInput.value="";
        }

})

todoInput.addEventListener("keydown",(e)=>{
   if(e.key=="Enter"){
    addBtn.click();
   }

})
//* ============capturing================*/

todoUl.addEventListener("click",(e)=>{
   if(e.target.classList.contains("fa-trash")){
    e.target.parentElement.remove();
   }
   if(e.target.classList.contains("fa-check")){
    if(e.target.parentElement.classList.contains("checked")){
      e.target.parentElement.classList.remove("checked")}
      else{
        e.target.parentElement.classList.add("checked")
      }
    }

})
