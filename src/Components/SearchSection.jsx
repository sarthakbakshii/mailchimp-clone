import "./SearchSection.scss"
import SearchIcon from '@mui/icons-material/Search';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

export const SearchSection = ({cancleSearch}) =>{
    return ( 
        <div id="SearchSection" className="SearchSection overflowNo">
                <div className="searchBox">
                    <div className="top">
                        <input className="searchInput" type="text"
                        placeholder="Search Mailchimp" />

                        <SearchIcon className="searchBtn" 
                        sx={{ fontSize: 40 }} 
                        onClick={ () =>{
                            alert("search hoga sabar karo")
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