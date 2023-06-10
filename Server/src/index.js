const express = require ('express');
const server = express();
const router = require('./routes/index');
const morgan = require('morgan');
const PORT = 3001;

server.use(express.json());
server.use(morgan('dev'));

server.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Credentials', 'true');
   res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
   );
   res.header(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, DELETE'
   );
   next();
});

server.use('/rickandmorty', router);

server.listen(PORT, () => {
   console.log(`Server raised in port: ${PORT}`);
});



// const http = require("http");
// const { getCharById } = require("./controllers/getCharById.js");
// // const characters = require("./utils/data.js");
// const PORT = 3001;

// http.createServer((req, res) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     // if(req.url.includes("/rickandmorty/character")){
//     //     const id = req.url.split("/").at(-1);
//     //     const character = characters.filter(char => char.id === Number(id))[0];
//     //     //console.log(character);
//     //     res.writeHead(200, { "Content-Type": "application/json"});
//     //     res.end(JSON.stringify(character));
//     // }

//     if(req.url.includes('/rickandmorty/character')){
//         const id = req.url.split('/').at(-1);

//         getCharById(res, +id);
//     }
// })
// .listen(PORT, "localhost");


