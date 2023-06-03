// footer cpy-right

// let dateSpan = document.createElement("span");

// dateSpan.appendChild(document.createTextNode(date.getFullYear()))

// footer.insertBefore(dateSpan,cpyRight);

// footer cpy-right


// Scroll Btn
let scrollBtn = document.getElementById("scroll-btn");
window.onscroll = function (){
    if(this.scrollY >= 800){
        scrollBtn.classList.add("show");
    }
    else{
        scrollBtn.classList.remove("show");
    }
}

scrollBtn.onclick = function (){
    window.scrollTo({
         top:0,
         behavior: "smooth",
    });
}
// Scroll Btn

//Start special-link
let specialLink = document.getElementById("special-link");
let megaMenu = document.querySelector(".mega-menu");

specialLink.onclick = function(){
    megaMenu.classList.toggle("active");
    }

document.body.onclick = function(e){

    if(e.target.classList == "mega-menu-link"){
    }
    else{
        megaMenu.classList.remove("active");
    }
}    
//End special-link


// Start Progress
const filled = document.querySelector(".filled");

function update(){
    filled.style.width = `${((window.scrollY) / (document.body.scrollHeight - window.innerHeight) * 100)}%`
    requestAnimationFrame(update);
}
update();
//32186
//31187
// End Progress