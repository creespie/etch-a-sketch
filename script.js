function creator(number){
    let total = number * number;
    
    while (total > 0){
        const children = document.createElement("div");
        const container = document.getElementsByClassName("container")[0];
        children.classList.add("children");
        container.appendChild(children);
        total--;
    }
}

creator(2);

