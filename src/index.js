module.exports = function check(str, bracketsConfig) {
const openBracket = [];
const stack = [];
let pair = {};
let closeBracket = [];

for (let i = 0; i < bracketsConfig.length; i++){
  closeBracket.push(bracketsConfig[i][1]);
  openBracket.push(bracketsConfig[i][0]);
  pair[bracketsConfig[i][1]] = bracketsConfig[i][0]; 
};

for (let j = 0; j < str.length; j++) {
  let current = str[j];
  let last = stack[stack.length-1];
  if (openBracket.includes(current) && closeBracket.includes(current) && pair[current] !== last){
    stack.push(current);
  } 
  if (openBracket.includes(current) && closeBracket.includes(current) === false){
    stack.push(current);
  } 
  if (stack.length === 0){
    return false;
  } 
  if (closeBracket.includes(current) && pair[current] === last) {
    stack.pop(last);
  } 
}
return stack.length === 0;
}
