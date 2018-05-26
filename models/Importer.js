
var mongoose = require('mongoose');
var importerSchema = new mongoose.Schema(
  {
  	utype: {type:String},
    firstName: {type: String,  max: 30},
    secondName: {type: String,max: 30},
	emailId: {type:String,max: 30},
	pword: {type:String,max:20},
	repeatpword:{type:String,max:20},
	country:{type:String,max:100},
	Address:{type:String,max:100}
  }, {collection: 'Users'});
  
module.exports = mongoose.model('Importer', importerSchema);


