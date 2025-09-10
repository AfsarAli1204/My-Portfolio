const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (CSS, JS, images) from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Add a specific route for the root URL ('/') to serve the index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running successfully on http://localhost:${PORT}`);
});

