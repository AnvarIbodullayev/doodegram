const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// find-or-create
const foc = require('mongoose-find-or-create');

const userSchema = new Schema({
	googleId: {
		type: String,
		unique: true
	},
	name: String,
	surname: String,
	profilePhotoUrl: String,
});

userSchema.plugin(foc);

module.exports = mongoose.model('users', userSchema);