// O desafio agora é remover um item da lista, remover um item da mochila de viagem. Para isso os itens têm que ser clicáveis.
    // É preciso criar um botão que quando clicado deleta o item.
// Nessa aula será criado o botão que irá deletar o item, ele não será mais exibido.

const form = document.getElementById("novoItem")
const lista = document.getElementById("lista")
const itens = JSON.parse(localStorage.getItem("itens")) || []

itens.forEach( (elemento) => {

    criaElemento(elemento)

})

form.addEventListener("submit", (evento)=> {

    evento.preventDefault()

    const nome = evento.target.elements['nome']

    const quantidade = evento.target.elements['quantidade']

    const existe = itens.find( elemento => elemento.nome === nome.value )
    
    const itemAtual = {
        "nome": nome.value,
        "quantidade": quantidade.value
    }

    if (existe) {   

        itemAtual.id = existe.id

        atualizaElemento(itemAtual)
        
        itens[existe.id] = itemAtual

    } else {

        itemAtual.id = itens.length

        criaElemento(itemAtual) 

        itens.push(itemAtual);

    }

    localStorage.setItem("itens", JSON.stringify(itens)) 
 
    nome.value = ""

    quantidade.value = ""

})

function criaElemento(item) {

    const novoItem = document.createElement('li')
    
    novoItem.classList.add("item")
    
    const numeroItem = document.createElement('strong')

    numeroItem.innerHTML = item.quantidade

    numeroItem.dataset.id = item.id

    novoItem.appendChild(numeroItem)

    novoItem.innerHTML += item.nome

    novoItem.appendChild(botaoDeleta())
        // "botaoDeleta()" irá executar a função que irá retonar o botão
        // Esse botão será adicionado ao final do elemento "li"
            // Os itens na tela irão exibir o botão

    lista.appendChild(novoItem)

}

function atualizaElemento(item){

    console.log(document.querySelector("[data-id='"+item.id+"']"))

    document.querySelector("[data-id='"+item.id+"']").innerHTML = item.quantidade

}

    // Criando a função deleta que irá criar o elemento botão
function botaoDeleta() {

    const elementoBotao = document.createElement("button");
        // O "ocument.createElement("button")" cria o elemento "button"
        // E a constante "elementoBotao" recebe o elemento "button"

    elementoBotao.innerText = " X"
        // Dentro desse elemento criado, é adicionado o X

        //OBS.: A criação de elementos via JS, eles não recebem o .addEventListener()
            // O .addEventListener() é criado na leitura da página como, por exemplo, o formulário. O botão não recebe o .addEventListener()
            // devido ele ter sido criado posteriormnete a leitura da página, os botões estão sendo criados dinamicamente.  
        
    //elementoBotao.addEventListener("click", () => {
        // É preciso criar o elemento já com esse evento associado, já com o .addEventListener() criado
        // Foi usado o Arrow Function para adicionar o evento "click", mas para saber qual foi o elemento clicado o Arrow Function não serve
            // Para saber qual foi o elemento clicado, qual foi o box clicado, qual foi o item clicado, é preciso que seja carregado o "this"
            // A Arrou Function não carrega do "this" do JS.

    elementoBotao.addEventListener("click", function() {
        // Para que seja possível identificar qual foi o elemento clicado, qual foi o box clicado, qual foi o item clicado, é preciso que seja carregado o "this
        // É necessária a declaração realmente de uma função para que o "this" seja carregado

        //console.log(this)
            //Verificando se o "this" irá retornar o elemento clicado
                // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/this
                // Vídeo 1: https://youtu.be/WsbMaN3PP9I - Explicação mais simples
                // Vídeo 2: https://youtu.be/GSqR2i-Pq6o - Explicação mais detalhada
            
        deletaElemento(this.parentNode)
            // O "this" retonar o elemento clicado, o botão. O botão é filho do "li", o elemento que se quer remover.
            // É usado o ".parentNode" para a função levar como parâmetro o pai do elemento "this", no caso, o "li", que é o item da lista.
    } )    
        
    return elementoBotao
        //Irá retonar o elemento botão. Toda vez que esse elemento for chamado ele irá retonar o botão.

}

function deletaElemento(tag) {
    // Essa função irá receber como parâmetro o elemento que irá remover

    tag.remove();
        // Irá remover a tag recebida como parâmetro

}