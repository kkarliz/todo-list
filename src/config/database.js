const mongoose = require('mongoose');

const connectDB = async () =>{
	try{
		await mongoose.connect('mongodb://localhost:27017/todolist', {
			useNewUrlParser : true,
			useUnifiedTopology : true
		});
		console.log('Connected to Database !');	
	}catch(error){
		console.log('Failed to connect to Database!')
	};
	
};

module.exports = connectDB;