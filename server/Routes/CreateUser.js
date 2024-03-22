const express = require("express");
const router = express.Router();
const User = require("../models/User");
const {body, validationResult } = require("express-validator");

router.post(
  "/createuser", [
    body("email","invalid email").isEmail(),
    body("password", "incorrect password ").isLength({ min: 5 }),
    body("name", "minimum length is 5 ").isLength({ min: 5 })],
  async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
      return res.status(400).json({ errors : errors.array()});
    }
    try {
      await User.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
        location: req.body.location,
      });
      res.json({ success: true });
    } catch (err) {
      console.log(err);
      res.json({ success: false });
    }
  }
);


router.post(
  "/loginuser",[
    body("email","Invalid Email").isEmail(),
    body("password", "password should be minimum of 5 l").isLength({min:5})
  ],async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
      return res.status(400).json({errors : errors.array()})
    }

    let email = req.body.email;
    try {
      let userData = await User.findOne({email}) 
      if(!userData){
        return res.status(400).json({errors: "Try Logging with correct credentials"})
      }
      if(req.body.password !== userData.password){
        return res.status(400).json({errors: "Try Logging with correct credentials"})
      }
      return res.json({success:true})
    } catch (err) {
      console.log(err);
      res.json({ success: false });
    }
  }
);

module.exports = router;
