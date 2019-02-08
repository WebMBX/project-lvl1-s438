import {
  getRandomInt, gameConstructor,
} from '..';

export const logic = () => {
  const start = getRandomInt(10, 150);
  const changeNumber = getRandomInt(1, 8);
  const interval = 7 - getRandomInt(3, 6);
  const numberCount = 10;
  const arr = [start];
  for (let i = 1; i < numberCount; i += 1) {
    const prev = arr[i - 1];
    const next = prev + interval;
    arr.push(next);
  }
  const answer = arr[changeNumber];
  arr[changeNumber] = '..';
  const question = arr.reduce((accumulator, currentValue) => `${accumulator} ${currentValue}`);
  const result = {
    q: `Question: ${question}`,
    a: answer,
    toInt: 1,
  };
  return result;
};


export const startGameProgression = () => gameConstructor('What number is missing in the progression?', logic);
