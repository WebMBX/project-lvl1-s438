import {
  getRandomInt, gameConstructor,
} from '..';

const findMaxDelimeter = (a, b) => {
  const max = Math.max(a, b);
  const min = Math.min(a, b);
  const arr = [];
  for (let i = 1; i <= max; i += 1) {
    if (!(max % i)) arr.push(i);
  }

  let maxDelimeter = 1;
  for (let i = 0; i < arr.length - 1; i += 1) {
    if (arr[i] > min) return maxDelimeter;
    if ((arr[i] > maxDelimeter) && !(min % arr[i])) maxDelimeter = arr[i];
  }
  return maxDelimeter;
};

const logic = () => {
  const number1 = getRandomInt(10, 150);
  const number2 = getRandomInt(10, 150);
  const maxDelimeter = findMaxDelimeter(number1, number2);
  const result = {
    q: `Question: ${number1} ${number2}`,
    a: maxDelimeter,
    toInt: 1,
  };
  return result;
};

const startGameGcd = () => gameConstructor('What is the result of the expression?', logic);


export default startGameGcd;
