//Dado o array numérico abaixo, faça um programa que consiga validar se todos os números são pares. Se todos os itens do array forem par, o programa deverá imprimir `array válido`, senão `array inválido`.
const numeros = [0, 122, 4, 6, 7, 8, 44]
const resultado = numeros.every((numero) => { return numero % 2 == 0 });
if (resultado) {
    console.log(`array válido`)
} else {
    console.log(`array inválido`)
}
