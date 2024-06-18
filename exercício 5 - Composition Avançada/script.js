const NotificationType = {
    Success: "Success",
    Warning: "Warning"
};

class Sistema {
    #nome;
    #usuarios;

    constructor(nome) {
        this.#nome = nome;
        this.#usuarios = [];
    }

    adicionarUsuario(usuario) {
        this.#usuarios.push(usuario);
    }

    listarUsuarios() {
        this.#usuarios.forEach(usuario => usuario.imprimirInformacoes());
    }

    removerUsuariosInativos() {
        const agora = new Date();
        this.#usuarios = this.#usuarios.filter(usuario => {
            const ultimaAtividade = usuario.getUltimaAtividade();
            const diferencaEmSegundos = (agora - ultimaAtividade) / 1000;
            if (diferencaEmSegundos > 60) {
                console.log(`${usuario.getNome()} foi deslogado(a) pois ficou inativo(a) por mais de 1 minuto`);
                return false;
            }
            return true;
        });
    }

    notificarTodosUsuarios(mensagem, tipoMensagem) {
        this.#usuarios.forEach(usuario => {
            usuario.getNotificacoes().adicionarNotificacao(new Notificacao(mensagem, tipoMensagem, this.#nome));
        });
    }

    mostrarNotificacoesUsuarios() {
        this.#usuarios.forEach(usuario => {
            console.log(`Notificações de ${usuario.getNome()}:`);
            usuario.getNotificacoes().mostrarNotificacoes();
        });
    }
}

class Usuario {
    #id;
    #nome;
    #email;
    #cpf;
    #login;
    #senha;
    #notificacoes;
    #ultimaAtividade;

    constructor(nome, email, cpf, login, senha) {
        this.#id = Math.random().toString(36).substring(7); // Gerar um ID aleatório e único para o usuário
        this.#nome = nome;
        this.#email = email;
        this.#cpf = cpf;
        this.#login = login;
        this.#senha = senha;
        this.#notificacoes = new Notificacoes();
        this.atualizarUltimaAtividade();
    }

    atualizarUltimaAtividade() {
        this.#ultimaAtividade = new Date();
    }

    getUltimaAtividade() {
        return this.#ultimaAtividade;
    }

    getNome() {
        return this.#nome;
    }

    getNotificacoes() {
        return this.#notificacoes;
    }

    getId() {
        return this.#id;
    }

    getLogin() {
        return this.#login;
    }

    getSenha() {
        return this.#senha;
    }

    imprimirInformacoes() {
        console.log(`Nome: ${this.#nome}, Email: ${this.#email}, CPF: ${this.#cpf}`);
    }

    imprimirCredenciais() {
        console.log(`Login: ${this.#login}, Senha: ${this.#senha}`);
    }
}

class Notificacoes {
    #notificacoes;

    constructor() {
        this.#notificacoes = [];
    }

    adicionarNotificacao(notificacao) {
        this.#notificacoes.push(notificacao);
    }

    mostrarNotificacoes() {
        this.#notificacoes.forEach(notificacao => notificacao.imprimir());
    }
}

class Notificacao {
    #mensagem;
    #tipoMensagem;
    #foiLida;
    #notificadaEm;
    #notificadaPor;

    constructor(mensagem, tipoMensagem, notificadaPor) {
        this.#mensagem = mensagem;
        this.#tipoMensagem = tipoMensagem;
        this.#foiLida = false;
        this.#notificadaEm = new Date();
        this.#notificadaPor = notificadaPor;
    }

    marcarComoLida() {
        this.#foiLida = true;
    }

    foiLida() {
        return this.#foiLida;
    }

    imprimir() {
        console.log(`${this.#tipoMensagem}: ${this.#mensagem} (Enviado por: ${this.#notificadaPor} em ${this.#notificadaEm.toLocaleString('pt-BR', {
            day: '2-digit', //formata o dia com dois dígitos ex: 01, 02...
            month: '2-digit', //formata o mês com dois dígitos
            year: 'numeric', //formata o ano com quatro dígitos ex: 2024
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        })})`);
    }
}

// Pessoas:

const sistema = new Sistema("Sistema de Notificações");

const usuario1 = new Usuario("José", "jose@example.com", "123.456.789-00", "jose_login", "senha123");
const usuario2 = new Usuario("Berenice", "berenice@example.com", "987.654.321-00", "berenice_login", "senha456");

sistema.adicionarUsuario(usuario1);
sistema.adicionarUsuario(usuario2);

// lista de usuários inicialmente
console.log("Usuários logados:");
sistema.listarUsuarios();

// notifica os usuários
sistema.notificarTodosUsuarios("Bem-vindo ao sistema!", NotificationType.Success);

// mostra notificações dos usuários
sistema.mostrarNotificacoesUsuarios();

// atualiza atividade de Berenice após 20 segundos
setTimeout(() => {
    usuario2.atualizarUltimaAtividade();
    console.log("Atividade de Berenice atualizada.");
}, 20000); //20s em milissegundos

// remove usuários inativos após 65 segundos(José) e lista usuários restantes
setTimeout(() => {
    sistema.removerUsuariosInativos();
    console.log("Usuários após remoção de inativos:");
    sistema.listarUsuarios();
}, 65000); //65s em milissengundos

// Imprime login e senha testeee
/* console.log("Credenciais dos usuários:");
   console.log("Credenciais de José:");
   usuario1.imprimirCredenciais();
   console.log("Credenciais de Berenice:");
   usuario2.imprimirCredenciais();*/
