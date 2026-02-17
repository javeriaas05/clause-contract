import Task from '../models/Task.js';

export const createTask = async (req, res) => {
    try {
        const { title, description } = req.body;
        const userId = req.user.id;
        const task = await Task.create({ title, description, userId });
        res.status(201).json({
            status: "success",
            data: task
        });
    } catch (err) {
        res.status(500).json({ error: 'Failed to create task' });
    }
};

export const getTasks = async (req, res) => {
    try {
        const userId = req.user.id;
        const tasks = await Task.findAll({ where: { userId } });
        res.json({
            status: "success",
            data: tasks
        });
    } catch (err) {
        res.status(500).json({ error: 'Failed to get tasks' });
    }
};

export const getTaskById = async (req, res) => {
    try {
        const userId = req.user.id;
        const { id } = req.params;
        const task = await Task.findOne({ where: { id, userId } });
        if (!task) return res.status(404).json({ error: 'Task not found' });
        res.json({
            status: "success",
            data: task
        });
    } catch (err) {
        res.status(500).json({ error: 'Failed to get task' });
    }
};

export const updateTask = async (req, res) => {
    try {
        const userId = req.user.id;
        const { id } = req.params;
        const { title, description, completed } = req.body;
        const task = await Task.findOne({ where: { id, userId } });
        if (!task) return res.status(404).json({ error: 'Task not found' });
        task.title = title ?? task.title;
        task.description = description ?? task.description;
        if (completed !== undefined) task.completed = completed;
        await task.save();
        res.json({
            status: "success",
            data: task
        });
    } catch (err) {
        res.status(500).json({ error: 'Failed to update task' });
    }
};

export const deleteTask = async (req, res) => {
    try {
        const userId = req.user.id;
        const { id } = req.params;
        const task = await Task.findOne({ where: { id, userId } });
        if (!task) return res.status(404).json({ error: 'Task not found' });
        await task.destroy();
        res.json({ message: 'Task deleted' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to delete task' });
    }
};
