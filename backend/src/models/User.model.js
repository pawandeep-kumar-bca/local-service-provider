const mongoose = require("mongoose");
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
    trim:true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },

  password:{
    type:String,
    required:function(){
        return !this.googleId
    },
    select: false
  },

 
  emailVerificationExpires:{
    type: Date
  },

  passwordResetExpires:{
    type: Date
  },

  refreshToken:{
    type:String,
  },

  emailVerificationToken:{
    type:String
  },

  passwordResetToken:{
    type:String
  },

  googleId: {
    type: String,
    default: null
  },

  role: {
    type: String,
    enum: ["user", "provider", "admin"],
    default: "user"
  },

  isVerified: {
    type: Boolean,
    default: false
  }

}, { timestamps: true });

userSchema.pre("save", async function () {
  if (!this.isModified("password") || !this.password) return;

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model("User", userSchema);