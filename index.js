/*
    1. tambahkan endpoint untuk melakukan update
    2. tambahkan endpint untuk melkukan delete dengan memasukkan id yang ingin di delete
*/


import express from 'express';
import { nanoid } from 'nanoid';

const tasks = [];

const app = express();
const port = 8080;
const host = "localhost";

app.use(express.json());

app.get("/tasks", (req, res) => {
    res.json(tasks);
});

app.get("/tasks/:id", (req, res) => {
    const id = req.params.id;

    const task = tasks.find(item => item.id === id);
    if (task) {
        res.json(task);
    } else {
        res.json({message:"task tidak ditemukan!"});
    }

})

app.post("/tasks", (req, res) => {
    const task= {};
    task.id = nanoid(6);
    task.name = req.body.name;
    task.completed = req.body.completed;

    tasks.push(task);
    
    res.json(task);
});

app.put("/tasks/:id", (req, res) => {
    const id = req.params.id;
    let name = req.body.name;
    let completed  = req.body.completed
    const idx = tasks.findIndex(item => item.id === id);

    if (idx > -1) {
        tasks[idx] = {}
    }
})

app.listen(port, host, () =>{
    console.log(`server berjalan pada http://${host}:${port}`);
})

