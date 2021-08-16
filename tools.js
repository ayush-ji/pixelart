var tools = new Tools();
tools.setTool("PENCIL");

var gamePix = document.querySelectorAll(".E");
var allColor = document.querySelectorAll(".C");
var allTools = document.querySelectorAll(".T");
var colorLog = [];
var toolLog  = [];
var selectedColor = "red";
var gridClicked = false;

// THESE FOLLOWING METHODS CONTROL WHEN THE GRID IS PRESSED AND WHEN IT'S NOT
// IT'S LIKE CLICKING AND HOLDING
// THEY UPDATE THE gridClicked VARIABLE.        
game.addEventListener('mousedown', (e) => {
    gridClicked = true;
    tools.getUtility().u(e.path[0])
    console.log(`GRID CLICKED = ${gridClicked}`);
})

game.addEventListener('mouseup', (e) => {
    gridClicked = false;
    console.log(`GRID CLICKED = ${gridClicked}`);
})

game.addEventListener('mouseout', (e) => {
    if (e.toElement == document.body) gridClicked = false;
    console.log(`GRID CLICKED = ${gridClicked}`);
})

allColor.forEach((colorBlock) => {
    colorBlock.addEventListener('click', (e) => {
        selectedColor = e.path[0].style.backgroundColor;
    })
})

gamePix.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.path[0].style.backgroundColor = (selectedColor == "") ? e.path[0].style.backgroundColor : selectedColor;
    })
})

allTools.forEach((item) => item.addEventListener( 'click' ,(e) => {
    tools.setTool(e.path[0].classList[1]);
    console.log(tools.getTool())
}));

// THIS EVENT LISTNER GETS THE UTILITY AND APPLY IT
game.addEventListener('mouseover', (e) => {
    if (gridClicked == true) tools.getUtility().u(e.path[0]);
})