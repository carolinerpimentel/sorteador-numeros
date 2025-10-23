let resultado = document.getElementById('resultado');

function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    let diferencaDeAte = ate - de;
    let numero;
    let numerosSorteados = [];

    // Proteção do campo "Do número", que deve ser inferior ao "Até o número"    
    if (de > ate) {
        alert('O campo "Do número" não deve conter um número maior do que "Até o número"');
        return;
    }

    // Verifica se a quantidade de números escolhidos é igual ou inferior ao intervalo de números entre os campos “Do número” e “Até o número”

    if(quantidade >= (diferencaDeAte + 1)){
        alert('Defina um intervalo de números maior entre os campos "Do número" e "Até o número"');
        return;
    }
        
    for (i = 0; i < quantidade; i++) {
        numero = gerarNumeroAleatoreo(de, ate);

        while (numerosSorteados.includes(numero)) {
            numero = gerarNumeroAleatoreo(de, ate);
           //alert('Tentando obter número inédito');
        }
        numerosSorteados.push(numero);
    }
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${numerosSorteados}</label>`;

    alterarBotao('btn-reiniciar');
    alterarBotao('btn-sortear');
}

function gerarNumeroAleatoreo(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao(botao, status){
    botao.disabled = status;
}

function alterarBotao(id){
    let botao = document.getElementById(id);
    
        if (botao.classList.contains('container__botao')) {
            botao.classList.remove('container__botao');
            botao.classList.add('container__botao-desabilitado');
            alterarStatusBotao(botao, true);
        } else {
            botao.classList.remove('container__botao-desabilitado');
            botao.classList.add('container__botao');
            alterarStatusBotao(botao, false);
        }
    }
 
function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';

    alterarBotao('btn-reiniciar');
    alterarBotao('btn-sortear');

    resultado.value.innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';    
}


