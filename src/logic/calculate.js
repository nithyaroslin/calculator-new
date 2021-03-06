import isNumber from './isNumber';
import findResult from './findResult';

export default function calculate(obj, buttonName) {
  if (buttonName === "Clr") {
    return {
        answer: "0",
        memory: "0",
        activeOperation: "",
        opActive : false,
        isPrevEventOperator : false,
    };
  }

  if (isNumber(buttonName)){
    let currentNum = buttonName;

    if (obj.isPrevEventOperator){
      return {
        answer: currentNum,
        isPrevEventOperator : false,
    };
    }
    
      if (obj.answer === "0"){
        return {
          answer: currentNum,
        }
      }
      else {
        if ( currentNum === '.' ){
        if(!(obj.answer.includes('.'))) {
          return {
            answer: obj.answer + currentNum,
            }
          
          }
        }
      else {
        return {
          answer: obj.answer + currentNum,
          }
        
      }
    }
  }
    
  else {
    let operation = buttonName
  if (
    operation === '+' ||
    operation === '-' ||
    operation === '*' ||
    operation === '/' ||
    operation === '%'
  ) {
    if(!obj.opActive){

      return {
        answer: "0",
        memory: obj.answer,
        activeOperation: operation,
        opActive : true,
        isPrevEventOperator : true,
    };
      
    }
    else {

    const number1 = obj.memory;
    const operator = obj.activeOperation; 
    const number2 = obj.answer;
    
    const result = findResult(number1, operator, number2);

    return {
      answer: result,
      memory: result,
      activeOperation: operation,
      opActive : true,
      isPrevEventOperator : true,
  };
    
    }
  }
  else if (operation === '='){
    const number1 = obj.memory;
    const operator = obj.activeOperation;
    const number2 = obj.answer;

    const result = findResult(number1, operator, number2);

    return {
      answer: result,
      memory: result,
      opActive : false
  };
    
  }
  }  

}
