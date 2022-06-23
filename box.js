let articles = ['a', 'an', 'the'];
let pronouns = ['I', 'me', 'he', 'him', 'she', 'her', 'they', 'my', 'it', 'you'];
let contractions = ["can't", "won't", "shouldn't", "shan't", "didn't", "couldn't", "cannot"];
let interjections = ['hello', 'hi', 'wow', 'yikes', 'hola', 'ciao', 'good', 'great'];
let prepositions = ['in', 'out', 'up', 'down', 'around', 'between', 'over', 'under', 'beside', 'aside', 'by', 'away'];
let conjunctions = ['and', 'or', 'nor', 'but', 'however', 'neither', 'either', 'for', 'yet', 'so', 'can'];
let other = ['how', 'are', 'who', 'what', 'where', 'when', 'why', 'that', 'to', 'get', 'is', 'yes', 'no', 'maybe', 'will', 'not'];
let useless = ['um', 'uh', 'er', 'ah', 'like', 'okay', 'right'];

export const fillerWords = articles.concat(pronouns, contractions, interjections, prepositions, conjunctions, useless, other);
