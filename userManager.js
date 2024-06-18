class UserManager {

    constructor(userDatabase) {
        this.userDatabase = userDatabase;
        this.currentUser = null;
    }

    async login(id, username, password) {
        let fetchedUser = await this.userDatabase.load(id);

        console.log(fetchedUser)

        if(fetchedUser.username == username && fetchedUser.password == password) {
            this.currentUser = fetchedUser;
            return true;
        }
        return false;
    }

    async saveNewUser (user) {
        
        if (user != null) {
            let fetchedUser  = await this.userDatabase.load(user.id);

            if (fetchedUser) {
                return "Användare finns redan"
            }

            let result = await this.userDatabase.save(user)
            return result
        }
        return "Ingen användare finns"
    }
}

module.exports = UserManager;