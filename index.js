var inputTask = document.getElementById("inputTask");
var btnAdd = document.getElementById("add");
var cajaTask = document.getElementById("tasks");

const addTask = () => {
    if(inputTask.value != ""){
        var li = document.createElement("li");
        li.innerHTML = inputTask.value;
        cajaTask.appendChild(li);
        var span = document.createElement("span");
        span.innerHTML = "x";
        li.appendChild(span)
    }else
        alert("No hay tarea para agregar");
    
    inputTask.value = "";
    saveData();
}
btnAdd.addEventListener("click", addTask);

cajaTask.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",cajaTask.innerHTML);
}

function showTask(){
    cajaTask.innerHTML = localStorage.getItem("data");
}

showTask();
