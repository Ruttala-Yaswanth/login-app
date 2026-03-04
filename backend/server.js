const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');
const rateLimit = require('express-rate-limit');

// Load env variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Rate Limiting
const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
    message: { message: 'Too many login attempts from this IP, please try again after 15 minutes' }
});

// Mock User Database
// In a real application, this would be in a database.
// Password hash is for 'admin'
const users = [
    {
        username: 'admin',
        passwordHash: '$2b$10$4PWccVCKm.szSeJd/BfNt.RUzXCiEegqXy/dLRZsRO/fMWQ.v9Fei' // actual hash for 'admin'
    }
];

const getUserFromDatabase = async (username) => {
    return users.find(u => u.username === username);
};

// Routes
app.post('/login', loginLimiter, async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }

    try {
        const user = await getUserFromDatabase(username);

        if (user && await bcrypt.compare(password, user.passwordHash)) {
            res.status(200).json({ message: 'Login successful' });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (err) {
        console.error('Login error:', err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
