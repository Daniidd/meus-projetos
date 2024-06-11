class carro {
    constructor(marca, modelo, ano, cor, ligado) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
        this.ligado = ligado;
    }

    ligar() {
        this.ligado = true;
    }

    desligar() {
        this.ligado = false;
    }

    pintar(corNova) {
        this.cor = corNova;
        console.log(`Carro pintado de ${corNova}`);
    }

    info() {
        let situacao;
        if (this.ligado) {
            situacao = 'ligado';
        } else {
            situacao = 'desligado';
        }
        console.log(`Meu carro é um ${this.marca} ${this.modelo} de ${this.ano}, ele é ${this.cor}. O carro está ${situacao}.`);
    }
}

let carro1 = new carro('Bugatti', 'La Voiture', 2023, 'preto');

carro1.info(); //Meu carro é um Bugatti La Voiture de 2023, ele é preto. O carro está desligado.
 
carro1.ligar();
carro1.info(); //Meu carro é um Bugatti La Voiture de 2023, ele é preto. O carro está ligado.
 
carro1.pintar('cinza');
carro1.info(); //Meu carro é um Bugatti La Voiture de 2023, ele é cinza. O carro está ligado.
