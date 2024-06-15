   class Bateria {
            constructor(capacidade, tipoDaBateria) {
                this.capacidade = capacidade; // em miliampere-hora
                this.tipoDaBateria = tipoDaBateria;
            }

            detalhes() {
                return `Bateria de ${this.capacidade} mAh, tipo ${this.tipoDaBateria}.`;
            }
        }

        class Display {
            constructor(tipoDaTela, resolucao) {
                this.tipoDaTela = tipoDaTela;
                this.resolucao = resolucao;
            }

            detalhes() {
                return `Display ${this.tipoDaTela} com resolução de ${this.resolucao}.`;
            }
        }

        class Tela {
            constructor(tamanho, display) {
                this.tamanho = tamanho; // em polegadas
                this.display = display;
            }

            detalhes() {
                return `Tela de ${this.tamanho} polegadas.<br>` +
                       `${this.display.detalhes()}`;
            }
        }

        class Camera {
            constructor(resolucao, lenteTipo) {
                this.resolucao = resolucao; // em megapixels
                this.lenteTipo = lenteTipo;
            }

            detalhes() {
                return `Câmera de ${this.resolucao} MP, lente ${this.lenteTipo}.`;
            }
        }

        class Processador {
            constructor(marca, nucleos, velocidade) {
                this.marca = marca;
                this.nucleos = nucleos; // quantidade de núcleos
                this.velocidade = velocidade; // em GigaHertz
            }

            detalhes() {
                return `Processador ${this.marca} com ${this.nucleos} núcleos a ${this.velocidade} GHz.`;
            }
        }

        class Celular {
            constructor(marca, modelo) {
                this.marca = marca;
                this.modelo = modelo;
                this.bateria = new Bateria(4441, 'Lítio');
                this.tela = new Tela(6.7, new Display('OLED', '2796 x 1290'));
                this.camera = new Camera(48, 'Grande Angular');
                this.processador = new Processador('A17 Pro', 6, 3.46);
            }

            detalhes() {
                return `Celular ${this.marca} ${this.modelo}:<br>` +
                       `${this.bateria.detalhes()}<br>` +
                       `${this.tela.detalhes()}<br>` +
                       `${this.camera.detalhes()}<br>` +
                       `${this.processador.detalhes()}`;
            }
        }

        // Criando um cel
        const celular1 = new Celular('Iphone', '15 Pro Max');

        // Exibindo detalhes do cel na pág
        document.getElementById('detalhes-celular').innerHTML = celular1.detalhes();
    


