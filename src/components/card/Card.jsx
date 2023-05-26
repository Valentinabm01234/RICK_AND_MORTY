import style from './card.module.css'
import { Link } from 'react-router-dom';

const Card = ({ name, status, species, gender, origin, image, onClose, id }) => {

   
   return (
   
   
       
   <div className={style.container}>

   <Link to={`/detail/${id}`}> 
      <h2 className={style.titulo}>{name}</h2>
      </Link>
      <h2>{species}</h2>
      <h2>{gender}</h2>
      <h2>{status}</h2>
      <h2>{origin}</h2>
      <img src={image} alt="" />
      <button onClick={() => {onClose(id)}}>Borrar</button>
   </div>


   
   );
 
};
export default Card;