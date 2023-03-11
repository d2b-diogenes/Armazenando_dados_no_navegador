const form = document.getElementById("novoItem")
const lista = document.getElementById("lista")
const itens = []
    //Criado um Array para receber vários objetos, uma sequência de objetos que serão adicionados na lista

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

    //No JS toda vez que se tem um par de elementos, uma chave e valor, e se quer salvar o que se chama de
    //dicionário daquilo ali, é usado um objeto.
    
    const itemAtual = {
            //Tranformar esse elemento em um objeto
        "nome": nome,
        "quantidade": quantidade
    }

    itens.push(itemAtual);
        //Agora o item será adicionado na lista do Array "itens"
        //E agora o "itens" será passado para o LocalStorage
        
    // localStorage.setItem("item", itemAtual)
        //Agora vai ser enviado apenas 1 objeto e será salvo como tal
        //Mas o localStorage não irá lê, pois ele só lê elementos do tipo JSON, só lê uma string
        //Então, será necessário transformar esse elemento em uma string
        //Essa transformação é feita por meio do "JSON.stringify( )"
    
    // localStorage.setItem("item", JSON.stringify(itemAtual))
        //Agora o objeto se transformou em uma String por meio do JSON.stringify
        //Agora ele salvou como uma representação de um objeto
        //Esse formato ainda não é necessário, pois ainda ele continuará sobrescrevendo
        
    //Não precisamos apenas de um objeto para armezenar no elemento item todos os itens
    //É necessário um Array de objetos, uma sequência de objetos

    localStorage.setItem("itens", JSON.stringify(itens));
        // Agora está sendo salvo no localStorage um Array de objetos no formato String
        // item:"[{"nome":"Camisa Branca","quantidade":"10"}]"
   
}
