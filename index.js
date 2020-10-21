const imgs = document.querySelector("#imgs");
const img = document.querySelectorAll("#imgs img");

let idx = 1;

function display(){
    idx++;

    if(idx > img.length-1){
        idx = 1;
    }

   imgs.style.transform = `translatex(${-idx * 500}px)`;
}

setInterval(display, 3000);