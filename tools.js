var tools = new Tools();
tools.setTool("PENCIL");

var gamePix = document.querySelectorAll(".E");
var allColor = document.querySelectorAll(".C");
var allTools = document.querySelectorAll(".T");
var colorLog = [];
var toolLog  = [];
var selectedColor = "red";
var gridClicked = false;

allTools.forEach((tool) => {
    tool.addEventListener('click' , (e) => {
        tools.setTool(e.path[0].classList[1]);
    })
})

// THESE FOLLOWING METHODS CONTROL WHEN THE GRID IS PRESSED AND WHEN IT'S NOT
// IT'S LIKE CLICKING AND HOLDING
// THEY UPDATE THE gridClicked VARIABLE.        
game.addEventListener('mousedown', (e) => {
    gridClicked = true;
    tools.getUtility().utility(e.path[0]);
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

game.addEventListener('mouseleave' , (e) => {
    gridClicked = false
})

allColor.forEach((colorBlock) => {
    colorBlock.addEventListener('click', (e) => {
        selectedColor = e.path[0].style.backgroundColor;
    })
})


// THIS EVENT LISTNER GETS THE UTILITY AND APPLY IT
game.addEventListener('mouseover', (e) => {
    if (gridClicked == true) tools.getUtility().utility(e.path[0]);
})