import "./authentication.css"
import { Loginpage } from './Components/loginpage';
import { Signup } from './Components/signup';
import {Recover} from "./Components/recover"
import {Recoverdone} from "./Components/recoverdone"
import { Resetpassword } from './Components/resetpassword';
import {
  Routes,
  Route,
} from "react-router-dom";
import { Home} from './Components/Home'
import { SearchPage} from './Components/search/SearchPage';
import { Navbar } from "./Components/navbar/navbar";
import { Blog } from "./Components/blog";
import { Ads } from './Components/ads'


import { Payment } from "./Components/paymentPage/Payment";
import { PaymentCard } from "./Components/PlanPage/PaymentCard";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/login" element={<Loginpage/>}></Route>
            <Route path="/signup" element={<Signup/>}></Route>
            <Route path="/forgot-username" element={<Recover/>}></Route>
            <Route path="/forgot-password" element={<Resetpassword/>}></Route>
            <Route path="/forgot-username-post" element={<Recoverdone/>}></Route>
            <Route path={"/"} element={<><Navbar/><Home/></>} />
            <Route path={"/search"} element={ <><Navbar/><SearchPage/></> } />
            <Route path="/blog" element = {<><Navbar/><Blog/></>}></Route> 
            <Route path="/ads" element = {<><Navbar/><Ads/></>}></Route> 


            <Route path="/payment" element={<Payment />}></Route>
            <Route path="/plans" element={<PaymentCard />}></Route>
        </Routes>
        
    </div>
  );
}

export default App;
