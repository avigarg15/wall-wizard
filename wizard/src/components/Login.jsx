import React, { useState } from 'react';

const Login=() => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();

    // handle login logic here
  };

  const backgroundStyles = {
    backgroundImage: `url('/brickHomePage.jpeg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    opacity : .9
  };

  const stylesinsidediv = {
    width: '45%',
    height: '50%',
    backgroundColor: '#FFFFE0',
    borderRadius: '20px',
    zIndex: 9999
    
  };

  return (
    <>
        <div style={backgroundStyles} >
            <div style={stylesinsidediv}> 
                   <h1 style={{ position: 'relative', top: '10%', textAlign: 'center', color: 'black',fontSize : '40px' }}>Welcome Back!!!</h1>
                   <p style={{ position: 'relative', top: '10%', textAlign: 'center', color: 'black',fontSize : '15px' }}>Login To Your Account</p>
                   
            </div>
            
        </div>




{

/*         
        <form onSubmit={handleSubmit}>
        <label>
            Email:
            <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <label>
            Password:
            <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <button type="submit">Log In</button>
        </form> */}
    </>
  );
}

export default Login;
