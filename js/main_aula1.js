const form = document.getElementById("novoItem")
    //Foi criada uma constante que irá guardar o formulário.
        //console.log(document.getElementById("novoItem"))
        //para capturar o elemento, no caso, o formulário.

form.addEventListener("submit", (evento)=> {
    //o addEventListener irá escutar o evento de "Submit" do formulário para executar a função anônima
    //O comportamento executado no evento é capturado e colocado dentro do termo "evento", que vai como parâmetro dentro da função

    evento.preventDefault()
        //Irá imterromper o comportamento padrão da página de recarregar a página. Ele precisa imterromper esse comportamento para que possa entrar na função.
        //"evento" é o parâmetro que vem na função. É o evento que acontece quando o "submit" é feito
        //.preventDefault() - cancela o evento se for cancelável, sem parar a propagação do mesmo.
            //Há outros mecanismos para cancelar o evento ou para a propagação: event.cancelable ou event.stopPropagation
            //Documentação: https://developer.mozilla.org/pt-BR/docs/Web/API/Event/preventDefault

    //  console.log(evento)
        //Pegando os dados do formulário para entender o que é enviado e como.
    
    console.log(evento.target.elements['nome'].value)
    console.log(evento.target.elements['quantidade'].value)
        //No evento estão os dados e informações sobre o "submit".
        //Acessa o "target" do evento, pois dentro dele há caminhos que permitem acessar os elementos que contêm os dados que se quer ter acesso.
        //Acessando pelo "elements", que é uma propriedade dentro do "target", é possível obter o dado do elemento informando apenas o nome dele.
        //É usado "value" para acessar o valor, pois é um INPUT.
 
})
    //"Submit" é a operação de um formulário sendo enviado