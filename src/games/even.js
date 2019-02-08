import getRandomInt from '../utils';
import gameConstructor from '..';

const isEven = number => number % 2 === 0;

const logic = () => {
  const number = getRandomInt(10, 60);
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  const question = `Question: ${number}`;
  return { question, correctAnswer };
};

const gameDescription = 'Answer "yes" if number even otherwise answer "no".';

export default () => gameConstructor(gameDescription, logic);
