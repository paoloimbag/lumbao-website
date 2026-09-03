const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/health', (req, res) => {
    res.sendStatus(204);
});

app.listen(PORT, () => {
    console.log(`🚀 Server is running live at http://localhost:${PORT}`);
});
