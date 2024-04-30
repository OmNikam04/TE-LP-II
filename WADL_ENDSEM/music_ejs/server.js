import express from 'express';
import mongoose from 'mongoose';
import songRoutes from './routes.js';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

mongoose.connect('mongodb://localhost:27017/music')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'static' directory
app.use('/static', express.static(join(__dirname, 'static')));

// Set up EJS view engine
app.set('view engine', 'ejs');
app.set('views', join(__dirname, 'views')); 

// Route for serving the index.ejs file
app.get('/', (req, res) => {
    res.render('index');
});

// Route for serving a2.ejs file
app.get('/a2', (req, res) => {
    res.render('a2.ejs');
});

// Add more routes for other EJS files as needed
app.use('/api', songRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
