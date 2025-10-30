const taskService = require('../services/tasks.service');

exports.getAllTask = async (req, res) => {
	try {
		const tasks = await taskService.getAll();
		res.status(200).json({ success: true, data: tasks });
	} catch (error) {
		res.status(500).json({ message: "Failed to get data !" })
	}
};

exports.getTaskById = async (req, res) => {
	try {
		const task = await taskService.getById(req.params.id);
		if (!task) {
			res.status(404).json({ success: false, message: "Can't get data from database !" });
			return;
		}
		res.status(200).json({ success: true, data: task });
	} catch (error) {
		console.error(error.message);
		res.status(500).json({ success: false, message: 'Server error' });
	}
};

exports.createTask = async (req, res) => {
	try {
		const newTask = await taskService.create(req.body);
		res.status(201).json({ success: true, data: newTask });
	} catch (error) {
		console.error(error.message);
		res.status(500).json({ success: false, message: 'Failed to create task' });
	}
};

exports.updateTask = async (req, res) => {
	try {
		const updated = await taskService.update(req.params.id, req.body);
		if (!updated) {
			res.status(404).json({ success: false, message: "Failed to update !" });
			return;
		}
		res.status(200).json({ success: true, data: updated });
	} catch (error) {
		console.error(error.message);
		res.status(500).json({ success: false, message: 'Failed to update task' });
	}
};

exports.deleteTask = async (req, res) => {
	try {
		const deleted = await taskService.delete(req.params.id);
		if (!deleted) {
			res.status(404).json({ success: false, message: "Failed to delete !" });
			return;
		}
		res.status(200).json({ success: true, data: deleted });
	} catch (error) {
		console.error(error.message);
		res.status(500).json({ success: false, message: 'Failed to delete task' });
	}
};