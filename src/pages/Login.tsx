import React, { useState } from 'react'
import styled from 'styled-components'


const LoginForm = styled.form`
  margin: 60px auto;
`

const LoginTitle = styled.h2`
  text-align: center;
`


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  `;

const EmailLabel = styled.label`
  margin-right: 140px;
`;

const PasswordLabel = styled.label`
  margin-right: 110px;
  `;

const Inputs = styled.input`
  color: #777;
  padding: 8px 6px;
  margin: 8px 0;


  &:focus {
    outline: none;
  }
`

const LoginButton = styled.button`
  display: block;
  background: #4CAF50;
  color: white;
  padding: 8px 16px;
  margin: 0px auto;
  border: none;
  cursor: pointer;
  
  &:hover {
    background: #45a049;
  }
`

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  return (
    <LoginForm onSubmit={submitForm}>
      <LoginTitle>Login</LoginTitle>
      <Wrapper>
        <EmailLabel>email:</EmailLabel>
        <Inputs type='email'
          onChange={e => setEmail(e.target.value)}
          value={email}
        />
        <PasswordLabel>password:</PasswordLabel>
        <Inputs type='password'
          onChange={e => setPassword(e.target.value)}
          value={password}
        />
      </Wrapper>
      <LoginButton>Login</LoginButton>
    </LoginForm>
  )
}

export default Login