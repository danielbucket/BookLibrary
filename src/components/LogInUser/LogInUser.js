import    React         from 'react';
import  { Link }        from 'react-router-dom';
import  { logInStyle }  from './LogInCSS';

const LogInUser = (props) => {
  const { logInUser } = props

  return (
    <div>
      <button onClick={() => logInUser()}>Log In</button>
    </div>
  )
}
