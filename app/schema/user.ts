const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const userSchema = new Schema({
age: { type: String, default: '' },
name: { type: String },
city: { type: String },
id: { type: String },
_id: ObjectId,
});

export { userSchema };
