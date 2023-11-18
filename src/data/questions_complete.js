const data = [
    {
        category: "HTML",
        questions: [
            {
                question: "Qual tag cria um parágrafo?",
                options: ["<p>", "<h1>", "<text>", "<ul>"],
                answer: "<p>",
                tip: "É uma tag de uma letra apenas",
            },
            {
                question: "Qual atributo adiciona um link para a tag a?",
                options: ["alt", "href", "src", "link"],
                answer: "href",
                tip: "Hyperlink Reference",
            },
            {
                question: "As listas não ordenadas tem a tag de:",
                options: ["<ol>", "<ul>", "<li>", "<list>"],
                answer: "<ul>",
            },
            {
                question: "Qual atributo deixa o input obrigatório?",
                options: ["placeholder", "value", "required", "maxlength"],
                answer: "required",
            },
            {
                question: "A tag semântica indicada para rodapés é a:",
                options: ["div", "main", "section", "footer"],
                answer: "footer",
            },
        ],
    },
    {
        category: "CSS",
        questions: [
            {
                question: "Qual regra altera a cor de um elemento?",
                options: [
                    "color",
                    "background-color",
                    "font-size",
                    "transition",
                ],
                answer: "color",
                tip: "Cor em inglês",
            },
            {
                question: "Para aumentar a fonte de um elemento utilizamos:",
                options: ["font", "text-transform", "font-size", "hover"],
                answer: "font-size",
            },
            {
                question: "A posição que deixa um elemento fixo é a:",
                options: ["static", "absolute", "fixed", "relative"],
                answer: "fixed",
            },
        ],
    },
    {
        category: "JavaScript",
        questions: [
            {
                question: "O que é Vanilla JavaScript?",
                options: [
                    "JavaScript puro",
                    "Uma biblioteca JavaScript",
                    "Um framework JavaScript",
                    "Um compilador de JavaScript",
                ],
                answer: "JavaScript puro",
            },
            {
                question:
                    "Com qual instrução declaramos uma constante em JavaScript?",
                options: ["const", "let", "var", "define"],
                answer: "const",
            },
            {
                question:
                    "Qual dos tipos de dado a seguir não existe em JavaScript?",
                options: ["string", "number", "boolean", "float"],
                answer: "float",
            },
            {
                question: "Qual dos métodos a seguir seleciona um elemento?",
                options: ["querySelector", "parseInt", "sort", "reduce"],
                answer: "querySelector",
            },
            {
                question:
                    "Qual destas propriedades da a quantidade de elementos de um array?",
                options: ["qty", "length", "items", "index"],
                answer: "length",
            },
        ],
    },
    {
        category: "Brasil",
        questions: [
            {
                question: "Qual é a atual capital do Brasil?",
                options: [
                    "Rio de Janeiro",
                    "São Paulo",
                    "Brasília",
                    "Salvador",
                ],
                answer: "Brasília",
            },
            {
                question: "Qual é o maior rio do Brasil?",
                options: [
                    "Rio São Francisco",
                    "Rio Paraná",
                    "Rio Tocantins",
                    "Rio Amazonas",
                ],
                answer: "Rio Amazonas",
            },
            {
                question: "Qual é o maior estado do Brasil?",
                options: ["Pará", "Mato Grosso", "Minas Gerais", "Amazonas"],
                answer: "Amazonas",
            },
            {
                question: "Qual é a língua oficial do Brasil?",
                options: ["Espanhol", "Inglês", "Francês", "Português"],
                answer: "Português",
            },
            {
                question: "Em qual continente está localizado o Brasil?",
                options: [
                    "Ásia",
                    "Europa",
                    "América Central",
                    "América do Sul",
                ],
                answer: "América do Sul",
            },
            {
                question: "Qual é o estado brasileiro mais populoso?",
                options: ["São Paulo","Rio de Janeiro", "Minas Gerais", "Bahia"],
                answer: "São Paulo",
            },
            {
                question: "Qual é a capital do estado do Rio Grande do Sul?",
                options: ["Pelotas", "Caxias do Sul", "Santa Maria","Porto Alegre"],
                answer: "Porto Alegre",
            },
            {
                question: "Qual é o bioma que ocupa a maior parte do território brasileiro?",
                options: ["Cerrado","Mata Atlântica", "Amazônia", "Caatinga"],
                answer: "Mata Atlântica",
            },
            {
                question: "Qual é o dia da independência do Brasil?",
                options: ["15 de novembro", "22 de abril","7 de setembro", "12 de outubro"],
                answer: "7 de setembro",
            },
            {
                question: "Qual é o nome do maior arquipélago do Brasil?",
                options: ["Abrolhos", "Fernando de Noronha","Trindade e Martim Vaz", "Rocas Atoll"],
                answer: "Fernando de Noronha",
            },
            {
                question: "Qual é o nome da primeira capital do Brasil?",
                options: ["Salvador","São Paulo", "Rio de Janeiro", "Brasília"],
                answer: "Salvador",
            },
            {
                question: "Qual é o nome da maior montanha do Brasil?",
                options: ["Pico da Bandeira", "Pico Paraná", "Pico das Agulhas Negras","Pico da Neblina" ],
                answer: "Pico da Neblina",
            },
            {
                question: "Qual é o nome do primeiro idioma não europeu falado no Brasil?",
                options: ["Guarani", "Tupi", "Yanomami", "Xavante"],
                answer: "Tupi",
            },
        ],
    },
];

export default data;
