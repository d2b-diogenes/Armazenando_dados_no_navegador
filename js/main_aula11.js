// Removendo o item da lista e adicionando a nova lista no local Storage

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
        //A constante "existe", é utilizada com a condição "if" para verificar se o elemento existe. Ela verifica pelo nome do elemento e o valor da constante "nome"
    
    const itemAtual = {
        "nome": nome.value,
        "quantidade": quantidade.value
    }

    if (existe) {
        // Entra no "if" quando existi o elemento na lista e ele será atualizado

        itemAtual.id = existe.id
            // Como o item já existe no localStorage, o "id" do "existe" será atribuído novamente o "id" do "itemAtual" 
/*
        itemAtual.id = existe.id
            // É preciso atualizar essa linha de código, pois nessa estrutura possibilita "id"s duplicados
            // Isso pode gerar uma atualização do item errado, pois a função "atualizaElemento()" busca o item pelo "id" do "itemAtual", 
            // que é recebido do "id" "existe", mas o "id" do "existe" pode não ser mais daquele elemento.
                // Exemplo, uma lista foi criada com 3 itens e o tamanho dela é 3. Boné id=1, Bermuda id=2, Casaco id=3 
                // Se o Segundo item for deletado, sobrará os itens Boné id=1 e Bermuda id=2
                // Se adicionar novamente o casaco ou outro item, ele irá pegar o tamanho da lista, que no caso é, o 2
                // A nova lista terá a seguinte orgem: Boné id=1, Bermuda id=2 e Casaco id=2
                // Se for atualizar o casaco, na terceira posição, ele irá buscar pelo "id" 2, mas há um conflito, pois o item Bermuda também tem o "id" 2
*/

        atualizaElemento(itemAtual)

/*
        itens[existe.id] = itemAtual
            // Antes de jogar o "itemAtual" na posição do dentro da lista
            // Não é possível mais buscar pelo "id", pois agora o "id" do elemento irá ganhar um valor um sequêncial
            // e não poderá não coincidir mais com as posições da lista
*/

        itens[itens.findIndex(elemento => elemento.id === existe.id)] = itemAtual
                    console.log(itens[itens.findIndex(elemento => elemento.id === existe.id)])
                    console.log(itens[existe.id])
                    console.log(existe.id)
                    // "itens.findIndex(elemento => elemento.id === existe.id)"
                        // "elemento.id === existe.id" Será buscado dentro da lista o elemento que tem o "id" exatamente igual ao "existe.id"
                        // "itens.findIndex(elemento => elemento.id === existe.id)" Será encontrado o indíce desse elemento encontrado dentro da lista
    } else {
        // Entra no "else" quando NÃO existi o elemetno na lista e tem que ser criado

/*
        itemAtual.id = itens.length
            // É preciso atualizar essa linha de código, pois, com a nova função de deletar, essa estrutura não atende mais a necessidade.
                // Com a nova funcionalidade de deletar item e na criação o "id" d "itemAtual" ser o tamanho do lista, 
                // possibilitou criar "id"s duplicados, o "id" deixou de ser único.
                    // Exemplo, se de uma lista, que já tiver itens, forem excluídos alguns itens, essa lista irá diminuir de tamanho.
                    // Quando for criado um novo item, poderá ser atribuido ao "id" desse "item" um "id" já existente, que já foi atribuido anteriormente

*/
        // itemAtual.id = itens[itens.length - 1]
            // Fazendo dessa forma irá dá errado, pois se o tamanho for Zero, zero - 1 vai dar erro.
            // Será necessário fazer um condicional para verificar se irá dar erro ou não. Caso dê errado será feita uma coisa e se der certo, outra.

        itemAtual.id = itens[itens.length - 1] ? (itens[itens.length-1]).id + 1 : 0
            // Será atribuído ao "id" do "itemAtual" o valor do "id" do úlimo elemento da lista somado com mais 1.
            // Caso exista elementos na lista, será executado: (itens[itens.length-1]).id + 1
                // "itens.length-1" Irá pegar o tamanho da lista, pelo menos 1, e irá subtair 1-1 = 0
                // "itens[0]" Irá pegar o resultado "0" para entroncar o elemento dentro da lista. No caso, o primeiro item da lista.
                // "itens[0].id" Irá pegar o "id" do primeiro item da lista
                // "itens[0].id + 1" Irá somar 1 ao valor do "id" do itens[0]
                // "itemAtual.id = itens[0].id + 1" Irá atribuir ao "itemAtual.id" o valor do valor do "id" encontrado mais 1
                
            // Essa será a solução para a dupliciadade dos "id"s
            // Foi feito uma condicional para verificar se existe algum elemento dentro da lista "itens"
                // Se não der erro, há pelo menos um elemento, será buscado o valor do "id" do último elemento e será somado 1
                // Se der erro, não há nenhum elemento, será atribuído 0 (zero) ao "id" do "itemAtual"

            // A melhor condicional para esse caso é o Operador Ternário
                // itens[itens.length - 1] ? (itens[itens.length-1]).id + 1 : 0
                // Caso "itens[itens.length - 1]" dê erro ele irá fazer uma coisa ou outra
                // O "?" separa a parte que será verificada e as condições
                // Os dois pontos : separa as condições. O resultado para o caso da condição der erro vem antes e para o caso de dar certo vem depois

            //Operador Ternário
                // https://youtu.be/5JPfbLGqzXA - Operador Ternário
                // https://youtu.be/YjEtiFi2k7g - Operador Ternário
                // https://youtu.be/Mbwg0YIZwYo - Operador Ternário 

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

    novoItem.appendChild(botaoDeleta(item.id))
        //Ao chamar a faunção do botão Deleta é preciso que o "id" do item seja enviado como parâmetro

    lista.appendChild(novoItem)

}

function atualizaElemento(item){

    document.querySelector("[data-id='"+item.id+"']").innerHTML = item.quantidade

}

function botaoDeleta(id) {
        // Recebe como parâmetro o "id" do elemento 

    const elementoBotao = document.createElement("button");

    elementoBotao.innerText = " X"

    elementoBotao.addEventListener("click", function() {
                    
        deletaElemento(this.parentNode, id)
            // Ao chamar a função para deletar o Elemento é preciso mandar como parâmetro o "id" do elemento
        
    } )    
        
    return elementoBotao

}

function deletaElemento(tag, id) {
    // Para deletar o elemento do Array é preciso ter como parâmetro o "id" dele 

// Função Deleta Elemento da página
    tag.remove();

    // console.log(id);
        // Teste para verificar se irá trazer o id do elemento que foi clicado para ser removido 


// Remover um item do Array
    itens.splice(itens.findIndex(elemento => elemento.id === id), 1);
        // Com o index do elemento a função ".splice irá remover da lista o elemento, o objeto
        //"O "splice" funciona com apenas com o índice do Array, por exemplo, [0] ou [1] e assim vai. Para encontrar essa posição será usado o "id".
        // O "id" pode ser um número diferente da posição que o elemento está dentro do Array, 
            // por isso é preciso identificar a posição do elemento por meio do "id"
        // ".findIndex(elemento => elemento.if === id)" irá retornar ao ".splice" o index do elemento que tem o "id" igual ao que o parâmetro trouxe
        //Com o 

// Adiciona a nova lista "itens" de volta no localStorage
    localStorage.setItem("itens", JSON.stringify(itens));
        // Depois da remoção do elemento da lista, é preciso atualizar a lista que está no localStorage

}