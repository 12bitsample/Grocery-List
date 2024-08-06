import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast'; 
import { useRegister } from '../hooks/useRegister';
import { useNavigate } from 'react-router-dom'; 
import validator from 'validator';
import { useAuthContext} from '../hooks/useAuthContext';

// export default function Register() {

//   const navigate = useNavigate();
//   const [data, setData] = useState({
//     email: '',
//     password: '',
//   });
//   const [error, setError] = useState(null);
  
//   //handle input change
//   const handleChange = (e) => {
//     const { name, value } = e.target;
  
//     // Update state based on input name
//     setData(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   // const registerUser = async (e) => {
//   //     e.preventDefault();
      
//   //     const { email, password } = data;

//   //     // Client-side validation
//   //     if (!email || !password) {
//   //       setError('All fields must be filled out!');
//   //       return; // Prevent form submission
//   //     }

//   //     //check that email is email address
//   //     if (!validator.isEmail(email)) {
//   //       toast.error('You must provide a valid email address');
//   //       return;
//   //     }

//   //     try{
//   //        const response = await fetch('/register', {
//   //         method: 'POST',
//   //         headers: {'Content-Type': 'application/json'},
//   //         body: {email, password},
//   //       })

//   //       const json = await response.data;

//   //       if(response.error) {
//   //         toast.error(response.error);
          
//   //       } else {
//   //         setData({
//   //           email: '',
//   //           password: '',
//   //         });
          
//   //         //save user to local storage
//   //         localStorage.setItem('user', JSON.stringify(json));

//   //         toast.success('Registration successful!');
//   //       }
//   //     } catch (error) {
//   //       console.log(error);
//   //     }
//   // }


//   return (
//     <>
//       <div className='container-fluid' data-bs-theme='light'>
//         <form onSubmit={handleSubmit} className='form-vertical-center p-4 rounded background-gradient'>
//           <label className='pb-1 text-light fw-bold'>Register</label>
//           <input className='my-1' type='email' placeholder='Enter email' value={data.email} onChange={handleChange} name='email' />
//           <input className='my-1' type='password' placeholder='Enter password' value={data.password} onChange={handleChange} name='password' />
//           <button className='btn fw-bold p-1 btn-outline-secondary my-1' type='submit'>Register</button>
//           {error && <div className="error text-danger">{error}</div>}
//         </form>
//       </div>
//     </>
//   )
// }

const registerUser = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {signup, error, isLoading} = useSignup();
  const register = useRegister();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await register(email, password);
  }

  return (
      <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem tempora quaerat tenetur sed vitae odio pariatur, ex, mollitia consequatur aliquid doloribus natus veniam adipisci.</p>
      </div>

  )
}
