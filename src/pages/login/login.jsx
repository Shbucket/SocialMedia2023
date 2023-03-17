import './login.scss'

const Login = () => {
    return (
      <div className="login">
        <div className="card">
          <div className="left">
            <h1>Hello World</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Porttitor massa id neque aliquam vestibulum morbi.
            </p>
            <span>dont you have an account?</span>
            <button>register</button>
          </div>
          <div className="right">
            <h1>Login</h1>
            <form>
                <input type="text" placeholder="username" />
                <input type="password" placeholder="password" />
                <button>login</button>
            </form>
          </div>
        </div>
      </div>
    );
}

export default Login