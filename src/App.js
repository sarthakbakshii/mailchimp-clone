import { TestNavbar } from "./Components/TestNavbar";
import {
  Routes,
  Route,
} from "react-router-dom";
import { Home} from './Components/Home'
import { SearchPage} from './Components/search/SearchPage';
import { Navbar } from "./Components/navbar/navbar";
import { Blog } from "./Components/blog";
import { Ads } from './Components/ads'

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Routes>
            <Route path={"/"} element={ <Home/> } />
            <Route path={"/search"} element={ <SearchPage/> } />
            <Route path="/blog" element = {<Blog/>}></Route> 
            <Route path="/ads" element = {<Ads/>}></Route> 
        </Routes>
        
    </div>
  );
}

export default App;
