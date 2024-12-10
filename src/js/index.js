const clicarNoBotao = document.querySelector('.botao')
const contador = document.querySelector('.contador')
const conselho = document.querySelector('.conselho')

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