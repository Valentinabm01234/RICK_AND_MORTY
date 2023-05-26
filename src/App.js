import  './App.css';
import Cards from './components/cards/Cards.jsx';
import Navbar from './components/navbar/Navbar';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation,useNavigate } from 'react-router-dom';
import About from './components/About/About';
import Home from './components/Home/Home.jsx';
import Profile from './components/Profile/Profile.jsx';
import Person from './components/Person/Person';
import Detail from './components/Detail/Detail.jsx';
import Forms from './components/forms/Forms';
const EMAIL = 'ejemplo@gmail.com';
const PASSWORD = 'unajeje1';


const example ={ 
   id: 1,
   name: 'Rick Sanchez',
   status: 'Alive',
   species: 'Human',
   gender: 'Male',
   origin: {
      name: 'Earth (C-137)',
      url: 'https://rickandmortyapi.com/api/location/1',
   },
   image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
 };

function App() {

    const [characters,setCharacters] = useState([]);
    const {pathname} = useLocation();

    const navigate = useNavigate();
    const [access, setAccess] = useState(false);
   
    
    function login(userData) {
       if (userData.password === PASSWORD && userData.email === EMAIL) {
          setAccess(true);
          navigate('/home');
       }
    };
    useEffect(() => {
      !access && navigate('/');
   }, [access]);

function onSearch(id) {
   axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      } else {
         window.alert('¡No hay personajes con este ID!');
      }
   });
};

const onClose =(id)=> {
   setCharacters(
      characters.filter((char)=>{
         return char.id !== Number(id)
      })
   )
};


   return (
      <div className="App"style={{ 
         backgroundImage: `url("https://images8.alphacoders.com/109/1099810.jpg")` 
       }}>
{pathname !== '/' && <Navbar onSearch={onSearch} />}

         {/* <Navbar onSearch={onSearch} /> */}

         <Routes>
         <Route path ='/' element = {<Forms login={login} />}/>
<Route path ='/home' element={<Cards characters={characters} onClose={onClose} />}/>
<Route path ='/about' element = {<About />}/>
<Route path ='/detail/:id' element = {<Detail />}/>
         </Routes>
      </div>

   );
}

export default App;
