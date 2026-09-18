let tasklist=document.getElementById("tasklist");
let taskinput=document.getElementById("taskinput");
let taskbutton=document.getElementById("taskbutton");
addbutton.addEventListener("click",function(){
    let task=taskinput.value.trim();
    if (task===""){
        alert("please enter a task")
        return;
    }

let li=document.createElement("li");
let span=document.createElement("span");
span.textContent=task
span.addEventListener=("click",function(){
    span.classList.toggle("completed");
});
let deletebutton=document.createElement("button");
deletebutton.textContent="delete";
deletebutton.classList.add("delete");
deletebutton.addEventListener("click",function(){
    li.remove();
});
li.appendChild(span);
li.appendChild(deletebutton);
tasklist.appendChild(li);
taskinput.value=="";
});
taskinput.addEventListener("keyword",function(event){
    if (event.key=="enter");
    addbutton.click();
});
