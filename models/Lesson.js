const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const LessonSchema = new Schema({
	lessonName: {
		type: String,
		maxlength: 60,
		minlength: 2,
		required: true
	}
});

module.exports = mongoose.model('lesson', LessonSchema);
