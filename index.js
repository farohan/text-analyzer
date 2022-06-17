//Welcome to index.js!

const paper = document.getElementById('paper');
const analyze = document.getElementById('analyze');
const results = document.getElementById('results');

const textAnalyzer = {
    name: 'Text Analyzer 1.0',
    charCount: () => {
        return paper.value.length;
    },
    wordCount: () => {
        let trimmedPaper = paper.value.trim();
        return Math.round(trimmedPaper.length / 5);
    },
    longestWord: (paper) => {
        let sorted = paper.value
            .split(' ')
            .sort((wordA, wordB) => wordB.length - wordA.length);
        return sorted[0];
    },
    vowelCounter: (paper) => {
        const vowels = ['a', 'e', 'i', 'o', 'u'];

        let count = 0;

        for (let letter of paper.value.toLowerCase()) {
            if (vowels.includes(letter)) 
                count++;
        }

        return count;
    },
    bagOfWords: () => {
    },
    uniqueWords: () => {
    }
};


document.title = textAnalyzer.name;
const heading = document.querySelector('h1');
heading.innerHTML = textAnalyzer.name;

analyze.addEventListener('click', showResults);

function showResults() {
    results.innerHTML = `
      <strong> Character Count (incl. spaces): </strong> ${textAnalyzer.charCount()}
      <br>
      <strong> Word Count: </strong> ${textAnalyzer.wordCount()}
      <br>
      <strong> Longest Word: </strong> ${textAnalyzer.longestWord(paper)}
      <br>
      <strong> Number of Vowels: </strong> ${textAnalyzer.vowelCounter(paper)}
      <br>
      <strong> Bag of Words: </strong> ${textAnalyzer.bagOfWords()}
      <br>
      <strong> Number of Unique Words: </strong> ${textAnalyzer.uniqueWords()}
    `
}
