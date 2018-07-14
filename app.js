var http = require('http')
,   express = require('express')
,   static = require('serve-static')
,   path = require('path')
,   fs = require('fs')


var app = express();


app.use('/public', static(path.join(__dirname, 'public')));


var router = express.Router();


router.route('/').get(function(req,res){
    console.log('/ get');
    var instream = fs.createReadStream(__dirname+'/public/test.html');
    instream.pipe(res);
});

app.use('/', router);

var server = http.createServer(app).listen(80, function(){
    console.log("Server start at 80");
})