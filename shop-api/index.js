const express = require('express');
const Vigenere = require('caesar-salad').Vigenere;
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());
const port = 8000;

app.post('/encode', (req, res) => {
    res.send({ "encoded": Vigenere.Cipher(req.body.password).crypt(req.body.encode)});
});

app.post('/decode', (req, res) => {
    res.send({ "decoded": Vigenere.Decipher(req.body.password).crypt(req.body.decode) });
});

app.listen(port, () => {
    console.log('Server started on http:localhost:' + port)
});