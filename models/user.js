const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

//fire a function before doc is saved to doc and password will be encrypted
userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.statics.login = async function (username, password) {
  const user = await this.findOne({ username });
  //console.log("This is user ", user);
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    //console.log("This is auth ", auth);
    if (auth) {
      console.log("Sign in Successful");
      return user;
    } else {
      console.log("Incorrect Password");
    }
  } else {
    console.log("Incorrect Username");
  }
};

const User = mongoose.model("user", userSchema);
module.exports = User;
