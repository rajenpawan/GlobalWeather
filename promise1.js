function Tumpcalback(location, calback){
  calback(undefined, 8);
  calback('city not found');
}

Tumpcalback('Bangalore', function(errr, temp){
  if(errr){
    console.log('error', errr);
  } else {
  console.log('Sucess', temp);
  }
});

function TumpPromise(location){
  return new Promise(function(resolve, reject){
    resolve(8);
    reject('city Error');
  });
}

TumpPromise('Bangalore').then(function(temp){
  console.log('promise superb', temp);
}, function(errr){
  console.log('promise error', err);
}
)
