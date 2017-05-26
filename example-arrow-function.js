var names = ['Rajen', 'Pawan', 'Raj'];
names.forEach(function (name){
  console.log('forEach', name);
});

names.forEach((name) => {
  console.log('arrowFUnc', name);
  var aa = "rah";
  console.log(aa, name);
});

names.forEach((name) => console.log(name));

var person = {
  name: 'Sairam',
  greet: function (){
    names.forEach((name) =>{
      console.log(this.name + ' say hi to ' + name);
    });
  }
};
person.greet();

function add (a, b){
  return a + b;
}
var addStatement = (a, b) => {
return a + b;
}
console.log(addStatement(8, 12));

var addExpression = (a, b) => a + b;
console.log(addExpression(55, -18));
