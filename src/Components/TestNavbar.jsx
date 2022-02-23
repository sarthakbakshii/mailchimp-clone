import "./TestNAvbar.css";
import React, { useState, useEffect } from 'react';

import { SearchSection } from './SearchSection'


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

    const showSearch = () =>{
        document.getElementById("SearchSection").style.height = "89vh";
         document.getElementById("hand").style.opacity = "1";
         document.querySelector("body").style.overflow = "hidden"
    }

    return (<> 
            <SearchSection/>

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