function creator(number){
    //check if number is below 100
    
    let childNumber = number;
    
    
    //remove elements

    let count = document.getElementById("container").children.length;

    if(count >0){
        const children = document.createElement("div");
        const container = document.getElementsByClassName("container")[0];
        const rowChildren = document.createElement("div");
        children.removeChild(rowChildren);
        container.removeChild(children);
        count--;
    };

    if(number <= 100){
    //creates elements
    while (childNumber > 0){
        const children = document.createElement("div");
        const container = document.getElementsByClassName("container")[0];
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
    const singleSquares = document.querySelectorAll(".rowChildren");
    singleSquares.forEach((singlesquares) => {
    
        singlesquares.addEventListener("mouseenter", (e) => {
            singlesquares.style.backgroundColor = "red";
        });
    });
}




const button = document.getElementById("confirm");
button.addEventListener("click", () => {
    let value = document.getElementById("number").value;
    creator(value);
  });






