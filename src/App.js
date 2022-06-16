import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [fname, setFname] = useState("");
  const [fnameError, setFnameError] = useState("");
  const [lname, setLname] = useState("");
  const [lnameError, setLnameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [cnfpassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [value, setValue] = useState(false);

  function clear() {
    setFname('');
    setLname('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setFnameError('');
    setLnameError('');
    setEmailError('');
    setPasswordError('');
    setConfirmPasswordError('')
    setValue('')
  }


  const handleSubmit = (event) => {
   event.preventDefault();
   setValue(true);
   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(fname.length === 0) {
      setFnameError("Field is required");
      setValue(false);
    }
    if(lname.length === 0) {
      setLnameError("Field is required");
      setValue(false);
    }
    if(email.length === 0) {
      setEmailError("Field is required");
      setValue(false);
    } else if(!regex.test(email)) {
      setEmailError("This is not a valid email format");
    }
    if(password.length === 0) {
      setPasswordError("Field is required");
      setValue(false);
    } else if(password.length < 6) {
      setPasswordError("Password must be more than 6 characters");
    }
    if(cnfpassword.length === 0) {
      setConfirmPasswordError("Field is required");
      setValue(false);
    } else if(cnfpassword != password) {
      setConfirmPasswordError("Password Mismatched");
    }
  };

  const handleChange = (event) => {
    setFnameError('');
    setLnameError('');
    setEmailError('');
    setPasswordError('');
    setConfirmPasswordError('');

    const{name, value} = event.target;
    console.log(name, value);

    switch (name) {
      case "firstname":
        setFname(value)
        break;
    
      default:
        break;
    }

    switch (name) {
      case "lastname":
        setLname(value)
        break;
    
      default:
        break;
    }

    switch (name) {
      case "email":
        setEmail(value)
        break;
    
      default:
        break;
    }

    switch (name) {
      case "password":
        setPassword(value)
        break;
    
      default:
        break;
    }

    switch (name) {
      case "confirmpassword":
        setConfirmPassword(value)
        break;
    
      default:
        break;
    }
  }

  // useEffect(() =>{
  //   console.log();
  // });

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Create Account</h1>
        <div className='ui divider'></div>
        <div className='ui form'>
          <div className='field'>
            <label>First Name </label>
            <input type="text" name='firstname' value={fname} onChange={handleChange}/>
          </div>
          <p>{fnameError}</p>

          <div className='field'>
            <label>Last Name </label>
            <input type="text" name='lastname' value={lname} onChange={handleChange}/>
          </div>
          <p>{lnameError}</p>

          <div className='field'>
            <label>Email </label>
            <input type="text" name="email" value={email} onChange={handleChange}/>
          </div>
          <p>{emailError}</p>

          <div className='field'>
            <label>Password </label>
            <input type="password" name='password' value={password} onChange={handleChange}/>
          </div>
          <p>{passwordError}</p>

          <div className='field'>
            <label>Confirm Password </label>
            <input type="password" name='confirmpassword' value={cnfpassword} onChange={handleChange}/>
          </div>
          <p>{confirmPasswordError}</p>

          <button className='fluid ui button blue' type='submit'>Submit</button> <br />
          <button className='fluid ui button red' type='reset' onClick={clear}>Reset</button>
        </div>

      </form>
      <br />
      
      {(value) ? (
      <div style={{height:'60px', width:'300px', backgroundColor:'red'}}>

        <div className="mt-3">
          <label><b style = {{color:'black'}}>First Name : </b>{fname}</label><br/>
          <label><b style = {{color:'black'}}>Last Name : </b>{lname}</label><br/>
          <label><b style = {{color:'black'}}>Email : </b>{email}</label><br/>
        </div>
        
      </div>
      ) : 
      null }
      
    </div>
  );
}

export default App;
