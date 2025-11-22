let cardContainer = document.querySelector(".card-container");
let campoBusca = document.querySelector("header input");
let dados = []; // Armazena todos os ativos carregados do JSON

// Função principal que carrega os dados e inicia a renderização
async function iniciarBusca() {
    try {
        // 1. Busca e carrega o JSON (ativos.json)
        let resposta = await fetch("ativos.json");
        dados = await resposta.json();
        
        // 2. Renderiza todos os cards inicialmente
        renderizarCards(dados);
        
    } catch (error) {
        console.error("Erro ao carregar ou processar ativos.json:", error);
        cardContainer.innerHTML = "<p>Erro ao carregar os dados. Verifique o arquivo 'ativos.json'.</p>";
    }
}

// Função para gerar o HTML e exibir os cards na tela
function renderizarCards(dados) {
    cardContainer.innerHTML = ""; // Limpa os cards existentes antes de renderizar novos
    
    if (dados.length === 0) {
        cardContainer.innerHTML = "<p>Nenhum ativo encontrado com o termo de busca.</p>";
        return;
    }
    
    for (let dado of dados) {
        let article = document.createElement("article");
        article.classList.add("card");
        
        // Uso de Template Literals (`) para construir o HTML do card
        // Os campos 'tipo_produto' e 'tags_pele' foram adicionados/ajustados
        article.innerHTML = `
        <h2>${dado.nome_ativo}</h2>
        <p class="uso-tag"><strong>Uso Recomendado:</strong> ${dado.uso}</p>
        <p><strong>Tipo:</strong> ${dado.tipo_produto}</p>
        <p>${dado.beneficios}</p>
        <a href="${dado.link_estudo}" target="_blank">Saiba Mais (Estudo)</a>
        <p class="tags"><strong>Pele/Foco:</strong> ${dado.tags_pele.join(', ')}</p>
        `
        cardContainer.appendChild(article);
    }
}

// Função para filtrar os dados com base no campo de busca
function executarBusca() {
    // Pega o texto digitado, em letras minúsculas e sem espaços extras para facilitar a comparação
    const termoBusca = campoBusca.value.toLowerCase().trim();
    
    // Filtra o array 'dados' com a nova lógica
    const resultados = dados.filter(dado => {
        // Condição 1: O nome do ativo corresponde à busca?
        const nomeMatch = dado.nome_ativo.toLowerCase().includes(termoBusca);

        // Condição 2: Alguma das tags de pele corresponde à busca?
        // O método .some() verifica se pelo menos um item no array satisfaz a condição.
        const tagMatch = dado.tags_pele.some(tag => tag.toLowerCase().includes(termoBusca));

        // Retorna o ativo se a Condição 1 OU a Condição 2 for verdadeira.
        return nomeMatch || tagMatch;
    });
    
    // Renderiza os cards apenas com os resultados do filtro
    renderizarCards(resultados);
}

// Adiciona um evento para o botão "Buscar" que chama a função de busca
document.getElementById('botao-busca').addEventListener('click', executarBusca);

// Adiciona um evento para o campo de busca que permite buscar ao pressionar 'Enter'
campoBusca.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        executarBusca();
    }
});

// Chama a função para carregar os dados quando a página for carregada
iniciarBusca();