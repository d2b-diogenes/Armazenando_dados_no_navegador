// É necessário atualizar o localStorage para que ele possa refletir a alteração feita na quantidade do item
// Toda vez que se quer atualizar o localStorage a gente simplesmente escreve por cima, ele vai descartar a gravação anterior e vai adicionar um item novo
// Toda vez que a atualiza o elemento, é atualizar o Array
    // Para atualiar o Array, é achar a posição onde está o conteúdo e, também, sobrescrever.

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
            // Quando o elemento é atualizado, o itemAtual, ele sobrescreve o objeto dentro do Array
                // O "itemAtual" irá sobreescrever o conteúdo do objeto que tem a posição trazida pelo "existe.id"

        //console.log(existe.id)
            //Retonar a posição do conteúdo que se quer atualizar, que já existe dentro do Array

        //console.log(itens[existe.id])
            //Retorna o objeto dentro do array que tem a posição que o "existe.id" está trazendo

    } else {

        itemAtual.id = itens.length

        criaElemento(itemAtual) 

        itens.push(itemAtual);
            // Quando se cria o elemento, o itemAtual, ele é colocado dentro do Array "itens"
    }

    localStorage.setItem("itens", JSON.stringify(itens))
        //Criados os itens ou atualizados, ele são transformados em String para que possão ser inseridos no localStorage 
 
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

    lista.appendChild(novoItem)

}

function atualizaElemento(item){

    console.log(document.querySelector("[data-id='"+item.id+"']"))

    document.querySelector("[data-id='"+item.id+"']").innerHTML = item.quantidade

}