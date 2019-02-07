import {
  sayHi, askName, getAnswer, getRandomInt, exitFromGame, findMaxDelimeter, checkAnswer,
} from '..';

const gameGcd = (rounds, name) => {
  if (exitFromGame(rounds, name)) return false;
  const number1 = getRandomInt(10, 150);
  const number2 = getRandomInt(10, 150);
  const maxDelimeter = findMaxDelimeter(number1, number2);
  console.log(`Question: ${number1} ${number2}`);
  const answer = parseInt(getAnswer(), 0);
  const correct = maxDelimeter;
  checkAnswer(gameGcd, rounds, answer, correct, name);
  return false;
};

const startGameGcd = () => {
  sayHi('Find the greatest common divisor of given numbers.');
  gameGcd(3, askName());
};

export default startGameGcd;
