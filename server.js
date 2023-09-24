const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to serve static files
app.use(express.static('public'));

// Middleware to parse POST request data
app.use(express.urlencoded({ extended: true }));

// Route to serve the main index.html
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Other GET routes
app.get('/about', (req, res) => {
    res.send('About Me!');
});

app.get('/projects', (req, res) => {
    res.send('My Projects!');
});

app.get('/contact', (req, res) => {
    res.send('Contact Me!');
});

// POST route to handle form submissions
app.post('/submit.php', (req, res) => {
    // Log the received form data for debugging purposes
    console.log(req.body);

    // For now, let's send a simple success message back.
    // In real-world applications, you might want to store the data or send an email, etc.
    res.send('submitted successfully!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
