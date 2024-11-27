const conteudos = [
    {
        titulo: "JavaScript",
        texto: "O curso que fiz abrange desde fundamentos até tópicos avançados, incluindo manipulação do DOM para criar páginas interativas, uso de estruturas condicionais e de repetição para resolver problemas lógicos, e trabalho com vetores e matrizes para organizar dados. Além disso, ensina como estilizar interfaces com CSS e Bootstrap, desenvolver APIs utilizando Node.js e Sequelize, e criar aplicativos modernos com o framework Vue.js, integrando back-end e front-end. Essas habilidades preparam você para construir soluções completas e dinâmicas no desenvolvimento web.",
        imagem: "imagens/js3.png"
    },
    {
        titulo: "SQL",
        texto:  "Aprendi SQL ao explorar os fundamentos de bancos de dados relacionais, começando com a criação e modelagem de tabelas, entendendo as relações entre elas e escrevendo consultas básicas. Com o tempo, avancei para comandos mais complexos, como junções, agregações e subconsultas, sempre aplicando os conceitos em projetos práticos. A prática constante, aliada ao uso de ferramentas como o MySQL Workbench, me ajudou a consolidar habilidades em manipulação de dados e na construção de consultas eficientes para atender a diferentes necessidades.",
        imagem: "imagens/I Will Do All Of Your Sql, Pl Sql,Tsql Queries For You.jpg"
    },
    {
        titulo: "Html/CSS",
        texto: "O estudo de HTML e CSS foi fundamental para entender como criar a estrutura e o estilo de páginas web. Aprendi a desenvolver layouts semânticos e acessíveis, utilizando elementos apropriados para organizar o conteúdo. Com CSS, explorei conceitos como design responsivo, trabalhando com Flexbox e Grid para criar interfaces adaptáveis a diferentes dispositivos. Além disso, aprofundei conhecimentos em tipografia, cores e animações, permitindo personalizar e dar vida às páginas. Essa base sólida foi essencial para desenvolver sites visualmente atraentes e funcionais.",
        imagem: "imagens/Book Suggestion_ HTML and CSS - Design and Build Websites.jpg"
    },
    {
        titulo: "PHP",
        texto: "O aprendizado de PHP foi essencial para compreender como construir páginas dinâmicas e interativas no back-end. Comecei entendendo como o PHP se integra ao HTML e como processa dados de formulários. Avancei para conceitos como manipulação de sessões, validação de entrada e conexão com bancos de dados para armazenar e recuperar informações de forma eficiente. Também explorei a criação de APIs e a implementação de sistemas de autenticação e autorização. PHP me mostrou como transformar ideias em soluções funcionais no lado do servidor, trazendo dinamismo e interatividade às aplicações web.",
        imagem: "imagens/Retro PHP Programming Icon by meatman.jpg"
    }

]

let indiceAtual = 0;

function inicializarConteudo(){

    const texto = document.querySelector(".textex")
    const titulo = document.querySelector(".troctitulo")
    const imagem = document.querySelector(".trocimg")

    titulo.textContent = conteudos[indiceAtual].titulo;
    texto.textContent = conteudos[indiceAtual].texto;
    imagem.src = conteudos[indiceAtual].imagem;
    imagem.alt = conteudos[indiceAtual].titulo;
}

function trocarConteudo() {
    indiceAtual = (indiceAtual + 1) % conteudos.length;

    inicializarConteudo();
}

  document.addEventListener("DOMContentLoaded", inicializarConteudo);