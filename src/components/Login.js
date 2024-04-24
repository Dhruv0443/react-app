import { Link } from 'react-router-dom';
import Header from './Header'

function Login() {
  return (
    <div>
        <Header/>
        <br/>
        USERNAME
        <input type='text'/>
        <br/>
        PASSWORD
        <input type='text'/>
        <button>LOGIN</button>
        <Link to="/signup">SIGNUP</Link>       
    </div>
    
  )
}

export default Login;