import User from '../models/user.js';

const test = (req,res) => {
    res.json('test is working amigos!')
}

const registerUser = async (req, res) => {
    try {
            const {email, name, password} = req.body;
            //check that name was entered
            if(!name) {
                return res.json({
                    error: 'Name is required!'
              })
            }
                //check if password was entered
            if(!password || password.length < 6) {
                    return res.json({
                        error: 'Password is required and must be at least 6 characters in length.'
                    })
            }
            //check email
            const exists = await User.findOne({email});
            if(exists) {
                return res.json({
                    error: 'Email already in use.'
                })
            }
    
        } catch (error) {

    }
};
 
export {
    test,
    registerUser,
 }

