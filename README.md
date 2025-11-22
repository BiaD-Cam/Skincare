Gerador e Portal de Ativos de Skincare (Gemini AI)

Descrição do Projeto
O Gerador e Portal de Ativos de Skincare é um projeto full-stack leve que automatiza a criação e o gerenciamento de uma base de conhecimento detalhada sobre ativos de cosméticos, tornando a informação acessível através de uma interface web simples e funcional. O projeto é dividido em duas partes: um script de automação em Node.js que usa a Gemini API para gerar o conteúdo, e uma aplicação front-end estática (HTML, CSS e JavaScript puro) que consome e exibe esses dados em um portal de busca. A ideia principal é usar Inteligência Artificial para expandir dinamicamente a base de dados (ativos.json) com informações únicas e estruturadas, e depois permitir que os usuários busquem esses ativos de forma rápida e intuitiva.

Qualidades que Destacam o Projeto
O maior destaque deste projeto é sua abordagem moderna de Engenharia de Conteúdo através da Inteligência Artificial. Em vez de inserir dados manualmente, o sistema utiliza a Gemini API para gerar de forma autônoma 25 novas entradas de ativos por execução. Isso demonstra minha proficiência em integrar modelos de IA para tarefas de automação de dados, especialmente o uso do JSON Schema (Function Calling) para forçar o modelo a retornar dados no formato exato esperado (nome do ativo, benefícios, uso, tags, etc.). Além disso, o gerador é inteligente, pois lê a base de dados existente para garantir que os novos ativos sejam únicos e não repetidos. No lado do usuário, o front-end é construído com Vanilla JavaScript, garantindo altíssima performance e leveza ao carregar e filtrar a base de ativos sem a necessidade de frameworks pesados.

Como a Tecnologia é Utilizada
A tecnologia central é a Gemini API, que roda no script Node.js (gerador.js). O script primeiramente carrega o arquivo de dados local (ativos.json). Em seguida, ele envia este arquivo (a base de dados existente) como contexto para o modelo Gemini 1.5 Flash. O modelo é então instruído a criar 25 novos objetos no formato JSON rigoroso, garantindo que o conteúdo seja informativo e técnico. Após a geração, o script salva o novo conteúdo mesclado de volta no arquivo ativos.json. A parte Frontend (HTML, CSS, JavaScript) é totalmente desacoplada; o código JavaScript busca o ativos.json e usa lógica de programação pura para renderizar dinamicamente os cards de ativos na tela, implementando também a funcionalidade de busca e filtro em tempo real para o usuário.

Modo de Uso (Passo a Passo)
Preparação: Certifique-se de ter o Node.js instalado no seu ambiente. Instale as dependências do projeto rodando npm install.

Chave da API: Crie um arquivo chamado .env na raiz do projeto e insira sua chave da Gemini API nele, no formato: GEMINI_API_KEY="SUA_CHAVE_AQUI".

Geração de Dados: Para criar ou expandir a base de dados, execute o comando npm start. O script irá gerar 25 novos ativos e atualizar o arquivo ativos.json. Repita este passo sempre que quiser expandir sua base.

Visualização Web: Para ver o portal em ação, basta abrir o arquivo index.html em qualquer navegador. A página carregará automaticamente a base de dados gerada, e você pode usar o campo de busca para encontrar ativos específicos.
