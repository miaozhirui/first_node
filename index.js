var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
    
    fs.readFile('index.html', function(err,data){
        if(err){
            console.log(err)
        } else {
            console.log(data)
            res.end(data);
        }
    })

}).listen(3000);

