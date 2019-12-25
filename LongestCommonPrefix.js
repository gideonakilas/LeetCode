var longestCommonPrefix = function(strs) {
    let max = ""
    let maxstring = strs[0];
    for(let i=1; i< strs.length; i++){
        for(let j=0; j< maxstring.length; j++){
            if(strs[i][j] != maxstring[j] && strs[i].charAt(j) != maxstring.charAt(j)){
                maxstring = maxstring.slice(0, j);
        }  
    }  
    }
    return maxstring;
};

console.log(longestCommonPrefix(["flower","flow","flight"]));