import "./RegisterPage.css";
import Chevron from "../SVGs/Chevron";

const Select = ({ className }) => {
  return (
    <div className={className}>
      <div className="select-option">
        <div className="select-textWrapper">
          <div className="select-text">Janurary</div>
          <input className="select-input"/>
        </div>
        <div className="select-chevron">
          <Chevron />
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
              <Select className="month register-select"/>
              <Select className="day register-select"/>
              <Select className="year register-select"/>
            </div>
          </fieldset>
        </section>
      </form>
    </div>
  )
}

export default RegisterPage;