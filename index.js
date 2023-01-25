//const routes = require('./routes/Consultant.js');
const express = require('express');
var cors = require('cors');
const connectDB = require('./mongodb.js');
//connectToMongo();
const app = express()
const port = 5000
app.use(express.json())
app.use(cors())
// Available Routes
// app.use('/api/client, require('./routes/client))
//app.use('/api/product', require('./routes/product'))
// app.use('/api/inspector, require('./routes/inspector))
app.use('/api/Consultant', require('./routes/Consultant'))


const start = async () =>{
    try{
       await connectDB(); 
       console.log("Connected");
    }catch (error){
        console.log(error);
    }
}


// app.use('/api/inspection, require('./routes/inspection))
// app.use('/api/admin, require('./routes/admin))
app.get('/', (req, res) => {
res.send('Hello World!')
})
/*app.listen(port, () => {
console.log(`iNotebook backend listening at port http://localhost:${port}`)
})*/
app.listen(port, () => {
    console.log(`${port} yes I am connected`);
    });
