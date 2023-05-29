const login = 'admin';
const password = 'admin';
const userLogin = prompt('Enter your login');

if (userLogin === login) {
	const userPassword = prompt('Enter your password');

	if (userPassword !== password) {
		console.log('Wrong password');
	} else {
		console.log('Hello, ' + login + '!');
	}
} else {
	console.log('Wrong username');
}
