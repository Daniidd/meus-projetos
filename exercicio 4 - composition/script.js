class Bateria {
    #capacidade;
    #tipo;

    constructor(capacidade, tipo) {
        this.#capacidade = capacidade; // em mAh
        this.#tipo = tipo;
    }

    detalhes() {
        return `Bateria de ${this.#capacidade} mAh, tipo ${this.#tipo}.`;
    }
}

class Tela {
    #tamanho;
    #tipoDisplay;
    #resolucaoDisplay;

    constructor(tamanho, tipoDisplay, resolucaoDisplay) {
        this.#tamanho = tamanho; // em polegadas
        this.#tipoDisplay = tipoDisplay;
        this.#resolucaoDisplay = resolucaoDisplay;
    }

    detalhes() {
        return `Tela de ${this.#tamanho} polegadas, com display ${this.#tipoDisplay} e resolução de ${this.#resolucaoDisplay}.`;
    }
}

class Camera {
    #resolucao;
    #lenteTipo;

    constructor(resolucao, lenteTipo) {
        this.#resolucao = resolucao; // em megapixels
        this.#lenteTipo = lenteTipo;
    }

    detalhes() {
        return `Câmera de ${this.#resolucao} MP, lente ${this.#lenteTipo}.`;
    }
}

class Processador {
    #marca;
    #nucleos;
    #velocidade;

    constructor(marca, nucleos, velocidade) {
        this.#marca = marca;
        this.#nucleos = nucleos; // quantidade de núcleos
        this.#velocidade = velocidade; // em GHz
    }

    detalhes() {
        return `Processador ${this.#marca} com ${this.#nucleos} núcleos a ${this.#velocidade} GHz.`;
    }
}

class Celular {
    #marca;
    #modelo;
    #bateria;
    #tela;
    #camera;
    #processador;

    constructor(marca, modelo) {
        this.#marca = marca;
        this.#modelo = modelo;
        this.#bateria = new Bateria(4441, 'Lítio');
        this.#tela = new Tela(6.7, 'OLED', '2796 x 1290');
        this.#camera = new Camera(48, 'Grande Angular');
        this.#processador = new Processador('A17 Pro', 6, 3.46);
    }

    detalhes() {
        return `Celular ${this.#marca} ${this.#modelo}:<br>` +
            `${this.#bateria.detalhes()}<br>` +
            `${this.#tela.detalhes()}<br>` +
            `${this.#camera.detalhes()}<br>` +
            `${this.#processador.detalhes()}`;
    }
}

// Criando um cel
const celular1 = new Celular('Iphone', '15 Pro Max');

// Exibindo detalhes do cel na pág
document.getElementById('detalhes-celular').innerHTML = celular1.detalhes();
