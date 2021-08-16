class Tools {
    #selectedTool = "NOTHING SELECTED";
    #tools = {
        "PENCIL" : {
            u : (element) => {

                element.style.backgroundColor = selectedColor;
            },
        },
        "ERASER" : {
        },
        "PAINT"  : {},
        "ONEPIX" : {},
        "NOTHING SELECTED" : "SSSS",
    }

    getUtility = function () {
        console.log(this.#tools[this.#selectedTool].u)
        return this.#tools[this.#selectedTool];
    }

    setTool = function (toolName) {
        this.#selectedTool = toolName;
    }
    
     getTool = function () {
        return this.#selectedTool
    }

    toolUtility = function () {
        
    }
}