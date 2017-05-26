function getTempCallback(location, callback){
  callback(undefined, 78);
  callback('City not found');
}

getTempCallback('Bangalore',function (err, temp){
if(err){
  console.log('error', err);
} else {
  console.log('Success', temp)
}

});

function getTempPromise(location){
  return new Promise(function(resolve, reject){
setTimeout(function(){
  resolve(26);
  reject('City not found');
}, 1500);

  });
}

getTempPromise('Bangalore').then(function(temp){
console.log('promise Success', temp);
}, function(err){
console.log('promise error', err);
})
