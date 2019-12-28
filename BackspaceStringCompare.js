
function backspaceCompare(S, T){

     S = back(S);
     T = back(T);

     return S.toString() == T.toString();

}


function back(string)
{
    let stack = [];
    for(let i =0; i< string.length; i++){
        if(string[i] != '#'){
            stack.push(string[i]);
        } else if (stack.length != 0){
            stack.pop();
        }
    }
    return stack;
}

console.log(backspaceCompare("bxj##tw", "bxo#j##tw"));
