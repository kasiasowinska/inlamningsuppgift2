class UserDatabase {
    constructor(axios) {
        this.axios = axios
    }

    async save(user) {
        let resp = await this.axios.post('/save', user);
        return resp.data;
    }

    async load(id) {
        let resp = await this.axios.get(`/load/${id}`);
        return resp.data
    }
}
    
module.exports = UserDatabase;