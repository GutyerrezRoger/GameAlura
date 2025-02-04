// Função para gerar um número aleatório de 4 dígitos
function gerarNumeroAleatorio() {
    let numero = '';
    while (numero.length < 4) {
        let digito = Math.floor(Math.random() * 10);
        numero.includes(digito) ? null : numero += digito; // Operador ternário usado aqui
    }
    return numero;
}

// Função para comparar adivinhação do usuário com o número gerado
function compararNumeros(numeroGerado, palpiteUsuario) {
    if (parseInt(palpiteUsuario) > parseInt(numeroGerado)) {
        return 'O número sorteado é menor. Tente de novo!';
    } else if (parseInt(palpiteUsuario) < parseInt(numeroGerado)) {
        return 'O número sorteado é maior. Tente de novo!';
    } else {
        return 'acertou';
    }
}

// Função principal do jogo
function jogoAdivinhacao() {
    let numeroGerado = gerarNumeroAleatorio();
    let tentativas = 0;

    // Esconde a tela de vitória no início do jogo
    document.getElementById('victoryScreen').classList.add('hidden');

    function verificarPalpite() {
        let palpiteUsuario = document.getElementById('palpiteInput').value;

        if (palpiteUsuario.length !== 4 || isNaN(palpiteUsuario)) {
            document.getElementById('feedbackMessage').textContent = 'Por favor, insira exatamente 4 dígitos válidos.';
            return;
        }

        let resultado = compararNumeros(numeroGerado, palpiteUsuario);

        document.getElementById('feedbackMessage').textContent = resultado;

        if (resultado === 'acertou') {
            tentativas++;
            document.getElementById('feedbackMessage').textContent = `Parabéns! Você acertou o número ${numeroGerado} em ${tentativas} tentativa(s).`;
            document.getElementById('numeroSecreto').textContent = numeroGerado;
            document.getElementById('tentativas').textContent = tentativas;
            document.getElementById('victoryScreen').classList.remove('hidden');
            document.getElementById('gameContainer').classList.add('hidden');
            document.getElementById('palpiteInput').value = ''; // Limpa o campo de palpite
        } else {
            tentativas++;
            document.getElementById('palpiteInput').value = ''; // Limpa o campo de palpite ao errar
        }
    }

    // Associando a função de verificação ao botão Verificar
    document.getElementById('verificarButton').addEventListener('click', verificarPalpite);

    // Permitir o uso da tecla Enter para verificar o palpite
    document.getElementById('palpiteInput').addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            verificarPalpite();
        }
    });

    // Reiniciar o jogo ao clicar no botão Jogar Novamente
    document.getElementById('playAgainButton').addEventListener('click', function () {
        document.getElementById('victoryScreen').classList.add('hidden');
        document.getElementById('gameContainer').classList.remove('hidden');
        numeroGerado = gerarNumeroAleatorio();
        tentativas = 0;
        document.getElementById('feedbackMessage').textContent = '';
        document.getElementById('numeroSecreto').textContent = ''; // Limpa o número secreto exibido
        document.getElementById('tentativas').textContent = ''; // Limpa o contador de tentativas exibido
        document.getElementById('palpiteInput').value = '';
    });
}

// Inicia o jogo
jogoAdivinhacao();
