import "./RegisterPage.css";

const RegisterPage = () => {
  return (
    <div className="regsiterpage">
      <form className="register">
        <h1 className="register-header">Create an account</h1>
        <section className="register-main">
          <div className="register-mb20">
            <label className="register-label">Email</label>
            <input className="register-input" />
          </div>
          <div className="register-mb20">
            <label className="register-label">Username</label>
            <input className="register-input" />
          </div>
          <div className="register-mb20">
            <label className="register-label">Password</label>
            <input className="register-input" />
          </div>
        </section>
      </form>
    </div>
  )
}

export default RegisterPage;