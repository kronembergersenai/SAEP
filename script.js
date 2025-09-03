// =====================
// Configuração
// =====================

const SECONDS_PER_QUESTION = 180; // 3 minutos por questão

const QUESTIONS = [
  {
    id: 1,
    weight: 1,
    text:
      "Uma indústria de automação está implementando um sistema de controle para um processo de envase automático, que requer a integração de sensores de nível com atuadores para garantir a segurança e eficiência do processo. Desenvolver um algoritmo de controle utilizando um CLP que assegure a operação segura do sistema de envase, considerando a lógica de acionamento e as normas de segurança industrial.",
    options: [
      "A ( ) Implementar um algoritmo que desliga a bomba de envase quando o nível do tanque atinge o limite superior, sem considerar a ativação de alarmes.",
      "B ( ) Utilizar um algoritmo que aciona a bomba de envase apenas quando o nível do tanque estiver abaixo do limite inferior, com um temporizador de 5 segundos para evitar acionamentos frequentes.",
      "C ( ) Desenvolver um algoritmo que aciona a bomba de envase quando o nível do tanque atinge o limite inferior e desliga ao atingir o limite superior, incluindo um sinal de alarme para cada condição",
      "D ( ) Programar o CLP para manter a bomba de envase ligada continuamente, desativando-a apenas em caso de falha do sistema.",
      "E ( ) Criar um algoritmo que liga a bomba de envase apenas em horários programados, independentemente do nível do tanque."
    ],
    correctIndex: 2
  },
  {
    id: 2,
    weight: 1,
    text:
      "Uma indústria de automação está desenvolvendo um sistema de controle para um processo de embalagem que envolve a utilização de sensores digitais para monitoramento de presença e acionamento de atuadores. É necessário garantir que as variáveis de controle estejam alinhadas com as normas de segurança e eficiência operacional.",
    options: [
      "A ( ) O programa deve iniciar o acionamento dos atuadores assim que um sensor digital detectar a presença do produto na linha, sem considerar o tempo de espera necessário entre os ciclos.",
      "B ( ) O programa deve acionar os atuadores somente após a confirmação de que todos os sensores digitais estão ativos, garantindo a operação segura do sistema.",
      "C ( ) O programa deve incluir uma rotina de verificação de falhas nos sensores digitais antes de cada ciclo de acionamento dos atuadores para evitar erros durante o processo de embalagem.",
      "D ( ) O programa deve acionar os atuadores uma única vez por ciclo de operação, independentemente da quantidade de produtos detectados pelos sensores digitais.",
      "E ( ) O programa deve desconsiderar a sequência de acionamento dos atuadores, permitindo que sejam ativados aleatoriamente conforme os sensores digitais são acionados."
    ],
    correctIndex: 2
  },
  {
    id: 3,
    weight: 1,
    text:
      "Uma indústria de automação está desenvolvendo um sistema de controle para o acionamento de uma esteira transportadora que opera com sensores digitais para detectar a presença de materiais. É necessário garantir a segurança e eficiência do processo, considerando a programação de um Controlador Lógico Programável (CLP). Quais etapas devem ser seguidas para programar o CLP, garantindo a segurança e o acionamento adequado da esteira transportadora?",
    options: [
      "A ( ) Definir as entradas e saídas do sistema, programar o CLP para acionar a esteira quando o sensor digital detectar um objeto e incluir um sistema de parada de emergência.",
      "B ( ) Programar o CLP para acionar a esteira apenas com a presença de um operador e ignorar os sensores digitais, priorizando a segurança do operador.",
      "C ( ) Utilizar um sensor digital para acionar a esteira continuamente, sem necessidade de programação do CLP, pois o sensor ja realiza a função de controle.",
      "D ( ) Programar o CLP para acionar a esteira em qualquer condição, mesmo que o sensor digital não detecte objetos, e não implementar medidas de segurança.",
      "E ( ) Realizar o acionamento manual da esteira, sem programação do CLP, e utilizar os sensores apenas para monitoramento do ambiente."
    ],
    correctIndex: 0
  },
  {
    id: 4,
    weight: 1,
    text:
      "Um processo industrial automatizado requer o controle de temperatura e pressão em uma caldeira. O sistema deve utilizar sensores digitais para monitorar essas variáveis e um CLP para realizar o acionamento de válvulas de segurança em caso de anomalias. Desenvolver uma lógica de controle para o CLP que assegure a operação segura da caldeira, considerando os sensores digitais.",
    options: [
      "A ( ) Implementar uma lógica que feche automaticamente as válvulas caso a temperatura ultrapasse 120ºC e a pressão atinja 10 bar.",
      "B ( ) Programar o CLP para abrir as válvulas de segurança apenas quando a temperatura atingir 150ºC, independentemente da pressão.",
      "C ( ) Criar uma lógica que feche as válvulas somente quando ambos os sensores de temperatura e pressão estiverem em condição normal.",
      "D ( ) Definir um sistema de alarme que ative uma sirene quando a temperatura alcançar 100°C, mas não tomar nenhuma ação nas válvulas.",
      "E ( ) Utilizar um controle manual das válvulas, permitindo que um operador intervenha quando necessário, sem automatizar o processo."
    ],
    correctIndex: 0
  },
  {
    id: 5,
    weight: 1,
    text:
      "Uma indústria de automação está desenvolvendo um sistema para controlar a temperatura de um forno industrial, utilizando sensores digitais e um Controlador Lógico Programável (CLP). O sistema deve garantir a segurança e a eficiência do processo, monitorando as variáveis críticas e acionando alarmes em caso de falhas. Descreva como deve ser a implementação da lógica de controle para o acionamento do forno, considerando as normas de segurança e os requisitos técnicos relacionados à medição e controle de temperatura.",
    options: [
      "A ( ) A lógica de controle deve acionar o forno diretamente ao atingir a temperatura mínima, sem considerar as variações ou falhas dos sensores.",
      "B ( ) A lógica de controle deve incluir um sistema de redundância nos sensores, além de um alarme que seja acionado quando a temperatura ultrapassar limites seguros.",
      "C ( ) A lógica de controle deve programar o CLP para monitorar continuamente a temperatura, acionando o forno apenas se as condições de segurança forem atendidas, e implementando um sistema de alarme para falhas nos sensores.",
      "D ( ) A lógica de controle deve permitir o acionamento do forno com base em um timer, sem a necessidade de monitoramento continuo da temperatura.",
      "E ( ) A lógica de controle deve acionar o forno apenas quando um operador manualmente confirmar a operação, desprezando a automação e o monitoramento da temperatura."
    ],
    correctIndex: 2
  },
  {
    id: 6,
    weight: 1,
    text:
      "Uma indústria de automação está desenvolvendo um sistema de controle para um processo de enchimento de tanques que utiliza sensores digitais para monitorar o nível de líquido. O sistema deve ser capaz de acionar bombas e válvulas, garantindo a segurança e a eficiência do processo. Proponha uma solução lógica utilizando um Controlador Lógico Programável (CLP) que assegure o acionamento correto das bombas e válvulas, considerando os sensores digitais e as normas de segurança.",
    options: [
      "A ( ) Programar o CLP para acionar as bombas sempre que o nível do líquido estiver abaixo de um determinado ponto, sem considerar a segurança das válvulas.",
      "B ( ) Configurar o CLP para monitorar continuamente os sensores digitais e acionar as válvulas de entrada saída somente quando o nível estiver em uma faixa segura, garantindo a segurança do processo.",
      "C ( ) Utilizar sensores digitais apenas para indicar quando as bombas devem ser desligadas, sem integrar o controle das válvulas ao sistema.",
      "D ( ) Desenvolver um algoritmo no CLP que acione as bombas e válvulas simultaneamente, independente do nível de liquido, para otimizar o tempo de operação.",
      "E ( ) Programar o CLP para acionar as bombas e válvulas com base em um temporizador, sem a utilização de sensores digitais para controle do nível de liquido."
    ],
    correctIndex: 1
  },
  {
    id: 7,
    weight: 1,
    text:
      "Uma indústria de automação está desenvolvendo um sistema de controle para uma linha de produção que utiliza sensores digitais para monitorar a presença de objetos. A eficiência do acionamento dos dispositivos depende da correta programação do Controlador Lógico Programável (CLP) para garantir a segurança e a eficácia do processo. Descreva como os sensores digitais devem ser integrados ao CLP para otimizar o acionamento dos dispositivos na linha de produção.",
    options: [
      "A ( ) Os sensores digitais devem ser conectados diretamente aos módulos de saída do CLP, permitindo que os dispositivos sejam acionados independentemente do estado dos sensores.",
      "B ( ) Os sensores digitais devem ser usados apenas para monitoramento, sem interação com o CLP, que será programado para acionar os dispositivos manualmente.",
      "C ( ) Os sensores digitais devem ser integrados ao CLP para fornecer dados sobre a presença de objetos, permitindo que o acionamento dos dispositivos ocorra somente quando necessário.",
      "D ( ) Os sensores digitais devem be programados para ativar os dispositivos em qualquer situação, independentemente da análise do estado do processo.",
      "E ( ) Os sensores digitais devem ser utilizados apenas para testes de funcionalidade do sistema, sem integração ao CLP na operação real."
    ],
    correctIndex: 2
  },
  {
    id: 8,
    weight: 1,
    text:
      "Uma indústria de automação está desenvolvendo um sistema de controle para uma linha de produção que envolve o acionamento de motores e sensores de temperatura. O projeto exige a implementação de um Controlador Lógico Programável (CLP) para monitorar e controlar variáveis críticas de segurança durante o processo. Desenvolva uma lógica de controle que garanta a segurança operacional do sistema, considerando a atuação do CLP em caso de falha de um sensor de temperatura",
    options: [
      "A ( ) O CLP deve ser programado para desligar todos os motores imediatamente ao detectar uma falha no sensor de temperatura.",
      "B ( ) O CLP deve enviar um alerta visual e sonoro ao operador, permitindo que este decida a ação a ser tomada.",
      "C ( ) O CLP deve ser programado para ativar um sistema de resfriamento automático até que a falha no sensor de temperatura seja corrigida.",
      "D ( ) O CLP deve ser configurado para entrar em modo de segurança, desativando apenas o motor relacionado ao sensor de temperatura com falha, enquanto mantém o restante da linha de produção operacional.",
      "E ( ) O CLP deve registrar a falha do sensor de temperatura em um log e continuar operando normalmente."
    ],
    correctIndex: 3
  },
  {
    id: 9,
    weight: 1,
    text:
      "Uma indústria de automação está implementando um sistema de controle para um processo de envase automático, que requer a integração de sensores de nível com atuadores para garantir a segurança e eficiência do processo. Desenvolver um algoritmo de controle utilizando um CLP que assegure a operação segura do sistema de envase, considerando a lógica de acionamento e as normas de segurança industrial.",
    options: [
      "A ( ) Implementar um algoritmo que desliga a bomba de envase quando o nível do tanque atinge o limite superior, sem considerar a ativação de alarmes.",
      "B ( ) Utilizar um algoritmo que aciona a bomba de envase apenas quando o nível do tanque estiver abaixo do limite inferior, com um temporizador de 5 segundos para evitar acionamentos frequentes.",
      "C ( ) Desenvolver um algoritmo que aciona a bomba de envase quando o nível do tanque atinge o limite inferior e desliga ao atingir o limite superior, incluindo um sinal de alarme para cada condição.",
      "D ( ) Programar o CLP para manter a bomba de envase ligada continuamente, desativando-a apenas em caso de falha do sistema.",
      "E ( ) criar um algoritmo que liga a bomba de envase apenas em horários programados, independentemente do nível do tanque."
    ],
    correctIndex: 2
  },
  {
    id: 10,
    weight: 1,
    text:
      "Um engenheiro de automação industrial está projetando um sistema de intertravamento para uma linha de produção que envolve o controle de temperatura e pressão em um reator químico. O sistema deve garantir que o reator não opere fora dos limites de segurança estabelecidos, evitando assim riscos de acidentes. Defina a lógica de controle a ser implementada para garantir a segurança do reator, considerando os dispositivos microcontrolados envolvidos no processo.",
    options: [
      "A ( ) Implementar um intertravamento que desliga automaticamente o reator quando a temperatura ultrapassa 100°C, independentemente da pressão.",
      "B ( ) Criar um sistema que envie alertas sonoros e visuais quando a pressão do reator ultrapassar 50 bar, mas não desliga o sistema automaticamente.",
      "C ( ) Desenvolver um intertravamento que desliga o reator se a temperatura exceder 100°C ou a pressão ultrapassar 50 bar.",
      "D ( ) Programar o sistema para operar normalmente, permitindo que a temperatura e a pressão aumentem até que o operador intervenha manualmente.",
      "E ( ) Estabelecer um intertravamento que permita a operação do reator apenas quando a temperatura e a pressão estiverem em níveis normais, mas que não desligue o sistema automaticamente em caso de falha."
    ],
    correctIndex: 2
  }
];

// =====================
// Estado
// =====================

let order = [...Array(QUESTIONS.length).keys()];
let current = 0;
let selected = new Array(QUESTIONS.length).fill(null);
let correctCount = 0;
let timer = null;
let remaining = SECONDS_PER_QUESTION;

// =====================
// Elementos
// =====================

const qIndexEl = document.getElementById("q-index");
const qWeightEl = document.getElementById("q-weight");
const qTextEl = document.getElementById("q-text");
const optionsEl = document.getElementById("options");
const hintEl = document.getElementById("hint");

const metaTotalEl = document.getElementById("meta-total");
const metaAnsweredEl = document.getElementById("meta-answered");
const metaCorrectEl = document.getElementById("meta-correct"); // será removido
const metaWeightEl = document.getElementById("meta-weight");

const timeMMEl = document.getElementById("time-mm");
const timeSSEl = document.getElementById("time-ss");
const timeProgressEl = document.getElementById("time-progress");

const progressCurEl = document.getElementById("progress-cur");
const progressTotalEl = document.getElementById("progress-total");
const quizProgressEl = document.getElementById("quiz-progress");

const scoreEl = document.getElementById("score"); // será removido

const btnPrev = document.getElementById("btn-prev");
const btnNext = document.getElementById("btn-next");
const btnSubmit = document.getElementById("btn-submit");

const btnShuffle = document.getElementById("btn-shuffle"); // será removido
const btnReset = document.getElementById("btn-reset");
const btnExport = document.getElementById("btn-export"); // será removido

const resultsCard = document.getElementById("results");
const resCorrectEl = document.getElementById("res-correct");
const resTotalEl = document.getElementById("res-total");
const resGradeEl = document.getElementById("res-grade");
const btnRestart = document.getElementById("btn-restart");

// =====================
// Inicialização
// =====================

function init() {
  // Totais
  metaTotalEl.textContent = QUESTIONS.length;
  progressTotalEl.textContent = QUESTIONS.length;
  document.getElementById("progress-cur").textContent = 1;
  metaWeightEl.textContent = QUESTIONS.reduce((s, q) => s + q.weight, 0);

  // Remoções de UI solicitadas
  // 1) Botão Exportar respostas (JSON)
  btnExport?.remove();
  // 2) Botão Embaralhar questões
  btnShuffle?.remove();
  // 3) Linha "Corretas" no canto inferior esquerdo
  //    Remove a linha inteira que contém o #meta-correct
  if (metaCorrectEl) {
    const row = metaCorrectEl.closest(".meta-row");
    row?.remove();
  }
  // 4) Cartão/indicador "Pontuação" no topo direito
  if (scoreEl) {
    const scoreCard = scoreEl.closest(".card");
    scoreCard?.remove();
  }

  render();
  startTimer();
}

// Garante init após DOM pronto
document.addEventListener("DOMContentLoaded", init);

// =====================
// Timer por questão
// =====================

function startTimer() {
  clearInterval(timer);
  remaining = SECONDS_PER_QUESTION;
  updateTimeUI();
  timer = setInterval(() => {
    remaining--;
    updateTimeUI();
    if (remaining <= 0) {
      clearInterval(timer);
      if (current < QUESTIONS.length - 1) {
        current++;
        render();
        startTimer();
      } else {
        submitQuiz();
      }
    }
  }, 1000);
}

function updateTimeUI() {
  const mm = Math.floor(remaining / 60)
    .toString()
    .padStart(2, "0");
  const ss = (remaining % 60).toString().padStart(2, "0");
  timeMMEl.textContent = mm;
  timeSSEl.textContent = ss;
  const pct =
    ((SECONDS_PER_QUESTION - remaining) / SECONDS_PER_QUESTION) * 100;
  timeProgressEl.style.width = `${pct}%`;
}

// =====================
// Renderização
// =====================

function render() {
  const q = QUESTIONS[order[current]];

  // Cabeçalho
  qIndexEl.textContent = current + 1;
  qWeightEl.textContent = q.weight;
  qTextEl.textContent = q.text;

  // Opções
  optionsEl.innerHTML = "";
  q.options.forEach((opt, idx) => {
    const li = document.createElement("li");
    li.className = "option";

    const input = document.createElement("input");
    input.type = "radio";
    input.name = "opt";
    input.id = `opt-${current}-${idx}`;
    input.checked = selected[order[current]] === idx;
    input.addEventListener("change", () => {
      selected[order[current]] = idx;
      updateMeta();
      hintEl.textContent =
        "Resposta registrada. É possível trocar antes de enviar.";
    });

    const label = document.createElement("label");
    label.htmlFor = input.id;
    label.className = "label";
    label.textContent = `(${String.fromCharCode(65 + idx)}) ${opt}`;

    li.appendChild(input);
    li.appendChild(label);
    optionsEl.appendChild(li);
  });

  // Navegação
  btnPrev.disabled = current === 0;
  btnNext.disabled = current === QUESTIONS.length - 1;

  // Progresso
  progressCurEl.textContent = current + 1;
  const progressPct = ((current + 1) / QUESTIONS.length) * 100;
  quizProgressEl.style.width = `${progressPct}%`;

  // Atualizações de meta
  updateMeta();

  // Estado resultados
  resultsCard.hidden = true;
  btnSubmit.style.display = "inline-block";
}

// =====================
// Navegação
// =====================

function goNext() {
  if (current < QUESTIONS.length - 1) {
    current++;
    render();
    startTimer();
  } else {
    submitQuiz();
  }
}

function goPrev() {
  if (current > 0) {
    current--;
    render();
    startTimer();
  }
}

btnNext.addEventListener("click", goNext);
btnPrev.addEventListener("click", goPrev);

// Limpar respostas
btnReset.addEventListener("click", () => {
  if (confirm("Deseja limpar todas as respostas?")) {
    selected.fill(null);
    correctCount = 0;
    current = 0;
    render();
    startTimer();
    hintEl.textContent = "Respostas limpas.";
  }
});

// Submeter prova
btnSubmit.addEventListener("click", submitQuiz);

// =====================
// Avaliação e resultados
// =====================

function updateMeta() {
  const answered = selected.filter((v) => v !== null).length;
  metaAnsweredEl.textContent = answered;
}

function evaluate() {
  let correct = 0;
  let grade = 0;
  QUESTIONS.forEach((q, i) => {
    if (selected[i] === q.correctIndex) {
      correct++;
      grade += q.weight;
    }
  });
  return { correct, grade };
}

function submitQuiz() {
  clearInterval(timer);
  const { correct, grade } = evaluate();
  correctCount = correct;

  // Não atualiza metaCorrectEl nem scoreEl (foram removidos)
  showResults(correct, grade);
}

function showResults(correct, grade) {
  document
    .querySelector(".question-card")
    .scrollIntoView({ behavior: "smooth", block: "start" });
  document.querySelector(".question-card").style.display = "none";
  resultsCard.hidden = false;
  resCorrectEl.textContent = correct;
  resTotalEl.textContent = QUESTIONS.length;
  resGradeEl.textContent = grade;
  btnSubmit.style.display = "none";
}

// =====================
// Utilidades
// =====================

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Reiniciar do cartão de resultados
btnRestart?.addEventListener("click", () => {
  selected.fill(null);
  order = [...Array(QUESTIONS.length).keys()];
  current = 0;
  correctCount = 0;
  document.querySelector(".question-card").style.display = "";
  resultsCard.hidden = true;
  render();
  startTimer();
});
