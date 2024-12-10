// Pegar o elemento de  botão para ser adicionado o evento de clique nele.
const clicarNoBotao = document.querySelector('.botao')
// Pegar o elemento de id do conselho
const contador = document.querySelector('.contador')
// Pegar o elemento de descrição do conselho
const conselho = document.querySelector('.conselho')
// Após conseguirmos os elementos do html, é necessário a criação da função responsável por pegar os dados da API. A melhor forma de se consumir a api é usando async await. Caso não tenha visto a aula, sugiro que assista novamente. Nas referências ficará um link com exemplos.

async function gerarOConselhoAleatorio() {
    try {
       const resposta = await fetch("https://api.adviceslip.com/advice") 
       if (!resposta.ok) {
        throw new Error("Ocorreu um erro ao tentar buscar as informações da API");
       }
       const conteudoDoCartao = await resposta.json()
       const contadorDoCartao = `Advice #${conteudoDoCartao.slip.id}`
       const conselhoDoCartao = `"${conteudoDoCartao.slip.advice}"`

       contador.innerText = contadorDoCartao
       conselho.innerText = conselhoDoCartao
    } catch (error) {
        console.error("Erro ao tentar buscar as informações da API", error);
    }
}

clicarNoBotao.addEventListener('click', gerarOConselhoAleatorio)