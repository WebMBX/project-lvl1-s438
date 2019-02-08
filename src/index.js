import readlineSync from 'readline-sync';

export const sayHi = (phrase) => {
  console.log('Welcome to the Brain Games!');
  console.log(phrase);
  console.log('');
};

export const askName = () => {
  const name = readlineSync.question('What is Your name, cowboy? ');
  console.log(`Let's go ${name}!`);
  return name;
};

export const getRandomInt = (a, b) => {
  const min = Math.ceil(a);
  const max = Math.floor(b);
  return Math.abs(Math.floor(Math.random() * (min - max)) + min);
};

export const getAnswer = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

export const exitFromGame = (round, name) => {
  if (round < 1) {
    console.log('');
    console.log(`Congratulations, ${name}!`);
    return true;
  }
  return false;
};

export const checkAnswer = (answer, correct, name) => {
  if (answer !== correct) {
    console.log(`Your answer '${answer}' is wrong ;(. Correct answer was '${correct}'.`);
    console.log(`Let's try again, ${name}!`);
    return false;
  }
  console.log('Correct!');
  return true;
};

export const gameConstructor = (hiText, logic, rounds = 3, playerName = '') => {
  sayHi(hiText);
  const name = (playerName !== '') ? playerName : askName();
  const f = (limit) => {
    if (exitFromGame(limit, name)) return false;
    const counter = limit - 1;
    const game = logic();
    console.log(game.q);
    const answer = (game.toInt) ? parseInt(getAnswer(), 0) : getAnswer();
    const correct = game.a;
    return (checkAnswer(answer, correct, name)) ? f(counter) : false;
  };
  return f(rounds);
};
