import readlineSync from 'readline-sync';

export const sayHi = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".');
  console.log('');
};

export const askName = () => {
  const name = readlineSync.question('What is Your name, cowboy? ');
  console.log(`Let's go ${name}!`);
  return name;
};

const getRandomInt = (a, b) => {
  const min = Math.ceil(a);
  const max = Math.floor(b);
  return Math.abs(Math.floor(Math.random() * (min - max)) + min);
};

export const gameQuestion = (n, name) => {
  if (n > 3) {
    console.log('');
    return console.log(`Congratulations, ${name}!`);
  }
  const number = getRandomInt(10, 60);
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');
  const correct = (number % 2 === 0) ? 'yes' : 'no';
  if ((number % 2 === 0 && answer === correct) || (number % 2 !== 0 && answer === correct)) {
    console.log('Correct!');
    gameQuestion(n + 1, name);
  } else {
    return console.log(`Your answer '${answer}' is wrong ;(. Correct answer was '${correct}'. Let's try again, ${name}!`);
  }
  return false;
};
