import {
  sayHi, askName, getAnswer, getRandomInt, exitFromGame, isRemainder, checkAnswer,
} from '..';

const gameEven = (rounds, name) => {
  if (exitFromGame(rounds, name)) return false;
  const askingNumber = getRandomInt(10, 60);
  console.log(`Question: ${askingNumber}`);
  const answer = getAnswer();
  const correct = isRemainder(askingNumber);
  checkAnswer(gameEven, rounds, answer, correct, name);
  return false;
};

const startGameEven = () => {
  sayHi('Answer "yes" if number even otherwise answer "no".');
  gameEven(3, askName());
};

export default startGameEven;
