import User from '../models/userModel.js';
import jwt from 'jsonwebtoken';


const createToken = (_id) => {
  return jwt.sign({_id}, process.env.SECRET, { expiresIn: "2d" });
}


// const registerUser = async (req, res) => {
//     try {
//             const {email, name, password} = req.body;
//             //check that name was entered
//             if(!name) {
//                 return res.json({
//                     error: 'Name is required!'
//               })
//             }
//                 //check if password was entered
//             if(!password || password.length < 6) {
//                     return res.json({
//                         error: 'Password is required and must be at least 6 characters in length.'
//                     })
//             };
//             //check if email exists
//             const exists = await User.findOne({email});
//             if(exists) {
//                 return res.json({
//                     error: 'Sorry, this email is already in use!'
//                 })
//             };

//             const user = await User.create({
//                 name, email, password,
//             })

//             return res.json(user);
            
//         } catch (error) {
//             console.log(error);
//     }
// };

const signupUser = async (req, res) => {
    const {email, password} = req.body
  
    try {
      const user = await User.signup(email, password);

      //create token
      const token = createToken(user._id);

      res.status(200).json({email, token});
    } catch (error) {
      res.status(400).json({error: error.message});
    }
  }

const loginUser = async (req, res) => {

}
 
export {
    // registerUser,
    signupUser,
    loginUser,
 }

