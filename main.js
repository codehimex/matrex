let up = document.querySelector(".up");

window.onscroll = function(){
    if (this.scrollY >= 400) {
        up.classList.add("show")
    }
    else{
        up.classList.remove("show")
    }
};
up.onclick = function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
}

let user = document.getElementById("name");
let btn = document.getElementById("btn");

btn.onclick = function(){
    swal("OK "+user.value, "The message has been sent successfully", "success");
}

let openn = document.getElementById("open");
let closee = document.getElementById("close");
let toggle = document.getElementById("toggle");

openn.onclick = function(){
    toggle.style.transform = "translate(0vw)";
}
closee.onclick = function(){
    toggle.style.transform = "translate(100vw)";
}