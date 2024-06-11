/*
Este é um sistema de gerenciamento de uma biblioteca que está utilizando conceitos de orientação a objetos e herança para gerenciar diferentes tipos de itens da biblioteca, trouxe 3 itens (livro, novela e DVD). A superclasse Biblioteca armazena informações comuns a todos os itens, enquanto as subclasses Livro, Revista, e DVD adicionam características e comportamentos específicos para cada tipo de item. Isso facilita a expansão futura, permitindo a adicionar novos tipos de itens com características específicas sem grandes alterações no código existente.

A Superclasse se chama Biblioteca e ela contém atributos e métodos comuns a todos os itens da biblioteca. Esses atributos são:

titulo: O título do item.
ano: O ano de publicação.
codigo: O código do item(utilizado na organização).

E métodos como:

emprestar(): Método para emprestar o item.
devolver(): Método para devolver o item.
info(): Método para exibir informações sobre o item.*/

class Biblioteca {
    #titulo;
    #ano;
    #codigo;

    constructor(titulo, ano, codigo) {
        this.#titulo = titulo;
        this.#ano = ano;
        this.#codigo = codigo;
    }

    emprestar() {
        console.log(`${this.#titulo} (código: ${this.#codigo}) foi emprestado.`);
    }

    devolver() {
        console.log(`${this.#titulo} (código: ${this.#codigo}) foi devolvido.`);
    }

    info() {
        console.log(`Título: ${this.#titulo}, Ano: ${this.#ano}, Código: ${this.#codigo}`);
    }


    getTitulo() {
        return this.#titulo;
    }

    getAno() {
        return this.#ano;
    }

    getCodigo() {
        return this.#codigo;
    }
}

/*
Em seguida, a subclasse Livro que estende a classe Biblioteca e adiciona atributos e métodos específicos para os livros, como:

autor: O autor do livro.
genero: O gênero do livro.
ler(): Método específico para simular que o livro está sendo lido.*/

class Livro extends Biblioteca {
    #autor;
    #genero;

    constructor(titulo, ano, codigo, autor, genero) {
        super(titulo, ano, codigo);
        this.#autor = autor;
        this.#genero = genero;
    }

    ler() {
        console.log(`Lendo ${this.getTitulo()} de ${this.#autor}.`);
    }

    info() {
        super.info();
        console.log(`Autor: ${this.#autor}, Gênero: ${this.#genero}`);
    }
}

/*A subclasse Revista estende a classe Biblioteca e adiciona atributos e métodos específicos para revistas:

edicao: A edição da revista.
lerArtigo(): Método específico para simular a leitura de um artigo da revista.*/


class Revista extends Biblioteca {
    #edicao;

    constructor(titulo, ano, codigo, edicao) {
        super(titulo, ano, codigo);
        this.#edicao = edicao;
    }

    lerArtigo() {
        console.log(`Lendo um artigo da edição ${this.#edicao} de ${this.getTitulo()}.`);
    }

    info() {
        super.info();
        console.log(`Edição: ${this.#edicao}`);
    }
}

/*
E por fim, a subclasse DVD estende a classe Biblioteca e adiciona atributos e métodos específicos para DVDs:

duracao: A duração do DVD em minutos.
assistir(): Método específico para simular assistir ao DVD.*/

class DVD extends Biblioteca {
    #duracao;

    constructor(titulo, ano, codigo, duracao) {
        super(titulo, ano, codigo);
        this.#duracao = duracao;
    }

    assistir() {
        console.log(`Assistindo ${this.getTitulo()} que dura ${this.#duracao} minutos.`);
    }

    info() {
        super.info();
        console.log(`Duração: ${this.#duracao} minutos`);
    }
}

//Ex: 

let livro1 = new Livro('O pequeno Príncipe', 1943, 'P183', 'Antoine de Saint-Exupéry', 'Fábula');
livro1.emprestar();
livro1.ler();
livro1.info();
livro1.devolver();

let revista1 = new Revista('Revista Veja', 2021, 'V457', 'Junho');
revista1.emprestar();
revista1.lerArtigo();
revista1.info();
revista1.devolver();

let dvd1 = new DVD('Harry Potter e a Ordem da Fênix', 2007, 'H653', 138);
dvd1.emprestar();
dvd1.assistir();
dvd1.info();
dvd1.devolver();

