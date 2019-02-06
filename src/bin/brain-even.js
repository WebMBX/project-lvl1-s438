#!/usr/bin/env node
import { askName } from '..';
import { game } from '..';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no".');
console.log('');
const name = askName();

game(1, name);
