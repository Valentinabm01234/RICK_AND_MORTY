import style from './card.module.css'
import { Link } from 'react-router-dom';

const Card = ({ name, status, species, gender, origin, image, onClose, id }) => {

   
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
   </div>


   
   );
 
};
export default Card;