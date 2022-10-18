import "./RegisterPage.css";

const RegisterPage = () => {
  return (
    <div className="regsiterpage">
      <form className="register">
        <h1 className="register-header">Create an account</h1>
        <section className="register-form">
          <div className="register-mb20">
            <label>Email</label>
            <input></input>
          </div>
          <div className="register-mb20">
            <label>Username</label>
            <input></input>
          </div>
          <div className="register-mb20">
            <label>Password</label>
            <input></input>
          </div>
        </section>
      </form>
    </div>
  )
}

export default RegisterPage;