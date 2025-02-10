    // ========== CÓDIGO DO MENU ==========
    const menuIcon = document.getElementById("menuIcon");
    const menu = document.getElementById("menu");

    // Abrir/Fechar menu
    menuIcon.addEventListener("click", function(e) {
        e.stopPropagation();
        menu.classList.toggle("active");
        menuIcon.classList.toggle("active");
    });

    // Fechar menu ao clicar fora
    document.addEventListener("click", function(e) {
        if (!menu.contains(e.target) && !menuIcon.contains(e.target)) {
            menu.classList.remove("active");
            menuIcon.classList.remove("active");
        }
    });

    // Animar itens do menu
    document.querySelectorAll(".menu-item").forEach(item => {
        item.addEventListener("mouseenter", function() {
            this.style.transform = "translateY(-3px)";
        });
        
        item.addEventListener("mouseleave", function() {
            this.style.transform = "translateY(0)";
        });
    });

const quizData = [
    {
        question: "Qual desses elementos melhor te representa?",
        answers: [
            { text: "Fogo - Energia e paixão", traits: ["leao", "aguia"] },
            { text: "Terra - Estabilidade e praticidade", traits: ["touro", "tartaruga"] },
            { text: "Ar - Liberdade e intelecto", traits: ["coruja", "borboleta"] },
            { text: "Água - Adaptabilidade e emoção", traits: ["golfinho", "lontra"] }
        ]
    },
    {
        question: "Como você lida com desafios?",
        answers: [
            { text: "Confronto direto", traits: ["leao", "rinoceronte"] },
            { text: "Estratégia e planejamento", traits: ["lobo", "coruja"] },
            { text: "Adaptação criativa", traits: ["raposa", "polvo"] },
            { text: "Busca de ajuda coletiva", traits: ["formiga", "elefante"] }
        ]
    },
    {
        question: "Qual é seu ambiente ideal para recarregar energias?",
        answers: [
            { text: "Montanhas elevadas", traits: ["aguia", "cabramontesa"] },
            { text: "Florestas densas", traits: ["veado", "coruja"] },
            { text: "Oceano aberto", traits: ["baleia", "golfinho"] },
            { text: "Planícies ensolaradas", traits: ["leao", "guepardo"] }
        ]
    },
    {
        question: "Como você toma decisões importantes?",
        answers: [
            { text: "Intuição imediata", traits: ["lobo", "guepardo"] },
            { text: "Análise racional", traits: ["coruja", "formiga"] },
            { text: "Conselho da comunidade", traits: ["elefante", "abelha"] },
            { text: "Experiência passada", traits: ["tartaruga", "arara"] }
        ]
    },
    {
        question: "Qual sua maior virtude?",
        answers: [
            { text: "Coragem", traits: ["leao", "tigre"] },
            { text: "Sabedoria", traits: ["coruja", "elefante"] },
            { text: "Adaptabilidade", traits: ["camaleao", "polvo"] },
            { text: "Empatia", traits: ["golfinho", "cachorro"] }
        ]
    }
];

const animalDescriptions = {
    leao: {
        name: "🦁 Leão",
        symbol: "🔥",
        traits: ["Liderança", "Coragem", "Nobreza"],
        description: "O Leão representa a força interior e a autoridade natural. Seus portadores são líderes natos, dotados de uma coragem que inspira outros. Características marcantes:",
        strengths: [
            "Capacidade de comandar e proteger",
            "Determinação inabalável",
            "Presença magnética"
        ],
        weaknesses: [
            "Tendência à arrogância",
            "Dificuldade em delegar tarefas",
            "Impulsividade em confrontos"
        ],
        element: "Fogo",
        guidance: "Aprenda a ouvir mais e confiar na sabedoria coletiva. Sua força deve ser usada para empoderar, não para dominar."
    },
    coruja: {
        name: "🦉 Coruja",
        symbol: "📚",
        traits: ["Sabedoria", "Intuição", "Percepção"],
        description: "A Coruja simboliza o conhecimento profundo e a visão além das aparências. Seus portadores possuem:",
        strengths: [
            "Inteligência estratégica",
            "Capacidade de ver padrões ocultos",
            "Paciência para observar antes de agir"
        ],
        weaknesses: [
            "Tendência ao isolamento",
            "Excesso de análise paralisa ações",
            "Dificuldade em lidar com emoções"
        ],
        element: "Ar",
        guidance: "Equilibre razão e emoção. Seu conhecimento deve ser compartilhado para iluminar outros."
    },
    lobo: {
        name: "🐺 Lobo",
        symbol: "🌕",
        traits: ["Lealdade", "Intuição", "Resiliência"],
        description: "O Lobo representa a força do coletivo e a sabedoria instintiva. Características principais:",
        strengths: [
            "Excelente trabalho em equipe",
            "Senso aguçado de perigo",
            "Adaptabilidade a mudanças"
        ],
        weaknesses: [
            "Desconfiança excessiva",
            "Dificuldade em agir sozinho",
            "Apego ao passado"
        ],
        element: "Terra",
        guidance: "Confie mais em sua individualidade. Sua matilha interior é sua maior força."
    },
    golfinho: {
        name: "🐬 Golfinho",
        symbol: "🌊",
        traits: ["Alegria", "Sociabilidade", "Inteligência"],
        description: "O Golfinho representa a harmonia e a comunicação. Seus portadores destacam-se por:",
        strengths: [
            "Habilidade de resolver conflitos",
            "Inteligência emocional elevada",
            "Capacidade de inspirar alegria"
        ],
        weaknesses: [
            "Evitação de confrontos",
            "Dificuldade em ser sério",
            "Tendência à dispersão"
        ],
        element: "Água",
        guidance: "Aprenda a mergulhar em profundidade. Sua leveza é preciosa, mas não evite as águas turbulentas."
    },
    elefante: {
        name: "🐘 Elefante",
        symbol: "🌳",
        traits: ["Memória", "Sabedoria", "Proteção"],
        description: "O Elefante simboliza a memória ancestral e a força gentil. Características marcantes:",
        strengths: [
            "Grande capacidade de aprendizado",
            "Força física e emocional",
            "Senso de comunidade"
        ],
        weaknesses: [
            "Apego a tradições",
            "Dificuldade em esquecer mágoas",
            "Resistência a mudanças"
        ],
        element: "Terra",
        guidance: "Use suas raízes como base, não como prisão. Sua herança é alicerce para o novo."
    },
    polvo: {
        name: "🐙 Polvo",
        symbol: "🎭",
        traits: ["Adaptabilidade", "Criatividade", "Mistério"],
        description: "O Polvo representa a transformação e a inteligência prática. Seus portadores possuem:",
        strengths: [
            "Habilidade de se reinventar",
            "Pensamento lateral desenvolvido",
            "Versatilidade em qualquer ambiente"
        ],
        weaknesses: [
            "Dificuldade em manter foco",
            "Tendência ao isolamento",
            "Problemas com compromissos"
        ],
        element: "Água",
        guidance: "Encontre um núcleo estável em sua mutabilidade. Sua adaptação é poder, mas precisa de direção."
    }
};

// Variáveis de controle
let animalScores = {};
let currentQuestion = 0;
let traits = {};

// Exibir a pergunta atual
function showQuestion() {
    const question = quizData[currentQuestion];
    document.getElementById('questionText').textContent = question.question;

    const answersContainer = document.getElementById('answersContainer');
    answersContainer.innerHTML = '';

    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.className = 'answer-btn';
        button.textContent = answer.text;
        button.onclick = () => selectAnswer(answer.traits);
        answersContainer.appendChild(button);
    });

    updateProgress();
}

// Lógica de seleção de resposta
function selectAnswer(traitsArray) {
    traitsArray.forEach(trait => {
        traits[trait] = (traits[trait] || 0) + 1;
    });

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        showQuestion();
    } else {
        showResult();
    }
}

// Atualizar barra de progresso
function updateProgress() {
    const width = ((currentQuestion + 1) / quizData.length) * 100;
    document.querySelector('#progress').style.width = `${width}%`;
}

// Exibir resultado final
function showResult() {
    if (Object.keys(traits).length === 0) {
        alert("Nenhuma resposta foi registrada.");
        return;
    }

    const maxTrait = Object.entries(traits).reduce((a, b) => (a[1] > b[1] ? a : b))[0];
    const result = animalDescriptions[maxTrait];

    document.getElementById('quizContainer').classList.add('hidden');
    document.getElementById('resultContainer').classList.remove('hidden');

    document.getElementById('animalName').textContent = result.name;
    document.getElementById('animalDescription').textContent = result.description;
    document.getElementById('animalElement').textContent = result.element;
    document.getElementById('animalGuidance').textContent = result.guidance;

        // Preencher características
        const traitsContainer = document.getElementById('animalTraits');
        traitsContainer.innerHTML = result.traits.map(t => `
            <span class="trait-badge">${t}</span>
        `).join('');
    
        // Preencher pontos fortes/fracos
        const fillList = (elementId, items) => {
            const list = document.getElementById(elementId);
            list.innerHTML = items.map(item => `<li>${item}</li>`).join('');
        };
    
        fillList('animalStrengths', result.strengths);
        fillList('animalWeaknesses', result.weaknesses);
    }
// Reiniciar o quiz
function restartQuiz() {
    currentQuestion = 0;
    traits = {};
    document.getElementById('resultContainer').classList.add('hidden');
    document.getElementById('quizContainer').classList.remove('hidden');
    showQuestion();
}

// Inicializar o quiz
document.addEventListener("DOMContentLoaded", () => {
    showQuestion();
});
