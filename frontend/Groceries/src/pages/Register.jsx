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

      <div className='container-fluid' data-bs-theme='light'>

        <form onSubmit={registerUser} className='form-vertical-center p-4 rounded background-gradient'>
          <label className='pb-1 text-light fw-bold'>Register</label>

          {/* <input className='my-1' type='text' placeholder= 'Enter name' value={data.name} onChange={handleChange} name='name' /> */}
          <input className='my-1' type='email' placeholder='Enter email' value={data.email} onChange={handleChange} name='email' />
          <input className='my-1' type='password' placeholder='Enter password' value={data.password} onChange={handleChange} name='password' />
          <button className='my-1' type='submit'>Submit</button>

        </form>

      </div>

    </>
  )
}
