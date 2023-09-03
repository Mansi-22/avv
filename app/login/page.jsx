"use client"
import React, { useState } from 'react';
import InputField from '@/app/components/InputField';
import Button from '../components/Button';
import axios from 'axios';
import  { useRouter } from 'next/navigation';

const LoginForm = () => {
const router = useRouter();

    const [user, setUser] = React.useState({
        name: "",
        address: "",
       
    })

    const onLogin = async () => {
        try {
            
            const response = await axios.post("/api/login", user);
            console.log("Login success", response.data);
            router.push("/");
        } catch (error) {
            console.log("Login failed", error.message);
        } finally{
        
        }
    }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here
    console.log("pressed")
  };

  return (
    
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <InputField
          type="text"
          label="name"
          placeholder="Enter your name"
          value={user.name}
            onChange={(e) => setUser({...user, name: e.target.value})}
        />
        <InputField
          type="text"
          label="address"
          placeholder="Enter your address"
          value={user.address}
            onChange={(e) => setUser({...user, address: e.target.value})}
        />
        <Button label="Login"  onClick={onLogin}  />
      </form>
      </div>
    
  );
};

export default LoginForm;