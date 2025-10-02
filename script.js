function createMultTable(){
    let num = Number(window.prompt(`Enter the number you want the multiplication table of: `));
    let div = document.getElementById('multViewPort');
    let lineBreak = document.createElement(`br`);
    for(let i = 1; i < 11; i++){
        div.appendChild(lineBreak);
        div.scrollTo({top: div.scrollHeight, behavior: "smooth"})
        let multEqua = document.createElement('p')
        multEqua.innerHTML = `${num} * ${i} = ${num*i}`
        div.appendChild(multEqua)
    }
    div.appendChild(lineBreak);
}
function getRandColor(){
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    return `rgb(${r}, ${g}, ${b})`;
} 
let colorArr = [];
document.addEventListener('DOMContentLoaded', () => {
    let btns = document.querySelectorAll(`.colorBtn`);
    btns.forEach(function(button){
        let color = getRandColor()
        colorArr.push(color);
        button.style.backgroundColor = color;
    });
});
function btnColorChange(thing){
    console.log(thing);
    if(thing.id === `redChange`){
        let btns = document.querySelectorAll(`.colorBtn`);
        btns.forEach(function(button){
            button.style.backgroundColor = `rgb(255,0,0)`;
        });
    }
    if(thing.id === `greenChange`){
        let btns = document.querySelectorAll(`.colorBtn`);
        btns.forEach(function(button){
            button.style.backgroundColor = `rgb(0,255,0)`;
        });
    }
    if(thing.id === `blueChange`){
        let btns = document.querySelectorAll(`.colorBtn`);
        btns.forEach(function(button){
            button.style.backgroundColor = `rgb(0,0,255)`;
        });
    }
    if(thing.id === `randomChange`){
        let btns = document.querySelectorAll(`.colorBtn`);
        btns.forEach(function(button){
            button.style.backgroundColor = getRandColor();
        });
    }
    if(thing.id === `reset`){
        let btns = document.querySelectorAll(`.colorBtn`);
        let index = 0;
        btns.forEach(function(button){
            button.style.backgroundColor = colorArr[++index];
        });
    }
}