const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
	taskName : {
		type : String,
		required : true
	},
	taskDescription : String,	
	taskDay : {
		type : String,
		required : true
	},
	from : {
		type : String,
		require : true
	},
	upto :{
		type : String,
		required : true
	}
});

module.exports = mongoose.model('Task', taskSchema);