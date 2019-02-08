import getRandomInt from '../utils';
import gameConstructor from '..';

const operators = ['+', '-', '*'];

const logic = () => {
  const op1 = getRandomInt(2, 150);
  const op2 = getRandomInt(2, 150);
  const randomIndex = getRandomInt(0, operators.length - 1);
  let correctAnswer;
  const operationSymbol = operators[randomIndex];
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
  const question = `Question: ${op1} ${operationSymbol} ${op2}`;
  return { question, correctAnswer };
};

const gameDescription = 'What is the result of the expression?';

export default () => gameConstructor(gameDescription, logic);
