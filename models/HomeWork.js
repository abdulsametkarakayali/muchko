const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const HomeWorkSchema = new Schema({
    student_id:{type:Schema.Types.ObjectId, ref:'Student'},
	lesson_id:{type:Schema.Types.ObjectId, ref:'Lessons'},
    issue: {
			type: String,
			required:  [true, '`{PATH}` alanı zorunludur.'],
			maxlength: [500, '`{PATH}` alanı (`{VALUE}`), ({MAXLENGTH}) karakterden küçük olmalıdır '],
			minlength: [3, '`{PATH}` alanı (`{VALUE}`), ({MINLENGTH}) karakterden büyük olmalıdır.'],
            required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('homework', HomeWorkSchema);
