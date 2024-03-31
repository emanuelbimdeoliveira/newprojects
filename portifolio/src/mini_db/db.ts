// to change description of skills
export const descriptionArray = [
  {
    title: "HTML",
    description:
      "HTML (Linguagem de Marcação de HiperTexto) ou (HiperText Markup Language) é o bloco de construção mais básico da web. Define o significado e a estrutura do conteúdo da web.",
    iconCode: "fa-brands fa-html5",
  },
  {
    title: "CSS",
    description:
      "O CSS é uma linguagem de folhas de estilos (Cascading Style Sheets). Isso significa que o CSS permite aplicar estilos seletivamente a elementos em documentos HTML.",
    iconCode: "fa-brands fa-css3-alt",
  },
  {
    title: "JavaScript",
    description:
      "JavaScript é uma linguagem de script orientada a objetos e plataforma cruzada usada para tornar as páginas da Web interativas (por exemplo, com animações complexas, botões clicáveis, menus pop-up, etc).",
    iconCode: "fa-brands fa-js",
  },
  {
    title: "BootStrap",
    description:
      "Bootstrap é um framework front-end que fornece estruturas de CSS para a criação de sites e aplicações responsivas de forma rápida e simples. Além disso, pode lidar com sites de desktop e páginas de dispositivos móveis da mesma forma.",
    iconCode: "fa-brands fa-bootstrap",
  },
  {
    title: "Git",
    description:
      "O Git é um sistema de controle de versão distribuído, o que significa que um clone local do projeto é um repositório de controle de versão completo. Esses repositórios locais totalmente funcionais facilitam o trabalho offline ou remoto.",
    iconCode: "fa-brands fa-git",
  },
  {
    title: "React",
    description:
      "React JS é uma biblioteca JavaScript para a criação de interfaces de usuário — ou UI (user interface). O React busca facilitar a conexão entre diferentes partes de uma página.",
    iconCode: "fa-brands fa-react",
  },
  {
    title: "NPM",
    description:
      "O npm é o Gerenciador de Pacotes do Node (Node Package Manager) que vem junto com ele e que é muito útil no desenvolvimento Node. Por anos, o Node tem sido amplamente usado por desenvolvedores JavaScript para compartilhar ferramentas, instalar vários módulos e gerenciar suas dependências.",
    iconCode: "fa-brands fa-npm",
  },
  {
    title: "PowerShell",
    description:
      "O PowerShell é uma solução de automação de tarefas multiplataforma que consiste em um shell de linha de comando, em uma linguagem de script e uma estrutura de gerenciamento de configuração.",
    iconCode: "fa-solid fa-terminal",
  },
  {
    title: "TypeScript",
    description:
      "Mais conhecido como um superset do Javascript, ou seja, um conjunto de ferramentas, o TypeScript foi criado com o objetivo de incluir recursos que não estão presentes no JS. Por meio dele é possível definir a tipagem estática, parâmetros e retorno de funções.",
    iconCode: "",
    img: "https://github.com/emanuelbimdeoliveira/newprojects/blob/main/portfolioIMG/typeScript-icon.png?raw=true",
  },
  {
    title: "WordPress",
    description:
      "O WordPress é uma plataforma de gerenciamento de conteúdo amplamente utilizada por blogueiros, empresas e desenvolvedores web. Com uma interface intuitiva e uma ampla variedade de temas e plugins disponíveis.",
    iconCode: "fa-brands fa-wordpress",
  },
  {
    title: "Elementor",
    description:
      "O Elementor é um construtor de páginas visual para WordPress, projetado para simplificar o processo de design e personalização de sites. Com uma interface de arrastar e soltar intuitiva ele permite que você crie layouts complexos sem a necessidade de codificação.",
    iconCode: "fa-brands fa-elementor",
  },
  {
    title: "Firebase",
    description:
      "O Firebase é uma plataforma de desenvolvimento de aplicativos móveis e web fornecida pelo Google. Com uma variedade de ferramentas e serviços integrados, o Firebase simplifica o processo de criação, teste e lançamento de aplicativos de alta qualidade.",
    iconCode: "",
    img: "./icon-firebase.png",
  },
  {
    title: "Descrição",
    description:
      "Posicione o Mouse ou clique sobre cada habilidade para mais informações!",
    iconCode: "fa-brands",
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
  "--font-color-footer-bellow",
  "--button-background",
  "--button-color",
];

export const themes = {
  darkTheme: [
    "var(--gray-background)",
    "var(--orange-1)",
    "#181818e8",
    "var(--white)",
    "var(--orange-1)",
    "5px 5px 10px black",
    "var(--orange-1)",
    "var(--white)",
    "var(--gray-1)",
  ],

  lightTheme: [
    "var(--orange-background)",
    "var(--white)",
    "#ddda",
    "var(--orange-background)",
    "var(--gray-1)",
    "5px 5px 10px #0005",
    "var(--white)",
    "linear-gradient(180deg, #00FA00, #0f9f0f)",
    "var(--gray-1)",
  ],

  blueTheme: [
    "linear-gradient(180deg, #40DBD1, #0f8f8f)",
    "#0F3D3D",
    "#ddda",
    "linear-gradient(180deg, #40DBD1, #0f8f8f)",
    "#0F3D3D",
    "5px 5px 10px #0005",
    "var(--white)",
    "linear-gradient(180deg, #40DBD1, #0f8f8f)",
    "#0F3D3D",
  ],

  greenTheme: [
    "linear-gradient(180deg, #00FA00, #0f9f0f)",
    "#355035",
    "#ddda",
    "linear-gradient(180deg, #00FA00, #0f9f0f)",
    "#355035",
    "5px 5px 10px #0005",
    "var(--white)",
    "linear-gradient(180deg, #00FA00, #0f9f0f)",
    "#355035",
  ],

  yellowTheme: [
    "linear-gradient(180deg, #0000EE, #0f0f7f)",
    "yellow",
    "#ff0c",
    "linear-gradient(180deg, #0000EE, #0f0f7f)",
    "blue",
    "5px 5px 10px #0005",
    "var(--white)",
    "linear-gradient(180deg, #0000EE, #0f0f7f)",
    "yellow",
  ],

  redTheme: [
    "linear-gradient(180deg, #ff0000, #800000)",
    "#1A0303",
    "#ddda",
    "linear-gradient(180deg, #ff0000, #800000)",
    "#1A0303",
    "5px 5px 10px #0005",
    "var(--white)",
    "linear-gradient(180deg, #ff0000, #800000)",
    "#1A0303",
  ],

  purpleTheme: [
    "linear-gradient(180deg, #a08, #880044)",
    "#ffff0e",
    "#ff0c",
    "linear-gradient(180deg, #a08, #880044)",
    "#880044",
    "5px 5px 10px #0005",
    "var(--white)",
    "linear-gradient(180deg, #a08, #880044)",
    "#ffff0e",
  ],
};
