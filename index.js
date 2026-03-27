const express = require('express');
const app = express();

const PORT = 3000;

// Root route
app.get('/', (req, res) => {
    res.send('Hello World! My API is working');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});