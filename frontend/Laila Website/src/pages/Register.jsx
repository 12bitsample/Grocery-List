import { useState } from 'react';
import axios from 'axios';
import { Toast } from 'react-hot-toast'; 

export default function Register() {


  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  });

  //handle input change
  const handleChange = (e) => 
    setData(prevState => ({prevState, [e.target.name]: e.target.value }));



  const registerUser = async (e) => {
      e.preventDefault();
      const { name, email, password } = data;

      try{
        const {data} = await axios.post('/register', {
          name, email, password
        })
      } catch (error) {

      }
  }

  return (
    <>
      <form onSubmit={registerUser}>
        <label>Register</label>
        <input type="text" placeholder= "Enter name" value={data.name} onChange={handleChange}/>
        <input type="email" placeholder="Enter email" value={data.email} onChange={handleChange}/>
        <input type="password" placeholder="Enter password"value={data.password}onChange={handleChange}/>
        <button type="submit">Submit</button>

      </form>
    </>
  )
}
