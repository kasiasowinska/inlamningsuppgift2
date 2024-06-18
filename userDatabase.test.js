const UserDatabase = require('./userDatabase');
const User = require('./user');
const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');

describe('UserDatabase', () => {
    let mock;
    let userDatabase;

    beforeEach(() => {
        mock = new MockAdapter(axios);
        userDatabase = new UserDatabase(axios);
    });

    afterEach(() => {
        mock.reset();
    });

    it('Spara användare till databasen', async () => {
        const user = new User(2, 'Melker', 'password');
        mock.onPost().reply(200, user);

        const result = await userDatabase.save(user);
        expect(result).toEqual(user);
    });

    it('Ladda användare från databasen', async () => {
        const user = new User(2, 'Melker', 'password');
        mock.onGet().reply(200, user);

        const result = await userDatabase.load(2);
        expect(result).toEqual(user);
    });
});