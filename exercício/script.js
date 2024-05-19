function Product(nome, preco, descricao, imagem, disponivel, avaliacao, caracteristicas, tags, desconto) {
    //itens que compoem o card
    this.nome = nome;
    this.preco = preco;
    this.descricao = descricao;
    this.imagem = imagem;
    this.disponivel = disponivel;
    this.avaliacao = avaliacao;
    this.caracteristicas = caracteristicas;
    this.tags = tags;
    this.desconto = desconto;

}

// objeto Product
function createHtmlCard(Product) {
    
    const cardContainer = document.getElementById('card-container');
    const card = document.createElement('div');

    card.classList.add('card');
    const name = document.createElement('h2');

    name.textContent = Product.nome;
    const description = document.createElement('p');

    description.textContent = Product.descricao;
    const availability = document.createElement('p');

    availability.textContent = Product.disponivel ? 'Disponível' : 'Indisponível'; 

    const image = document.createElement('img');
    image.src = Product.imagem; 
    image.alt = Product.nome; 

    const tags = document.createElement('p');
    tags.textContent = `Tags: ${Product.tags.join(', ')}`;

    const characteristics = document.createElement('p');
    characteristics.textContent = `Características: ${Product.caracteristicas.join(', ')}`;

    const priceContainer = document.createElement('div'); 
    const price = document.createElement('p');

    price.textContent = `Preço: R$ ${Product.preco.toFixed(2)}`;
    price.classList.add('price'); 

    const desconto = document.createElement('span');
    desconto.textContent = 'Desconto 2%';
    desconto.classList.add('desconto'); 

    
    priceContainer.appendChild(price);
    priceContainer.appendChild(desconto);

    // Adicionando os itens ao card
    card.appendChild(name);
    card.appendChild(description);
    card.appendChild(availability);
    card.appendChild(image);
    card.appendChild(tags);
    card.appendChild(characteristics);
    card.appendChild(priceContainer);
    // Adicionando o card ao container principal
    cardContainer.appendChild(card);
}

// Função gerar cards
function generateCardList(cards) {
    cards.forEach(Product => {
        createHtmlCard(Product);
    });
}

// Atribuindo produtos
const produto1 = new Product("Xiaomi", 980.00, "Celular 8 Polegadas com ótimas câmeras.", "./imagens/celular1.jpg", true, 4.5, ["Tela de 8 polegadas", "Android 5.3", "Câmera principal de 48MP"], ["tecnologia", "celular", "xiaomi"]);

const produto2 = new Product("Tablet Samsung", 1299.00, "Um tablet leve e versátil para trabalho e entretenimento.", "./imagens/tablet.png", false, 4.0, ["Tela de 10 polegadas", "Armazenamento de 64GB", "Bateria de longa duração"], ["tecnologia", "tablet", "eletrônicos"]);

const produto3 = new Product("Fone de Ouvido", 299.00, "Fone de ouvido Bluetooth com som potente.", "./imagens/fone.png", true, 4.5, ["Conexão Bluetooth", "Bateria de longa duração", "Design confortável"], ["tecnologia", "fone de ouvido"]);

const produto4 = new Product("Apple iPhone", 1999.00, "O mais recente iPhone com design elegante.", "./imagens/iphone.png", false, 4.8, ["Tela de 6.1 polegadas", "Memória interna de 128GB", "Câmera principal de 12MP"], ["tecnologia", "smartphone", "Apple"]);

const produto5 = new Product("Xiaomi Redmi", 699.00, "Ótimo custo-benefício com bateria de longa duração.",
"./imagens/xiaomi.png", true, 4.6, ["Tela de 6.3 polegadas", "Memória interna de 64GB", "Câmera principal de 48MP"], ["tecnologia", "smartphone", "Xiaomi"]);

const produto6 = new Product("Samsung Galaxy", 1299.00, "Smartphone de alta qualidade com tela AMOLED.", "./imagens/samsung.png", true, 4.7, ["Tela de 6.5 polegadas", "Memória interna de 256GB", "Câmera principal de 64MP"], ["tecnologia", "smartphone", "Samsung"]);


// Array com os objetos de produto
const produtos = [produto1, produto2, produto3, produto4, produto5, produto6];

// Chamando a função gerar cards
generateCardList(produtos);

localStorage.setItem("itens", JSON.stringify(produtos)) //Salvar no LocalStorage

function toggleDarkMode() {
    document.body.classList.toggle('preto');
    // Salvando o estado atual do tema no localStorage
    localStorage.setItem('darkMode', document.body.classList.contains('preto'));
}

const darkModeToggle = document.getElementById('dark-mode-botao');
darkModeToggle.addEventListener('click', toggleDarkMode);

// Verificando e aplicando o tema salvo no localStorage quando recarrega a pag
document.addEventListener('DOMContentLoaded', () => {
    const darkMode = JSON.parse(localStorage.getItem('darkMode'));
    if (darkMode) {
        document.body.classList.add('preto');
    }
});
