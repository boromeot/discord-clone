import "./RegisterPage.css";
import Chevron from "../SVGs/Chevron";
import { useState } from "react";
import { Link } from "react-router-dom";

const MONTHS = 
['January', 'Febuary', 'March', 'April',
 'May', 'June', 'July', 'August',
 'September', 'October', 'November', 'December'
];

const DAYS = [];

for (let i = 1; i <= 31; i++) {
  DAYS.push(i);
}

const YEARS = [];

for (let i = 1870; i <= 2022; i++) {
  YEARS.push(i);
}

const DropDownOption = ({ name }) => {
  return (
    <div className="dropdown-option">{ name }</div>
  )
}

const Select = ({ className="", options=[] }) => {
  return (
      <div className={className}>
        <div className="select-option">
          <div className="select-textWrapper">
            <div className="select-text"></div>
            <input className="select-input"/>
          </div>
          <div className="select-chevron">
            <Chevron />
          </div>
        </div>
        <div className="dropdown">
          {options.map(option => {
            return (
              <DropDownOption name={option} />
            )
          })}
        </div>
      </div>
  )
}

const RegisterPage = () => {
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div className="regsiterpage">
      <form className="register">
        <h1 className="register-header">Create an account</h1>
        <section className="register-main">
          <div className="register-mb20">
            <label className="register-label">Email</label>
            <input className="register-input" onChange={e => {setEmail(e.target.value)}} value={email}/>
          </div>
          <div className="register-mb20">
            <label className="register-label">Username</label>
            <input className="register-input" onChange={e => {setUsername(e.target.value)}} value={username}/>
          </div>
          <div className="register-mb20">
            <label className="register-label">Password</label>
            <input className="register-input" onChange={e => {setPassword(e.target.value)}} value={password} type="password"/>
          </div>
          <fieldset> 
            <legend className="register-label">Date of birth</legend>
            <div className="register-dropdowns">
              <Select className="month" options={MONTHS} />
              <Select className="day" options={DAYS} />
              <Select className="year" options={YEARS} />
            </div>
          </fieldset>
          <div className="margintop20">
            <button className="register-button">
              <div>Continue</div>
            </button>
          </div>
          <div className="margintop20">
            <Link to="/login" className="register-loginlink">
              Already have an account?
            </Link>
          </div>
        </section>
      </form>
    </div>
    
  )
}

export default RegisterPage;