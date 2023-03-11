const form = document.getElementById("novoItem")
const lista = document.getElementById("lista")

form.addEventListener("submit", (evento)=> {

    evento.preventDefault()

    const nome = evento.target.elements["nome"]
        //Constante criada para armazenar o "nome"  que vem da operação "submit".

    const quantidade = evento.target.elements["quantidade"]
        //Constante criada para armazenar a "quantidade"  que vem da operação "submit".
    
    criaElemento(nome.value, quantidade.value)

    nome.value = ""
        //No final da operação, depois de criar o elemento usando o campo "nome", o campo irá ficar limpo no formulário

    quantidade.value = ""
        //No final da operação, depois de criar o elemento usando o campo "quantidade", o campo irá ficar limpo no formulário

})

function criaElemento(nome, quantidade) {

    const novoItem = document.createElement('li')
        // <li></li>
    
    novoItem.classList.add("item")
        // <li class = "item"></li>
    
    const numeroItem = document.createElement('strong')
        // numeroItem = <strong></strong>

    numeroItem.innerHTML = quantidade
        // <strong>XX</strong>
    
    novoItem.appendChild(numeroItem)
        // <li><strong>XX</strong></li>

    novoItem.innerHTML += nome
        // <li><strong>XX</strong>nome</li>

    lista.appendChild(novoItem)
        //<ul>
            // <li><strong>XX</strong></li>
        // </ul>

    localStorage.setItem("nome", nome)
    localStorage.setItem("quantidade", quantidade)
        //Esse formato de armazenamento ainda não é adequado ao modelo desse contexto, pois
        //ele irá sobrescrever cada vez que for adicionado um novo item no "nome" e na "quantidade",
        //pois está sendo salvo apenas 1 item, afinal só está sendo usado apenas uma chave "nome" e uma
        //única chave "quantidade"

        //LocalStorage é um recurso utilizado para salvar dados do tipo texto "string" no navegador do usuário
        //O método localStorage.getItem() é utilizado para acessar uma informação salva no localStorage
    
}
