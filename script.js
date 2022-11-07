var titleElement = document.getElementById("title");
var instructions = document.getElementById("lorem");

titleElement.addEventListener("click", colorTitle);
titleElement.addEventListener("dblclick", dbClick);
instructions.addEventListener("click", changeInstructions);
function colorTitle(){
    console.log("title is clicked")
    titleElement.style.color = "red";
}

function dbClick(){
    console.log("double click!");
    titleElement.style.fontFamily = "comicSans";
}

function changeInstructions(){
    
    instructions.textContent = "Have a great day! :)"
}