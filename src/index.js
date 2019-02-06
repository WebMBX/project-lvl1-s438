import readlineSync from 'readline-sync';

const sayHi = (phrase) => {
  console.log('Welcome to the Brain Games!');
  console.log(phrase);
  console.log('');
};

const askName = () => {
  const name = readlineSync.question('What is Your name, cowboy? ');
  console.log(`Let's go ${name}!`);
  return name;
};

const getRandomInt = (a, b) => {
  const min = Math.ceil(a);
  const max = Math.floor(b);
  return Math.abs(Math.floor(Math.random() * (min - max)) + min);
};

const exitFromGame = (round, name) => {
  if (round < 1) {
    console.log('');
    console.log(`Congratulations, ${name}!`);
    return true;
  }
  return false;
};

const isRemainder = (number) => {
  const res = (number % 2) ? 'no' : 'yes';
  return res;
};

const randomOperation = (op1, op2) => {
  const opersArr = ['+', '-', '*'];
  const random = getRandomInt(0, 3) - 1;
  let res;
  const operation = opersArr[random];
  if (operation === '+') {
    res = op1 + op2;
  } else if (operation === '-') {
    res = op1 - op2;
  } else if (operation === '*') {
    res = op1 * op2;
  }
  return [operation, res];
};

const findMaxDelimeter = (a, b) => {
  let max;
  let min;
  if (a < b) {
    max = b;
    min = a;
  } else {
    max = a;
    min = b;
  }
  const arr = [];
  for (let i = 1; i <= max; i++) {
    if (!(max % i)) arr.push(i);
  }

  let maxDelimeter = 1;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > min) return maxDelimeter;
    if ((arr[i] > maxDelimeter) && !(min % arr[i])) maxDelimeter = arr[i];
  }
  return maxDelimeter;
};

const gameEven = (rounds, name) => {
  if (exitFromGame(rounds, name)) return false;
  const askingNumber = getRandomInt(10, 60);
  console.log(`Question: ${askingNumber}`);
  const answer = readlineSync.question('Your answer: ');
  const correct = isRemainder(askingNumber);
  if (answer === correct) {
    console.log('Correct!');
    gameEven(rounds - 1, name);
  } else {
    console.log(`Your answer '${answer}' is wrong ;(. Correct answer was '${correct}'.`);
    console.log(`Let's try again, ${name}!`);
  }
  return false;
};

const gameCalc = (rounds, name) => {
  if (exitFromGame(rounds, name)) return false;
  const operand1 = getRandomInt(2, 150);
  const operand2 = getRandomInt(2, 150);
  const res = randomOperation(operand1, operand2);
  const operationSymbol = res[0];
  const operationResult = res[1];
  console.log(`Question: ${operand1} ${operationSymbol} ${operand2}`);
  const answer = readlineSync.question('Your answer: ');
  const correct = operationResult;
  if (parseInt(answer, 0) === correct) {
    console.log('Correct!');
    gameCalc(rounds - 1, name);
  } else {
    console.log(`Your answer '${answer}' is wrong ;(. Correct answer was '${correct}'.`);
    console.log(`Let's try again, ${name}!`);
  }
  return false;
};

const gameGcd = (rounds, name) => {
  if (exitFromGame(rounds, name)) return false;
  const number1 = getRandomInt(10, 150);
  const number2 = getRandomInt(10, 150);
  const maxDelimeter = findMaxDelimeter(number1, number2);
  console.log(`Question: ${number1} ${number2}`);
  const answer = readlineSync.question('Your answer: ');
  const correct = maxDelimeter;
  if (parseInt(answer, 0) === correct) {
    console.log('Correct!');
    gameGcd(rounds - 1, name);
  } else {
    console.log(`Your answer '${answer}' is wrong ;(. Correct answer was '${correct}'.`);
    console.log(`Let's try again, ${name}!`);
  }
  return false;
};

export const startGameBrain = () => {
  sayHi('');
};

export const startGameEven = () => {
  sayHi('Answer "yes" if number even otherwise answer "no".');
  gameEven(3, askName());
};

export const startGameCalc = () => {
  sayHi('What is the result of the expression?');
  gameCalc(3, askName());
};

export const startGameGcd = () => {
  sayHi('Find the greatest common divisor of given numbers.');
  gameGcd(3, askName());
};
