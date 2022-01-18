const palavras = ["arroz", "feijão", "carne", "cerveja", "macarrão"]


const resultadoPalavras = palavras.some((palavra) => { return palavra == "cerveja" || palavra == "vodka" });
if (resultadoPalavras == true) {
    console.log(`revise sua lista, joão. possui bebida com venda proibida!`)
} else {
    console.log(`tudo certo, vamos as compras!`)
}