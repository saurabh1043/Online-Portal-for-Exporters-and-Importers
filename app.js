var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var mongoose=require('mongoose');
var importer=require('./routes/importer');
var index=require('./routes/index');
var exporter=require('./routes/exporter');

mongoose.connect('mongodb://localhost/capstone',(err, client) =>	{
		if(!err)
		{
			console.log("connected");
		}
		
		if(err)
		console.log(err);		
});
var db=mongoose.connection;
/*app.get('/', function(req, res) {
  res.render('/index.html');
});*/


app.listen(3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/index', index);
app.use('/importer',importer);
app.use('/exporter',exporter);