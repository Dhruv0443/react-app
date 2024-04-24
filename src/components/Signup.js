import Header from "./Header";
import { Link } from "react-router-dom";
function Signup() {
  return (
    <div>
        <Header/>
        Welcome to Signup Page
        <br/>
        USERNAME
        <input type='text'/>
        <br/>
        PASSWORD
        <input type='text'/>
        <button>Signup</button>
        <Link to="/login">LOGIN</Link>       
    </div>
  )
}

export default Signup