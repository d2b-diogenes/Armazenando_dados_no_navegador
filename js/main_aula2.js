const form = document.getElementById("novoItem")
const lista = document.getElementById("lista")
        //Constante criada para que possa ser feita a manipulação da lista

form.addEventListener("submit", (evento)=> {

    evento.preventDefault()
    
    criaElemento(evento.target.elements['nome'].value, evento.target.elements['quantidade'].value)
        //Quando é feito o "submit", a função "criaElemento" é executada e leva como parâmentro
        //o nome e a quantidade que foram capturados
})

function criaElemento(nome, quantidade) {
        //Função que cria o elemento com os dados capturados.
        //Para criar os elementos é preciso receber como parâmetros o nome e quantidade.

    console.log(nome)
    console.log(quantidade)

    //<li class="item"><strong>QUANTIDADE</strong>NOME</li>

    const novoItem = document.createElement('li')
        //Constante que irá receber um elemento 
        //Esse elemento que está sendo criado é uma "li" no documento HTML por meio do JS 
    
    novoItem.classList.add("item")
        //Depois de criar o novo elemento, adicionando ao elemente a classe "item"  
    
        //console.log (novoItem)
            //Consultando o novo item elemento criado:
            //<li class="item"></li>
    
    const numeroItem = document.createElement('strong')
        //É criado um novo elemento
        //Constante que irá receber esse novo elemento 
        //Esse elemento que está sendo criado é uma "strong" no documento HTML por meio do JS 

    numeroItem.innerHTML = quantidade
            //O innerHTML irá receber a quantidade que vem do parâmetro da função
            //É usado o innerHTML, pois será adicionada a quantidade no conteúdo do documento
        
        //console.log(numeroItem)
            //Consultando se a constante criou o elemento strong e se o innerHTMl recebeu a quantidade
            //Foi criado o elemento, um objeto, e no "innerHTML" está o valor que veio do parâmetro "quantidade"

        //novoItem.innerHTML = numeroItem + nome
            //Esse formato não é possível, pois está sendo criado via JS um objetos completos, por isso não é possível simplemente somar elementos aos objetos.

        // Entendendo melhor a inserção de um conteúdo dentro do outro
            // A manipulação dos objetos não é trvial
            // Para isso é preciso usar o appendChild, que irá inserir um elemento criado dentro do outro.
    
    novoItem.appendChild(numeroItem)
        //Com essa operação o elemento "strong" será inserido dentro do "li"
        // <li class=\"item\"><strong>10</strong></li>"

    novoItem.innerHTML += nome
        //O elemento está criado
        //Ao final do InnerHTML será foi acrescentado o nome:
        //<li class=\"item\"><strong>5</strong>Camisa Branca</li>

    lista.appendChild(novoItem)
        //Com essa operação "appendChild" o elemento criado "novoItem" é inserido dentro da "lista"

        //Os elementos criados via JS são objetos e precisam ser manipulados por meio do "appendChild"
    
}
