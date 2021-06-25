const db = require("../models");

exports.createUser = (req, res) => {
  db.User.findOne({ username: req.body.username })
    .then((user) => {
      if (!user) {
        db.User.create({ ...req.body }).then((user) =>
          res
            .status(200)
            .json(user)
        );
      } else {
        console.log("User Already Exists");
        //res.render({ title: "Sign Up", message: "Username already existed!" });
      }
    })
    .catch("Error Creating User");
};

exports.checkUser = async (req, res) => {
  const { username, password } = req.body;
  const user = await db.User.login(username, password);
  console.log(user);
  // if (user) {
  //   return user;
  // } else {
  //   console.log("User not found");
  // }

  // if (user && user.login(req.body.password)) {
  //   console.log("Logged in");
  // }
  // else{
  //   console.log("Login Failed")
  // }

  // if (user) {
  //   const auth = await bcrypt.compare(password, user.password);
  //   if (auth) {
  //     return user;
  //   }
  //   throw { message: "Inoccrect password" };
  // }
  // throw { message: "Inocrrect Username" };
};
// db.User.findOne({
//   username: req.body.username,
//   password: req.body.password,
// })
//   .then((user) => {
//     if (!user) {
//       console.log(req.body.username);
//       console.log("Login Failed ", user);
//     } else {
//       console.log("Login Successfull ", user);
//     }
//   })
//   .catch((error) => {
//     console.log("This is in catch ", error);
//   });
// };
