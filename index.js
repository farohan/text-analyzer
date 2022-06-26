//Welcome to index.js!

import { fillerWords } from "./box.js";

const paper = document.getElementById('paper');
const analyze = document.getElementById('analyze');
const generalData = document.getElementById('data');
const assumptions = document.getElementById('assumptions');

const textAnalyzer = {
    name: 'Text Analyzer 1.0',
    charCount: () => {
        return paper.value.length;
    },
    exclSpace: () => {

    },
    wordCount: (paper) => {
        let numOfWords = paper.value.split(' ');
        numOfWords = numOfWords.filter(function (str) {
            return /\S/.test(str);
        });
        return numOfWords.length;
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
    consonantCounter: (paper) => {
        const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'y', 'z'];

        let count = 0;

        for (let letter of paper.value.toLowerCase()) {
            if (consonants.includes(letter)) 
                count++;
        }

        return count;
    },
    vToCRatio: () => {
        return textAnalyzer.vowelCounter(paper) / textAnalyzer.consonantCounter(paper);
    },
    cToVRatio: () => {
        return textAnalyzer.consonantCounter(paper) / textAnalyzer.vowelCounter(paper);
    },
    bagOfWords: () => {      
        return fillerWords.length;
    },
    uniqueWords: () => {
    }
};

const judge = {
    name: 'Text Judger',
    lengthJudger: () => {
        if (textAnalyzer.wordCount(paper) <= 75)
            return 'very short';
        else if (textAnalyzer.wordCount(paper) <= 150) 
            return 'short';
        else if (textAnalyzer.wordCount(paper) <= 500)
            return 'medium-sized';
        else if (textAnalyzer.wordCount(paper) <= 2000)
            return 'long';
        else return 'very long';
    },
    vowelComparison: () => {
        if (textAnalyzer.vToCRatio() > textAnalyzer.cToVRatio()) 
            return 'vowels than consonants';
        else return 'consonants than vowels';
    },
    guessedLanguage: () => {
        if (judge.vowelComparison() === 'vowels than consonants')
            return 'Spanish, Portuguese, Italian, or any other vowel-filled language'
        else return 'English or other languages similar to English'
    }
};

document.title = textAnalyzer.name;
const heading = document.querySelector('h1');
heading.innerHTML = textAnalyzer.name;

analyze.addEventListener('click', showResults);

function showResults() {
    generalData.innerHTML = `
      <em> <h2> General Data </h2> </em>

      <strong> Character Count (incl. spaces): </strong> ${textAnalyzer.charCount()}
      <br>
      <strong> Character Count (excl. spaces): </strong> ${textAnalyzer.exclSpace()}
      <br>
      <strong> Word Count: </strong> ${textAnalyzer.wordCount(paper)}
      <br>
      <strong> Longest Word: </strong> ${textAnalyzer.longestWord(paper)}
      <br>
      <strong> Number of Vowels: </strong> ${textAnalyzer.vowelCounter(paper)}
      <br>
      <strong> Number of Consonants: </strong> ${textAnalyzer.consonantCounter(paper)}
      <br>
      <strong> Vowel to Consonant Ratio: </strong> ${textAnalyzer.vToCRatio()}
      <br>
      <strong> Consonant to Vowel Ratio: </strong> ${textAnalyzer.cToVRatio()}
      <br>
      <strong> Bag of Words: </strong> ${textAnalyzer.bagOfWords()}
      <br>
      <strong> Number of Unique Words: </strong> ${textAnalyzer.uniqueWords()}
    `;
    assumptions.innerHTML  = `
        <em> <h2> Assumptions </h2> </em>

        This is a ${judge.lengthJudger()} text.
        Looks like it has more ${judge.vowelComparison()}.
        I'm guessing it's ${judge.guessedLanguage()}.
        The bag of words that I found tells me that this text is about the following: _____.
        Also, the number of unique words tells me that whoever wrote this has a ____ vocabulary.
    `;

    //interpretation
    //vocabularyJudger
}
