// Refatorando o código para corrigir um problema de lógica que foi criado ao longo da construção 

const form = document.getElementById("novoItem")
const lista = document.getElementById("lista")
const itens = JSON.parse(localStorage.getItem("itens")) || []

        console.log(itens)

itens.forEach( (elemento) => {
    //Essa função irá pegar o Array com os objetos que estiverem dentro do localStorage,
    //Irá fazer um loop para cada elemento dentro do Array
    //E irá executar a função de criar o elemento

    //console.log(elemento.nome, elemento.quantidade)

    criaElemento(elemento)
        //A função será executada e irá levar no parâmetro um objeto de dentro do Array contendo o nome e a quantidade

})

form.addEventListener("submit", (evento)=> {

    evento.preventDefault()

    const nome = evento.target.elements["nome"]

    const quantidade = evento.target.elements["quantidade"]

/*
    const itemAtual = {
        "nome": nome,
        "quantidade": quantidade
    }
*/
    const itemAtual = {
        "nome": nome.value,
        "quantidade": quantidade.value
    }
        // O objeto será criado usando as contantes. Os valores das contantes "nome" e "valor" são extraídos usando o "value"
    
/*
    criaElemento(nome.value, quantidade.value)
*/
    criaElemento(itemAtual)
        //A função será chamada levando o objeto contendo dentro dela os dois valores necessário para criar os elementos, nome e a quantidade    

    itens.push(itemAtual);

    localStorage.setItem("itens", JSON.stringify(itens));
 
    nome.value = ""

    quantidade.value = ""

})

/*
function criaElemento(nome, quantidade) {
*/
function criaElemento(item) {
    // A função recebe apenas 1 parâmetro, um objeto

    const novoItem = document.createElement('li')
    
    novoItem.classList.add("item")
    
    const numeroItem = document.createElement('strong')

    numeroItem.innerHTML = item.quantidade
        // O innerHTML do "numeroItem" irá receber a valor da posição "quantidade" do objeto item
        // O objeto tem a seguinte estrutura {"nome":valor, "quantidade":valor} 
        // Para acessar o valor de cada posição é preciso colocar o nome do termo inserido em casa posição de dentro do objeto

    novoItem.appendChild(numeroItem)

    novoItem.innerHTML += item.nome
        // O innerHTML do "novoItem" irá receber a valor da posição "nome" do objeto item
        // O objeto tem a seguinte estrutura {"nome":valor, "quantidade":valor} 
        // Para acessar o valor de cada posição é preciso colocar o nome do termo inserido em casa posição de dentro do objeto

    lista.appendChild(novoItem)

    //Refatorando
        //Foi retirado da função de criar o elemento para ser colocado dentro da função "submit"
   
}
