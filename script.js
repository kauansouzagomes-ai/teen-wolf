const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

// --- INÍCIO: NOVAS PERGUNTAS DA HISTÓRIA TEEN WOLF ---
const perguntas = [
    {
        enunciado: "O ar fica denso e, de repente, Void Stiles aparece, com aquele olhar frio e a faixa preta. O que Scott faz primeiro?",
        alternativas: [
            {
                texto: "Tenta uma investida rápida para imobilizá-lo.",
                afirmacao: "Scott avança com velocidade, mas Void Stiles é mais ágil do que parece, desviando do ataque com um sorriso cínico. "
            },
            {
                texto: "Prepara-se para o ataque, observando seus movimentos.",
                afirmacao: "Scott assume uma postura defensiva, seus sentidos aguçados captam a energia sombria de Void Stiles. "
            }
        ]
    },
    {
        enunciado: "Void Stiles invoca um Oni para atacar Scott. O que Scott faz?",
        alternativas: [
            {
                texto: "Foca no Oni, tentando destruí-lo.",
                afirmacao: "Scott salta para a esquerda, evitando o golpe do Oni e revida com suas garras, quebrando parte da máscara. "
            },
            {
                texto: "Tenta passar pelo Oni para chegar em Void Stiles.",
                afirmacao: "Scott decide ignorar o Oni por um instante, buscando uma abertura para atacar diretamente Void Stiles, mas o Oni o intercepta. "
            }
        ]
    },
    {
        enunciado: "A batalha se intensifica. Void Stiles tenta te manipular psicologicamente. Você ouve as vozes de seus amigos duvidando de você. O que Scott faz?",
        alternativas: [
            {
                texto: "Resiste e foca na sua âncora, lembrando quem ele é.",
                afirmacao: "Scott cerra os dentes, a raiva o impulsiona, mas a imagem de seus amigos o centra. Ele lembra que luta por eles. "
            },
            {
                texto: "Deixa a dúvida o consumir por um segundo.",
                afirmacao: "Por um instante, Scott vacila, as vozes o atingem. Void Stiles aproveita a brecha para um ataque certeiro. "
            }
        ]
    },
    {
        enunciado: "Finalmente, você vê uma chance. Void Stiles está distraído. Como você o derrota?",
        alternativas: [
            {
                texto: "Usa a mordida de alfa para tentar reverter a possessão.",
                afirmacao: "Scott, com um rugido, usa a mordida de alfa. Uma luz intensa emana de Void Stiles, a possessão enfraquece e Stiles, finalmente, começa a emergir. "
            },
            {
                texto: "Trabalha com Lydia para usar um som que o enfraqueça.",
                afirmacao: "Scott sinaliza para Lydia, que solta um grito banshee ensurdecedor. Void Stiles se contorce de dor, a forma do Nogitsune começa a se desvanecer. "
            }
        ]
    },
    {
        enunciado: "A poeira baixa. Stiles está de volta, exausto, mas a salvo. O que acontece a seguir?",
        alternativas: [
            {
                texto: "Scott o ajuda a se levantar e garante que ele está bem.",
                afirmacao: "Scott se aproxima de Stiles, o ajudando a se erguer. O alívio é palpável, a matilha está reunida. "
            },
            {
                texto: "Olha para os amigos, sabendo que essa batalha os uniu ainda mais.",
                afirmacao: "Scott olha para o resto da matilha, um laço invisível os conecta. Juntos, eles superaram mais um desafio. "
            }
        ]
    }
];
// --- FIM: NOVAS PERGUNTAS DA HISTÓRIA TEEN WOLF ---


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " "; // Adiciona um espaço para separar as afirmações
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Fim da Batalha!"; // Mudei a mensagem final para algo mais temático
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
