import "./RegisterPage.css";

const Select = ({ className }) => {
  return (
    <div className={className}>
      <div className="temp">
        <div className="temp2">
          <div className="temp3">
            <div className="single">Janurary</div>
            <input className="select-input"/>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

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
            <input className="register-input" type="password"/>
          </div>
          <fieldset> 
            <legend className="register-label">Date of birth</legend>
            <div className="register-dropdowns">
              <Select className="month"/>
              <Select className="day"/>
              <Select className="year"/>
            </div>
          </fieldset>
        </section>
      </form>
    </div>
  )
}

export default RegisterPage;