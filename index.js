//Welcome to index.js!

const paper = document.getElementById('paper');
const submit = document.getElementById('submit');
const results = document.getElementById('results');

const textAnalyzer = {
    name: 'Text Analyzer 1.0',
    charCount: () => {
        console.log(paper.value.length);
    },
    wordCount: () => {
        console.log(Math.round(paper.value.length / 5));
    },
    longestWord: (paper) => {
        let sorted = paper.value
            .split(' ')
            .sort((wordA, wordB) => wordB.length - wordA.length);
        return sorted[0];
    },
    bagOfWords: () => {
    },
    uniqueWords: () => {
    }
};


document.title = textAnalyzer.name;
const heading = document.querySelector('h1');
heading.innerHTML = textAnalyzer.name;
