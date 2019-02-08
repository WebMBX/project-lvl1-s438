import getRandomInt from '../utils';
import gameConstructor from '..';

const findMaxDelimeter = (a, b) => {
  const max = Math.max(a, b);
  const min = Math.min(a, b);
  let maxDelimeter = 1;
  for (let i = 1; i <= min; i += 1) {
    maxDelimeter = (Number.isInteger(max / i) && Number.isInteger(min / i)) ? i : maxDelimeter;
  }
  return maxDelimeter;
};

const logic = () => {
  const number1 = getRandomInt(10, 150);
  const number2 = getRandomInt(10, 150);
  const correctAnswer = findMaxDelimeter(number1, number2);
  const question = `Question: ${number1} ${number2}`;
  return { question, correctAnswer };
};

const gameDescription = 'Find the greatest common divisor of given numbers.';

export default () => gameConstructor(gameDescription, logic);
