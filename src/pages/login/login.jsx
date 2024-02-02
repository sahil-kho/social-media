import { Link } from "react-router-dom"
import "./login.scss"
import { useContext } from "react"
import { AuthContext } from "../../context/auth.context"

const Login = () => {

    const {Login} = useContext(AuthContext);

    const handleLogin = () => {
        Login();
    }


    return(
        <div className="login">
        <div className="card">
            <div className="left">
            <h1>Hello World</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <span>Dont you have an account</span>
            <Link to="/register">
            <button>Register</button>
            </Link>
            </div>
            <div className="right">
                <h1>Login</h1>
                <form>
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <Link to="/">
                    <button onClick={handleLogin}>Login</button>
                    </Link>
                </form>
                </div>
                </div>
        </div>
    )
}

export default Login