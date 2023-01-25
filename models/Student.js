const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const StudentSchema = new Schema({
	firstName: {
		type: String,
		required: true,
		maxlength: 60,
		minlength: 2
	},
	lastName: {
		type: String,
		maxlength: 60,
		minlength: 2
	},
	schoolNo: {
		type: Number,
		required: true,
		unique: true
	},
	gender: {
		type: String,
		required: true
	},
	age: {
		type: Number,
		required: true
	},
	telephone: {
		type: String,
		required: true
	},
	createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('student', StudentSchema);
