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

export const checkAnswer = (func, rounds, answer, correct, name) => {
  if (answer === correct) {
    console.log('Correct!');
    func(rounds - 1, name);
  } else {
    console.log(`Your answer '${answer}' is wrong ;(. Correct answer was '${correct}'.`);
    console.log(`Let's try again, ${name}!`);
  }
};

export const isRemainder = (number) => {
  const res = (number % 2) ? 'no' : 'yes';
  return res;
};

export const randomOperation = (op1, op2) => {
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

export const findMaxDelimeter = (a, b) => {
  const max = Math.max(a, b);
  const min = Math.min(a, b);
  const arr = [];
  for (let i = 1; i <= max; i += 1) {
    if (!(max % i)) arr.push(i);
  }

  let maxDelimeter = 1;
  for (let i = 0; i < arr.length - 1; i += 1) {
    if (arr[i] > min) return maxDelimeter;
    if ((arr[i] > maxDelimeter) && !(min % arr[i])) maxDelimeter = arr[i];
  }
  return maxDelimeter;
};
