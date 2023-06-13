const getCharById = async (req, res) => {
    try {
        const {id} = req.params;
        const {data} = await axios (`${URL}/${id}`)

            if (!data.name) throw Error(`Faltan datos del personaje con ID: ${id}`)

                const character = {
                    id: data.id,
                    name: data.name,
                    species: data.species,
                    origin: data.origin,
                    image: data.image,
                    gender: data.gender,
                    status: data.status
                }
                return res.status(200).json(character);
            // return res.status(400).send('Not Found');
    } catch (error) {
        return error.message.includes('ID')
        ? res.status(404).send(error.message)
        : res.status(500).send(error.response.data.error)
    }
};





// const axios = require ('axios');

// const getCharById = (res, id) => {
//     axios(`https://rickandmortyapi.com/api/character/${id}`) 
//     .then(response => response.data)
//     .then(({name, gender, species, origin, image, status}) => {
//         const character = {
//             id,
//             name, 
//             gender, 
//             species, 
//             origin, 
//             image, 
//             status
//         }
//         return res
//                 .writeHead(200, {"content-type": "application/json"})
//                 .end(JSON.stringify(character))
//     })
//     .catch(error => {
//         return res
//                 .writeHead(500, {"content-type": "text/plain"})
//                 .end(error.message)
//     })
// };


// module.exports = {
//     getCharById
// }