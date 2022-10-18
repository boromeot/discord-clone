import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import LoginPage from "./Login/LoginPage";
import RegisterPage from "./Register/RegisterPage";
import Test from "./Test";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={ <LoginPage /> } />
        <Route path='/register' element={ <RegisterPage /> } />
        <Route path='/test' element={ <Test /> } />
        <Route path='*' element={ <ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
