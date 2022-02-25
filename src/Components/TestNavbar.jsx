import "./TestNAvbar.css";
import React from 'react';

import { SearchSection } from './search/SearchSection';
import {Navbar} from "./navbar/navbar";


export const TestNavbar = () =>{

    window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            document.getElementById("testNavbar").style.background = "white";
        } else {
            document.getElementById("testNavbar").style.background = "#FFE01B";
        }
    }
    function onmouseover(e) {
        document.getElementById("testNavbar").style.background = "white";
    }
    function onmouseout(e) {
        document.getElementById("testNavbar").style.background = "#FFE01B";
    }

    const showSearch = (e) =>{
        window.scrollTo(0, 0);
        //  document.getElementById("hand").style.opacity = "2";
        document.getElementById("SearchSection").style.height = "89vh";
        document.getElementById("SearchSection").classList.remove("overflowNo")
        
         document.querySelector("body").style.overflow = "hidden"
         document.getElementById("testNavbar").style.background = "white";
    }  
    
    const cancleSearch = (e) =>{
        //  document.getElementById("hand").style.opacity = "0";
        document.getElementById("SearchSection").style.height = "0vh";
        document.getElementById("SearchSection").classList.add("overflowNo")
        
         document.querySelector("body").style.overflow = "auto"
         document.getElementById("testNavbar").style.background = "white";
    }  



    return (<> 
            <SearchSection cancleSearch={cancleSearch } />
            

            <div id="testNavbar" 
                onMouseOver={onmouseover}
                onMouseOut={onmouseout}
            className="testNavbar"  >
                        <button className="search" onClick={showSearch}>search</button>
                        <button className="login">login</button>
                        <button className="signup">Signup for free</button>
            </div>
            <div className="navSpace"></div>  
            
            </>)
}