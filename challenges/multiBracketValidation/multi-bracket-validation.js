
function multiBracketValidation(input) {
  console.log(input);
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
  for(let i = 0; i < brackets.length; i++) {
    if(brackets[i] === '(' && brackets[i + 1] === ')'
    || brackets[i] === '{' && brackets[i + 1] === '}'
    || brackets[i] === '[' && brackets[i + 1] === ']') {
      brackets.splice(i, 2);
      i = -1;
    }
  }
  console.log(brackets);
  if(brackets.length > 0) {
    return false;
  }
  return true;
}

module.exports = multiBracketValidation;
