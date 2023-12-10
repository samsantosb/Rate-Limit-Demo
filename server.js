const express = require('express');
const rateLimit = require('express-rate-limit');

const app = express();

const limiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minuto
    max: 5, // limite de 5 requisições
    handler: (req, res) => {
        return res.status(429).json({ message: "Too many requests" });
    },
});

app.use('/hello', limiter);

app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
