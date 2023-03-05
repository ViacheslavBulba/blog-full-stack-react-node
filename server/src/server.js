import express from 'express';
import articles from './article-content.js';

const PORT = process.env.PORT || 8000;

// let articlesInfo = [{
//     name: 'learn-react',
//     upvotes: 0,
//     comments: [],
// }, {
//     name: 'learn-node',
//     upvotes: 0,
//     comments: [],
// }, {
//     name: 'mongodb',
//     upvotes: 0,
//     comments: [],
// }]

const app = express();
app.use(express.json());

app.get('/api/articles', (req, res) => {
    res.status(200).send(articles);
});

app.get('/api/articles/:name', (req, res) => {
    const { name } = req.params;
    const article = articles.find(a => a.name === name);
    if (article) {
        res.status(200).send(article);
    } else {
        res.status(404).send('Not Found');
    }
});

app.put('/api/articles/:name/upvote', (req, res) => {
    const { name } = req.params;
    const article = articles.find(a => a.name === name);
    if (article) {
        article.upvotes += 1;
        res.status(204).send(`The ${name} article now has ${article.upvotes} upvotes`);
    } else {
        res.status(404).send('Not Found');
    }
});

app.post('/api/articles/:name/comments', (req, res) => {
    const { name } = req.params;
    const { postedBy, text } = req.body;
    const article = articles.find(a => a.name === name);
    if (article) {
        article.comments.push({ postedBy, text });
        res.status(201).send(article.comments);
    } else {
        res.status(404).send('Not Found');
    }
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
