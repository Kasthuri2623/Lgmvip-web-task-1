const inputApp =document.getElementById("input-app");
const  listcon =document.getElementById("list-container");
function addtask()
{
    if(inputApp.value ==='')
    {
        alert("enter the text in the text box");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML=inputApp.value;
        listcon.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML ="\u00d7";
        li.appendChild(span);
    }
    inputApp.value="";
}
listcon.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
    }

},false);