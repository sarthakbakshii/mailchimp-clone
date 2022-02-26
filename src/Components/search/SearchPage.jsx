import { Link, useLocation } from 'react-router-dom';
import "./SearchPage.scss";
import { Input } from '@chakra-ui/react'
import SearchIcon from '@mui/icons-material/Search';

import { useEffect, useState } from 'react';

import { Select } from '@chakra-ui/react'

import { db } from '../../firebase-config'
import { collection, getDocs, query , where } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getData , filterData } from '../../Redux/action'


export const SearchPage = () =>{

     // ------- redux 
    const sorted = useSelector( store => store.sorted );
    console.log(sorted, "redux");
    const dispatch = useDispatch();


    const search = useLocation().search;
    const q = new URLSearchParams(search).get('q')
    const [searchField , setSearchField ] = useState(q)

    // ----------search
      const [ pages , setpages ] = useState([]);
      const [text , setText] = useState("");
      console.log(pages,"pages page");
       const navigate = useNavigate();

      
    const searchHandler = () =>{
        const pageCollectionRef = collection( db , "pages");
        const que = query(pageCollectionRef , where("section", "==", searchField))

            const getPages = async () =>{
                     const data = await getDocs(que);
                     setpages( data.docs.map( (doc) => ({ ...doc.data(), id : doc.id })     ))
                     dispatch( getData( data.docs.map( (doc) => ({ ...doc.data(), id : doc.id })     ) ) )
            }
            getPages()
            setText(searchField)
    }
    useEffect( () =>{
        searchHandler()
    }, [])

    const KeyboardEnterHandler = (e) =>{
        if (e.key === 'Enter') searchHandler()
    }

    // ------------- filter event
    const filterHandler = (e) =>{
            console.log("select", e.target.value);
            dispatch( filterData(e.target.value) )
    }
   


    return <>
    <div style={{height:"80px"}}></div>
        <div className='banner'>
            <div className='cont'>
                <Input className='input' size='lg' 
                placeholder='Search Mailchimp' 
                defaultValue={q} 
                 onChange={(e) =>{ setSearchField(e.target.value)}}
                         onKeyDown={KeyboardEnterHandler} 
                         />
                <SearchIcon className='search' />
            </div>
            <div className='cont2'>
                <h4>Filter by type:</h4>

            <select className='select' placeholder='filter by type' onChange={ (e) => { filterHandler(e) }}>
                <option className='opt' value=''>All</option>
                <option className='opt' value='articles'>Article</option>
                <option className='opt' value='features'>Features</option>
                 <option className='opt' value='tutorials'>Tutorials</option>
            </select>

            <h4>{sorted.length} results found for "{text}"</h4>

    
            
            </div>
        
        </div>

        <section className='sectionResult'>

        {sorted.map( a =>{
            return ( <div key={a.id}> 
                            <h1>{a.type}</h1>
                           <Link to={`/${text}`} > <h2> {a.name}</h2> </Link>
                            <h3> {a.desc} </h3>
                    </div>)
        })}
       
        
        </section>
        
    </>
}