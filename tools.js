var gamePix = document.querySelectorAll(".E");
var allColor = document.querySelectorAll(".C");
var selectedColor = "";

console.log(allColor)

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