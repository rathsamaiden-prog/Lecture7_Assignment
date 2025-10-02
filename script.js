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