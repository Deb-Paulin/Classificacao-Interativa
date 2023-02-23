function mudaCor(event) {
    //obtem uma referência do botão clicado com o event
    let botaoClicado = event.target;
    let todosBotoes = document.getElementsByClassName("num");
    //alterando as cores de todos os botões, inclusive o botão selecionado
    for (var i = 0; i < todosBotoes.length; i++) {
        todosBotoes[i].style.color = '#ffffff';
    }
      
    //adicionando a cor de selecionado no botão
    botaoClicado.style.color = '#fb7413';
}