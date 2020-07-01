const express = require('express');
const cors = require('cors');
const pool = require('./connect');

const app = express();

app.use(express.json());
app.use(cors());

// Retrieve all posts
app.get('/posts', async (req, res) => {
    try {
        const posts = await pool.query(
            "SELECT * FROM posts"
        );
        res.json(posts.rows)
    } catch (error) {
        console.log(error.message);
    }
});

// Create a new post
app.post('/posts', async (req, res) => {
    try {
        const { title, body } = req.body;
        await pool.query(
            "INSERT INTO posts (title, body) VALUES ($1, $2)", [title, body]
        );
        res.json({ msg: 'Inserted a new post.' })
    } catch (error) {
        console.log(error.message);
    }
});


// Delete a post
app.delete('/posts/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await pool.query(
            "DELETE FROM posts WHERE id = $1", [id]
        )
        res.json({ msg: `Deleted a post of id ${id}.`})
        
    } catch (error) {
        console.log(error.message);
    }
});

// Update a post
app.put('/posts/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { title, body } = req.body;
        await pool.query(
            "UPDATE posts SET title = $1, body = $2 WHERE id = $3", [title, body, id]
        )
        res.json({ msg: `Updated post with id ${id}.`});
        
    } catch (error) {
        console.log(error.message);
    }
})

app.listen(5000, () => console.log('Server running on port 5000'));