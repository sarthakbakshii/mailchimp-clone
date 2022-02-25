import { TestNavbar } from "./Components/TestNavbar";
import {
  Routes,
  Route,
} from "react-router-dom";
import { Home} from './Components/Home'
import { SearchPage} from './Components/search/SearchPage';

function App() {
  return (
    <div className="App">
        <TestNavbar/>
        <Routes>
            <Route path={"/"} element={ <Home/> } />
            <Route path={"/search"} element={ <SearchPage/> } />
        </Routes>
        
    </div>
  );
}

export default App;
