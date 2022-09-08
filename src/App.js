// import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Register from './pages/Register';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Login from './pages/Login';
import Feature from './pages/Feature';
function App() {
  return (
    <BrowserRouter>
    <Routes>
    {/* <div className="App"> */}
    <Route path="/"  element={<Home/>} />
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/feature' element={<Feature/>} />
    {/* </div> */}
    </Routes>
    </BrowserRouter>
  );
}
export default App;
