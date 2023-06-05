const http = require("http");
const { getCharById } = require("./controllers/getCharById.js");
// const characters = require("./utils/data.js");
const PORT = 3001;

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    // if(req.url.includes("/rickandmorty/character")){
    //     const id = req.url.split("/").at(-1);
    //     const character = characters.filter(char => char.id === Number(id))[0];
    //     //console.log(character);
    //     res.writeHead(200, { "Content-Type": "application/json"});
    //     res.end(JSON.stringify(character));
    // }

    if(req.url.includes('/rickandmorty/character')){
        const id = req.url.split('/').at(-1);

        getCharById(res, +id);
    }
})
.listen(PORT, "localhost");
