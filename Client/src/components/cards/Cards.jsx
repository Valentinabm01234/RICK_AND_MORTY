import Card from "../card/Card.jsx";
import Style from "./cards.module.css";


const Cards = ({ characters, onClose }) => {
   console.log({characters})
   return (
      <div className={Style.Contenedor}>
         {
         characters.map(({ name, species, gender, image, origin, status, id }) => {
               return (
                  <Card
                   key={id}
                     image={image}
                     name={name}
                     species={species}
                     gender={gender}
                     origin={origin.name}
                     status={status}
                     id={id}
                     onClose={onClose}
                  />
            );
         })}
      </div>
   );
};
export default Cards;