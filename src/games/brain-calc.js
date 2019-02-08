import {
  getRandomInt, randomOperation, gameConstructor,
} from '..';

const logic = () => {
  const operand1 = getRandomInt(2, 150);
  const operand2 = getRandomInt(2, 150);
  const res = randomOperation(operand1, operand2);
  const operationSymbol = res[0];
  const operationResult = res[1];
  const result = {
    q: `Question: ${operand1} ${operationSymbol} ${operand2}`,
    a: operationResult,
    toInt: 1,
  };
  return result;
};

const startGameCalc = () => gameConstructor('What is the result of the expression?', logic);


export default startGameCalc;
