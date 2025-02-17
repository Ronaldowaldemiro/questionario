document.getElementById('enviar').addEventListener('click', function(event) {
    event.preventDefault();

    var pergunta1 = document.querySelector('input[name="pergunta1"]:checked').value;
    var pergunta2 = document.querySelector('input[name="pergunta2"]:checked').value;

    var respostas = document.getElementById('respostas');
    respostas.innerHTML = '';

    var resposta1 = document.createElement('p');
    resposta1.textContent = 'Pergunta 1: ' + pergunta1 + ' - ' + (pergunta1 === 'Brasília' ? 'Correto' : 'Incorreto');
    respostas.appendChild(resposta1);

    var resposta2 = document.createElement('p');
    resposta2.textContent = 'Pergunta 2: ' + pergunta2 + ' - ' + (pergunta2 === 'Júpiter' ? 'Correto' : 'Incorreto');
    respostas.appendChild(resposta2);
});