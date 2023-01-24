const mongoose = require('mongoose');
const { Schema } = mongoose;
const ConsultantSchema = new Schema({
consultant_name:{
type: String,
required: true
},
consultant_email:{
type: String,
required: true,
unique: true
},
consultant_password:{
type: String,
required: true
},
consultant_city:{
type: String,
required: true
},
consultant_state:{
type: String,
required: true
},
consultant_address:{
type: String,
required: true
},
consultant_phone:{
type: String,
required: true
},
consultant_other_info:{
type: String,
required: true
},
consultant_date:{
type: Date,
default: Date.now
}
});
const Consultant = mongoose.model(consultant, ConsultantSchema);
//User.createIndexes();
module.exports = Consultant;
