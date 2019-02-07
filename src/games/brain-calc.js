import {
  sayHi, askName, getAnswer, getRandomInt, exitFromGame, randomOperation, checkAnswer,
} from '..';

const gameCalc = (rounds, name) => {
  if (exitFromGame(rounds, name)) return false;
  const operand1 = getRandomInt(2, 150);
  const operand2 = getRandomInt(2, 150);
  const res = randomOperation(operand1, operand2);
  const operationSymbol = res[0];
  const operationResult = res[1];
  console.log(`Question: ${operand1} ${operationSymbol} ${operand2}`);
  const answer = parseInt(getAnswer(), 0);
  const correct = operationResult;
  checkAnswer(gameCalc, rounds, answer, correct, name);
  return false;
};

const startGameCalc = () => {
  sayHi('What is the result of the expression?');
  gameCalc(3, askName());
};

export default startGameCalc;
