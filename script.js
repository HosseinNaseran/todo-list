document.querySelectorAll("li").forEach(li => {
    // li.prepend("\u2715");

    const closeBtn = document.createElement("span");
    closeBtn.className = "close";
    closeBtn.prepend("\u2715");
    li.prepend(closeBtn);
    closeBtn.onclick = function() {
        li.remove();
    };
    let completed = li.querySelector(".completed");
    completed.onclick = function() {
        if(li.style.textDecoration === "line-through") {
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

