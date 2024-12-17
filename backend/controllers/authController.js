import User from "../models/userModel.js";
import jwt from "jsonwebtoken";
import EmailValidator from 'email-validator';

const createToken = (_id) => {
  return jwt.sign({_id}, process.env.SECRET, { expiresIn: "2d" });
}

const signupUser = async (req, res) => {
    
    const { email, password } = req.body
  
    try {

      //check if email exists
      const exists = await User.findOne({ email });
      if(exists) {
          return res.status(409).json({
              error: "Sorry, this email is already in use!"
          })
      };

      const user = await User.signup(email, password);

      //create token
      const token = createToken(user._id);

      res.status(200).json({email, token});
    } catch (error) {
      res.status(400).json({error: error.message});
    }
}

const loginUser = async (req, res) => {
  const {email, password} = req.body;

  try {
    const user = await User.login(email, password);

    //create token
    const token = createToken(user._id);

    res.status(200).json({email, token});

  } catch (error) {
    res.status(400).json({error: error.message});
  }
}
 
export {
    signupUser,
    loginUser,
 }

