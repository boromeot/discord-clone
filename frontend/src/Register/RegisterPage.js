import "./RegisterPage.css";

const RegisterPage = () => {
  return (
    <div className="background">
      <form className="register-form">
        <h1 className="header">Create an account</h1>
        <section className="main">
          <div className="margin-bottom20">
            <label>Email</label>
            <input></input>
          </div>
        </section>
      </form>
    </div>
  )
}

export default RegisterPage;