function creator(number){
    //check if number is below 100
    
    let childNumber = number;
    const container = document.getElementsByClassName("container")[0];
    
    //remove elements

    let count = document.getElementById("container").children.length;

    while(count > 0){
        const children = document.getElementsByClassName("children")[0];
        const rowChildren = document.getElementsByClassName("rowChildren")[0];
        container.removeChild(children);
        children.removeChild(rowChildren);
        count--;
    };

    if(number <= 100){
    //creates elements
    while (childNumber > 0){
        const children = document.createElement("div");
        
        let rowNumber = number;
        children.classList.add("children");
        container.appendChild(children);
        while(rowNumber > 0){
            const rowChildren = document.createElement("div");
            rowChildren.classList.add("rowChildren");
            children.appendChild(rowChildren);
            rowNumber--;
        }
        childNumber--;
    }
    }

    //change colors 
    
}

function randomColor(){
    const singleSquares = document.querySelectorAll(".rowChildren");
    singleSquares.forEach((singlesquares) => {
    
        singlesquares.addEventListener("mouseenter", (e) => {
            singlesquares.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        });
    });
};

//let color = Math.floor(Math.random()*16777215).toString(16);

let color = "";


function colors() {

const singleSquares = document.querySelectorAll(".rowChildren");
    singleSquares.forEach((singlesquares) => {
        let counter = 1;
        singlesquares.addEventListener("mouseenter", (e) => {
            
            singlesquares.style.backgroundColor = color;
            singlesquares.style.opacity = counter/10;
            counter++;
        });
    });
}

let value = 0;

const button = document.getElementById("confirm");
button.addEventListener("click", () => {
    value = document.getElementById("number").value;
    creator(value);
    colors();
  });


const red = document.getElementById("red");
  red.addEventListener("click", () => {
      color = "red";
      colors();
    });

const green = document.getElementById("green");
    green.addEventListener("click", () => {
        color = "green" ; 
        colors();
    });
const blue = document.getElementById("blue");
blue.addEventListener("click", () => {
          color = "blue" ; 
          colors();
    });

const erase = document.getElementById("erase");
erase.addEventListener("click", () => {
        color = "white" ; 
        colors();
    });

const black = document.getElementById("black");
    black.addEventListener("click", () => {
            color = "black" ; 
            colors();
        });

const random = document.getElementById("random");
random.addEventListener("click", () => {
            randomColor();
        });

const reset = document.getElementById("reset");
    reset.addEventListener("click", () => {
            creator(value);
         });
