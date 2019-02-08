import getRandomInt from '../utils';
import gameConstructor from '..';

const progressionLength = 10;

const logic = () => {
  const start = getRandomInt(10, 150);
  const missingPosition = getRandomInt(1, 8);
  const interval = getRandomInt(3, 6);
  const arr = [];
  for (let i = 0; i < progressionLength; i += 1) {
    const value = (i === missingPosition) ? '..' : start + interval * i;
    arr.push(value);
  }
  const progression = arr.reduce((accumulator, currentValue) => `${accumulator} ${currentValue}`);
  const question = `Question: ${progression}`;
  const correctAnswer = start + missingPosition * interval;
  return { question, correctAnswer };
};

const gameDescription = 'What number is missing in the progression?';

export default () => gameConstructor(gameDescription, logic);
