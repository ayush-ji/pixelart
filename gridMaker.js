var game = document.getElementById('game');
var colorPallet = document.getElementById('color-sel');
var gamePix = document.querySelectorAll('.E');

var gridSize = {
    large  : {g : game , n : 3600 , cs : 10},
    medium : {g : game , n : 576  , cs  : 25},
    small  : {g : game , n : 144  , cs  : 50},
}

function mkGrid(ob) {

    var rowCount = 1;
    var colCount = 1;

    for ( var i = 1 ; i <= ob.n ; i++) {
        if (colCount > ob.cs) {
            colCount = 1;
            rowCount++;
        }
        var element = document.createElement('div');
        var attr = document.createAttribute("class");
        attr.value = `E R${rowCount} C${colCount} RC-${rowCount}${colCount}`;
        element.setAttributeNode(attr)
        console.log("Here");
        ob.g.appendChild(element);
        colCount++;
    }
}



//getSomeDivs(game , 36, 6);
mkGrid(gridSize.large);

// mkGrid({
//         g : colorPallet ,
//         n :  200,
//         cs : 30
//     })

// function grid( g , row , col ) {
//     for ( var i = 0 ; i < row ; i++ ) {
//         for ( var j = 0 ; j < col ; j++ ) {
//             var element = document.createElement('div')//.classList.add(`R-${i}_C-${j}`)
//             console.log("Here");
//             g.appendChild(element)
//         }
//     }
// }

