import express from 'express';
import DB from './db.js'

const PORT = process.env.PORT || 3000;

/** Zentrales Objekt für unsere Express-Applikation */
const app = express();

/** global instance of our database */
let db = new DB();

/** Initialize database connection */
async function initDB() {
    await db.connect();
    console.log("Connected to database");
}

// implement API routes

/** Return all todos. 
 *  Be aware that the db methods return promises, so we need to use either `await` or `then` here! 
 */
app.get('/todos', async (req, res) => {
    let todos = await db.queryAll();
    res.send(todos);
});

//
// YOUR CODE HERE
//
// Implement the following routes:
// GET /todos/:id
app.get('/todos/:_id', async (req, res) => {
    let todo = await db.queryById(req.params.id);
    res.send(todo);
});
// POST /todos
app.post('/todos', async (req, res) => {
    let todo = await db.insert(req.body);
    res.send(todo);
});
// PUT /todos/:id
app.put('/todos/:id', async (req, res) => {
    let todo = await db.update(req.params.id, req.body);
    res.send(todo);
});
// DELETE /todos/:id
app.delete('/todos/:id', async (req, res) => {
    let todo = await db.delete(req.params.id);
    res.send(todo);
});


initDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server listening on port ${PORT}`);
        })
    })

