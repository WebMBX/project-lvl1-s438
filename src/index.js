import readlineSync from 'readline-sync';

export const askName = () => {
	const name = readlineSync.question('What is Your name, cowboy? ');
	console.log(`Let's go ${name}!`);
}