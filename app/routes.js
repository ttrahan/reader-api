var userSchema = new mongoose.Schema({
	active: Boolean,
	email: { type: String, trim: true, lowercase: true },
	firstName: {type: String, trim: true },
	lastName: {type: String, trim: true },
	sp_api_key_id: {type: String, trim: true },
	sp_api_key_secret: {type: String, trim: true },
	subs: { type: [mongoose.Schema.Types.ObjectId], default: [] },
	created: { type: Date, default: Date.now },
	lastLogin: { type: Date, default: Date.now},
},
{ collection: 'user' }
);