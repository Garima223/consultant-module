const mongoose = require('mongoose');

uri = "mongodb+srv://Komal:QUSkYpKsQcHXPrvf@consultantapi.vzinfil.mongodb.net/ConsultantApi?retryWrites=true&w=majority"

const connectDB = () => {
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};
module.exports = connectDB;

