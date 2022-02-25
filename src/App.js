import { TestNavbar } from "./Components/TestNavbar";
import {
  Routes,
  Route,
} from "react-router-dom";
import { Home} from './Components/Home'
import { SearchPage} from './Components/search/SearchPage';
import {Navbar} from "./Components/navbar/navbar";

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Routes>
            <Route path={"/"} element={ <Home/> } />
            <Route path={"/search"} element={ <SearchPage/> } />
        </Routes>
        
    </div>
  );
}

export default App;
