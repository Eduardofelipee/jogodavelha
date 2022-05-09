var jogador = null;

var jogadorselecionado = document.getElementById (  "jogadorselecionado");

mudarjogador( valor = 'X');

function escolhaquadrado(id);{
    
    var quadrado = document.getElementById(id);

quadrado.innerHTML = jogador;
quadrado.style.color = '#000';
  
if (jogador === 'X' ); {

    jogador = '0';
} 
 {
    jogador = 'X';

}

mudarjogador(jogador);

function mudarjogador (valor) {
    jogador = valor;
    jogadorselecionado.innerHTML = jogador;

}

}