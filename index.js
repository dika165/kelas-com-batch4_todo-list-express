/*
    1. tambahkan endpoint untuk melakukan update
    2. tambahkan endpint untuk melkukan delete dengan memasukkan id yang ingin di delete
*/


import express from 'express';
import * as TaskService from './services/taskService.js';


const app = express();
const port = 8080;
const host = "localhost";

app.use(express.json());

app.get("/tasks", (req, res) => TaskService.getAllTask(req,res));

app.get("/tasks/:id", (req, res) => TaskService.getById(req, res));

app.post("/tasks", (req, res) => {
    TaskService.createTask(req, res);
});

app.put("/tasks/:id", (req, res) => {
    TaskService.updateTask(req, res);
});

app.delete("/tasks/:id",(req, res) => TaskService.deleteTask(req,res));

app.listen(port, host, () =>{
    console.log(`server berjalan pada http://${host}:${port}`);
})

