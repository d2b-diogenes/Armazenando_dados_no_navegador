// Quando for adicionado um item que já existe, mas com a quantidade diferente,
// o sistema irá reconhecer o item e irá atualizar a quantidade
// Vai ser separado o desafio em 2, primeiro atualizar a tela e depois no localStorage

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
        // É criada uma constante para receber um possível elemento que pode existir na lista 
            //É utilizado o método .find( ) para procurar dentro do Array "itens" o elemento/objeto.
                // Dento do .find( ) foi colocado "elemento => elemento.nome === nome.value" que irá procurar pelo nome do elemento dentro do elemento/objeto
                // O nome do elemento será comprado com a com a constante nome e se forem iguais, 
                // será retorando o elemento/objeto que está dentro do Array "itens"
                // Documentação: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find

    //console.log(existe)
        // O console.log irá retornar o objeto que ele encontrou na lista, mas se o item não existir na lista, ele irá aparece "undefined"

    const itemAtual = {
        "nome": nome.value,
        "quantidade": quantidade.value
    }
        //Constante reposicionada para antes do if, pois se quer que o itemAtual tenha um ID, então ele precisa ser declarado antes

    //Será feito uma condição para controlar a existencia do elemento e a melhor forma de controle é o "id'. 
        //Ele será criado por meio do data-atributes, que será criado dentro da função criaElemento() 

    if (existe) {   // É feita uma condição caso o objeto exista, ele irá atualizar o elemento
        //Se o elemento existir, se não for diferente de vazio ou undefined,

        itemAtual.id = existe.id
            // 1º Ele irá manter o id, ele atribuir o "id" do elemento "existe" ao "id" do "itemAtual"
            // Como o item já existe no localStorage, o "id" do "existe" será atribuído novamente o "id" do "itemAtual" 

        // console.log(existe.id)
            //Fazendo um console.log para ver, se no caso do item existir, ele irá apresentar o id do item.

        atualizaElemento(itemAtual)

    } else {    // É feita uma condição caso o objeto exista, ele irá criar o elemento
        //Se o elemento não existir dentro do Array, se não for diferente de vazio ou undefined,

        itemAtual.id = itens.length
            // 1º ele irá atribuir ao "id" do itemAtual o tamanho do Array "itens" para que ele seja colocado ao fim da lista

        criaElemento(itemAtual) //Reposicionado
            // 2º será criado o elemento

        itens.push(itemAtual);
            // 3º o itemAtual será colocado dentro do Array
    }

/*
    const itemAtual = {
        "nome": nome.value,
        "quantidade": quantidade.value
    }

    criaElemento(itemAtual)

    itens.push(itemAtual);
*/

    localStorage.setItem("itens", JSON.stringify(itens));
 
    nome.value = ""

    quantidade.value = ""

})

function criaElemento(item) {

    const novoItem = document.createElement('li')
    
    novoItem.classList.add("item")
    
    const numeroItem = document.createElement('strong')

    numeroItem.innerHTML = item.quantidade

    numeroItem.dataset.id = item.id
        // Será criado o id para que seja feito o controle 
        // Será colocado o id no Strong, onde é apresentada a quantidade.

    novoItem.appendChild(numeroItem)

    novoItem.innerHTML += item.nome

    lista.appendChild(novoItem)

}

function atualizaElemento(item){
    //Criada a função para que ele faça a atualização da quantidade

    console.log(document.querySelector("[data-id='"+item.id+"']"))
        //Entendendo o que esse código está trazendo
        //No caso ele trás o elemento <strong data-id="0"> com o id igual ao do item.id

    document.querySelector("[data-id='"+item.id+"']").innerHTML = item.quantidade
        // document.querySelector("[data-id='"+item.id+"']")
            //Irá buscar dentro do documento o elemento com "data-id" igual ao valor do item.id
        //.innerHTML = item.quantidade
            // Depois ele irá atualizar / reescrever o innerHTML do elemento Strong com a nova quantidade do item

}