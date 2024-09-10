let li = document.querySelectorAll("ul li");

li.forEach(element => {
    element.onclick = function() {
        if (this.classList.contains("hidden")) {
            li.forEach(ele => {
                ele.classList.add("hidden");
                let img = ele.querySelector("img");
                img.setAttribute("src", "./images/icon-plus.svg");
            });
            this.classList.remove("hidden");
            let img = this.querySelector("img");
            img.setAttribute("src", "./images/icon-minus.svg");
        } else {
            this.classList.add("hidden");
            let img = this.querySelector("img");
            img.setAttribute("src", "./images/icon-plus.svg");
        }
    };
});
