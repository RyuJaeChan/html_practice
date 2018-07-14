var http = require('http')
,   express = require('express')
,   static = require('serve-static')
,   path = require('path')
,   fs = require('fs')
require('date-utils')

var app = express();

app.set('port', 80);

app.use('/public', static(path.join(__dirname, 'public')));


var router = express.Router();


router.route('/').get(function(req,res){
    console.log('['+new Date().toFormat('YYYY-MM-DD HH24:MI:SS')+'] / get');
    var instream = fs.createReadStream(__dirname+'/public/main.html');
    instream.pipe(res);
});

app.use('/', router);

var server = http.createServer(app).listen(app.get('port'), function(){
    console.log('['+new Date().toFormat('YYYY-MM-DD HH24:MI:SS')+'] Server start at '+app.get('port'));
   
})