import style from './searchBar.module.css';
import { useState } from 'react';

const SearchBar = ({onSearch}) => {
const [id, setId] = useState('');
const handleChange = (event) => {
   setId(event.target.value)
};
   return (

      <div className={style.container}>
         <input type='search' onChange={handleChange} value={id} />
         <button onClick={()=> {onSearch(id)}} className={style.button}>Agregar</button>
      </div>
   );
};
export default SearchBar;
