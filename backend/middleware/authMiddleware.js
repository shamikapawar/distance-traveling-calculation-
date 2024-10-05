const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../config/db');

// Register new user
exports.registerUser = async (req, res) => {
    const { email, password } = req.body;

    // Check if user already exists
    db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
        if (results.length > 0) {
            return res.status(400).json({ message: 'User already exists' });
        }
        
        const hashedPassword = await bcrypt.hash(password, 10);
        db.query('INSERT INTO users SET ?', { email, password: hashedPassword }, (err, result) => {
            if (err) throw err;
            res.json({ message: 'User registered successfully' });
        });
    });
};

// Login user
exports.loginUser = (req, res) => {
    const { email, password } = req.body;

    db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
        if (results.length === 0) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const user = results[0];
        const isMatch = await bcrypt.compare(password, user.password);
        
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: user.id }, 'your_jwt_secret', { expiresIn: '1h' });
        res.json({ token });
    });
};

// Middleware to protect routes
exports.protect = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Not authorized' });
    }

    jwt.verify(token, 'your_jwt_secret', (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Not authorized' });
        }
        req.user = decoded.id;
        next();
    });
};
