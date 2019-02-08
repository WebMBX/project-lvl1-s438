import {
  getRandomInt, gameConstructor,
} from '..';

const logic = () => {
  const op1 = getRandomInt(2, 150);
  const op2 = getRandomInt(2, 150);
  const opersArr = ['+', '-', '*'];
  const random = getRandomInt(0, opersArr.length - 1);
  let correctAnswer;
  const operationSymbol = opersArr[random];
  switch (operationSymbol) {
    case '+':
      correctAnswer = op1 + op2;
      break;
    case '-':
      correctAnswer = op1 - op2;
      break;
    case '*':
      correctAnswer = op1 * op2;
      break;
    default:
      break;
  }
  const result = {
    q: `Question: ${op1} ${operationSymbol} ${op2}`,
    a: correctAnswer.toString(),
  };
  return result;
};

const gameRules = 'What is the result of the expression?';

const startGameCalc = () => gameConstructor(gameRules, logic);

export default startGameCalc;
