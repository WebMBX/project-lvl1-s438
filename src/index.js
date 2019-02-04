import readlineSync from 'readline-sync';

export function askName() {
	return readlineSync.question('What is Your name, cowboy? ');
}