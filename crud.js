
let inputName = document.querySelector("#name-input");
let feedbackText = document.querySelector("#feedback-input");
let parentDiv = document.querySelector("#list");
let button = document.querySelector("#btn");

function add(){
    if(inputName.value != "" && feedbackText.value != ""){
        let newDiv = document.createElement("div");
        newDiv.innerHTML = `<p><b>${inputName.value}</b> says ${feedbackText.value}`;
        parentDiv.appendChild(newDiv);
        inputName.value = "";
        feedbackText.value="";
    }
    else{
        alert("Name or Feedback text is missing")
    }
   
}
button.addEventListener('click',add);