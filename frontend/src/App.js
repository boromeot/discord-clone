import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import Homepage from "./Homepage/Homepage";
import Test from "./Test";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={ <Homepage /> } />
        <Route path='/test' element={ <Test /> } />
        <Route path='*' element={ <ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
