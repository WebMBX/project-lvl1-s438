import getRandomInt from '../utils';
import gameConstructor from '..';

const progressionLength = 10;

const logic = () => {
  const start = getRandomInt(10, 150);
  const hiddenElementPosition = getRandomInt(0, 9);
  const interval = getRandomInt(3, 6);
  const progressionValues = [];
  for (let i = 0; i < progressionLength; i += 1) {
    const value = (i === hiddenElementPosition) ? '..' : start + interval * i;
    progressionValues.push(value);
  }
  const question = progressionValues.reduce((accumulator, currentValue) => `${accumulator} ${currentValue}`);
  const correctAnswer = (start + hiddenElementPosition * interval).toString();
  return { question, correctAnswer };
};

const gameDescription = 'What number is missing in the progression?';

export default () => gameConstructor(gameDescription, logic);
