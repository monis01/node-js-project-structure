const mongoose 	= require('mongoose'),
	Schema		= mongoose.Schema;

let BlogCategorySchema = new Schema({
	name:{
		type:String,
		required:[true,'Name is required']
	},
	logo:{
		type:String
	},
	totalArticles:{
		type:Number,
		default:0 //@ this is the current value
	},
	status:{
		type:Number,
		default:0 //@ non-hide i.e. will be visible 
	}
});

module.exports = mongoose.model('BlogCategorySchema', BlogCategorySchema);	


