import "./register.scss";
import { Link } from "react-router-dom";

export const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Naples Social</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Porttitor massa id neque aliquam vestibulum morbi.
          </p>
          <span>Already have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="username" />
            <input type="email" placeholder="email" />
            <input type="password" placeholder="password" />
            <input type="text" placeholder="name" />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Register;
