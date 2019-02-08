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

const gameConstructor = (hiText, logic, rounds = 3, name = '') => {
  sayHi(hiText);
  const playerName = (name !== '') ? name : askName();
  const f = (limit) => {
    if (exitFromGame(limit, playerName)) return false;
    const counter = limit - 1;
    const game = logic();
    console.log(game.question);
    const playerAnswer = getAnswer();
    const correctAnswer = game.correctAnswer.toString();
    return (checkAnswer(playerAnswer, correctAnswer, playerName)) ? f(counter) : false;
  };
  return f(rounds);
};

export default gameConstructor;
