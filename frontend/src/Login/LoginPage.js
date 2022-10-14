import "./LoginPage.css";
function LoginPage() {
  return (
    <div className="background flex align justify ">
      <form className="login-form">
        <div className="flex">
          <div className="main">
            <div className="header">
              <h1 className="heading">Welcome back!</h1>
              <div className="sub-heading">We're so excited to see you again!</div>
            </div>
            <div className="fields">
              <div className="input-block">
                <label className="label">Email or Phone Number</label>
                <input className="input"></input>
              </div>
              <div className="password">
                <label className="label">Password</label>
                <input className="input"></input>
              </div>
              <div className="forgot">Forgot your password?</div>
              <button className="login">
                <div className="login-text">Log In</div>
              </button>
              <div className="margin-top4">
                <span>Need an account?</span>
                <div className="register">Register</div>
              </div>
            </div>
          </div>
          <div className="right">

          </div>
        </div>
      </form>
    </div>
  )
}

export default LoginPage;