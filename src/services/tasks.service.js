const Task = require('../models/tasks.model');

const taskService = {
	getAll: async () => await Task.find(),
	getById: async (id) => await Task.findById(id),
	create: async (data) => await Task.create(data),
	update: async (id, data) => await Task.findByIdAndUpdate(id, data , {new : true}),
	delete: async (id) => await Task.findByIdAndDelete(id)
};

module.exports = taskService;