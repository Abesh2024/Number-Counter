let dibba = document.querySelector(".container");
let para = document.getElementById("text");
let button1 = document.getElementById("btn1");
let button2 = document.getElementById("btn2");
let button3 = document.getElementById("btn3");

let count = 0;
button1.addEventListener("click", ()=>{
    count -=1;
    para.innerText = count;
    para.classList.add("animate");
    setTimeout(()=>{
        para.classList.remove("animate");
    }, 600);

})

button2.addEventListener("click", ()=>{
    count +=1;
    para.innerText = count;
    // para.style.transitionDuration = "0.5s";
    para.classList.add("animate");
    setTimeout(()=>{
        para.classList.remove("animate");
    }, 500);
})

button3.addEventListener("click", ()=>{
     count = 0
    para.innerText = count;
    para.classList.add("animate");
    setTimeout(()=>{
        para.classList.remove("animate");
    }, 600);
})