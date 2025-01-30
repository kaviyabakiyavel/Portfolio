const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files from the "Frontend" directory
app.use(express.static(path.join(__dirname, '../Frontend')));

// Route to serve the index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../Frontend/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}/about.html`);
});
