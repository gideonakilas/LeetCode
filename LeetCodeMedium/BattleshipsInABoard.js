/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function (board) {
    let battleships = 0;

    function dfs(i, j) {
        if (i >= board.length || board[i][j] == '.' || j >= board[i].length) {
            return;
        }

        board[i][j] = '.';
        dfs(i + 1, j);
        dfs(i, j + 1);

    }
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] == 'X') {
                battleships++;
                dfs(i, j)
            }
        }
    }
    return battleships;
};