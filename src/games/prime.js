import getRandomInt from '../utils';
import gameConstructor from '..';

const isSimple = (num) => {
  if (num < 2) return false;
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const logic = () => {
  const number = getRandomInt(1, 5000);
  const correctAnswer = isSimple(number) ? 'yes' : 'no';
  const question = `${number}`;
  return { question, correctAnswer };
};

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => gameConstructor(gameDescription, logic);
