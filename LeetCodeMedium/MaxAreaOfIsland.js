/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
        let max = 0;
        let tempMax = 0;

        function maxArea(i, j) {
            if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] == '0') {
                return 0;
            }
            grid[i][j] = '0';
            let count = 1;
            count += maxArea(i + 1, j);
            count += maxArea(i - 1, j);
            count += maxArea(i, j + 1);
            count += maxArea(i, j - 1);

            return count;
        }


        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[i].length; j++) {
                if (grid[i][j] == '1')
                    max = Math.max(tempMax, maxArea(i, j));
            }
        }


        return max;