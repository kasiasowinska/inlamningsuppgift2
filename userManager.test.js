const axios = require('axios')
const UserManager = require("./userManager");
const UserDatabase = require('./userDatabase');
const User = require('./user');
    
jest.mock('./userDatabase');
    
describe("UserManager", () => {
    let userDatabase;
    let userManager;
    
    beforeEach( () => {
        userDatabase = new UserDatabase(axios);
        userManager = new UserManager(userDatabase);
    });
    
    
    afterEach(() => {
        jest.clearAllMocks();
    });
    
    it('should login successfully with correct credentials', async () => {
        const user = new User(1, 'testuser', 'password');
        userDatabase.load.mockResolvedValue(user);
    
        const result = await userManager.login(1, 'testuser', 'password');
        expect(result).toBe(true);
    });
    
    it('should fail to login with incorrect credentials', async () => {
        const user = new User(1, 'testuser', 'password');
        userDatabase.load.mockResolvedValue(user);
    
        const result = await userManager.login(1, 'testuser', 'wrongpassword');
        expect(result).toBe(false);
    });
    
    it('should save a new user successfully', async () => {
        const user = new User(2, 'newuser', 'password');
        userDatabase.save.mockResolvedValue('Användare tillagd');

        const result = await userManager.saveNewUser(user);
        expect(result).toBe('Användare tillagd');
    });
    
    
    it('should not save a user that already exists', async () => {
        const user = new User(1, 'testuser', 'password');
        userDatabase.load.mockResolvedValue(user);
    
        const result = await userManager.saveNewUser(user);
        expect(result).toBe('Användare finns redan');
    });
});