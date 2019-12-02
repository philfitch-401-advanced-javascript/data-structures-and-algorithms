
function multiBracketValidation(input) {
  let brackets = [];
  for(let i = 0; i < input.length; i++) {
    if(input[i] === '(' 
    || input[i] === ')' 
    || input[i] === '{' 
    || input[i] === '}' 
    || input[i] === '[' 
    || input[i] === ']') {
      brackets.push(input[i]);
    }
  }
  
}

export default multiBracketValidation;