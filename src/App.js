import { TestNavbar } from "./Components/TestNavbar";
import {
  Routes,
  Route,
} from "react-router-dom";
import { Home} from './Components/Home'

function App() {
  return (
    <div className="App">
        <TestNavbar/>
        <Routes>
            <Route path={"/"} element={ <Home/> } />
        </Routes>
        
    </div>
  );
}

export default App;
