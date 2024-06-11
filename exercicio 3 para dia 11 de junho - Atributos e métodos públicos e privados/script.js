class Pessoa {
    #nome;
    #idade;
    #email;

    constructor(nome, idade, email) {
        this.setNome(nome);
        this.setIdade(idade);
        this.setEmail(email);
    }

    getNome() {
        return this.#nome;
    }

    setNome(nome) {
        for (let validar of nome) {
            if (!isNaN(validar)) {
                throw new Error("Nome não pode conter números.");
            }
        }
        this.#nome = nome;
    }

    getIdade() {
        return this.#idade;
    }

    setIdade(idade) {
        if (typeof idade !== 'number' || idade <= 0) {
            throw new Error("Idade deve ser um número positivo.");
        }
        this.#idade = idade;
    }

    getEmail() {
        return this.#email;
    }

    setEmail(email) {
        //expressão regular que valida se o e-mail é válido
        const validarEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!validarEmail.test(email)) {
            throw new Error("Email inválido!!!");
        }
        this.#email = email;
    }
}

// Testando a classe Pessoa
try {
    const pessoa = new Pessoa("Dani", 19, "dani@dominio.com");
    console.log(pessoa.getNome()); // Dani
    console.log(pessoa.getIdade()); // 19
    console.log(pessoa.getEmail()); // dani@dominio.com

    // Testando as validações
    pessoa.setNome("Dani456"); // A saída será erro: Nome não pode conter números.
} catch (error) {
    console.error(error.message);
}

try {
    const pessoa1 = new Pessoa("Maria", -5, "maria@dominio.com"); // A saída será erro: Idade deve ser um número positivo.
} catch (error) {
    console.error(error.message);
}

try {
    const pessoa2 = new Pessoa("Carlos", 30, "emailinvalido"); // A saída será erro: Email inválido!!!
} catch (error) {
    console.error(error.message);
}
