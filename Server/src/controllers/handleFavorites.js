let myFavorites = [];

const postFav = (req, res) => {
    try {
        const character = req.body;
        const characterFound = myFavorites.find(fav => fav.id === character.id)
    
        if(!characterFound) throw Error('Personaje repetido')
            myFavorites.push(character);

            return res.status(200).json(myFavorites);
    } catch (error) {
        return res.status(404).send(error.message);
    }
};

const deleteFav = (req, res) => {
    const {id} = req.params;

    myFavorites = myFavorites.filter((Favorites) => Favorites.id !== +id);

    return res.status(200).json(myFavorites);
};

module.exports = {
    postFav,
    deleteFav
}
