// Função para gerar um número aleatório de 4 dígitos
function gerarNumeroAleatorio() {
  let numero = '';
  while (numero.length < 4) {
    let digito = Math.floor(Math.random() * 10);
    numero.includes(digito) ? null : numero += digito; // Operador ternário usado aqui
  }
  return numero;
}

// Função para comparar a adivinhação do usuário com o número gerado
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
  let tentativa = 0;
  let palpiteUsuario = '';

  while (palpiteUsuario !== numeroGerado) {
    palpiteUsuario = prompt('Digite seu palpite de 4 dígitos:');
    
    if (palpiteUsuario === null) { // Caso o usuário cancele o prompt
      break;
    }

    if (palpiteUsuario.length !== 4 || isNaN(palpiteUsuario)) {
      alert('Por favor, insira exatamente 4 dígitos válidos.');
      continue;
    }

    let resultado = compararNumeros(numeroGerado, palpiteUsuario);

    if (resultado === 'acertou') {
      alert(`Parabéns! Você acertou o número ${numeroGerado} em ${tentativa} tentativas.`);
      document.getElementById('victoryScreen').classList.remove('hidden');
      break;
    } else {
      alert(resultado);
      tentativa++;
    }
  }
}

// Inicia o jogo
jogoAdivinhacao();
