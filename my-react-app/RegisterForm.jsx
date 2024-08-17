// import React, { useState } from "react";
// import axios from 'axios'; // Import axios here
// import './create_acc.css';
// import foodImage from './foodImage.jpeg';

// function MyComponent() {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",  // Added lastName field
//     username: "",
//     password: "",
//     confirmPassword: "",
//   });
//   const [passwordError, setPasswordError] = useState("");
//   const [message, setMessage] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevFormData => ({
//       ...prevFormData,
//       [name]: value
//     }));
//   };

//   const handleRegister = async () => {
//     try {
//       const response = await axios.post('http://127.0.0.1:5000/register', {
//         firstName: formData.firstName,
//         lastName: formData.lastName, // Include lastName in the request
//         username: formData.username,
//         password: formData.password
//       });
//       console.log(response);
//       setMessage(response.data.message);
//     } catch (error) {
//       console.log(error);
//       setMessage(error.response?.data?.message || 'Error registering user');
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (formData.password !== formData.confirmPassword) {
//       setPasswordError("Passwords do not match");
//     } else {
//       setPasswordError("");
//       handleRegister(); // Call handleRegister here
//     }
//   };

//   const toggleShowPassword = () => {
//     setShowPassword(prevState => !prevState);
//   };

//   const toggleShowConfirmPassword = () => {
//     setShowConfirmPassword(prevState => !prevState);
//   };

//   return (
//     <div className="main">
//       <div className="main-container">
//         <img src={foodImage} alt="Food Background" className="food-background" />
//         <div className="form-container">
//           <h1 className="form-header">Create Account</h1>
//           <form onSubmit={handleSubmit}>
//             <div className="name-fields">
//               <div className="input-container">
//                 <label htmlFor="first-name">First Name:</label>
//                 <input
//                   type="text"
//                   id="first-name"
//                   name="firstName"
//                   value={formData.firstName}
//                   onChange={handleChange}
//                   placeholder="Enter your first name"
//                   required
//                 />
//               </div>
//               <div className="input-container">
//                 <label htmlFor="last-name">Last Name:</label>
//                 <input
//                   type="text"
//                   id="last-name"
//                   name="lastName"
//                   value={formData.lastName}
//                   onChange={handleChange}
//                   placeholder="Enter your last name"
//                   required
//                 />
//               </div>
//             </div>
//             <label htmlFor="email">Email:</label>
//             <input
//               type="email"
//               id="email"
//               name="username"
//               value={formData.username}
//               onChange={handleChange}
//               placeholder="Enter your email"
//               required
//             />
//             <label htmlFor="password">Password:</label>
//             <input
//               type={showPassword ? "text" : "password"}
//               id="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               placeholder="Enter your password"
//               autoComplete="current-password"
//               required
//             />
//             <label className="show-password-label">
//               <input type="checkbox" onChange={toggleShowPassword} /> Show Password
//             </label>
//             <br />
//             <label htmlFor="confirm-password">Confirm Password:</label>
//             <input
//               type={showConfirmPassword ? "text" : "password"}
//               id="confirm-password"
//               name="confirmPassword"
//               value={formData.confirmPassword}
//               onChange={handleChange}
//               placeholder="Confirm your password"
//               autoComplete="current-password"
//               required
//             />
//             <label className="show-password-label">
//               <input type="checkbox" onChange={toggleShowConfirmPassword} /> Show Confirm Password
//             </label>
//             {passwordError && <p className="error">{passwordError}</p>}
//             <button type="submit">Create Account</button>
//           </form>
//           {message && <p>{message}</p>} {/* Display message if exists */}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default MyComponent;





// import { useNavigate, useLocation } from 'react-router-dom';
// import React, { useState } from "react";
// import axios from 'axios'; // Import axios here
// import './create_acc.css';
// import foodImage from './foodImage.jpeg';

// function MyComponent() {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",  // Added lastName field
//     username: "",
//     password: "",
//     confirmPassword: "",
//   });
//   const [passwordError, setPasswordError] = useState("");
//   const [message, setMessage] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevFormData => ({
//       ...prevFormData,
//       [name]: value
//     }));
//   };

//   const handleRegister = async () => {
//     try {
//       const response = await axios.post('http://127.0.0.1:5000/register', {
//         firstName: formData.firstName,
//         lastName: formData.lastName, // Include lastName in the request
//         username: formData.username,
//         password: formData.password
//       });
//       console.log(response);
//       setMessage(response.data.message);
//       navigate('/home');
//     } catch (error) {
//       console.log(error);
//       setMessage(error.response?.data?.message || 'Error registering user');
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (formData.password !== formData.confirmPassword) {
//       setPasswordError("Passwords do not match");
//     } else {
//       setPasswordError("");
//       handleRegister(); // Call handleRegister here
//     }
//   };

//   const toggleShowPassword = () => {
//     setShowPassword(prevState => !prevState);
//   };

//   const toggleShowConfirmPassword = () => {
//     setShowConfirmPassword(prevState => !prevState);
//   };

//   return (
//     <div className="main">
//       <div className="main-container">
//         <img src={foodImage} alt="Food Background" className="food-background" />
//         <div className="form-container">
//           <h1 className="form-header">Create Account</h1>
//           <form onSubmit={handleSubmit}>
//             <div className="name-fields">
//               <div className="input-container">
//                 <label htmlFor="first-name">First Name:</label>
//                 <input
//                   type="text"
//                   id="first-name"
//                   name="firstName"
//                   value={formData.firstName}
//                   onChange={handleChange}
//                   placeholder="Enter your first name"
//                   minLength={3}
//                   maxLength={15}
//                   required
//                 />
//               </div>
//               <div className="input-container">
//                 <label htmlFor="last-name">Last Name:</label>
//                 <input
//                   type="text"
//                   id="last-name"
//                   name="lastName"
//                   value={formData.lastName}
//                   onChange={handleChange}
//                   placeholder="Enter your last name"
//                   maxLength={15}
//                 />
//               </div>
//             </div>
//             <label htmlFor="email">Email:</label>
//             <input
//               type="email"
//               id="email"
//               name="username"
//               value={formData.username}
//               onChange={handleChange}
//               placeholder="Enter your email"
//               maxLength={30}
//               pattern="^[a-zA-Z0-9._%+-]+@(gmail|hotmail|outlook|yahoo)\.com$"
//               required
//             />
//             <label htmlFor="password">Password:</label>
//             <input
//               type={showPassword ? "text" : "password"}
//               id="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               placeholder="Enter your password"
//               minLength={8}
//               maxLength={20}
//               pattern="^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]+$"
//               autoComplete="current-password"
//               required
//             />
//             <label className="show-password-label">
//               <input type="checkbox" onChange={toggleShowPassword} /> Show Password
//             </label>
//             <br />
//             <label htmlFor="confirm-password">Confirm Password:</label>
//             <input
//               type={showConfirmPassword ? "text" : "password"}
//               id="confirm-password"
//               name="confirmPassword"
//               value={formData.confirmPassword}
//               onChange={handleChange}
//               placeholder="Confirm your password"
//               minLength={8}
//               maxLength={20}
//               pattern="^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]+$"
//               autoComplete="current-password"
//               required
//             />
//             <label className="show-password-label">
//               <input type="checkbox" onChange={toggleShowConfirmPassword} /> Show Confirm Password
//             </label>
//             {passwordError && <p className="error">{passwordError}</p>}
//             <button type="submit">Create Account</button>
//           </form>
//           {message && <p>{message}</p>} {/* Display message if exists */}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default MyComponent;


// import React, { useState } from "react";
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios'; // Import axios here
// import './create_acc.css';
// import foodImage from './foodImage.jpeg';

// function MyComponent() {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",  // Added lastName field
//     username: "",
//     password: "",
//     confirmPassword: "",
//   });
//   const [passwordError, setPasswordError] = useState("");
//   const [message, setMessage] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const navigate = useNavigate(); // Initialize navigate hook

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevFormData => ({
//       ...prevFormData,
//       [name]: value
//     }));
//   };

//   const handleRegister = async () => {
//     try {
//       const response = await axios.post('http://127.0.0.1:5000/register', {
//         firstName: formData.firstName,
//         lastName: formData.lastName, // Include lastName in the request
//         username: formData.username,
//         password: formData.password
//       });
//       console.log(response);
//       setMessage(response.data.message);
//       navigate('/'); // Navigate to home page on successful registration
//     } catch (error) {
//       console.log(error);
//       setMessage(error.response?.data?.message || 'Error registering user');
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (formData.password !== formData.confirmPassword) {
//       setPasswordError("Passwords do not match");
//     } else {
//       setPasswordError("");
//       handleRegister(); // Call handleRegister here
//     }
//   };

//   const toggleShowPassword = () => {
//     setShowPassword(prevState => !prevState);
//   };

//   const toggleShowConfirmPassword = () => {
//     setShowConfirmPassword(prevState => !prevState);
//   };

//   return (
//     <div className="main">
//       <div className="main-container">
//         <img src={foodImage} alt="Food Background" className="food-background" />
//         <div className="form-container">
//           <h1 className="form-header">Create Account</h1>
//           <form onSubmit={handleSubmit}>
//             <div className="name-fields">
//               <div className="input-container">
//                 <label htmlFor="first-name">First Name:</label>
//                 <input
//                   type="text"
//                   id="first-name"
//                   name="firstName"
//                   value={formData.firstName}
//                   onChange={handleChange}
//                   placeholder="Enter your first name"
//                   minLength={3}
//                   maxLength={15}
//                   datatype="string"
//                   required
//                 />
//               </div>
//               <div className="input-container">
//                 <label htmlFor="last-name">Last Name:</label>
//                 <input
//                   type="text"
//                   id="last-name"
//                   name="lastName"
//                   value={formData.lastName}
//                   onChange={handleChange}
//                   placeholder="Enter your last name"
//                   maxLength={15}
//                 />
//               </div>
//             </div>
//             <label htmlFor="email">Email:</label>
//             <input
//               type="email"
//               id="email"
//               name="username"
//               value={formData.username}
//               onChange={handleChange}
//               placeholder="Enter your email"
//               maxLength={30}
//               pattern="^[a-zA-Z0-9._%+-]+@(gmail|hotmail|outlook|yahoo)\.com$"
//               required
//             />
//             <label htmlFor="password">Password:</label>
//             <input
//               type={showPassword ? "text" : "password"}
//               id="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               placeholder="Enter your password"
//               minLength={8}
//               maxLength={20}
//               pattern="^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]+$"
//               autoComplete="current-password"
//               required
//             />
//             <label className="show-password-label">
//               <input type="checkbox" onChange={toggleShowPassword} /> Show Password
//             </label>
//             <br />
//             <label htmlFor="confirm-password">Confirm Password:</label>
//             <input
//               type={showConfirmPassword ? "text" : "password"}
//               id="confirm-password"
//               name="confirmPassword"
//               value={formData.confirmPassword}
//               onChange={handleChange}
//               placeholder="Confirm your password"
//               minLength={8}
//               maxLength={20}
//               pattern="^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]+$"
//               autoComplete="current-password"
//               required
//             />
//             <label className="show-password-label">
//               <input type="checkbox" onChange={toggleShowConfirmPassword} /> Show Confirm Password
//             </label>
//             {passwordError && <p className="error">{passwordError}</p>}
//             <button type="submit">Create Account</button>
//           </form>
//           {message && <p>{message}</p>} {/* Display message if exists */}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default MyComponent;



import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './create_acc.css';
import foodImage from './foodImage.jpeg';

function MyComponent() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [passwordError, setPasswordError] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleValidation = () => {
    const errors = {};
    if (!formData.firstName || !/^[A-Za-z]+$/.test(formData.firstName)) {
      errors.firstName = "First name must contain only letters";
    }
    if (!formData.lastName || !/^[A-Za-z]+$/.test(formData.lastName)) {
      errors.lastName = "Last name must contain only letters";
    }
    if (!formData.password || !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/.test(formData.password)) {
      errors.password = "Password must contain at least 8 characters, one letter, one number, and one special character";
    }
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/register', {
        firstName: formData.firstName,
        lastName: formData.lastName,
        username: formData.username,
        password: formData.password
      });
      setMessage(response.data.message);
      navigate('/');
    } catch (error) {
      setMessage(error.response?.data?.message || 'Error registering user');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleValidation()) {
      setPasswordError("");
      handleRegister();
    } else {
      setPasswordError("Please correct the highlighted errors");
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(prevState => !prevState);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(prevState => !prevState);
  };

  return (
    <div className="main">
      <div className="main-container">
        <img src={foodImage} alt="Food Background" className="food-background" />
        <div className="form-container">
          <h1 className="form-header">Create Account</h1>
          <form onSubmit={handleSubmit}>
            <div className="name-fields">
              <div className="input-container">
                <label htmlFor="first-name">First Name:</label>
                <input
                  type="text"
                  id="first-name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter your first name"
                  minLength={3}
                  maxLength={15}
                  required
                />
                {formErrors.firstName && <p className="error">{formErrors.firstName}</p>}
              </div>
              <div className="input-container">
                <label htmlFor="last-name">Last Name:</label>
                <input
                  type="text"
                  id="last-name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter your last name"
                  minLength={3}
                  maxLength={15}
                  required
                />
                {formErrors.lastName && <p className="error">{formErrors.lastName}</p>}
              </div>
            </div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your email"
              maxLength={30}
              pattern="^[a-zA-Z0-9._%+-]+@(gmail|hotmail|outlook|yahoo)\.com$"
              required
            />
            <label htmlFor="password">Password:</label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              minLength={8}
              maxLength={20}
              required
            />
            {formErrors.password && <p className="error">{formErrors.password}</p>}
            <label className="show-password-label">
              <input type="checkbox" onChange={toggleShowPassword} /> Show Password
            </label>
            <br />
            <label htmlFor="confirm-password">Confirm Password:</label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirm-password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              minLength={8}
              maxLength={20}
              required
            />
            {formErrors.confirmPassword && <p className="error">{formErrors.confirmPassword}</p>}
            <label className="show-password-label">
              <input type="checkbox" onChange={toggleShowConfirmPassword} /> Show Confirm Password
            </label>
            {passwordError && <p className="error">{passwordError}</p>}
            <button type="submit">Create Account</button>
          </form>
          {message && <p>{message}</p>}
        </div>
      </div>
    </div>
  );
}

export default MyComponent;
