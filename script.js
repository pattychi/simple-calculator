const num1 =parseFloat(prompt('Enter num1:'));
const num2 = parseFloat(prompt('Enter num2:'));

const operator = prompt('Enter operator(+,*,-,/)')

let result = 0;
if(isNan(num1) || isNan(num2)){
  alert('wrong input! Refresh and try again.');}
else{
  if(operator == '+'){result = num1 + num2;}
  else if(operator == '*'){result = num1 * num2;}
  else if(operator == '-'){result = num1 - num2;}
  else if(operator == '/'){result = num1 / num2;}
  alert(num1+operator+num2+'=' + result);
}
