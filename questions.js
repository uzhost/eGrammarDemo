// questions.js
const questionBank = [
  {
    question: "He _____ to the market every day.",
    options: ["go", "goes", "going", "gone"],
    answer: "goes",
    difficulty: "easy",
    category: "present tense"
  },
  {
    question: "She _____ a book when I saw her.",
    options: ["reads", "read", "was reading", "has read"],
    answer: "was reading",
    difficulty: "medium",
    category: "past continuous"
  },
  {
    question: "If I _____ more time, I would help you.",
    options: ["have", "had", "will have", "has"],
    answer: "had",
    difficulty: "medium",
    category: "conditionals"
  },
  {
    question: "They have lived here _____ 2015.",
    options: ["since", "for", "at", "from"],
    answer: "since",
    difficulty: "easy",
    category: "prepositions"
  },
  {
    question: "The work _____ by tomorrow.",
    options: ["will finish", "will have finished", "will be finished", "finished"],
    answer: "will be finished",
    difficulty: "hard",
    category: "passive voice"
  },
  {
    question: "Neither the boys nor the girl _____ late.",
    options: ["are", "were", "is", "have"],
    answer: "is",
    difficulty: "medium",
    category: "subject-verb agreement"
  },
  {
    question: "She said she _____ to the meeting.",
    options: ["will come", "would come", "comes", "coming"],
    answer: "would come",
    difficulty: "medium",
    category: "reported speech"
  },
  {
    question: "I enjoy _____ new places.",
    options: ["visit", "to visit", "visiting", "visited"],
    answer: "visiting",
    difficulty: "easy",
    category: "gerunds and infinitives"
  },
  {
    question: "This is the book _____ I told you about.",
    options: ["which", "who", "whom", "whose"],
    answer: "which",
    difficulty: "medium",
    category: "relative clauses"
  },
  {
    question: "He drives _____ than his brother.",
    options: ["carefully", "more carefully", "most carefully", "careful"],
    answer: "more carefully",
    difficulty: "easy",
    category: "comparatives"
  },
  // Duplicate and edit to make 100 unique questions
];

// Generate 90 more similar items
for (let i = 11; i <= 100; i++) {
  questionBank.push({
    question: `Sample grammar question ${i}?`,
    options: ["Option A", "Option B", "Option C", "Option D"],
    answer: "Option A",
    difficulty: i <= 30 ? "easy" : i <= 70 ? "medium" : "hard",
    category: ["present tense", "past tense", "conditionals", "articles", "modal verbs", "passive voice", "prepositions", "comparatives", "connectors"][i % 9]
  });
}
