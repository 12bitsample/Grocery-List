import User from "../models/userModel.js";
import jwt from "jsonwebtoken";


const createToken = (_id) => {
  return jwt.sign({_id}, process.env.SECRET, { expiresIn: "2d" });
}

//need to figure out why why POST register in console not found
const registerUser = async (req, res) => {
    // try {

    //         const {email, password} = req.body;
          
    //         //check if password was entered
    //         if(!password || password.length < 6) {
    //                 return res.json({
    //                     error: "Password is required and must be at least 6 characters in length."
    //                 })
    //         };
            
    //         //check if email exists
    //         const exists = await User.findOne({email});
    //         if(exists) {
    //             // return res.json({
    //             //     error: "Sorry, this email is already in use!"
    //             // })
    //             return res.status(400).json({ error: "Welp, this email is already in use!" });
    //         };

    //         const user = await User.create({
    //             email, password,
    //         })

    //         return res.json(user);
            
    //     } catch (error) {
    //         console.log(error);
    // }

    try {
      const user = await User.signup(email, password);
      res.status(201).json(user); // Successfully created
    } catch (error) {
      console.error("Error in signup:", error.message);
  
      // Handle known error messages
      if (error.message === "Email already in use.") {
        res.status(409).json({ error: error.message }); // Conflict error
      } else if (error.message === "Email must be a valid email address.") {
        res.status(400).json({ error: error.message }); // Bad request
      } else {
        res.status(500).json({ error: "Internal server error" }); // Generic server error
      }
    }
};

const signupUser = async (req, res) => {
    
    const {email, password} = req.body
  
    try {

      //check if email exists
      const exists = await User.findOne({email});
      if(exists) {
          return res.json({
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
    registerUser,
    signupUser,
    loginUser,
 }

