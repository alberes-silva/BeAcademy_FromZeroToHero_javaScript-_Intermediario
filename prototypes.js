/* Prototypes */
// function Pessoa(nome,idade,peso) {
//     this.nome = nome;
//     this.idade = idade;
//     this.peso = peso;
// }

// const marcelo = new Pessoa('Marcelo', 44,80);
// console.log(Pessoa.prototype)

const notebook = {
    cor: 'preta',
    ano: 2022,
    specifications: function(value) {
        return `Este notebook custa R$${value},00; cor ${this.cor}; ano ${this.ano}`
    }
}

// console.log(notebook)
// console.log(notebook.cor)

const dell = {
    marca: 'Dell'
}

Object.setPrototypeOf(dell, notebook)

console.log(dell.specifications(5000))
