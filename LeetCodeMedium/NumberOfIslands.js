/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let numIslands = 0;
    
    const dfs = (i, j) => {
    if(grid[i][j] == '1'){
        grid[i][j] = '0';
    } else {
        return;
    }
    if(i < grid.length-1){
        dfs(i+1, j)
    }
    if(j < grid[i].length-1){
         dfs(i, j+1)
    }
    if(i > 0 && i < grid.length){
        dfs(i-1, j)
    }
    if(j > 0 && j < grid[i].length){
        dfs(i, j-1)
    }
    
}
    
    for(let i =0; i < grid.length; i++){
        for(let j=0; j< grid[i].length; j++){
        if(grid[i][j] == '1'){
            numIslands++;
            dfs(i , j);
        }
     }
    }
    return numIslands
};


console.log(numIslands([ [ '1', '1', '1', '1', '0' ],
                        [ '1', '1', '0', '1', '0' ],
                        [ '1', '1', '0', '0', '0' ],
                        [ '0', '0', '0', '0', '0' ] ]))