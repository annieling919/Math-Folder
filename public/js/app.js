// State Variables
const STATE = {
    IDLE: 'idle',
    SETUP_TOPIC: 'setup_topic',
    SETUP_DIFF: 'setup_diff',
    QUIZ: 'quiz',
    FINISHED: 'finished'
};

let appState = STATE.IDLE;
let currentLang = 'zh'; // 'zh' or 'en'
let currentDifficulty = 1;
let currentTopic = '骰子'; // Default (Internal logic always uses ZH topic names for consistency)
let currentQuestion = null;
let currentHintLevel = 0; 
let streakCorrect = 0;
let streakWrong = 0;
let sessionStats = {
    total: 0,
    correct: 0,
    mistakes: [] // {id, reason}
};
let usedQuestionIds = new Set();

const conceptText = {
    zh: `
<div class="text-sm">
    <h3 class="font-bold text-blue-700 mb-2">📚 核心题型速览</h3>
    <div class="mb-3">
        <strong>📌 题型 1：判断事件类型</strong><br>
        看是否互相影响：<br>
        - 无影响 = <strong>独立事件</strong> (Independent)<br>
        - 有影响 = <strong>相依事件</strong> (Dependent)<br>
        <em>判断口诀：放回=独立；不放回(知前)=相依；不放回(不知前)=等效独立。</em>
    </div>
    <div class="mb-3">
        <strong>📌 题型 2：独立事件概率计算</strong><br>
        <em>(放回 / 互不影响)</em><br>
        公式：<code>P(A且B) = P(A) × P(B)</code><br>
        <em>例：抛硬币正 + 掷骰子6 = 1/2 × 1/6 = 1/12</em>
    </div>
    <div class="mb-3">
        <strong>📌 题型 3：相依事件概率计算</strong><br>
        <em>(不放回，已知前结果)</em><br>
        公式：<code>P(A且B) = P(A) × P(B|A)</code><br>
        关键：第二次的分母和分子要随第一次结果调整。<br>
        <em>例：10球3红，不放回连抽两红 = 3/10 × 2/9 = 1/15</em>
    </div>
    <div class="mb-3 bg-yellow-50 p-2 border-l-4 border-yellow-400">
        <strong>⚠️ 补充题型：不放回 + 未知前结果</strong><br>
        求后事件概率 = 拆分所有前事件可能 (全概率公式)<br>
        <code>P(后) = P(前1×后) + P(前2×后) + ...</code><br>
        <em>例：10球3红，不放回求次抽红(不知首红) = 3/10 (概率不变)</em>
    </div>
</div>`,
    en: `
<div class="text-sm">
    <h3 class="font-bold text-blue-700 mb-2">📚 Core Problem Types</h3>
    <div class="mb-3">
        <strong>📌 Type 1: Determine Event Type</strong><br>
        Do they affect each other?<br>
        - No effect = <strong>Independent</strong><br>
        - Has effect = <strong>Dependent</strong><br>
        <em>Key: With Replacement = Indep; No Replacement (Known 1st) = Dep; No Replacement (Unknown 1st) = Indep-like.</em>
    </div>
    <div class="mb-3">
        <strong>📌 Type 2: Independent Calculation</strong><br>
        <em>(With Replacement / No Interaction)</em><br>
        Formula: <code>P(A and B) = P(A) × P(B)</code><br>
        <em>Ex: Coin Heads + Die 6 = 1/2 × 1/6 = 1/12</em>
    </div>
    <div class="mb-3">
        <strong>📌 Type 3: Dependent Calculation</strong><br>
        <em>(Without Replacement, Known 1st Result)</em><br>
        Formula: <code>P(A and B) = P(A) × P(B|A)</code><br>
        Key: Adjust 2nd numerator/denominator based on 1st result.<br>
        <em>Ex: 10 balls 3 Red. Draw 2 Red (No replace) = 3/10 × 2/9 = 1/15</em>
    </div>
    <div class="mb-3 bg-yellow-50 p-2 border-l-4 border-yellow-400">
        <strong>⚠️ Supplementary: No Replacement + Unknown 1st</strong><br>
        Sum of all possibilities (Total Probability)<br>
        <code>P(2nd) = P(1st_A × 2nd) + P(1st_B × 2nd)</code><br>
        <em>Ex: 10 balls 3 Red. Draw 2nd Red (Unknown 1st) = 3/10 (Unchanged)</em>
    </div>
</div>`
};

// Resources
const STRINGS = {
    zh: {
        title: "概率学习小助手",
        subtitle: "初三版 | 智能出题 | 自适应难度",
        placeholder: "输入回答...",
        send: "发送",
        footer: "支持输入分数 (如 1/2) 或小数。遇到困难可输入 '提示' 或 '解析'。",
        diffLabel: "难度",
        streakLabel: "连对",
        welcome: "你好！我是你的初三概率学习教练。👋<br>每次只出一道题，我会根据你的表现调整难度。",
        welcome2: "想练哪类题？（骰子、硬币、抽球、综合）<br>或者直接回复“开始”默认从骰子难度1开始。",
        startCmd: "开始",
        randomCmd: "随便",
        endCmd: ["结束", "不练了", "停止"],
        hintCmd: ["提示", "不懂", "不会", "help"],
        solutionCmd: ["解析", "答案", "solution", "answer"],
        conceptCmd: ["概念", "复习", "review", "concept", "rule"],
        startQuiz: (topic, diff) => `好的，我们开始练习 **${topic}**，起始难度 **${diff}**。🚀`,
        finished: "题目已经做完了！我们来看看学习小结。",
        unknownAnswer: "我不确定这个答案。请输入分数（如 1/2）或小数。",
        praise: ["太棒了！🎉", "正确！✅", "做得好！👍", "思路很清晰！✨"],
        answerIs: "答案就是",
        levelUp: "连对2题，难度升级！⬆️",
        levelDown: "别灰心，我们降低一点难度继续。⬇️",
        askSolution: "这道题看起来有点难。要看完整解析吗？（回复“是”或“解析”）",
        fullSolution: "📖 完整解析",
        stdAnswer: "标准答案",
        summaryTitle: "📊 学习小结",
        totalQ: "作答题数",
        accuracy: "正确率",
        weakness: "易错知识点",
        noWeakness: "暂无明显的易错点，继续保持！",
        advice: "建议复习",
        adviceText: "针对错题涉及的对立事件或独立事件概念进行加强。",
        goodJob: "基础很扎实，可以尝试更高难度的综合题。",
        refresh: "如果想开始新的练习，请刷新页面或输入“开始”。",
        topicMap: {'骰子': '骰子', '硬币': '硬币', '抽球': '抽球', '综合': '综合', 'dice': '骰子', 'coin': '硬币', 'ball': '抽球', 'general': '综合', 'mixed': '综合'},
        questionLabel: "题目",
        hintLabel: "💡 提示",
        yesCmd: ["是", "yes", "ok", "好"]
    },
    en: {
        title: "Probability Coach",
        subtitle: "Grade 9 | Adaptive Difficulty | Smart Quiz",
        placeholder: "Type your answer...",
        send: "Send",
        footer: "Enter fractions (e.g. 1/2) or decimals. Type 'hint' or 'solution' if stuck.",
        diffLabel: "Level",
        streakLabel: "Streak",
        welcome: "Hello! I'm your Probability Learning Coach. 👋<br>I'll give you one problem at a time and adapt to your skill.",
        welcome2: "What topic? (Dice, Coin, Balls, General)<br>Or type 'Start' to begin with Dice Level 1.",
        startCmd: "start",
        randomCmd: "random",
        endCmd: ["end", "stop", "quit", "finish"],
        hintCmd: ["hint", "clue", "help", "stuck"],
        solutionCmd: ["solution", "answer", "solve", "explanation"],
        conceptCmd: ["concept", "review", "rule", "definition"],
        startQuiz: (topic, diff) => `Okay! Starting **${translateTopic(topic)}** at Level **${diff}**. 🚀`,
        finished: "No more questions! Let's review your session.",
        unknownAnswer: "I didn't catch that number. Please enter a fraction (e.g. 1/2) or decimal.",
        praise: ["Great job! 🎉", "Correct! ✅", "Well done! 👍", "Sharp thinking! ✨"],
        answerIs: "The answer is",
        levelUp: "2 in a row! Level Up! ⬆️",
        levelDown: "Don't worry, let's try an easier one. ⬇️",
        askSolution: "This seems tricky. Want the full solution? (Type 'yes' or 'solution')",
        fullSolution: "📖 Full Solution",
        stdAnswer: "Standard Answer",
        summaryTitle: "📊 Session Summary",
        totalQ: "Questions",
        accuracy: "Accuracy",
        weakness: "Weak Points",
        noWeakness: "None yet. Keep it up!",
        advice: "Review Advice",
        adviceText: "Review concepts like Complementary Events or Independent Events.",
        goodJob: "Solid foundation! Try harder General problems.",
        refresh: "To start over, refresh the page or type 'Start'.",
        topicMap: {'dice': '骰子', 'coin': '硬币', 'balls': '抽球', 'ball': '抽球', 'general': '综合', 'mixed': '综合', '骰子': '骰子', '硬币': '硬币', '抽球': '抽球', '综合': '综合'},
        questionLabel: "Question",
        hintLabel: "💡 Hint",
        yesCmd: ["yes", "yep", "sure", "ok", "please"]
    }
};

// DOM Elements
const chatBox = document.getElementById('chat-box');
const chatForm = document.getElementById('chat-form');
const userInput = document.getElementById('user-input');
const statusBadge = document.getElementById('status-badge');
const displayDiff = document.getElementById('current-diff');
const displayStreak = document.getElementById('streak-correct');
const langBtn = document.getElementById('lang-toggle');
const conceptBtn = document.getElementById('concept-btn'); // Will be added in index.html

// Text Elements for i18n
const uiTitle = document.getElementById('app-title');
const uiSubtitle = document.getElementById('app-subtitle');
const uiSend = document.getElementById('send-btn');
const uiFooter = document.getElementById('footer-hint');
const uiDiffLabel = document.getElementById('diff-label');
const uiStreakLabel = document.getElementById('streak-label');

// Initialize
function init() {
    updateUILanguage();
    addBotMessage(STRINGS[currentLang].welcome);
    addBotMessage(STRINGS[currentLang].welcome2);
    appState = STATE.SETUP_TOPIC;
    userInput.focus();
}

// Event Listeners
chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = userInput.value.trim();
    if (!text) return;
    
    addUserMessage(text);
    userInput.value = '';
    
    handleInput(text);
});

langBtn.addEventListener('click', () => {
    currentLang = currentLang === 'zh' ? 'en' : 'zh';
    updateUILanguage();
});

if (document.getElementById('concept-btn')) {
    document.getElementById('concept-btn').addEventListener('click', () => {
        showConcepts();
    });
}

function updateUILanguage() {
    const s = STRINGS[currentLang];
    uiTitle.innerText = s.title;
    uiSubtitle.innerText = s.subtitle;
    userInput.placeholder = s.placeholder;
    uiSend.innerText = s.send;
    uiFooter.innerText = s.footer;
    uiDiffLabel.innerText = s.diffLabel;
    uiStreakLabel.innerText = s.streakLabel;
}

function showConcepts() {
    addBotMessage(conceptText[currentLang]);
}

// Main Logic
function handleInput(text) {
    const lowerText = text.toLowerCase();
    const s = STRINGS[currentLang];

    // Global Commands
    if (checkCmd(lowerText, s.endCmd)) {
        endSession();
        return;
    }
    
    if (checkCmd(lowerText, s.conceptCmd)) {
        showConcepts();
        return;
    }

    // State Machine
    switch (appState) {
        case STATE.SETUP_TOPIC:
            handleSetup(text);
            break;
        case STATE.QUIZ:
            handleQuizResponse(text);
            break;
        case STATE.FINISHED:
            if (lowerText.includes(s.startCmd) || lowerText.includes("start") || lowerText.includes("开始")) {
                location.reload();
            } else {
                addBotMessage(s.refresh);
            }
            break;
        default:
            addBotMessage(s.refresh);
    }
}

function checkCmd(text, cmdList) {
    if (Array.isArray(cmdList)) {
        return cmdList.some(cmd => text.includes(cmd));
    }
    return text.includes(cmdList);
}

function handleSetup(text) {
    const lowerText = text.toLowerCase();
    const s = STRINGS[currentLang];

    if (lowerText.includes(s.startCmd) || lowerText.includes("start") || lowerText.includes(s.randomCmd)) {
        startQuiz('骰子', 1);
        return;
    }

    // Parse Topic
    let topic = '骰子'; // Default
    
    // Check both English and Chinese keywords mapping
    for (const [key, val] of Object.entries(s.topicMap)) {
        if (lowerText.includes(key)) {
            topic = val;
            break;
        }
    }
    
    // Parse Difficulty
    let diff = 1;
    if (lowerText.includes("2") || lowerText.includes("二") || lowerText.includes("medium") || lowerText.includes("中")) diff = 2;
    if (lowerText.includes("3") || lowerText.includes("三") || lowerText.includes("hard") || lowerText.includes("难")) diff = 3;

    startQuiz(topic, diff);
}

function translateTopic(internalTopic) {
    // Convert internal ZH topic to display EN if needed
    if (currentLang === 'zh') return internalTopic;
    const map = {
        '骰子': 'Dice',
        '硬币': 'Coin',
        '抽球': 'Balls',
        '综合': 'General'
    };
    return map[internalTopic] || internalTopic;
}

function startQuiz(topic, diff) {
    currentTopic = topic;
    currentDifficulty = diff;
    statusBadge.classList.remove('hidden');
    updateStatus();
    
    addBotMessage(STRINGS[currentLang].startQuiz(translateTopic(topic), diff));
    appState = STATE.QUIZ;
    nextQuestion();
}

function nextQuestion() {
    // Filter questions (Topic matching is always done against the internal 'topic' field which is ZH)
    // But now questions have topicEn as well. However, currentTopic state is stored as ZH string.
    
    let potentialQuestions = questionBank.filter(q => 
        !usedQuestionIds.has(q.id) && 
        q.difficulty === currentDifficulty &&
        (currentTopic === '综合' || q.topic === currentTopic)
    );

    if (potentialQuestions.length === 0) {
        // Relax criteria
        potentialQuestions = questionBank.filter(q => 
            !usedQuestionIds.has(q.id) && 
            q.difficulty === currentDifficulty
        );
    }
    
    if (potentialQuestions.length === 0) {
        potentialQuestions = questionBank.filter(q => !usedQuestionIds.has(q.id));
    }

    if (potentialQuestions.length === 0) {
        addBotMessage(STRINGS[currentLang].finished);
        endSession();
        return;
    }

    // Pick random
    const randomIndex = Math.floor(Math.random() * potentialQuestions.length);
    currentQuestion = potentialQuestions[randomIndex];
    usedQuestionIds.add(currentQuestion.id);
    
    // Reset Question State
    currentHintLevel = 0;
    
    // Display
    const qText = currentLang === 'zh' ? currentQuestion.question : currentQuestion.questionEn;
    const qTags = currentLang === 'zh' ? currentQuestion.tags : currentQuestion.tagsEn;
    const tagsHtml = qTags.map(t => `<span class="tag">${t}</span>`).join('');
    
    const html = `
        <div class="text-sm text-gray-500 mb-1">${STRINGS[currentLang].questionLabel} ${currentQuestion.id} | ${STRINGS[currentLang].diffLabel} ${currentQuestion.difficulty}</div>
        <div class="question-text">${qText}</div>
        <div>${tagsHtml}</div>
    `;
    addBotMessage(html);
}

function handleQuizResponse(text) {
    const s = STRINGS[currentLang];
    const lowerText = text.toLowerCase();

    // Check for help requests
    if (checkCmd(lowerText, s.hintCmd)) {
        giveHint();
        return;
    }
    if (checkCmd(lowerText, s.solutionCmd)) {
        showExplanation();
        return;
    }
    
    // Check YES for "want solution?"
    if (currentHintLevel >= 4 && checkCmd(lowerText, s.yesCmd)) {
        showExplanation();
        return;
    }

    // Check Answer (Support Yes/No questions or Number questions)
    let isCorrect = false;

    // Special handling for Yes/No questions (P011, P012, P013)
    
    if (currentQuestion.id === "P011" || currentQuestion.id === "P013") {
        // Independent / Yes
        if (lowerText.includes("yes") || lowerText.includes("是") || lowerText.includes("独立") || lowerText.includes("independent") || lowerText.includes("无影响")) {
            isCorrect = true;
        }
    } else if (currentQuestion.id === "P012") {
        // Dependent
        if (lowerText.includes("dependent") || lowerText.includes("相关") || lowerText.includes("相依") || lowerText.includes("no") || lowerText.includes("不")) {
            isCorrect = true;
        }
    } else {
        // Numerical check
        const userVal = parseMathInput(text);
        if (userVal === null) {
            addBotMessage(s.unknownAnswer);
            return;
        }
        isCorrect = Math.abs(userVal - currentQuestion.answerVal) < 0.001;
    }

    if (isCorrect) {
        handleCorrect();
    } else {
        handleIncorrect();
    }
}

function handleCorrect() {
    sessionStats.total++;
    sessionStats.correct++;
    streakCorrect++;
    streakWrong = 0;
    
    const s = STRINGS[currentLang];
    const randomPraise = s.praise[Math.floor(Math.random() * s.praise.length)];
    
    addBotMessage(`${randomPraise} ${s.answerIs} ${currentQuestion.answerStr}.`);
    
    if (streakCorrect >= 2 && currentDifficulty < 3) {
        currentDifficulty++;
        streakCorrect = 0;
        addBotMessage(s.levelUp);
    }

    updateStatus();
    setTimeout(nextQuestion, 1500);
}

function handleIncorrect() {
    streakCorrect = 0;
    streakWrong++;
    
    if (currentHintLevel === 0) { 
         if (currentDifficulty > 1) {
            currentDifficulty--;
            addBotMessage(STRINGS[currentLang].levelDown);
        }
        // Log mistake
        const existingLog = sessionStats.mistakes.find(m => m.id === currentQuestion.id);
        if (!existingLog) {
            sessionStats.mistakes.push({
                id: currentQuestion.id,
                tags: currentLang === 'zh' ? currentQuestion.tags : currentQuestion.tagsEn
            });
        }
    }

    updateStatus();
    giveHint();
}

function giveHint() {
    const s = STRINGS[currentLang];
    if (currentHintLevel >= 4) {
        addBotMessage(s.askSolution);
        return;
    }

    // Get current hint
    const hintsArr = currentLang === 'zh' ? currentQuestion.hints : currentQuestion.hintsEn;
    const hintText = hintsArr[currentHintLevel];
    currentHintLevel++;

    const html = `<div class="hint-box"><strong>${s.hintLabel} ${currentHintLevel}:</strong> ${hintText}</div>`;
    addBotMessage(html);
}

function showExplanation() {
    if (streakCorrect > 0) streakCorrect = 0;
    
    const s = STRINGS[currentLang];
    const expText = currentLang === 'zh' ? currentQuestion.explanation : currentQuestion.explanationEn;

    const html = `
        <div class="explanation-box">
            <strong>${s.fullSolution}:</strong><br>
            ${expText}<br>
            <strong>${s.stdAnswer}:</strong> ${currentQuestion.answerStr}
        </div>
    `;
    addBotMessage(html);
    
    setTimeout(nextQuestion, 3000);
}

function endSession() {
    appState = STATE.FINISHED;
    const s = STRINGS[currentLang];
    
    const accuracy = sessionStats.total === 0 ? 0 : Math.round((sessionStats.correct / sessionStats.total) * 100);
    
    // Find weak spots
    let weakTags = {};
    sessionStats.mistakes.forEach(m => {
        m.tags.forEach(t => {
            weakTags[t] = (weakTags[t] || 0) + 1;
        });
    });
    const sortedWeakness = Object.entries(weakTags).sort((a,b) => b[1] - a[1]).slice(0, 3).map(x => x[0]);
    
    const summary = `
        <div class="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h3 class="font-bold text-blue-800 mb-2">${s.summaryTitle}</h3>
            <p><strong>${s.totalQ}:</strong> ${sessionStats.total}</p>
            <p><strong>${s.accuracy}:</strong> ${accuracy}%</p>
            <p><strong>${s.weakness}:</strong> ${sortedWeakness.length > 0 ? sortedWeakness.join(", ") : s.noWeakness}</p>
            <p class="mt-2 text-sm text-gray-600">${s.advice}: ${sortedWeakness.length > 0 ? s.adviceText : s.goodJob}</p>
        </div>
    `;
    
    addBotMessage(summary);
}

// Helpers
function updateStatus() {
    displayDiff.innerText = currentDifficulty;
    displayStreak.innerText = streakCorrect;
}

function parseMathInput(str) {
    str = str.replace(/[^\d\/\.\-]/g, '');
    if (str.includes('/')) {
        const parts = str.split('/');
        if (parts.length === 2) {
            const num = parseFloat(parts[0]);
            const den = parseFloat(parts[1]);
            if (den !== 0) return num / den;
        }
    }
    const floatVal = parseFloat(str);
    return isNaN(floatVal) ? null : floatVal;
}

function addBotMessage(htmlContent) {
    const div = document.createElement('div');
    div.className = 'message bot-msg';
    div.innerHTML = `<div class="bot-bubble">${htmlContent}</div>`;
    chatBox.appendChild(div);
    scrollToBottom();
}

function addUserMessage(textContent) {
    const div = document.createElement('div');
    div.className = 'message user-msg';
    div.innerHTML = `<div class="user-bubble">${textContent}</div>`;
    chatBox.appendChild(div);
    scrollToBottom();
}

function scrollToBottom() {
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Start
init();
