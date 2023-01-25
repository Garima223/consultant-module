const mongoose = require('mongoose');

//uri = "mongodb+srv://Komal:QUSkYpKsQcHXPrvf@consultantapi.vzinfil.mongodb.net/ConsultantApi?retryWrites=true&w=majority"
const mongoURI = 'mongodb://127.0.0.1:27017/inotebook?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false'
mongoose.set('strictQuery', true);

const connectDB = () => {
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};
module.exports = connectDB;

