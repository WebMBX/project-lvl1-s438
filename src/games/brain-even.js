import { getRandomInt, isRemainder, gameConstructor } from '..';

const logic = () => {
  const question = getRandomInt(10, 60);
  const correct = isRemainder(question);
  const result = {
    q: `Question: ${question}`,
    a: correct,
    fanswer: 0,
  };
  return result;
};

const startGameEven = () => gameConstructor('Answer "yes" if number even otherwise answer "no".', logic);

export default startGameEven;
