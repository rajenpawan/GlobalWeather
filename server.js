var express = require('express');
var pawan = express();
const PORT = process.env.PORT || 3000;

pawan.use(function (req, res, next){
if(req.headers['x-forwarded-proto'] === 'http'){
  next();
  else{
    res.redirect('http://' + req.hostname + req.url);
  }
}
});

pawan.use(express.static('public'));
pawan.listen(PORT, function(){
  console.log('Express Server is Up on Port ' + PORT);
});
