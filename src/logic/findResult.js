export default function findResult(number1, operator, number2 ) {
  switch(operator){
    case '+': 
      return (parseFloat(number1) + parseFloat(number2)).toString();
    case '-':
      return (parseFloat(number1) - parseFloat(number2)).toString();
    case '*':
      return (parseFloat(number1) * parseFloat(number2)).toString();    
    case '/':
      return (parseFloat(number1) / parseFloat(number2)).toString();  
    case '%':
      return (parseFloat(number1) % parseFloat(number2)).toString();  
    default:
      return "0" ;
    }

}