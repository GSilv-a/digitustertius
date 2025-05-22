// criando um variável, espaço de memória que armazena um valor
var jogador = "x";

// uma função executa alguma ação, quando chamada
// celula é um parâmetro, o valor da celula clicado é passsado para a função
function jogar(celula){
// se a celula estier vazia, pode marcar 
// == IGUAL
// != Diferente
// > MAIOR
// < MENOR
    if(celula.innerHTML == ""){
        // escrever na célula o "X" ou a "O"
        celula.innerHTML = jogador;
// se jogador for igual a "x"
        if(jogador == "x"){
            jogador = "o";
            celula.style.backgroundColor = "white";
            celula.style.color = "black";
        } else {
            jogador = "x";
            celula.style.backgroundColor = "blue";
            celula.style.color = "white"
        }

    }

}

function reiniciar(){
    // criar lista com todos os quadrados 
    var celulas = document.querySelectorAll("td");


    for(var contador=0; contador < 9; contador ++){
        celulas[contador].innerHTML = "";
    }
}

var nomes = ['Isabela', 'Bruno', 'Rafael', 'Angelo', 'Franchesco', 'Aparecido', 'Guilherme'];

  sortear(sortear);
function sortear(){

    var nome1 = nomes[ Math.floor( Math.random() * nomes.length)  ];
    var nome2 = nomes[ Math.floor( Math.random() * nomes.length) ];
    
    //enquanto nome1 == nome2
    if(nome1 == nome2){
        sortear();

    }else{
        alert("jogador " + nome1 + " vs " + nome2)
        // Escrever na tela
        document.getElementById('jogador1').textContent = nome1;
        document.getElementById('jogador2').textContent = nome2;
    }
    
    alert("jogador: " + nome1 + " vs " + nome2);
    
    
    /*alert("Sorteio de número com random" + Math.random());
    alert("Econtrando posição da lista: " + Math.random() * nomes.length);
    alert("Encontrando posição da lista 2: " +Math.floor(Math.random()*nomes.length));
    */

}

function adicionar(){
    // pega o texto do input com o id="nome"
    var nome = document.getElementById("nome").value;
    // adiciona nome na lista
    nomes.push(nome) ;

}