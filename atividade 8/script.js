let contaazar = 0;
let contasorte = 0;

function sorte(){
    let min = 1;
    let max = 100;
    let dif = max - min;
    let aleatorio = Math.random();
    let num = min + Math.trunc(dif * aleatorio);

    let mostra = document.getElementById('resultado');

    if (num > 50){
        contasorte++;
    mostra.innerHTML = `<p>SORTE: {contasorte} </p> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoCzxPXcYBWwBkTCCz1bZwo4rk0pXKfd7w9-jLUPodYg&s=10">´;
    }else{
        contaazar++;
    mostra.innerHTML = `<p>SORTE: {contasorte} </p> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0o0ffwCv9Y3yIZeNMHQtQXOHZ8nf7NUAu5M1d2OeiWQ&s=10">´;
    }
    
}