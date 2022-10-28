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
const YEARS = [];

for (let i = 1; i <= 31; i++) {
  DAYS.push(i);
}

for (let i = 2019; i >= 1870; i--) {
  YEARS.push(i);
}

const Select = ({ className="", options=[], input, setInput }) => {
  const [show, setShow] = useState(false);
  
  return (
      <div className={className} onClick={() => setShow(prev => !prev)}>
        <div className="select-option">
          <div className="select-textWrapper">
            <div className="select-text">{ input }</div>
            <input className="select-input" onChange={e => {setInput(e.target.value)}}/>
          </div>
          <div className="select-chevron">
            <Chevron />
          </div>
        </div>
        {show && <div className="dropdown">
          {options.map(option => {
            return (
              <div className="dropdown-option" onClick={() => setInput(option)}>{option}</div>
            )
          })}
        </div>}
      </div>
  )
}

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [year, setYear] = useState('');

  const register = async e => {
    e.preventDefault();
    const res = await fetch('http://localhost:3001/Register', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email,
        username,
        password,
        month,
        day,
        year
      })
    });
    const data = await res.json();
  }

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
              <Select className="month" options={MONTHS} input={month} setInput={setMonth} />
              <Select className="day" options={DAYS} input={day} setInput={setDay} />
              <Select className="year" options={YEARS} input={year} setInput={setYear} />
            </div>
          </fieldset>
          <div className="margintop20">
            <button className="register-button" onClick={e => {register(e)}}>
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