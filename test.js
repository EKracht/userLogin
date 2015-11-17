var bcrypt = require('bcrypt');
var password = 'this is my password';

for(var rounds = 1; rounds < 20; rounds++) {
  console.log(rounds);

  bcrypt.genSalt(rounds, function(err, salt){
    bcrypt.hash(password, salt, function(err, hash){
      console.log(hash);
    });
  });
}