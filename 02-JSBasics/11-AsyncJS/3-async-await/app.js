
async function hello() {

}


const login = async (username, password) => {
    if (!username || !password) {
        throw new Error('Missing credentials');
    }

    if (password === '123456') {
        return 'Welcome!';
    }

    throw new Error('Invalid password');
}

login('user', '123456')
    .then(msg => console.log('Logged in:', msg))
    .catch(err => console.log('ERROR:', err.message));
