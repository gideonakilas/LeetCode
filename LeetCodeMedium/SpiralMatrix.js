/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let output =  [];
    
    function traverse(i,j, matrix,output){
    if(i< 0 || i >= matrix.length || j < 0 || j >= matrix[i].length || matrix[i][j] == ""){
      return;
    }
    if(j < matrix[i].length){
    output.push(matrix[i][j])
      matrix[i][j] = " ";
      traverse(i,j+1, matrix, output)
    }
      if(i < matrix.length){
      matrix[i][j] = "";
      traverse(i+1, j, matrix, output.push(matrix[i][j]))
    }

  }
  
  return traverse(0,0,matrix, output)
  }
  console.log(spiralOrder([[
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 7, 8, 9 ]
   ]]))