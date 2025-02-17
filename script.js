document.getElementById('enviar').addEventListener('click', function(event) {
    event.preventDefault();

    var pergunta1 = document.querySelector('input[name="pergunta1"]:checked').value;
    var pergunta2 = document.querySelector('input[name="pergunta2"]:checked').value;
    var pergunta3 = document.querySelector('input[name="pergunta3"]:checked').value;
    var pergunta4 = document.querySelector('input[name="pergunta4"]:checked').value;
    var pergunta5 = document.querySelector('input[name="pergunta5"]:checked').value;
    var pergunta6 = document.querySelector('input[name="pergunta6"]:checked').value;
    var pergunta7 = document.querySelector('input[name="pergunta7"]:checked').value;
    var pergunta8 = document.querySelector('input[name="pergunta8"]:checked').value;
    var pergunta9 = document.querySelector('input[name="pergunta9"]:checked').value;
    var pergunta10 = document.querySelector('input[name="pergunta10"]:checked').value;

    var respostas = document.getElementById('respostas');
    respostas.innerHTML = '';

    var pontuacao = 0;

    var resposta1 = document.createElement('p');
    resposta1.textContent = 'Pergunta 1: ' + pergunta1 + ' - ' + (pergunta1 === 'Caim' ? 'Correto' : 'Incorreto');
    if (pergunta1 === 'Caim') {
        pontuacao += 10;
    } else {
        pontuacao -= 10;
    }
    respostas.appendChild(resposta1);

    var resposta2 = document.createElement('p');
    resposta2.textContent = 'Pergunta 2: ' + pergunta2 + ' - ' + (pergunta2 === 'Abel' ? 'Correto' : 'Incorreto');
    if (pergunta2 === 'Abel') {
        pontuacao += 10;
    } else {
        pontuacao -= 10;
    }
    respostas.appendChild(resposta2);

    var resposta3 = document.createElement('p');
    resposta3.textContent = 'Pergunta 3: ' + pergunta3 + ' - ' + (pergunta3 === 'Jeremias' ? 'Correto' : 'Incorreto');
    if (pergunta3 === 'Jeremias') {
        pontuacao += 10;
    } else {
        pontuacao -= 10;
    }
    respostas.appendChild(resposta3);

    var resposta4 = document.createElement('p');
    resposta4.textContent = 'Pergunta 4: ' + pergunta4 + ' - ' + (pergunta4 === 'Salomão' ? 'Correto' : 'Incorreto');
    if (pergunta4 === 'Salomão') {
        pontuacao += 10;
    } else {
        pontuacao -= 10;
    }
    respostas.appendChild(resposta4);
    
    var resposta5 = document.createElement('p');
    resposta5.textContent = 'Pergunta 5: ' + pergunta5 + ' - ' + (pergunta5 === 'Gabriel' ? 'Correto' : 'Incorreto');
    if (pergunta5 === 'Gabriel') {
        pontuacao += 10;
    } else {
        pontuacao -= 10;
    }
    respostas.appendChild(resposta5);

    var resposta6 = document.createElement('p');
    resposta6.textContent = 'Pergunta 6: ' + pergunta6 + ' - ' + (pergunta6 === 'Judas Iscariotes' ? 'Correto' : 'Incorreto');
    if (pergunta6 === 'Judas Iscariotes') {
        pontuacao += 10;
    } else {
        pontuacao -= 10;
    }
    respostas.appendChild(resposta6);

    var resposta7 = document.createElement('p');
    resposta7.textContent = 'Pergunta 7: ' + pergunta7 + ' - ' + (pergunta7 === 'Paulo' ? 'Correto' : 'Incorreto');
    if (pergunta7 === 'Paulo') {
        pontuacao += 10;
    } else {
        pontuacao -= 10;
    }
    respostas.appendChild(resposta7);

    var resposta8 = document.createElement('p');
    resposta8.textContent = 'Pergunta 8: ' + pergunta8 + ' - ' + (pergunta8 === 'Gólgota' ? 'Correto' : 'Incorreto');
    if (pergunta8 === 'Gólgota') {
        pontuacao += 10;
    } else {
        pontuacao -= 10;
    }
    respostas.appendChild(resposta8);

    var resposta9 = document.createElement('p');
    resposta9.textContent = 'Pergunta 9: ' + pergunta9 + ' - ' + (pergunta9 === 'Salmos' ? 'Correto' : 'Incorreto');
    if (pergunta9 === 'Salmos') {
        pontuacao += 10;
    } else {
        pontuacao -= 10;
    }
    respostas.appendChild(resposta9);

    var resposta10 = document.createElement('p');
    resposta10.textContent = 'Pergunta 10: ' + pergunta10 + ' - ' + (pergunta10 === 'Davi' ? 'Correto' : 'Incorreto');
    if (pergunta10 === 'Davi') {
        pontuacao += 10;
    } else {
        pontuacao -= 10;
    }
    respostas.appendChild(resposta10);

    var pontuacaoFinal = document.createElement('p');
    pontuacaoFinal.textContent = 'Pontuação final: ' + pontuacao;
    respostas.appendChild(pontuacaoFinal);

    document.getElementById('refazer').addEventListener('click', function() {
        // Limpar as respostas
        var respostas = document.getElementById('respostas');
        respostas.innerHTML = '';
    
        // Desmarcar as opções selecionadas
        var radios = document.querySelectorAll('input[type="radio"]');
        radios.forEach(function(radio) {
            radio.checked = false;
        });
    });
});