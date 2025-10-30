const app = require('./app');
const port = 80;
app.listen(port, ()=>{
	console.log(`Server started successfully on port ${port}`)
});