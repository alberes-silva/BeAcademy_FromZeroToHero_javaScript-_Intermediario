/* Herança */

class Candidates {
    constructor(firstName, surName, cpf) {
        this.firtName = firstName,
        this.surName = surName,
        this.cpf = cpf
    }
}

class Nasc extends Candidates {
    constructor (firstName, surName, cpf, reservista) {
        super(firstName, surName, cpf)
        this.reservista = reservista
    }
}

const candidate1 = new Nasc ('Marcelo', 'Vasques',123456789, true)
const candidate2 = new Nasc ('Maria', 'Fulama', 456123789)
const candidate3 = new Nasc ('Alberes', 'José', 90258632185,true)

console.log(candidate3)