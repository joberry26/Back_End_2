const express = require('express');
const app = express();
const cors = require('cors');

const {getHouses, createHouse, updateHouse, deleteHouse} = require('./controller');

app.use(cors());
app.use(express.json());

app.get('/api/houses', getHouses);
app.post('/api/houses', createHouse);
app.put('/api/houses/:id', updateHouse);
app.delete('/api/houses/:houseId', deleteHouse);


const SERVER_PORT = 4004
app.listen(SERVER_PORT, () => console.log(`Server is up on ${SERVER_PORT}`));