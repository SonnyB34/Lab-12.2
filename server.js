import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send("Hello!")
})

app.get('/api/fun-fact', async (req, res) => {
    try {
        const response = await fetch('https://uselessfacts.jsph.pl/api/v2/facts/random')

        const json = await response.json();

        res.status(200).json({"fact" : json['text']})
    } catch (e) {
        res.status(500).json({error: 'Could not fetch fun fact'})
    }
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
})