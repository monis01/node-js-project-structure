const mongoose		= require('mongoose'),
	Schema			= mongoose.Schema;

let blogSchema = new Schema({

	author: {
		type: String,
		required: [true, 'author name is required']
	}, 	
	title: {
		type: String,
		required: [true, 'title is required']
	},
	slug: {
		type: String
	},
	image: {
		type: String
	},
	content: {
		type: String,
		required: [true, 'content is required']		
	},
	visits: {
		type: Number,
		default: 0
	},
	category: [{
		type: Schema.Types.ObjectId,
		ref: ''	
	}],
	status: {
		type: Number,
		default: 0   //@ not hide i.e. visible
	}

}, {
	timestamps: {

		createdAt: 'created_at',
		updatedAt: 'updated_at'

	}
});	

module.exports = mongoose.model('BlogModel', blogSchema);