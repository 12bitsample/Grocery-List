import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast'; 
import { useNavigate } from 'react-router-dom'; 

export default function Register() {


  const navigate = useNavigate();
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  });
  
  

  //handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
  
    // Update state based on input name
    setData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // let toast = toast();

  const registerUser = async (e) => {
      e.preventDefault();
      
      const { name, email, password } = data;
      let toast = toast();
      

      try{
        const response = await axios.post('/register', {
          name, email, password
        })
        if(response.data.error) {
          toast.error(response.data.error);
        } else {
          setData({
            name: '',
            email: '',
            password: '',
          });
          toast.success('Login successful!')
          navigate('/login')
        }
      } catch (error) {
        console.log(error);
      }
  }

  
  
  return (
    <>
      <form onSubmit={registerUser}>
        <label>Register</label>

        <input type='text' placeholder= 'Enter name' value={data.name} onChange={handleChange} name='name' />
        <input type='email' placeholder='Enter email' value={data.email} onChange={handleChange} name='email' />
        <input type='password' placeholder='Enter password' value={data.password} onChange={handleChange} name='password' />
        <button type='submit'>Submit</button>

        {/* <button onClick={notify}>Let me eat toast.</button> */}



      </form>
    </>
  )
}
