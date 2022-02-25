// import logo from './logo.svg'; 
// import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Blogs } from './components/blog';
import { Home } from './components/home';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Home />
      {/* <Navbar /> */}

      {/* <Routes>
        <Route path='/' element={<Home />}>Home</Route>
        <Route path='/blogs' element={<Blogs />} >Blogs</Route>
      </Routes> */}

    </div>
  );
}

export default App;
