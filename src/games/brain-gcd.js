import {
  getRandomInt, findMaxDelimeter, gameConstructor,
} from '..';

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
