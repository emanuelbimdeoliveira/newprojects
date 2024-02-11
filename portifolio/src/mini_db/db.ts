// to change description of skills
export const descriptionArray = [
  {
    title: "HTML",
    description:
      "HTML (Linguagem de Marcação de HiperTexto) ou (HiperText Markup Language) é o bloco de construção mais básico da web. Define o significado e a estrutura do conteúdo da web.",
  },
  {
    title: "CSS",
    description:
      "O CSS é uma linguagem de folhas de estilos (Cascading Style Sheets). Isso significa que o CSS permite aplicar estilos seletivamente a elementos em documentos HTML.",
  },
  {
    title: "JavaScript",
    description:
      "JavaScript é uma linguagem de script orientada a objetos e plataforma cruzada usada para tornar as páginas da Web interativas (por exemplo, com animações complexas, botões clicáveis, menus pop-up, etc).",
  },
  {
    title: "BootStrap",
    description:
      "Bootstrap é um framework front-end que fornece estruturas de CSS para a criação de sites e aplicações responsivas de forma rápida e simples. Além disso, pode lidar com sites de desktop e páginas de dispositivos móveis da mesma forma.",
  },
  {
    title: "Git",
    description:
      "O Git é um sistema de controle de versão distribuído, o que significa que um clone local do projeto é um repositório de controle de versão completo. Esses repositórios locais totalmente funcionais facilitam o trabalho offline ou remoto. Os desenvolvedores confirmam o trabalho localmente e depois sincronizam a cópia do repositório com a cópia no servidor.",
  },
  {
    title: "React",
    description:
      "React JS é uma biblioteca JavaScript para a criação de interfaces de usuário — ou UI (user interface). O React busca facilitar a conexão entre diferentes partes de uma página.",
  },
  {
    title: "NPM",
    description:
      "O npm é o Gerenciador de Pacotes do Node (Node Package Manager) que vem junto com ele e que é muito útil no desenvolvimento Node. Por anos, o Node tem sido amplamente usado por desenvolvedores JavaScript para compartilhar ferramentas, instalar vários módulos e gerenciar suas dependências.",
  },
  {
    title: "PowerShell",
    description:
      "O PowerShell é uma solução de automação de tarefas multiplataforma que consiste em um shell de linha de comando, em uma linguagem de script e uma estrutura de gerenciamento de configuração.",
  },
  {
    title: "TypeScript",
    description:
      "Mais conhecido como um superset do Javascript, ou seja, um conjunto de ferramentas, o TypeScript foi criado com o objetivo de incluir recursos que não estão presentes no JS. Por meio dele é possível definir a tipagem estática, parâmetros e retorno de funções.",
  },
  {
    title: "Descrição",
    description:
      "Posicione o Mouse sobre cada habilidade para mais informações!",
  },
];


// to change theme
export const propertiesArray = [
  "--background-color",
  "--font-color",
  "--main-background",
  "--skills-background",
  "--font-contrast-color",
  "--shadow",
];

export const darkTheme = [
  "var(--gray-background)",
  "var(--orange-1)",
  "#181818",
  "var(--white)",
  "var(--orange-1)",
  "5px 5px 10px black",
];

export const lightTheme = [
  "var(--orange-background)",
  "var(--white)",
  "#fffa",
  "var(--orange-background)",
  "var(--gray-1)",
  "5px 5px 10px #0005",
];


// to load the projects
export const arrayOfProjects = [
  {
    stack: "react",
    imgSrc: "./to-do-list.png",
    imgAlt: "to do list",
    linkTo: "https://lista-de-tarefas-55ecc.web.app/",
    title: "Lista de Tarefas",
    description: "Desenvolvido usando React, pode adicionar, remover e editar tarefas, que são armazenadas localmente no computador do usuário", 
    linkGitHub:
      "https://github.com/emanuelbimdeoliveira/newprojects/tree/main/ToDoList/folder",
  },
  {
    stack: "react",
    imgSrc: "./conhecendo-os-planetas.png",
    imgAlt: "conhecendo os planetas",
    linkTo: "https://conhecendo-os-planetas.web.app/",
    title: "Conhecendo os Planetas",
    description: "Usa a Planets API para buscar dados sobre milhares de planetas de acordo com a escolha do usuário", 
    linkGitHub:
      "https://github.com/emanuelbimdeoliveira/newprojects/tree/main/PlanetsApiProject/planetsfeatures",
  },
  {
    stack: "java-script",
    imgSrc: "./snake-game.png",
    imgAlt: "Snake Game",
    linkTo:
      "http://emanuelbimdeoliveira.github.io/html-css-javascript/snakegame",
    title: "Snake Game",
    description: 'O clássico "jogo da cobrinha" desenvolvido somente usando JavaScript', 
    linkGitHub:
      "https://github.com/emanuelbimdeoliveira/html-css-javascript/tree/main/snakegame",
  },
  {
    stack: "react, typescript, firebase",
    imgSrc: "./login.png",
    imgAlt: "Login com Firebase",
    linkTo:
      "https://logincomfirebase-2e72c.web.app/",
    title: "Login com Firebase",
    description: "Formulário para Login com o Google, GitHub, e com e-mail e senha, usando o Firebase Authentication", 
    linkGitHub:
      "https://github.com/emanuelbimdeoliveira/newprojects/tree/main/LoginFirebase",
  },
  {
    stack: "react, firebase",
    imgSrc: "./mini-blog.png",
    imgAlt: "mini-blog",
    linkTo:
      "https://reactp10.vercel.app/",
    title: "Mini Blog",
    description: "Projeto usando o firebase para a autenticação do usuário e para o armazenamento dos dados de cada postagem no banco de dados do Firebase", 
    linkGitHub:
      "https://github.com/emanuelbimdeoliveira/reactstudy/blob/main/react/reactjs/reactp10/src/App.jsx",
  },
  {
    stack: "html, css, java-script",
    imgSrc: "./relogio-analogico.png",
    imgAlt: "Relogio Analógico",
    linkTo:
      "https://emanuelbimdeoliveira.github.io/html-css-javascript/relogioanalogico/",
    title: "Relogio Analógico",
    description: "Feito com JavaScript para o ajuste a cada segundo dos ponteiros com toda a precisão", 
    linkGitHub:
      "https://github.com/emanuelbimdeoliveira/html-css-javascript/tree/main/relogioanalogico",
  },

];
