document.querySelectorAll("li").forEach(li => {
    // li.prepend("\u2715");

    const closeBtn = document.createElement("span");
    closeBtn.className = "close";
    closeBtn.prepend("\u2715");
    li.prepend(closeBtn);
    closeBtn.onclick = function () {
        li.remove();
    };
    let completed = li.querySelector(".completed");
    completed.onclick = function () {
        if (li.style.textDecoration === "line-through") {
            li.style.textDecoration = "none";
            li.style.opacity = "1";
            li.style.boxShadow = "0px 0px 5px aquamarine";
        } else {
            li.style.textDecoration = "line-through";
            li.style.opacity = ".5";
            li.style.boxShadow = "none";
        }
    };


});
let items = document.querySelector(".todo-list-items")
let add = document.querySelector(".todo-list-button");
let search = document.querySelector(".search");
add.onclick = function () {
    if (search.value === ""){
        alert("لطفا عنوان تسک  دلخواهت رو بنویس")
    }
    else{

        let newItem = document.createElement("li");
        newItem.className = "item";
        newItem.textContent = search.value;
        
        const closeBtn = document.createElement("span");
        closeBtn.className = "close";
        closeBtn.prepend("\u2715");
        newItem.prepend(closeBtn);
         closeBtn.onclick = function () {
            newItem.remove();
        };
        let newchecked = document.createElement("input");
        newchecked.type = "checkbox";
        newchecked.className = "complete";
        newchecked.style.position ="absolute";
        newchecked.style.left = "0"
        newItem.prepend(newchecked)

        newchecked.onclick = function () {
        if (newItem.style.textDecoration === "line-through") {
            newItem.style.textDecoration = "none";
            newItem.style.opacity = "1";
            newItem.style.boxShadow = "0px 0px 5px aquamarine";
        } else {
            newItem.style.textDecoration = "line-through";
            newItem.style.opacity = ".5";
            newItem.style.boxShadow = "none";
        }
    };


        
        
        items.prepend(newItem)
    }

    
}

