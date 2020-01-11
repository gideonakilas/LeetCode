/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (word[0] == board[i][j] && wordsearch(i, j, board, word, 0)) {
                return true;
            }
        }
    }
    return false;
};


function wordsearch(i, j, board, word, letter) {
    if (letter == word.length) return true;
    if (i < 0 || i >= board.length || j >= board[i].length || j < 0 || board[i][j] != word[letter]) {
        return false;
    }
    const temp = board[i][j]
    board[i][j] = " ";

    let found = wordsearch(i + 1, j, board, word, letter + 1) ||
        wordsearch(i, j + 1, board, word, letter + 1) ||
        wordsearch(i - 1, j, board, word, letter + 1) ||
        wordsearch(i, j - 1, board, word, letter + 1);

    board[i][j] = temp;
    return found;

}

console.log(exist([
    ['A','B','C','E'],
    ['S','F','C','S'],
    ['A','D','E','E']
  ], "ABCCED"));