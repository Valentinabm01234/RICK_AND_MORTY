import style from './navbar.module.css'
import SearchBar from "../searchbar/SearchBar.jsx";
import { Link,NavLink } from 'react-router-dom';




const Navbar = ({onSearch}) => {

    return (

        <div className={style.nav}>
            <SearchBar onSearch={onSearch}/>

            <Link to = '/home'>
    <button>Home</button>
    </Link>

    <NavLink to = '/about'>
    <button>About</button>
    </NavLink>

    <NavLink to = '/favorites'>
    <button>Favorites</button>
    </NavLink>

        </div>

    );
};
export default Navbar;