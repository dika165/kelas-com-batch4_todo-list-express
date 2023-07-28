import dbPool from "../utils/db.js";

const getAll = () => {
    const sql = "SELECT id, name, completed FROM tasks";
    
    return dbPool.query(sql);
}

const getById = (id) => {
    const sql = "SELECT id, name, completed FROM tasks WHERE id = ?";
    const value = [id];

    const result = dbPool.query(sql, value);

    return result;
}

const createData = (name, completed) => {
    const sql = "INSERT INTO tasks (name, completed) VALUE (?, ?)";
    const value = [name, completed];

    const result = dbPool.query(sql, value);
    return result;
}

const updateData = (id, name, completed) => {
    const sql = "UPDATE tasks SET name = ?, completed = ? WHERE id = ?";
    const value = [name, completed, id];

    const result = dbPool.query(sql, value);
    return result;
}

const deleteData = (id) => {
    const sql = "DELETE FROM tasks WHERE id = ?";
    const value = [id];

    return dbPool.query(sql, value);
}

export { getAll, getById, createData, updateData, deleteData}