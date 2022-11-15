import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Login from "./components/Login"
import {BrowserRouter as Router,Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>

        <Routes>

        <Route path="/login" element={
        <div>
          <Login/>
          </div>}
        />

        <Route path="/checkout" element={
        <div>
          <Header />
          <Checkout/>
          </div>}
        />

        <Route path="/" element={
        <div>
          <Header />
          <Home/>
          </div>}
        />

        </Routes>

      </Router>
 

    </div>
  );
}

export default App;