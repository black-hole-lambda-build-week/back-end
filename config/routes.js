const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const knex = require("knex");
const dbConfig = require("../knexfile");
const db = knex(dbConfig.development);

const secret = require("../auth/secrets").jwtKey;
const Users = require("../auth/authenticate");

module.exports = server => {
  server.post("/register", register);
  server.post("/login", login);
  server.get("/logout", logout);
  server.get("/users", users, restricted);
  server.post("/orbit", messages, restricted);
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

// -------------- Log out -------------------//
function logout(req, res) {
  if (req.session) {
    req.session.destroy(err => {
      if (err) {
        res
          .status(500)
          .json({ message: "There was a problem logging out user." });
      } else {
        res.status(200).json({ message: "Bye, have a great time!" });
      }
    });
  } else {
    res.status(200).json({ message: "Bye, have a great time!" });
  }
}

// --------- Get USERS ------------- //
function users(req, res) {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
}

function only(username) {
  return function(req, res, next) {
    if (req.headers.username === username) {
      next();
    } else {
      res.status(403).json({ message: "Yo! Youre not suppose to be here!" });
    }
  };
}

// --------- Post Message ------------- //
function messages(req, res) {
  const body = req.body;
  db("messages")
    .insert(body)
    .then(ids => {
      res.status(201).json(ids);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: "Sorry, there was an issue adding your message..." });
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

// ----- Restricted Function  ------ //
function restricted(req, res, next) {
  const { username, password } = req.headers;

  if (username && password) {
    Users.findBy({ username })
      .first()
      .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
          next();
        } else {
          res.status(401).json({ message: "Invalid Credentials" });
        }
      })
      .catch(error => {
        res.status(500).json(error);
      });
  } else {
    res.status(401).json({ message: "Please provide creds." });
  }
}
