import readlineSync from 'readline-sync';

export const askName = () => {
  const name = readlineSync.question('What is Your name, cowboy? ');
  console.log(`Let's go ${name}!`);
  return name;
};

const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));

export const game = (n, name) => {
  if (n === 4) {
    console.log('');
    return console.log(`Congratulations, ${name}!`);
  }
  const number = getRandomInt(50);
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');
  const correct = (number % 2 === 0) ? 'yes' : 'no';
  if ((number % 2 === 0 && answer === correct) || (number % 2 !== 0 && answer === correct)) {
    console.log('Correct!');
    game(n + 1, name);
  } else {
    return console.log(`Your answer is wrong ;(. Correct answer was ${correct}. Let's try again, ${name}!`);
  }
};
