const questionBank = [
  {
    id: "P001",
    difficulty: 1,
    topic: "骰子",
    topicEn: "Dice",
    tags: ["等可能", "独立事件", "分类计数"],
    tagsEn: ["Equally Likely", "Independent Events", "Counting"],
    question: "掷两枚公平骰子，点数之和为偶数的概率是？",
    questionEn: "What is the probability that the sum of the dots is even when rolling two fair dice?",
    answerStr: "1/2",
    answerVal: 0.5,
    hints: [
      "想想“奇+奇”和“偶+偶”的和是多少。",
      "掷一次骰子出现奇、偶的概率各是多少？",
      "把“同奇”“同偶”的概率分别算出再相加。",
      "计算 1/4 + 1/4。"
    ],
    hintsEn: [
      "Think about what 'Odd + Odd' and 'Even + Even' sum to.",
      "What is the probability of rolling an odd or even number with one die?",
      "Calculate the probability of 'Both Odd' and 'Both Even' separately, then add them.",
      "Calculate 1/4 + 1/4."
    ],
    explanation: "和为偶数=同奇或同偶。P(同偶)=(3/6)(3/6)=1/4；P(同奇)=(3/6)(3/6)=1/4；合计1/2。",
    explanationEn: "Sum is even = Both Odd or Both Even. P(Both Even) = (3/6)*(3/6) = 1/4; P(Both Odd) = (3/6)*(3/6) = 1/4; Total = 1/2."
  },
  {
    id: "P002",
    difficulty: 1,
    topic: "硬币",
    topicEn: "Coin",
    tags: ["对立事件", "频率与概率"],
    tagsEn: ["Complementary Events", "Frequency & Probability"],
    question: "掷一枚公平硬币3次，至少出现1次正面的概率是？",
    questionEn: "What is the probability of getting at least one head when tossing a fair coin 3 times?",
    answerStr: "7/8",
    answerVal: 0.875,
    hints: [
      "先考虑“至少一次”的对立事件是什么？",
      "全部是反面的概率是多少？",
      "用 1 减去“全反面”的概率。",
      "计算 1 - (1/2)^3。"
    ],
    hintsEn: [
      "Consider the complementary event of 'at least one head'.",
      "What is the probability of getting all tails?",
      "Subtract the probability of 'all tails' from 1.",
      "Calculate 1 - (1/2)^3."
    ],
    explanation: "对立事件=全反面。P=1-(1/2)^3=7/8。",
    explanationEn: "Complementary event = All Tails. P = 1 - (1/2)^3 = 7/8."
  },
  {
    id: "P003",
    difficulty: 1,
    topic: "综合",
    topicEn: "General",
    tags: ["等可能", "枚举"],
    tagsEn: ["Equally Likely", "Enumeration"],
    question: "从1到10随机选一个整数，选到质数的概率是？",
    questionEn: "What is the probability of selecting a prime number when randomly picking an integer from 1 to 10?",
    answerStr: "2/5",
    answerVal: 0.4,
    hints: [
      "先列出1到10哪些是质数。",
      "注意1不是质数。",
      "质数一共有几个？总数是10个。",
      "化简分数。"
    ],
    hintsEn: [
      "List the prime numbers between 1 and 10.",
      "Remember that 1 is not a prime number.",
      "How many primes are there? The total count is 10.",
      "Simplify the fraction."
    ],
    explanation: "质数有2,3,5,7，共4个。概率=4/10=2/5。",
    explanationEn: "Primes are 2, 3, 5, 7. Total 4 numbers. Probability = 4/10 = 2/5."
  },
  {
    id: "P004",
    difficulty: 2,
    topic: "抽球",
    topicEn: "Balls",
    tags: ["不放回", "乘法公式"],
    tagsEn: ["Without Replacement", "Multiplication Rule"],
    question: "袋中有3个红球、2个蓝球。随机取2个（不放回），取到两个都是红球的概率是？",
    questionEn: "A bag contains 3 red balls and 2 blue balls. If 2 balls are drawn randomly without replacement, what is the probability that both are red?",
    answerStr: "3/10",
    answerVal: 0.3,
    hints: [
      "不放回时，第二次的分母会变化。",
      "第一次取红的概率是3/5。",
      "在第一次红的前提下，第二次红的概率是多少？",
      "用乘法公式相乘。"
    ],
    hintsEn: [
      "Without replacement means the denominator changes for the second draw.",
      "Probability of first red is 3/5.",
      "Given the first is red, what is the probability the second is red?",
      "Multiply the probabilities."
    ],
    explanation: "P= (3/5)*(2/4)=6/20=3/10。",
    explanationEn: "P = (3/5) * (2/4) = 6/20 = 3/10."
  },
  {
    id: "P005",
    difficulty: 1,
    topic: "骰子",
    topicEn: "Dice",
    tags: ["等可能", "枚举"],
    tagsEn: ["Equally Likely", "Enumeration"],
    question: "掷两枚公平骰子，点数之和为7的概率是？",
    questionEn: "What is the probability that the sum of dots is 7 when rolling two fair dice?",
    answerStr: "1/6",
    answerVal: 0.1666666667, // Approximate
    hints: [
      "和为7的有哪几种有序结果？",
      "像(1,6)与(6,1)是不同的两种。",
      "数一数有几种。",
      "总样本数是36。"
    ],
    hintsEn: [
      "List the ordered pairs that sum to 7.",
      "Remember (1,6) and (6,1) are distinct outcomes.",
      "Count how many pairs there are.",
      "The total sample space size is 36."
    ],
    explanation: "有(1,6),(2,5),(3,4),(4,3),(5,2),(6,1)共6种。概率=6/36=1/6。",
    explanationEn: "Outcomes: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1). Total 6. Probability = 6/36 = 1/6."
  },
  {
    id: "P006",
    difficulty: 2,
    topic: "抽球",
    topicEn: "Balls",
    tags: ["有放回", "互斥事件"],
    tagsEn: ["With Replacement", "Mutually Exclusive"],
    question: "袋中有3个红球、2个蓝球。有放回地抽2次，恰好一次红一次蓝的概率是？",
    questionEn: "A bag has 3 red and 2 blue balls. Draw 2 with replacement. What is the probability of getting exactly one red and one blue?",
    answerStr: "12/25",
    answerVal: 0.48,
    hints: [
      "分两种情况：先红后蓝，先蓝后红。",
      "有放回意味着每次分母不变。",
      "分别计算两种情况的概率并相加。",
      "计算 2*(3/5)(2/5)。"
    ],
    hintsEn: [
      "Two cases: Red then Blue, OR Blue then Red.",
      "With replacement means the denominator stays the same.",
      "Calculate probability for each case and add them.",
      "Calculate 2 * (3/5) * (2/5)."
    ],
    explanation: "P= (3/5)(2/5) + (2/5)*(3/5) = 12/25。",
    explanationEn: "P = (3/5)*(2/5) + (2/5)*(3/5) = 12/25."
  },
  {
    id: "P007",
    difficulty: 2,
    topic: "骰子",
    topicEn: "Dice",
    tags: ["对立事件", "独立"],
    tagsEn: ["Complementary Events", "Independent"],
    question: "掷一枚公平骰子两次，至少出现一次6的概率是？",
    questionEn: "Rolling a fair die twice, what is the probability of getting at least one 6?",
    answerStr: "11/36",
    answerVal: 0.3055555556, // Approximate
    hints: [
      "用对立事件更快：没有出现6。",
      "一次不出6的概率是5/6。",
      "两次都不出6的概率是多少？",
      "用 1 减去它。",
    ],
    hintsEn: [
      "Use the complementary event: No 6 appears.",
      "Probability of not getting a 6 in one roll is 5/6.",
      "What is the probability of not getting a 6 in both rolls?",
      "Subtract that from 1."
    ],
    explanation: "P=1-(5/6)^2=1-25/36=11/36。",
    explanationEn: "P = 1 - (5/6)^2 = 1 - 25/36 = 11/36."
  },
  {
    id: "P008",
    difficulty: 3,
    topic: "抽球",
    topicEn: "Balls",
    tags: ["不放回", "对立事件"],
    tagsEn: ["Without Replacement", "Complementary Events"],
    question: "袋中有4个红球、6个蓝球。不放回地抽2个，至少有1个红球的概率是？",
    questionEn: "A bag has 4 red and 6 blue balls. Draw 2 without replacement. Probability of at least one red?",
    answerStr: "2/3",
    answerVal: 0.6666666667, // Approximate
    hints: [
      "用对立事件：两个都是蓝球。",
      "第一次蓝的概率是6/10。",
      "在第一次蓝的前提下，第二次蓝的概率是多少？",
      "计算 1 - (6/10)(5/9)。"
    ],
    hintsEn: [
      "Use complementary event: Both are blue.",
      "Probability of first blue is 6/10.",
      "Given first is blue, probability of second blue?",
      "Calculate 1 - (6/10)*(5/9)."
    ],
    explanation: "P=1-(6/10)(5/9)=1-1/3=2/3。",
    explanationEn: "P = 1 - (6/10)*(5/9) = 1 - 1/3 = 2/3."
  },
  {
    id: "P009",
    difficulty: 2,
    topic: "抽球",
    topicEn: "Balls",
    tags: ["不放回", "相关事件"],
    tagsEn: ["Without Replacement", "Dependent Events"],
    question: "袋中有3个红球、7个绿球（共10个）。不放回地取2个。在已知第一次取到红球的情况下，第二次取到红球的概率是？",
    questionEn: "A bag has 3 red and 7 green balls (total 10). Draw 2 without replacement. If you KNOW the first ball is red, what is the probability the second is red?",
    answerStr: "2/9",
    answerVal: 0.222222222,
    hints: [
      "这是相关事件：第一次的结果改变了袋子里的球。",
      "取走一个红球后，袋子里还剩几个球？",
      "还剩几个红球？",
      "计算 剩余红球 / 剩余总数。"
    ],
    hintsEn: [
      "This is a dependent event: the first draw changes the contents.",
      "After taking one red ball, how many balls are left in total?",
      "How many red balls are left?",
      "Calculate Remaining Red / Remaining Total."
    ],
    explanation: "因为知道第一次是红球，所以袋中剩9个球，其中2个红球。概率=2/9。",
    explanationEn: "Since we know the first was red, 9 balls remain, 2 of which are red. Probability = 2/9."
  },
  {
    id: "P010",
    difficulty: 3,
    topic: "抽球",
    topicEn: "Balls",
    tags: ["不放回", "未知结果", "关键法则"],
    tagsEn: ["Without Replacement", "Unknown First Draw", "Critical Rule"],
    question: "袋中有3个红球、7个绿球。不放回地取2个。在不知道第一次结果的情况下（蒙眼抽），第二次取到红球的概率是？",
    questionEn: "A bag has 3 red and 7 green balls. Draw 2 without replacement. If you DON'T know the result of the first draw, what is the probability the second is red?",
    answerStr: "3/10",
    answerVal: 0.3,
    hints: [
      "关键法则：如果不知道第一次的结果，第二次的概率不变。",
      "就像你虽然是第二个抽签，但并不比第一个人吃亏。",
      "可以分两种情况算：(红,红) + (绿,红)。",
      "计算 (3/10 * 2/9) + (7/10 * 3/9)。"
    ],
    hintsEn: [
      "Critical Rule: Not knowing the first outcome keeps the second event's probability unchanged.",
      "It acts as if it were independent (blindfolded scenario).",
      "You can sum two cases: (Red, Red) + (Green, Red).",
      "Calculate (3/10 * 2/9) + (7/10 * 3/9)."
    ],
    explanation: "P = P(红,红) + P(绿,红) = (3/10×2/9) + (7/10×3/9) = 6/90 + 21/90 = 27/90 = 3/10。结论：其实和第一次概率一样！",
    explanationEn: "P = P(Red,Red) + P(Green,Red) = (3/10×2/9) + (7/10×3/9) = 6/90 + 21/90 = 27/90 = 3/10. Conclusion: Same as the first draw!"
  },
  {
    id: "P011",
    difficulty: 1,
    topic: "综合",
    topicEn: "General",
    tags: ["独立事件", "定义"],
    tagsEn: ["Independent Events", "Definition"],
    question: "掷一个骰子并抛一枚硬币。这两个事件是独立的吗？(回答 是 或 否)",
    questionEn: "Rolling a die and tossing a coin. Are these independent events? (Answer Yes or No)",
    answerStr: "是",
    answerVal: 1, 
    hints: [
      "硬币的结果会影响骰子吗？",
      "骰子的结果会影响硬币吗？",
      "如果互不影响，那就是独立的。",
      "是的，它们完全无关。"
    ],
    hintsEn: [
      "Does the coin flip affect the die roll?",
      "Does the die roll affect the coin flip?",
      "If they don't affect each other, they are independent.",
      "Yes, they are completely unrelated."
    ],
    explanation: "它们互不影响，属于独立事件。P(A且B) = P(A) * P(B)。",
    explanationEn: "They do not affect each other. P(A and B) = P(A) * P(B)."
  },
  {
    id: "P012",
    difficulty: 2,
    topic: "综合",
    topicEn: "General",
    tags: ["相关事件", "生活实例"],
    tagsEn: ["Dependent Events", "Real World"],
    question: "“因为下雨所以迟到”。这两个事件（下雨、迟到）通常被认为是？(独立 或 相关)",
    questionEn: "\"Being late because it rained.\" Are these two events (Rain, Late) usually considered Independent or Dependent?",
    answerStr: "相关",
    answerVal: 0, 
    hints: [
      "下雨会增加迟到的可能性吗？",
      "如果一个事件的发生改变了另一个事件的概率，它们就是相关的。",
      "这是典型的因果或相关关系。",
      "填“相关”或“Dependent”。"
    ],
    hintsEn: [
      "Does rain increase the probability of being late?",
      "If one event occurrence changes the probability of the other, they are dependent.",
      "This is a classic correlation.",
      "Answer Dependent."
    ],
    explanation: "下雨会影响交通，从而改变迟到的概率，所以是相关事件(Dependent Events)。",
    explanationEn: "Rain affects traffic, which changes the probability of being late, so they are Dependent Events."
  },
  {
    id: "P013",
    difficulty: 1,
    topic: "抽球",
    topicEn: "Balls",
    tags: ["判型", "独立事件"],
    tagsEn: ["Judgment", "Independent Events"],
    question: "从一副52张的牌中抽一张，记下花色后**放回**，洗牌后再抽一张。这是独立事件还是相依事件？（回答 独立 或 相依）",
    questionEn: "Draw a card from 52, note it, **put it back**, shuffle, and draw again. Independent or Dependent? (Answer Independent or Dependent)",
    answerStr: "独立",
    answerVal: 1, 
    hints: [
      "关键点是“放回” (Replacement)。",
      "放回后，第二次抽时的条件和第一次完全一样吗？",
      "如果条件复原，就是独立事件。",
      "回答 Independent。"
    ],
    hintsEn: [
      "Key word is 'put it back' (Replacement).",
      "After replacement, are the conditions exactly the same as the first draw?",
      "If conditions are restored, it's Independent.",
      "Answer Independent."
    ],
    explanation: "因为放回了，第二次抽牌时总数仍是52，各花色数量不变，不受第一次影响。所以是独立事件。",
    explanationEn: "Because of replacement, the total remains 52 and suits count is unchanged. Not affected by 1st draw. So Independent."
  },
  {
    id: "P014",
    difficulty: 2,
    topic: "抽球",
    topicEn: "Balls",
    tags: ["独立计算", "放回"],
    tagsEn: ["Independent Calc", "With Replacement"],
    question: "一副52张牌（4种花色各13张）。**有放回**地抽两次。两次都抽到红桃的概率是？",
    questionEn: "Standard deck of 52 cards (13 Hearts). Draw 2 cards **with replacement**. Probability of both being Hearts?",
    answerStr: "1/16",
    answerVal: 0.0625,
    hints: [
      "这是题型 2：独立事件概率计算。",
      "第一次抽红桃的概率是多少？(13/52)",
      "因为放回，第二次抽红桃概率也是 13/52。",
      "计算 (1/4) * (1/4)。"
    ],
    hintsEn: [
      "Type 2: Independent Calculation.",
      "Probability of Hearts first? (13/52)",
      "With replacement, probability of Hearts second is also 13/52.",
      "Calculate (1/4) * (1/4)."
    ],
    explanation: "P = P(A) × P(B) = (13/52) × (13/52) = (1/4) × (1/4) = 1/16。",
    explanationEn: "P = P(A) × P(B) = (13/52) × (13/52) = (1/4) × (1/4) = 1/16."
  },
  {
    id: "P015",
    difficulty: 3,
    topic: "抽球",
    topicEn: "Balls",
    tags: ["相依计算", "不放回"],
    tagsEn: ["Dependent Calc", "Without Replacement"],
    question: "一副52张牌。**不放回**地抽两次。两次都抽到“A”的概率是？",
    questionEn: "Standard 52-card deck. Draw 2 cards **without replacement**. Probability of drawing two Aces?",
    answerStr: "1/221",
    answerVal: 0.00452488687,
    hints: [
      "这是题型 3：相依事件概率计算。",
      "一副牌有4张A。第一次抽A的概率是 4/52。",
      "抽走一张A后，剩51张牌，其中剩3张A。",
      "计算 (4/52) * (3/51)。"
    ],
    hintsEn: [
      "Type 3: Dependent Calculation.",
      "Deck has 4 Aces. Prob of first Ace is 4/52.",
      "After taking one Ace, 51 cards remain, 3 are Aces.",
      "Calculate (4/52) * (3/51)."
    ],
    explanation: "P = (4/52) × (3/51) = (1/13) × (1/17) = 1/221。",
    explanationEn: "P = (4/52) × (3/51) = (1/13) × (1/17) = 1/221."
  },
  {
    id: "P016",
    difficulty: 3,
    topic: "抽球",
    topicEn: "Balls",
    tags: ["未知前结果", "等效独立"],
    tagsEn: ["Unknown First", "Effectively Independent"],
    question: "一副52张牌。**不放回**抽两张。在**不知道**第一张是什么的情况下，第二张是“红桃”的概率是？",
    questionEn: "Standard 52-card deck. Draw 2 **without replacement**. If you **don't know** the first card, what is the probability the second is a Heart?",
    answerStr: "1/4",
    answerVal: 0.25,
    hints: [
      "这是补充题型：不放回 + 未知前结果。",
      "根据关键法则，未知前结果时，概率不变。",
      "或者用全概率公式算：P(红,红) + P(非红,红)。",
      "结果和直接抽一张一样：13/52。"
    ],
    hintsEn: [
      "Supplementary Type: No Replacement + Unknown First.",
      "Critical Rule: If first is unknown, probability is unchanged.",
      "Or sum total probability: P(Heart, Heart) + P(Not Heart, Heart).",
      "Result is same as single draw: 13/52."
    ],
    explanation: "虽然不放回，但因不知道第一张结果，第二张抽到红桃的概率 = 原比例 = 13/52 = 1/4。",
    explanationEn: "Even without replacement, since the first is unknown, the probability for the second remains the original ratio = 13/52 = 1/4."
  },
  {
    id: "P017",
    difficulty: 2,
    topic: "抽球",
    topicEn: "Balls",
    tags: ["独立计算", "放回"],
    tagsEn: ["Independent Calc", "With Replacement"],
    question: "袋中有5个黑球和4个白球（共9个）。抽出一球放回，再抽一球。连续两次抽到黑球的概率是？",
    questionEn: "5 black balls, 4 white balls (9 total). Draw one, put it back, draw again. Probability of drawing black twice in a row?",
    answerStr: "25/81",
    answerVal: 0.308641975,
    hints: [
      "这是有放回抽样，属于独立事件。",
      "P(黑) = 5/9。",
      "两次都是黑球 = P(黑) × P(黑)。",
      "计算 (5/9) * (5/9)。"
    ],
    hintsEn: [
      "This is with replacement, so Independent Events.",
      "P(Black) = 5/9.",
      "P(Black then Black) = P(Black) * P(Black).",
      "Calculate (5/9) * (5/9)."
    ],
    explanation: "因有放回，两次独立。P = (5/9) × (5/9) = 25/81。",
    explanationEn: "With replacement means independent. P = (5/9) * (5/9) = 25/81."
  },
  {
    id: "P018",
    difficulty: 2,
    topic: "抽球",
    topicEn: "Balls",
    tags: ["相依计算", "不放回"],
    tagsEn: ["Dependent Calc", "Without Replacement"],
    question: "袋中有5个黑球和4个白球。不放回抽两球。已知第一次抽到白球，求第二次抽到黑球的概率。",
    questionEn: "5 black, 4 white. Draw 2 without replacement. Given 1st is White, what is the probability 2nd is Black?",
    answerStr: "5/8",
    answerVal: 0.625,
    hints: [
      "不放回属于相依事件(Dependent)。",
      "第一次抽走了白球，袋子里还剩几个球？(8个)",
      "黑球数量变了吗？(没变，还是5个)",
      "计算 剩余黑球 / 剩余总数。"
    ],
    hintsEn: [
      "Without replacement means Dependent Events.",
      "One white ball is gone. Total balls left? (8)",
      "Did Black count change? (No, still 5)",
      "Calculate Remaining Black / Remaining Total."
    ],
    explanation: "抽走一个白球后，剩8个球，其中5个黑球。P = 5/8。",
    explanationEn: "After removing one white, 8 balls remain, 5 are black. P = 5/8."
  },
  {
    id: "P019",
    difficulty: 3,
    topic: "抽球",
    topicEn: "Balls",
    tags: ["未知前结果", "等效独立"],
    tagsEn: ["Unknown First", "Effectively Independent"],
    question: "袋中有5个黑球和4个白球。不放回抽两球。如果**不知道**第一次的结果，第二次抽到白球的概率是？",
    questionEn: "5 black, 4 white. Draw 2 without replacement. If 1st result is **unknown**, probability 2nd is White?",
    answerStr: "4/9",
    answerVal: 0.444444444,
    hints: [
      "这是“不放回 + 未知前结果”的情况。",
      "根据关键法则：未知第一次结果，第二次概率不变。",
      "它等效于直接从袋子里抽一个球。",
      "原来白球概率是 4/9。"
    ],
    hintsEn: [
      "This is 'No Replacement + Unknown First'.",
      "Critical Rule: Probability remains unchanged if 1st is unknown.",
      "It's equivalent to drawing one ball from the start.",
      "Original P(White) is 4/9."
    ],
    explanation: "因为不知道第一次结果，根据全概率公式或对称性，第二次抽到白球的概率等于初始概率。P = 4/9。",
    explanationEn: "Since the first result is unknown, by symmetry or total probability, P(2nd White) = P(Initial White) = 4/9."
  },
  {
    id: "P020",
    difficulty: 3,
    topic: "抽球",
    topicEn: "Balls",
    tags: ["相依计算", "不放回"],
    tagsEn: ["Dependent Calc", "Without Replacement"],
    question: "一副52张牌。不放回地抽两张。先抽到K，再抽到Q的概率是？",
    questionEn: "Deck of 52 cards. Draw 2 without replacement. Probability of King first, then Queen?",
    answerStr: "4/663",
    answerVal: 0.0060331825,
    hints: [
      "属于相依事件。P(K then Q) = P(K) * P(Q|K)。",
      "P(K) = 4/52。",
      "抽走K后剩51张，其中Q有4张。",
      "计算 (4/52) * (4/51)。"
    ],
    hintsEn: [
      "Dependent Events. P(K then Q) = P(K) * P(Q|K).",
      "P(K) = 4/52.",
      "After K is gone, 51 cards left, 4 are Queens.",
      "Calculate (4/52) * (4/51)."
    ],
    explanation: "P = (1/13) * (4/51) = 4/663。这是相依事件(Dependent)。",
    explanationEn: "P = (1/13) * (4/51) = 4/663. These are Dependent events."
  },
  {
    id: "P021",
    difficulty: 2,
    topic: "抽球",
    topicEn: "Balls",
    tags: ["独立计算", "放回"],
    tagsEn: ["Independent Calc", "With Replacement"],
    question: "一副52张牌。**有放回**地抽两张。第一张是黑桃，第二张是非人头牌(A-10)的概率是？",
    questionEn: "Deck of 52 cards. Draw 2 **with replacement**. Probability 1st is Spade, 2nd is Non-face card (A-10)?",
    answerStr: "5/26",
    answerVal: 0.19230769,
    hints: [
      "属于独立事件。P(Spade) * P(Non-face)。",
      "P(黑桃) = 13/52 = 1/4。",
      "非人头牌(A-10)每种花色10张，共40张。",
      "计算 (1/4) * (40/52)。"
    ],
    hintsEn: [
      "Independent Events. P(Spade) * P(Non-face).",
      "P(Spade) = 13/52 = 1/4.",
      "Non-face cards (A-10) are 10 per suit, total 40.",
      "Calculate (1/4) * (40/52)."
    ],
    explanation: "P = (1/4) * (10/13) = 10/52 = 5/26。这是独立事件。",
    explanationEn: "P = (1/4) * (10/13) = 10/52 = 5/26. These are Independent events."
  },
  {
    id: "P022",
    difficulty: 2,
    topic: "抽球",
    topicEn: "Balls",
    tags: ["相依计算", "不放回"],
    tagsEn: ["Dependent Calc", "Without Replacement"],
    question: "罐中有6红、4蓝、5黄珠子（共15个）。不放回抽两颗。已知第一颗是蓝色，第二颗**不是红色**的概率是？",
    questionEn: "6 Red, 4 Blue, 5 Yellow marbles (15 total). Draw 2 without replacement. Given 1st is Blue, probability 2nd is **not Red**?",
    answerStr: "4/7",
    answerVal: 0.57142857,
    hints: [
      "第一次抽走蓝球，剩14个。",
      "不是红色 = 蓝色(剩3) + 黄色(5)。",
      "非红球总数 = 8。",
      "计算 8/14。"
    ],
    hintsEn: [
      "1 Blue is gone, 14 remain.",
      "Not Red = Blue (3 left) + Yellow (5).",
      "Total Not Red = 8.",
      "Calculate 8/14."
    ],
    explanation: "剩14球，非红有8个(3蓝+5黄)。P = 8/14 = 4/7。",
    explanationEn: "14 marbles left. Not Red count is 8 (3B+5Y). P = 8/14 = 4/7."
  },
  {
    id: "P023",
    difficulty: 3,
    topic: "抽球",
    topicEn: "Balls",
    tags: ["未知前结果", "等效独立"],
    tagsEn: ["Unknown First", "Effectively Independent"],
    question: "罐中有6红、4蓝、5黄珠子。不放回抽两颗。若**不知道**第一颗的结果，第二颗是黄色的概率是？",
    questionEn: "6 Red, 4 Blue, 5 Yellow marbles. Draw 2 without replacement. If 1st result is **unknown**, probability 2nd is Yellow?",
    answerStr: "1/3",
    answerVal: 0.33333333,
    hints: [
      "题型：未知前结果 -> 概率不变。",
      "P(第2次黄) = P(第1次黄)。",
      "黄色有5个，总数15个。",
      "计算 5/15。"
    ],
    hintsEn: [
      "Type: Unknown First -> Probability Unchanged.",
      "P(2nd Yellow) = P(1st Yellow).",
      "5 Yellow, 15 Total.",
      "Calculate 5/15."
    ],
    explanation: "根据对称性/关键法则，概率等于直接抽一次黄色。P = 5/15 = 1/3。",
    explanationEn: "By symmetry/critical rule, probability equals drawing Yellow first. P = 5/15 = 1/3."
  },
  {
    id: "P024",
    difficulty: 2,
    topic: "综合",
    topicEn: "General",
    tags: ["相依计算", "不放回"],
    tagsEn: ["Dependent Calc", "Without Replacement"],
    question: "盒子有8个球（编号1-8）。不放回抽两个。第一个是偶数，且第二个是奇数的概率是？",
    questionEn: "Box with 8 numbered balls (1-8). Draw 2 without replacement. Probability 1st is Even AND 2nd is Odd?",
    answerStr: "2/7",
    answerVal: 0.28571428,
    hints: [
      "偶数有{2,4,6,8}共4个，奇数有{1,3,5,7}共4个。",
      "P(第1偶) = 4/8 = 1/2。",
      "抽走一个偶数后，剩7球，奇数还是4个。",
      "计算 (1/2) * (4/7)。"
    ],
    hintsEn: [
      "Evens: {2,4,6,8} (4). Odds: {1,3,5,7} (4).",
      "P(1st Even) = 4/8 = 1/2.",
      "After taking an Even, 7 balls left, 4 are Odd.",
      "Calculate (1/2) * (4/7)."
    ],
    explanation: "P = P(偶) * P(奇|偶) = (4/8) * (4/7) = 1/2 * 4/7 = 2/7。",
    explanationEn: "P = P(Even) * P(Odd|Even) = (4/8) * (4/7) = 1/2 * 4/7 = 2/7."
  },
  {
    id: "P025",
    difficulty: 3,
    topic: "综合",
    topicEn: "General",
    tags: ["条件概率", "不放回"],
    tagsEn: ["Conditional Probability", "Without Replacement"],
    question: "盒子有8个球（编号1-8）。不放回抽两个。已知第一个球是6，第二个球是3的倍数的概率是？",
    questionEn: "Box with balls 1-8. Draw 2 without replacement. Given 1st is 6, probability 2nd is a multiple of 3?",
    answerStr: "1/7",
    answerVal: 0.14285714,
    hints: [
      "已知第一个是6（已取走）。",
      "剩7个球：{1,2,3,4,5,7,8}。",
      "剩下的球中，谁是3的倍数？只有3。",
      "计算 1/7。"
    ],
    hintsEn: [
      "Given 1st is 6 (removed).",
      "7 balls left: {1,2,3,4,5,7,8}.",
      "Who is a multiple of 3 among remaining? Only 3.",
      "Calculate 1/7."
    ],
    explanation: "6被抽走，3的倍数只剩3一个。总数剩7。P = 1/7。",
    explanationEn: "6 is gone. Only 3 remains as a multiple of 3. Total 7 left. P = 1/7."
  },
  {
    id: "P026",
    difficulty: 3,
    topic: "抽球",
    topicEn: "Balls",
    tags: ["复杂相依", "不放回"],
    tagsEn: ["Complex Dependent", "Without Replacement"],
    question: "一副52张牌。不放回地抽3张。依次抽到“A”、“非A牌”、“K”的概率是？（非A牌指除了A以外的任何牌）",
    questionEn: "Deck of 52 cards. Draw 3 without replacement. Probability of: 1st Ace, 2nd non-Ace, 3rd King?",
    answerStr: "94/16575",
    answerVal: 0.00567119,
    hints: [
      "这道题比较难，要分情况讨论第二张牌。",
      "情况1：A -> K -> K；情况2：A -> 非A非K -> K。",
      "P1 = (4/52)*(4/51)*(3/50)。",
      "P2 = (4/52)*(44/51)*(4/50)。相加即可。"
    ],
    hintsEn: [
      "Tricky! Case analysis needed for the 2nd card.",
      "Case 1: Ace -> King -> King. Case 2: Ace -> Not-Ace-Not-King -> King.",
      "Calc P1 = (4/52)*(4/51)*(3/50).",
      "Calc P2 = (4/52)*(44/51)*(4/50). Sum them up."
    ],
    explanation: "第二张是否为K影响第三张概率，故需全概率公式拆分。总和 ≈ 0.0057。",
    explanationEn: "Whether 2nd is K affects 3rd. Using Total Probability: Sum of cases ≈ 0.0057."
  },
  {
    id: "P027",
    difficulty: 3,
    topic: "抽球",
    topicEn: "Balls",
    tags: ["二项分布", "放回"],
    tagsEn: ["Binomial Dist", "With Replacement"],
    question: "一副52张牌。**有放回**洗牌抽3次。恰好抽到2张人头牌（J/Q/K）的概率是？",
    questionEn: "52 cards. Draw 3 **with replacement**. Probability of getting exactly 2 Face cards (J/Q/K)?",
    answerStr: "270/2197",
    answerVal: 0.1228948,
    hints: [
      "有放回 = 独立重复试验 (Bernoulli)。",
      "人头牌(J,Q,K)有12张。P(Face) = 12/52 = 3/13。",
      "需要 C(3,2) 种排列方式。",
      "计算 3 * (3/13)^2 * (10/13)。"
    ],
    hintsEn: [
      "With replacement = Bernoulli Trials.",
      "12 Face cards. P(Face) = 12/52 = 3/13.",
      "Need C(3,2) arrangements.",
      "Calculate 3 * (3/13)^2 * (10/13)."
    ],
    explanation: "独立重复试验公式：C(3,2)*(3/13)^2*(10/13) ≈ 0.123。",
    explanationEn: "Binomial Formula: C(3,2)*(3/13)^2*(10/13) ≈ 0.123."
  },
  {
    id: "P028",
    difficulty: 2,
    topic: "抽球",
    topicEn: "Balls",
    tags: ["条件概率", "不放回"],
    tagsEn: ["Conditional", "Without Replacement"],
    question: "糖果罐：7紫、5橙、8粉（共20个）。不放回抽2个。已知第一个**不是紫色**，第二个是橙色或粉色的概率是？",
    questionEn: "Jar: 7 Purple, 5 Orange, 8 Pink (20 total). Draw 2 no replacement. Given 1st is **not Purple**, prob 2nd is Orange or Pink?",
    answerStr: "12/19",
    answerVal: 0.6315789,
    hints: [
      "第一个“不是紫色”，说明是橙或粉。",
      "“橙或粉”的总数是13。取走一个后剩12个。",
      "总数从20变成19。",
      "计算 12/19。"
    ],
    hintsEn: [
      "1st 'Not Purple' means it was Orange or Pink.",
      "Total 'Orange or Pink' was 13. One gone, 12 left.",
      "Total count becomes 19.",
      "Calculate 12/19."
    ],
    explanation: "第一个非紫，即消耗了非紫集合的一个。剩12个非紫，总数19。P = 12/19。",
    explanationEn: "One non-purple used. 12 non-purple remain out of 19 total. P = 12/19."
  },
  {
    id: "P029",
    difficulty: 3,
    topic: "抽球",
    topicEn: "Balls",
    tags: ["未知前结果", "等效独立"],
    tagsEn: ["Unknown First", "Effectively Independent"],
    question: "糖果罐：7紫、5橙、8粉。不放回抽2个。若**不知道**第一个的结果，第二个是紫色的概率是？",
    questionEn: "Jar: 7 Purple, 5 Orange, 8 Pink. Draw 2 no replacement. If 1st result is **unknown**, prob 2nd is Purple?",
    answerStr: "7/20",
    answerVal: 0.35,
    hints: [
      "未知第一次结果，根据关键法则，概率不变。",
      "就像你是第一个抽的一样。",
      "紫色原本有7个，总数20个。",
      "计算 7/20。"
    ],
    hintsEn: [
      "Unknown first result = Probability unchanged.",
      "Treat it as if you drew first.",
      "7 Purple, 20 Total.",
      "Calculate 7/20."
    ],
    explanation: "未知前次结果，概率等于先验概率。P = 7/20。",
    explanationEn: "Unknown prior outcome, probability equals prior probability. P = 7/20."
  },
  {
    id: "P030",
    difficulty: 3,
    topic: "综合",
    topicEn: "General",
    tags: ["全概率公式", "复杂场景"],
    tagsEn: ["Total Probability", "Complex Scenario"],
    question: "箱A(4偶2奇)，箱B(3偶5奇)。先选箱子(P(A)=0.6, P(B)=0.4)，再从该箱不放回抽2球。第一球偶数且第二球奇数的概率是？",
    questionEn: "Box A (4 Even, 2 Odd), Box B (3 Even, 5 Odd). Pick Box (P(A)=0.6, P(B)=0.4), then draw 2 balls (no replace). Prob of 1st Even AND 2nd Odd?",
    answerStr: "187/700",
    answerVal: 0.2671428,
    hints: [
      "全概率公式：P(总) = P(A路径) + P(B路径)。",
      "路径A：0.6 * (4/6 * 2/5)。",
      "路径B：0.4 * (3/8 * 5/7)。",
      "算出两部分再相加。"
    ],
    hintsEn: [
      "Total Probability: P(Total) = P(Path A) + P(Path B).",
      "Path A: 0.6 * (4/6 * 2/5).",
      "Path B: 0.4 * (3/8 * 5/7).",
      "Sum them up."
    ],
    explanation: "路径A概率 0.16，路径B概率 ~0.107。总和 187/700 ≈ 0.267。",
    explanationEn: "Path A prob 0.16, Path B prob ~0.107. Sum 187/700 ≈ 0.267."
  },
  {
    id: "P031",
    difficulty: 3,
    topic: "综合",
    topicEn: "General",
    tags: ["贝叶斯定理", "逆向概率"],
    tagsEn: ["Bayes Theorem", "Inverse Probability"],
    question: "承接上题（箱A:4偶2奇, 箱B:3偶5奇）。已知抽出的第一个球是偶数，它来自箱A的概率是？",
    questionEn: "Same boxes. Given the 1st ball drawn is Even, what is the probability it came from Box A?",
    answerStr: "8/11",
    answerVal: 0.7272727,
    hints: [
      "这是贝叶斯定理题。P(A|偶) = P(偶|A)P(A) / P(偶)。",
      "分子：从A抽到偶的概率 = 0.6 * (4/6) = 0.4。",
      "分母：总的抽到偶的概率 = 0.6*(4/6) + 0.4*(3/8)。",
      "计算 0.4 / 0.55。"
    ],
    hintsEn: [
      "Bayes Theorem. P(A|Even) = P(Even|A)P(A) / P(Even).",
      "Numerator: Prob Even from A = 0.6 * (4/6) = 0.4.",
      "Denominator: Total Prob Even = 0.6*(4/6) + 0.4*(3/8).",
      "Calculate 0.4 / 0.55."
    ],
    explanation: "P(A|偶) = 0.4 / (0.4 + 0.15) = 0.4 / 0.55 = 8/11。",
    explanationEn: "P(A|Even) = 0.4 / (0.4 + 0.15) = 0.4 / 0.55 = 8/11."
  }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = questionBank;
}
