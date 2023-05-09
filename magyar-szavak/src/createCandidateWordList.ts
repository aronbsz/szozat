import fs from "fs";
import { getWordLetters } from "../../src/lib/hungarianWordUtils";

const TARGET_WORD_LENGTH = 5;

export const CHAR_VALUES = [
    'Q',
    'W',
    'E',
    'R',
    'T',
    'Y',
    'U',
    'I',
    'O',
    'P',
    'A',
    'S',
    'D',
    'F',
    'G',
    'H',
    'J',
    'K',
    'L',
    'Z',
    'X',
    'C',
    'V',
    'B',
    'N',
    'M',
    'Ö',
    'Ü',
    'Ó',
    'Ő',
    'Ú',
    'É',
    'Á',
    'Ű',
    'Í',
    'CS',
    'DZ',
    'DZS',
    'GY',
    'LY',
    'NY',
    'SZ',
    'TY',
    'ZS',
];

// Parse input file
const hungarianWordsText = fs.readFileSync("./src/magyar-szavak.txt").toString();
const hungarianWords = hungarianWordsText.split("\n").map(word => word.toLowerCase().trim());
// Exclude words with special characters and exclude some words manually
const hungarianWordsOnlyAlphabet = hungarianWords
    .filter(word => {
        return word.toUpperCase().split("").every(letter => CHAR_VALUES.includes(letter));
    })
    .filter(word => word !== "zsivaly");
// Split into letters
const wordLetters = hungarianWordsOnlyAlphabet.map(getWordLetters);
// Reduce the list to words which may have the given number of characters
const candidateWordLetters = wordLetters.filter(word => word.length === TARGET_WORD_LENGTH);
// Manually add some words
candidateWordLetters.push(
    ["p", "á", "c", "s", "ó"],
    getWordLetters("dzsihád"),
    getWordLetters("córesz"),
    getWordLetters("limány"),
    getWordLetters("fődíj"),
    getWordLetters("űrlény"),
    getWordLetters("nyitva"),
    getWordLetters("tórusz"),
    getWordLetters("térkő"),
    getWordLetters("dzsuvás"),
    getWordLetters("dzsadzsál"),
    getWordLetters("zsivaj"),
    getWordLetters("türhő"),
);

// Save to file
const jsonString = JSON.stringify(candidateWordLetters);
fs.writeFileSync("../src/constants/hungarian-word-letter-list.json", jsonString);
