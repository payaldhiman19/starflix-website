
// const API_KEY = 'k_12345678';
const inputbox=document.getElementById("input-box");
const listcontainer=document.getElementById("list-container");
function addTask(){
if(inputbox.value==''){
    alert("you must write something!");
}else{
    let li=document.createElement("li");
    li.innerHTML=inputbox.value;
    listcontainer.appendChild(li);
    // to add cross  mark on the right of each task 
    let span=document.createElement("span");
    span.innerHTML="\u00d7";
    li.appendChild(span);
}
//to clear the input field after adding
inputbox.value="";
savedata();
}
listcontainer.addEventListener("click",function(e){
    e.target.parentElement.remove();
}, false);
//to add the data after loading also so that it is not cleared
function savedata(){
    localStorage.setItem("data",listcontainer.innerHTML);
}
//store task in local storage and  load when page loads to show
function showtask(){
    listcontainer.innerHTML=localStorage.getItem("data")
}
showtask();
