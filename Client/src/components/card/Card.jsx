import style from './card.module.css'
import { Link } from 'react-router-dom';
import { addFav, removeFav } from '../redux/actions';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';

const Card = ({ name, status, species, gender, origin, 
   image, onClose, id, addFav, removeFav, myFavorites }) => {
   
   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if(isFav) {
         setIsFav(false);
         removeFav(id);
      }
      else {
         setIsFav(true);
         addFav({id, name, species, gender, image}) ;
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);    

   return (
        
   <div className={style.container}>

   <Link to={`/detail/${id}`}> 
      </Link>
      <img src={image} alt="" />
      <h2 className={style.titulo}>{name}</h2>
      <div className={style.datos}>
      <h2>{gender}</h2>
      <h2>{species}</h2>
      <h2>{status}</h2>
      <h2>{origin}</h2>
      </div>
      <button onClick={() => {onClose(id)}}>BORRAR</button>
      <div className={style.fav}>
      <button onClick={handleFavorite}>{isFav ? '❤️' : '💔'}</button>
      </div>
   </div>

   );
};

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => {dispatch(addFav(character))},
      removeFav: (id) => {dispatch(removeFav(id))}
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Card);
