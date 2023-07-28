import * as TaskRepo from '../repository/task.js';

export const getAllTask = async function (req, res) {
    const [result, field] = await TaskRepo.getAll();

    res.json(result);
};


export const getById = async (req, res) => {
    
    const [result] = await TaskRepo.getById(req.params.id);

    res.json(result[0]);
};

export const createTask = async (req, res) => {
    let name = req.body.name;
    let completed = req.body.completed;
    const [result] = await TaskRepo.createData(name, completed);
    let msg = `Data tugas dberhasil ditambah dengan id: ${result.insertId}`;
    res.json({message: msg});
}

export const updateTask = async (req, res) => {
    let id = req.params.id;
    let name = req.body.name;
    let completed = req.body.completed;

    const [result] = await TaskRepo.updateData(id, name, completed);
    let msg = `Data tugas yang berhasil diperbaharui ada: ${result.affectedRows} `;
    res.json({message: msg});
}

export const deleteTask = async (req, res) => {
    const [result] = await TaskRepo.deleteData(req.params.id);
    let msg = `Data tugas yang berhasil dihapus ada: ${result.affectedRows} `;

    console.log(result);

    res.json({message: msg});
}