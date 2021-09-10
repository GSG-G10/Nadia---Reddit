const signUpQuery = require("../../database/queries/Authentication/authQueries");
const { hash, compare } = require('bcryptjs');

const signUp = (req, res) => {
    // console.log('hhhhh',req.body)
  const {name , username ,email ,password } = req.body;

  hash(password, 10, (err, hashedPassword) => {
    if (err) {
      res.status(500).json(
        {
          msg: 'Internal Server Error',
          status: 500,
        },
      );
    }
console.log("hash,",password, "ff", hashedPassword)
signUpQuery({name , username ,email ,password })
    .then((data) => console.log(res.json(data)))
    .catch((err) =>
      console.log(res.status(500).json({ message: "server internal error" }))
    );

})}
// ((req,res) => (console.log(req.body)) )
module.exports = signUp;

// {
//     "name" :"nadia" ,
//     "username" : "nadiaT" ,
//     "email": "nadia@hotmail.com" ,
//     "password": "asdfgh" 
//     }