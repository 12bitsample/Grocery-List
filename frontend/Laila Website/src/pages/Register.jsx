import { useState } from 'react';
import axios from 'axios';
import Toast from 'react-hot-toast'; 
import { useNavigate } from 'react-router-dom'; 

export default function Register() {


  const navigate = useNavigate();
  const toast = Toast();
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  });

  //handle input change
  // const handleChange = (e) => 
  //   setData(prevState => ({prevState, [e.target.name]: e.target.value }));

  const handleChange = (e) => {
    const { name, value } = e.target;

    //update state depending on input name
    switch (name) {
      case 'name': 
      setData(prevState => ({
        ...prevState,
        name: value
      }));
      break;
      case 'email': 
      setData(prevState => ({
        ...prevState,
        email: value
      }));
      break;
      case 'password': 
      setData(prevState => ({
        ...prevState,
        password: value
      }));
      break;
      default: 
      break;

    }

    
  };



  const registerUser = async (e) => {
      e.preventDefault();
      const { name, email, password } = data;

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
        <input type='password' placeholder='Enter password' value={data.password}onChange={handleChange} name='password' />
        <button type='submit'>Submit</button>

      </form>
    </>
  )
}
