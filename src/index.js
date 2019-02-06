import readlineSync from 'readline-sync';

export const askName = () => {
	const name = readlineSync.question('What is Your name, cowboy? ');
  console.log(`Let's go ${name}!`);
  return name;
}

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
}

export const game = (n, name) => {
  if (n == 4) {
    console.log('');
    console.log(`Congratulations, ${name}!`);
    return false;
  }
  const number = getRandomInt(50);
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');
  if (number % 2 === 0) {
    if (answer == 'yes') {
      console.log('Correct!');
      game(n + 1, name);
    } else {
      console.log(`'no' is wrong answer ;(. Correct answer was 'yes'. Let's try again, ${name}!`);
      return false;
    }
  } else {
    if (answer == 'no') {
      console.log('Correct!');
      game(n + 1, name);
    } else {
      console.log(`'yes' is wrong answer ;(. Correct answer was 'no'. Let's try again, ${name}!`);
      return false;
    }
  }
};