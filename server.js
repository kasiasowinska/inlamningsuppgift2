const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const UserDatabase = require('./userDatabase');

const app = express();
const port = 5500;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(express.static('public'));

const mockedAxios = axios.create({
    baseURL: 'http://localhost:5500'
});

const userDatabase = new UserDatabase(mockedAxios);

// Endpoint för registrering
app.post('/register', async (req, res) => {
    const { id, username, password } = req.body;
    const user = { id, username, password };

    try {
        const result = await userDatabase.save(user);
        res.json({ message: 'Användare sparad' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Endpoint för inloggning
app.post('/login', async (req, res) => {
    const { id, username, password } = req.body;

    try {
        const user = await userDatabase.load(id);
        if (user && user.username === username && user.password === password) {
            res.json({ message: 'Inloggad', user });
        } else {
            res.status(401).json({ message: 'Inloggning misslyckades' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Endpoint för skyddad vy
app.get('/dashboard', (req, res) => {
    res.sendFile(__dirname + '/dashboard.html');
});

app.listen(port, () => {
    console.log(`Server ligger och lyssnar på http://localhost:${port}`);
});