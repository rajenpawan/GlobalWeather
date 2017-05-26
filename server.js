var express = require('express');
var pawan = express();
pawan.use(express.static('public'));
pawan.listen(3000, function(){
  console.log('Express Server is Up on Port 3000');
});
