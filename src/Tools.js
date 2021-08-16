class Tools {
    #selectedTool = "NOTHING SELECTED";
    #tools = {
        "PENCIL" : {
            utility : (element) => {
                element.style.backgroundColor = selectedColor;
            },
        },
        "ERASER" : {
            utility : (element) => {
                console.log("helre");
                element.style.backgroundColor = "white";
            },
        },
        "PAINT"  : {
            utility : (element) => {

            }
        },
        "ONEPIX" : {},
        "NOTHING SELECTED" : "Suss",
    }

    getUtility = function () {
        return this.#tools[this.#selectedTool];
    }

    setTool = function (toolName) {
        this.#selectedTool = toolName;
    }
    
     getTool = function () {
        return this.#selectedTool
    }
}