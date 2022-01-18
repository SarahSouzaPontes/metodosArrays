//Dado um determinado array de palavras, faça um programa que verifica se existe ao menos uma palavra com mais de 5 caracteres. Caso exista, o programa deverá imprimir `existe palavra inválida`, senão, o programa deverá imprimir `array validado`.

const palavras = ["livro"]

const resultadoPalavras = palavras.some((palavra) => { return palavra.length > 5 });
if (resultadoPalavras == true) {
    console.log('existe palavra inválida')
} else {
    console.log("array inválido")
}
