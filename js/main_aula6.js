const form = document.getElementById("novoItem")
const lista = document.getElementById("lista")
const itens = JSON.parse(localStorage.getItem("itens")) || []
    // Quando a página é recarregada a constante "itens" irá receber as informações que estão no "itens" do localStorage
        // É utulizado o "getItem" para pegar as informações da posição "itens"
    // Para que seja possível fazer o forEach é necessário transformar para dados que o JS consiga ler
        // JSON.parse( ) irá transformar a String que está em "itens" no localStorage em uma Array
        // A constante "itens" irá receber esse Array criado pelo JSON.parse( )

        console.log(itens)
        // console.log feito na constante "itens" para ver se a constante, mesmo depois de recarregar a página, guardou os "itens" do localStorage

itens.forEach( (elemento) => {
        //É necessário fazer um Loop para ir criando a estrutura de cada elemento na página HTML
        //Para fazer um Loop em uma Array é possível usar o "forEach", pois ele irá repetir a cada elementos existente dentro do Array

    //console.log(elemento)
        // Ao verificar o console log dá um erro informnando que não é possível executá-la, pois há um erro de tipo
        // Não será possível executar o forEach devido ele ser possível de ser executado apenas em Arrays.
        // Por mais que a estrutura seja de um Array no "itens" do localStorage, mas não é. O "itens" no localStorage é uma String.

        // Para que seja possível fazer o forEach, será necessário que a constante receba os dados transformados de String para dados que o JS consiga ler 
        // O JSON.parse( ) irá transformar de String para dados que o JS poderá ler como um Array
        // Depois disso o console log console.log(itens) irá ler a contante "itens" como uma Array e console.log(elemento) irá ler os elementos como Objetos

    console.log(elemento.nome, elemento.quantidade)
        // Cada elemento que está sendo acessado dentro do Array, nesse caso, é um objeto
        // A cada repetição que o forEach der ele irá imprimir o nome e valor de cada objeto

        // A partir dessa estrutura iremos criar os elementos dentro do HTML
})

form.addEventListener("submit", (evento)=> {

    evento.preventDefault()

    const nome = evento.target.elements["nome"]

    const quantidade = evento.target.elements["quantidade"]
    
    criaElemento(nome.value, quantidade.value)

    nome.value = ""

    quantidade.value = ""

})

function criaElemento(nome, quantidade) {

    const novoItem = document.createElement('li')
    
    novoItem.classList.add("item")
    
    const numeroItem = document.createElement('strong')

    numeroItem.innerHTML = quantidade
    
    novoItem.appendChild(numeroItem)

    novoItem.innerHTML += nome

    lista.appendChild(novoItem)
    
    const itemAtual = {
        "nome": nome,
        "quantidade": quantidade
    }

    itens.push(itemAtual);

    localStorage.setItem("itens", JSON.stringify(itens));
   
}
