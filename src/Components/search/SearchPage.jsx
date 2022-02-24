import { useLocation } from 'react-router-dom'


export const SearchPage = () =>{

    const search = useLocation().search;
    const q = new URLSearchParams(search).get('q')

    return <>
        <div> search page {q}</div>
        
    </>
}