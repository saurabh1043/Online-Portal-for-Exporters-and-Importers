var mongoose = require('mongoose');
var exporterSchema = new mongoose.Schema(
  {
    utype: {type:String},
    company_name: {type:String},
    business_regno: {type:String},
     country:{type:String,max:100},
  Address:{type:String,max:100},
    firstName: {type: String,  max: 30},
    secondName: {type: String,max: 30},
  emailId: {type:String,max: 30},
  pword: {type:String,max:20},
  repeatpword:{type:String,max:20}
 
  }, {collection: 'Users'});
  
module.exports = mongoose.model('Exporter', exporterSchema);