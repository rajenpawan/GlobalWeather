function addPromise(a, b){
  return new Promise(function (resolve, reject){
if(typeof a === 'number' && typeof b === 'number'){
  resolve(a+b);
} else {
  reject('A & b need to be numbers');
}
  });
}
addPromise(2, 3).then(function (sum){
  console.log('success', sum)
}, function (err){
  console.log('error', err)
});

addPromise('pawan', 9).then(function(sum){
  console.log('this should not show up');
}, function(err){
  console.log('This Should appear', err);
});

function multiPromise(a, b, c){
  return new Promise(function(resolve, reject){
  setTimeout(function(){
    if(typeof a === 'number' && typeof b === 'number' && typeof c === 'string'){
      resolve(a*b);
    } else {
      reject('A & b need to be numbers And C need to be String');
    }
  }, 1550)
});
}

multiPromise('Pawan', 9).then(function(Multi){
  console.log('This Should not show up')
}, function(err){
  console.log('This should appear', err);
});

multiPromise(8, 9, 'raj').then(function(Multi){
  console.log('Success', Multi);
}, function(err){
  console.log('error', err);
});
multiPromise(12, 5).then(function(multi){
  console.log('success', multi);
}, function(err){
  console.log('error', err);
});
