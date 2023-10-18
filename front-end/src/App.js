
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Main from "./components/pages/Main";
import Login from "./components/pages/Login";
import User from "./components/pages/User";
import Nav from './components/Nav';
import Footer from './components/Footer';




function App() {



const fetchedToken = useSelector(state => state.userToken.token)


  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/Login" element={<Login />} />
        <Route path='/user' element={fetchedToken ? <User /> : <Navigate to="/" />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
