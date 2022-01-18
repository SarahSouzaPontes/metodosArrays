const usuarios = [
    {
        nome: "André",
        idade: 29,
        habilitado: false,
    },
    {
        nome: "Marcos",
        idade: 70,
        habilitado: true,
    },
    {
        nome: "Ana",
        idade: 35,
        habilitado: true,
    },
    {
        nome: "Vinícius",
        idade: 44,
        habilitado: true,
    },
    {
        nome: "Carlos",
        idade: 17,
        habilitado: false,
    },
    {
        nome: "Maria",
        idade: 19,
        habilitado: true,
    },
]

const resultado = usuarios.filter((idade) => {
    return idade.idade >= 18 && idade.idade <= 65;
});


const resultado2 = resultado.every((habilitado) => { return habilitado.habilitado == true });


if (resultado2 == true) {
    console.log(`todos passaram no teste`)
} else {
    console.log(`todos precisam estar habilitados`)
}