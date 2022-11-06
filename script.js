var scrolly = document.querySelector("h1");
var paragraph = document.getElementById("lorem");
var titleChange = document.getElementsById("scrolly");





scrolly.addEventListener("click", printIt, true);
paragraph.addEventListener("click", changeColor, true);

titleChange.addEventListener("dbclick", titleChangeFunc, true)


function printIt(e) {
    console.log("Mouse clicked on the title!");
}


function changeColor(e){
    document.getElementById("lorem").style.color = "lightblue";

}

function titleChangeFunc(e) {
    console.log("new name");

    textContent = "Oppa Gangnam Style!";
}