import { getRandomInt, gameConstructor } from '..';

const isEven = (number) => {
  const result = number % 2;
  return !result;
};

const logic = () => {
  const question = getRandomInt(10, 60);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  const result = {
    q: `Question: ${question}`,
    a: correctAnswer,
  };
  return result;
};

const gameRules = 'Answer "yes" if number even otherwise answer "no".';

const startGameEven = () => gameConstructor(gameRules, logic);

export default startGameEven;
