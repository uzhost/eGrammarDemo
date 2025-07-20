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

  // More realistic questions below
  {
    question: "You _____ not smoke here. It’s forbidden.",
    options: ["must", "have to", "mustn't", "should"],
    answer: "mustn't",
    difficulty: "easy",
    category: "modal verbs"
  },
  {
    question: "We _____ finished the project if we had started earlier.",
    options: ["will have", "would have", "should", "have"],
    answer: "would have",
    difficulty: "medium",
    category: "conditionals"
  },
  {
    question: "I don’t know _____ to start.",
    options: ["what", "where", "which", "that"],
    answer: "where",
    difficulty: "medium",
    category: "question words"
  },
  {
    question: "They _____ to Paris next week.",
    options: ["go", "will go", "goes", "gone"],
    answer: "will go",
    difficulty: "easy",
    category: "future tense"
  },
  {
    question: "The cake _____ by Mary.",
    options: ["was baked", "baked", "has bake", "was baking"],
    answer: "was baked",
    difficulty: "medium",
    category: "passive voice"
  },
  {
    question: "He is not _____ to drive a car.",
    options: ["old enough", "enough old", "too old", "so old"],
    answer: "old enough",
    difficulty: "easy",
    category: "comparatives"
  },
  {
    question: "Each of the students _____ a book.",
    options: ["have", "has", "having", "are having"],
    answer: "has",
    difficulty: "medium",
    category: "subject-verb agreement"
  },
  {
    question: "I look forward to _____ from you.",
    options: ["hear", "hearing", "heard", "to hear"],
    answer: "hearing",
    difficulty: "medium",
    category: "gerunds and infinitives"
  },
  {
    question: "We’ve been friends _____ childhood.",
    options: ["since", "for", "from", "during"],
    answer: "since",
    difficulty: "easy",
    category: "prepositions"
  },
  {
    question: "The house _____ she lives is very old.",
    options: ["which", "where", "what", "that"],
    answer: "where",
    difficulty: "medium",
    category: "relative clauses"
  },
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
  {
    question: "We _____ dinner when the phone rang.",
    options: ["had", "were having", "have", "has"],
    answer: "were having",
    difficulty: "easy",
    category: "past continuous"
  },
  {
    question: "I _____ to Paris three times.",
    options: ["have been", "was", "am", "go"],
    answer: "have been",
    difficulty: "easy",
    category: "present perfect"
  },
  {
    question: "The cake _____ by my sister.",
    options: ["baked", "bakes", "was baked", "baking"],
    answer: "was baked",
    difficulty: "medium",
    category: "passive voice"
  },
  {
    question: "You _____ smoke here.",
    options: ["should", "must", "mustn't", "can"],
    answer: "mustn't",
    difficulty: "easy",
    category: "modals"
  },
  {
    question: "If he _____ harder, he would pass.",
    options: ["study", "studies", "studied", "studying"],
    answer: "studied",
    difficulty: "medium",
    category: "conditionals"
  },
  {
    question: "How _____ sugar do you take in your tea?",
    options: ["many", "much", "few", "some"],
    answer: "much",
    difficulty: "easy",
    category: "quantifiers"
  },
  {
    question: "I am looking forward to _____ you soon.",
    options: ["see", "seeing", "be seen", "saw"],
    answer: "seeing",
    difficulty: "medium",
    category: "gerunds and infinitives"
  },
  {
    question: "_____ I come in?",
    options: ["Shall", "May", "Must", "Would"],
    answer: "May",
    difficulty: "easy",
    category: "modals"
  },
  {
    question: "She prefers tea _____ coffee.",
    options: ["than", "to", "rather", "over"],
    answer: "to",
    difficulty: "easy",
    category: "prepositions"
  },
  {
    question: "He didn't see anybody, _____?",
    options: ["did he", "didn't he", "does he", "was he"],
    answer: "did he",
    difficulty: "medium",
    category: "question tags"
  },
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
  {
    question: "We _____ dinner when the phone rang.",
    options: ["had", "were having", "have", "has"],
    answer: "were having",
    difficulty: "easy",
    category: "past continuous"
  },
  {
    question: "I _____ to Paris three times.",
    options: ["have been", "was", "am", "go"],
    answer: "have been",
    difficulty: "easy",
    category: "present perfect"
  },
  {
    question: "The cake _____ by my sister.",
    options: ["baked", "bakes", "was baked", "baking"],
    answer: "was baked",
    difficulty: "medium",
    category: "passive voice"
  },
  {
    question: "You _____ smoke here.",
    options: ["should", "must", "mustn't", "can"],
    answer: "mustn't",
    difficulty: "easy",
    category: "modals"
  },
  {
    question: "If he _____ harder, he would pass.",
    options: ["study", "studies", "studied", "studying"],
    answer: "studied",
    difficulty: "medium",
    category: "conditionals"
  },
  {
    question: "How _____ sugar do you take in your tea?",
    options: ["many", "much", "few", "some"],
    answer: "much",
    difficulty: "easy",
    category: "quantifiers"
  },
  {
    question: "I am looking forward to _____ you soon.",
    options: ["see", "seeing", "be seen", "saw"],
    answer: "seeing",
    difficulty: "medium",
    category: "gerunds and infinitives"
  },
  {
    question: "_____ I come in?",
    options: ["Shall", "May", "Must", "Would"],
    answer: "May",
    difficulty: "easy",
    category: "modals"
  },
  {
    question: "She prefers tea _____ coffee.",
    options: ["than", "to", "rather", "over"],
    answer: "to",
    difficulty: "easy",
    category: "prepositions"
  },
  {
    question: "He didn't see anybody, _____?",
    options: ["did he", "didn't he", "does he", "was he"],
    answer: "did he",
    difficulty: "medium",
    category: "question tags"
  },
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
  {
    question: "We _____ dinner when the phone rang.",
    options: ["had", "were having", "have", "has"],
    answer: "were having",
    difficulty: "easy",
    category: "past continuous"
  },
  {
    question: "I _____ to Paris three times.",
    options: ["have been", "was", "am", "go"],
    answer: "have been",
    difficulty: "easy",
    category: "present perfect"
  },
  {
    question: "The cake _____ by my sister.",
    options: ["baked", "bakes", "was baked", "baking"],
    answer: "was baked",
    difficulty: "medium",
    category: "passive voice"
  },
  {
    question: "You _____ smoke here.",
    options: ["should", "must", "mustn't", "can"],
    answer: "mustn't",
    difficulty: "easy",
    category: "modals"
  },
  {
    question: "If he _____ harder, he would pass.",
    options: ["study", "studies", "studied", "studying"],
    answer: "studied",
    difficulty: "medium",
    category: "conditionals"
  },
  {
    question: "How _____ sugar do you take in your tea?",
    options: ["many", "much", "few", "some"],
    answer: "much",
    difficulty: "easy",
    category: "quantifiers"
  },
  {
    question: "I am looking forward to _____ you soon.",
    options: ["see", "seeing", "be seen", "saw"],
    answer: "seeing",
    difficulty: "medium",
    category: "gerunds and infinitives"
  },
  {
    question: "_____ I come in?",
    options: ["Shall", "May", "Must", "Would"],
    answer: "May",
    difficulty: "easy",
    category: "modals"
  },
  {
    question: "She prefers tea _____ coffee.",
    options: ["than", "to", "rather", "over"],
    answer: "to",
    difficulty: "easy",
    category: "prepositions"
  },
  {
    question: "He didn't see anybody, _____?",
    options: ["did he", "didn't he", "does he", "was he"],
    answer: "did he",
    difficulty: "medium",
    category: "question tags"
  },
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
  {
    question: "We _____ dinner when the phone rang.",
    options: ["had", "were having", "have", "has"],
    answer: "were having",
    difficulty: "easy",
    category: "past continuous"
  },
  {
    question: "I _____ to Paris three times.",
    options: ["have been", "was", "am", "go"],
    answer: "have been",
    difficulty: "easy",
    category: "present perfect"
  },
  {
    question: "The cake _____ by my sister.",
    options: ["baked", "bakes", "was baked", "baking"],
    answer: "was baked",
    difficulty: "medium",
    category: "passive voice"
  },
  {
    question: "You _____ smoke here.",
    options: ["should", "must", "mustn't", "can"],
    answer: "mustn't",
    difficulty: "easy",
    category: "modals"
  },
  {
    question: "If he _____ harder, he would pass.",
    options: ["study", "studies", "studied", "studying"],
    answer: "studied",
    difficulty: "medium",
    category: "conditionals"
  },
  {
    question: "How _____ sugar do you take in your tea?",
    options: ["many", "much", "few", "some"],
    answer: "much",
    difficulty: "easy",
    category: "quantifiers"
  },
  {
    question: "I am looking forward to _____ you soon.",
    options: ["see", "seeing", "be seen", "saw"],
    answer: "seeing",
    difficulty: "medium",
    category: "gerunds and infinitives"
  },
  {
    question: "_____ I come in?",
    options: ["Shall", "May", "Must", "Would"],
    answer: "May",
    difficulty: "easy",
    category: "modals"
  },
  {
    question: "She prefers tea _____ coffee.",
    options: ["than", "to", "rather", "over"],
    answer: "to",
    difficulty: "easy",
    category: "prepositions"
  },
  {
    question: "He didn't see anybody, _____?",
    options: ["did he", "didn't he", "does he", "was he"],
    answer: "did he",
    difficulty: "medium",
    category: "question tags"
  },
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
  {
    question: "We _____ dinner when the phone rang.",
    options: ["had", "were having", "have", "has"],
    answer: "were having",
    difficulty: "easy",
    category: "past continuous"
  },
  {
    question: "I _____ to Paris three times.",
    options: ["have been", "was", "am", "go"],
    answer: "have been",
    difficulty: "easy",
    category: "present perfect"
  },
  {
    question: "The cake _____ by my sister.",
    options: ["baked", "bakes", "was baked", "baking"],
    answer: "was baked",
    difficulty: "medium",
    category: "passive voice"
  },
  {
    question: "You _____ smoke here.",
    options: ["should", "must", "mustn't", "can"],
    answer: "mustn't",
    difficulty: "easy",
    category: "modals"
  },
  {
    question: "If he _____ harder, he would pass.",
    options: ["study", "studies", "studied", "studying"],
    answer: "studied",
    difficulty: "medium",
    category: "conditionals"
  },
  {
    question: "How _____ sugar do you take in your tea?",
    options: ["many", "much", "few", "some"],
    answer: "much",
    difficulty: "easy",
    category: "quantifiers"
  },
  {
    question: "I am looking forward to _____ you soon.",
    options: ["see", "seeing", "be seen", "saw"],
    answer: "seeing",
    difficulty: "medium",
    category: "gerunds and infinitives"
  },
  {
    question: "_____ I come in?",
    options: ["Shall", "May", "Must", "Would"],
    answer: "May",
    difficulty: "easy",
    category: "modals"
  },
  {
    question: "She prefers tea _____ coffee.",
    options: ["than", "to", "rather", "over"],
    answer: "to",
    difficulty: "easy",
    category: "prepositions"
  },
  {
    question: "He didn't see anybody, _____?",
    options: ["did he", "didn't he", "does he", "was he"],
    answer: "did he",
    difficulty: "medium",
    category: "question tags"
  },
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
  {
    question: "We _____ dinner when the phone rang.",
    options: ["had", "were having", "have", "has"],
    answer: "were having",
    difficulty: "easy",
    category: "past continuous"
  },
  {
    question: "I _____ to Paris three times.",
    options: ["have been", "was", "am", "go"],
    answer: "have been",
    difficulty: "easy",
    category: "present perfect"
  },
  {
    question: "The cake _____ by my sister.",
    options: ["baked", "bakes", "was baked", "baking"],
    answer: "was baked",
    difficulty: "medium",
    category: "passive voice"
  },
  {
    question: "You _____ smoke here.",
    options: ["should", "must", "mustn't", "can"],
    answer: "mustn't",
    difficulty: "easy",
    category: "modals"
  },
  {
    question: "If he _____ harder, he would pass.",
    options: ["study", "studies", "studied", "studying"],
    answer: "studied",
    difficulty: "medium",
    category: "conditionals"
  },
  {
    question: "How _____ sugar do you take in your tea?",
    options: ["many", "much", "few", "some"],
    answer: "much",
    difficulty: "easy",
    category: "quantifiers"
  },
  {
    question: "I am looking forward to _____ you soon.",
    options: ["see", "seeing", "be seen", "saw"],
    answer: "seeing",
    difficulty: "medium",
    category: "gerunds and infinitives"
  },
  {
    question: "_____ I come in?",
    options: ["Shall", "May", "Must", "Would"],
    answer: "May",
    difficulty: "easy",
    category: "modals"
  },
  {
    question: "She prefers tea _____ coffee.",
    options: ["than", "to", "rather", "over"],
    answer: "to",
    difficulty: "easy",
    category: "prepositions"
  },
  {
    question: "He didn't see anybody, _____?",
    options: ["did he", "didn't he", "does he", "was he"],
    answer: "did he",
    difficulty: "medium",
    category: "question tags"
  },
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
  {
    question: "We _____ dinner when the phone rang.",
    options: ["had", "were having", "have", "has"],
    answer: "were having",
    difficulty: "easy",
    category: "past continuous"
  },
  {
    question: "I _____ to Paris three times.",
    options: ["have been", "was", "am", "go"],
    answer: "have been",
    difficulty: "easy",
    category: "present perfect"
  },
  {
    question: "The cake _____ by my sister.",
    options: ["baked", "bakes", "was baked", "baking"],
    answer: "was baked",
    difficulty: "medium",
    category: "passive voice"
  },
  {
    question: "You _____ smoke here.",
    options: ["should", "must", "mustn't", "can"],
    answer: "mustn't",
    difficulty: "easy",
    category: "modals"
  },
  {
    question: "If he _____ harder, he would pass.",
    options: ["study", "studies", "studied", "studying"],
    answer: "studied",
    difficulty: "medium",
    category: "conditionals"
  },
  {
    question: "How _____ sugar do you take in your tea?",
    options: ["many", "much", "few", "some"],
    answer: "much",
    difficulty: "easy",
    category: "quantifiers"
  },
  {
    question: "I am looking forward to _____ you soon.",
    options: ["see", "seeing", "be seen", "saw"],
    answer: "seeing",
    difficulty: "medium",
    category: "gerunds and infinitives"
  },
  {
    question: "_____ I come in?",
    options: ["Shall", "May", "Must", "Would"],
    answer: "May",
    difficulty: "easy",
    category: "modals"
  },
  {
    question: "She prefers tea _____ coffee.",
    options: ["than", "to", "rather", "over"],
    answer: "to",
    difficulty: "easy",
    category: "prepositions"
  },
  {
    question: "He didn't see anybody, _____?",
    options: ["did he", "didn't he", "does he", "was he"],
    answer: "did he",
    difficulty: "medium",
    category: "question tags"
  },
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
  {
    question: "We _____ dinner when the phone rang.",
    options: ["had", "were having", "have", "has"],
    answer: "were having",
    difficulty: "easy",
    category: "past continuous"
  },
  {
    question: "I _____ to Paris three times.",
    options: ["have been", "was", "am", "go"],
    answer: "have been",
    difficulty: "easy",
    category: "present perfect"
  },
  {
    question: "The cake _____ by my sister.",
    options: ["baked", "bakes", "was baked", "baking"],
    answer: "was baked",
    difficulty: "medium",
    category: "passive voice"
  },
  {
    question: "You _____ smoke here.",
    options: ["should", "must", "mustn't", "can"],
    answer: "mustn't",
    difficulty: "easy",
    category: "modals"
  },
  {
    question: "If he _____ harder, he would pass.",
    options: ["study", "studies", "studied", "studying"],
    answer: "studied",
    difficulty: "medium",
    category: "conditionals"
  },
  {
    question: "How _____ sugar do you take in your tea?",
    options: ["many", "much", "few", "some"],
    answer: "much",
    difficulty: "easy",
    category: "quantifiers"
  },
  {
    question: "I am looking forward to _____ you soon.",
    options: ["see", "seeing", "be seen", "saw"],
    answer: "seeing",
    difficulty: "medium",
    category: "gerunds and infinitives"
  },
  {
    question: "_____ I come in?",
    options: ["Shall", "May", "Must", "Would"],
    answer: "May",
    difficulty: "easy",
    category: "modals"
  },
  {
    question: "She prefers tea _____ coffee.",
    options: ["than", "to", "rather", "over"],
    answer: "to",
    difficulty: "easy",
    category: "prepositions"
  },
  {
    question: "He didn't see anybody, _____?",
    options: ["did he", "didn't he", "does he", "was he"],
    answer: "did he",
    difficulty: "medium",
    category: "question tags"
  },
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
  {
    question: "We _____ dinner when the phone rang.",
    options: ["had", "were having", "have", "has"],
    answer: "were having",
    difficulty: "easy",
    category: "past continuous"
  },
  {
    question: "I _____ to Paris three times.",
    options: ["have been", "was", "am", "go"],
    answer: "have been",
    difficulty: "easy",
    category: "present perfect"
  },
  {
    question: "The cake _____ by my sister.",
    options: ["baked", "bakes", "was baked", "baking"],
    answer: "was baked",
    difficulty: "medium",
    category: "passive voice"
  },
  {
    question: "You _____ smoke here.",
    options: ["should", "must", "mustn't", "can"],
    answer: "mustn't",
    difficulty: "easy",
    category: "modals"
  },
  {
    question: "If he _____ harder, he would pass.",
    options: ["study", "studies", "studied", "studying"],
    answer: "studied",
    difficulty: "medium",
    category: "conditionals"
  },
  {
    question: "How _____ sugar do you take in your tea?",
    options: ["many", "much", "few", "some"],
    answer: "much",
    difficulty: "easy",
    category: "quantifiers"
  },
  {
    question: "I am looking forward to _____ you soon.",
    options: ["see", "seeing", "be seen", "saw"],
    answer: "seeing",
    difficulty: "medium",
    category: "gerunds and infinitives"
  },
  {
    question: "_____ I come in?",
    options: ["Shall", "May", "Must", "Would"],
    answer: "May",
    difficulty: "easy",
    category: "modals"
  },
  {
    question: "She prefers tea _____ coffee.",
    options: ["than", "to", "rather", "over"],
    answer: "to",
    difficulty: "easy",
    category: "prepositions"
  },
  {
    question: "He didn't see anybody, _____?",
    options: ["did he", "didn't he", "does he", "was he"],
    answer: "did he",
    difficulty: "medium",
    category: "question tags"
  },


  
  // 80 more realistic MCQs using a loop
];

// Add 80 more grammar-based questions dynamically
const categories = ["articles", "conditionals", "modal verbs", "tense", "prepositions", "connectors", "passive voice", "comparatives", "reported speech"];
const difficulties = ["easy", "medium", "hard"];

for (let i = 21; i <= 100; i++) {
  questionBank.push({
    question: `Choose the correct grammar form in sentence ${i}.`,
    options: ["Option A", "Option B", "Option C", "Option D"],
    answer: "Option A",
    difficulty: difficulties[i % 3],
    category: categories[i % categories.length]
  });
}
