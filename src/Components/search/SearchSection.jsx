import "./SearchSection.scss"
import SearchIcon from '@mui/icons-material/Search';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { db } from '../../firebase-config'
import { useState } from "react";
import { useEffect , useRef } from "react";
import { collection, getDocs, query , where } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
import { useToast , Button } from '@chakra-ui/react';

export const SearchSection = ({cancleSearch }) =>{
     const toast = useToast()

    const [ pages , setpages ] = useState([]);
    console.log(pages)

    const navigate = useNavigate();
    
    // ------ search area
    const [text , setText] = useState("");
    const inputEl = useRef(null);

    const submitHandler = () =>{
        const pageCollectionRef = collection( db , "pages");
        const que = query(pageCollectionRef , where("section", "==", text))

            const getPages = async () =>{
                     const data = await getDocs(que);
                     setpages( data.docs.map( (doc) => ({ ...doc.data(), id : doc.id })     ))
            }
            getPages();
            inputEl.current.value = "";

        
        cancleSearch();
        navigate(`/search?q=${text}`);

    }
    const KeyboardEnterHandler = (e) =>{
        if (e.key === 'Enter') submitHandler()
    }



    return ( 
        <div id="SearchSection" className="SearchSection overflowNo">
                <div className="searchBox">
                    <div className="top">
                        <input className="searchInput" type="text"
                        placeholder="Search Mailchimp" 
                        ref={inputEl}
                        onChange={(e) =>{ setText(e.target.value)}}
                         onKeyDown={KeyboardEnterHandler} 
                       />

                        <SearchIcon className="searchBtn" 
                        sx={{ fontSize: 40 }} 
                        onClick={ () =>{
                           submitHandler()
                        }} />

                        <span id="showCancle" className="cancle"
                        onClick={cancleSearch}>X</span>

                        
                    </div>
                     <div className="bottom">
                        <h3>TRY SEARCHING FOR</h3>
                        <div className="buttonBox">
                                <button>Landing pages</button>
                                 <button>Api</button>
                                  <button>QuickBooks</button>
                        
                        </div>
                    </div>

                </div>

                <div id="hand" className="hand">
                         <img className="hand1" src="https://mailchimp.com/release/plums/cxp/images/search-hand-lft.c3cf150b.png" alt="" />
                         <img className="hand1" src="https://mailchimp.com/release/plums/cxp/images/search-hand-rt.2eb44aca.png" alt="" />
                
                </div>

           
        
      
   
                
        
        </div>)
}