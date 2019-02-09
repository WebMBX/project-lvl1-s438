import readlineSync from 'readline-sync';

const sayHi = (phrase) => {
  console.log('Welcome to the Brain Games!');
  console.log(phrase);
  console.log('');
};

const askName = () => {
  const name = readlineSync.question('What is Your name? ');
  console.log(`Let's go ${name}!`);
  return name;
};

const getAnswer = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

const exitFromGame = (round, name) => {
  if (round < 1) {
    console.log('');
    console.log(`Congratulations, ${name}!`);
    return true;
  }
  return false;
};

const checkAnswer = (playerAnswer, correctAnswer, name) => {
  if (playerAnswer !== correctAnswer) {
    console.log(`Your answer '${playerAnswer}' is wrong ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${name}!`);
    return false;
  }
  console.log('Correct!');
  return true;
};

const rounds = 3;
const gameConstructor = (hiText, logic) => {
  sayHi(hiText);
  const playerName = askName();
  const gameLogic = (limit) => {
    if (exitFromGame(limit, playerName)) return false;
    const counter = limit - 1;
    const game = logic();
    console.log(`Question: ${game.question}`);
    const playerAnswer = getAnswer();
    return (checkAnswer(playerAnswer, game.correctAnswer, playerName)) ? gameLogic(counter) : false;
  };
  return gameLogic(rounds);
};

export default gameConstructor;
