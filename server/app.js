const express = require('express');
const app = express();

app.get(
    '/',
    (req, res) => {
        res.json({ message: 'Automaton is doing well!' });
    }
);

const port = 3000;
app.listen(
    port, () => {
        console.log(`Automaton server is running on port ${port}`);
    }
);