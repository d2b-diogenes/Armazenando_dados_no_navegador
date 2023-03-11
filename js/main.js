const form = document.getElementById("novoItem")
const lista = document.getElementById("lista")
const itens = []

form.addEventListener("submit", (evento)=> {

    evento.preventDefault()

    const nome = evento.target.elements["nome"]

    const quantidade = evento.target.elements["quantidade"]
    
    criaElemento(nome.value, quantidade.value)

    nome.value = ""
        //Depois de criar o elemento, o campo "nome" irá ficar limpo no formulário

    quantidade.value = ""
        //Depois de criar o elemento,  campo "quantidade" irá ficar limpo no formulário

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

        //localStorage.setItem("item", itemAtual)
            //Esse formato não é o correto, pois nesse formato é salvo como Objeto
            //O LocalStorage só lê elementos do tipo JSON, apenas Strings
    
        //localStorage.setItem("item", JSON.stringify(itemAtual))
            //O "stringify" tranforma o objeto para uma representação de uma String
                // {"nome":"Camisa Branca","quantidade":"10"}
            //Nesse formato é salvo um objeto por vez, pois a cada "submit" o objeto anterior é sobrescrito
            

        //Não é possível salvar apenas 1 objeto por vez naquele elemento do LocalStorage
        //É necessário que seja guardado vários objetos em um elemento, um Array de objetos

    itens.push(itemAtual)
        //Um Array é criado para que o objeto criado seja locado dentro dessa lista do Array      
        

    localStorage.setItem("item", JSON.stringify(itens))
        //Agora ele salva como um Array e 
}