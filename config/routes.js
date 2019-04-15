const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// const { authenticate } = require("../auth/authenticate");

const secret = require("../auth/secrets").jwtKey;
const Users = require("../auth/authenticate");

module.exports = server => {
  server.post("/register", register);
  server.post("/login", login);
};

//----- Post Router for Register -----//

function register(req, res) {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;

  Users.add(user)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(error => {
      res.status(500).json(error);
    });
}

//----- Post Router for Login ------//

function login(req, res) {
  let { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);

        res.status(200).json({
          message: `Welcome ${user.username}!`,
          token
        });
      } else {
        res.status(401).json({ message: "Invalid credentials" });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
}

//---- Generate Token Function -----//
function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username
  };

  const options = {
    expiresIn: "1d"
  };

  return jwt.sign(payload, secret, options);
}
