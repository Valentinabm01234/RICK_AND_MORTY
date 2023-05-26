import Card from "../card/Card.jsx";

const Cards = ({ characters, onClose }) => {
   console.log({characters})
   return (
      <div>
         {
         characters.map(({ name, species, gender, image, origin, status, id }) => {
               return (
                  <Card
                   key={id}
                     name={name}
                     species={species}
                     gender={gender}
                     origin={origin.name}
                     status={status}
                     image={image}
                     id={id}
                     onClose={onClose}
                  />
            );
         })}
      </div>
   );
};
export default Cards;