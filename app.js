//* ======================================================
//*                     TODO APP
//* ======================================================

const addBtn=document.getElementById("todo-button");
const todoInput=document.getElementById("todo-input")
const todoUl=document.querySelector("#todo-ul")


window.onload=function(){
    todoInput.focus();


}

addBtn.addEventListener("click",(e)=>{
    //console.log(todoInput.value);
    todoUl.innerHTML +=
    `<li>
    <i class="fa fa-check"></i>
    <p>${todoInput.value}</p>
    <i class="fa fa-trash"></i>
    </li>`
    todoInput.value="";
   

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
    e.target.parentElement.remove();
   }

})