import getRandomInt from '../utils';
import gameConstructor from '..';

const progressionLength = 10;

const logic = () => {
  const start = getRandomInt(10, 150);
  const hiddenElementPosition = getRandomInt(0, progressionLength - 1);
  const interval = getRandomInt(3, 6);
  const progressionElements = [];
  for (let i = 0; i < progressionLength; i += 1) {
    const value = (i === hiddenElementPosition) ? '..' : start + interval * i;
    progressionElements.push(value);
  }

  const question = progressionElements.join(' ');
  const correctAnswer = (start + hiddenElementPosition * interval).toString();
  return { question, correctAnswer };
};

const gameDescription = 'What number is missing in the progression?';

export default () => gameConstructor(gameDescription, logic);
