const houses = require('./db.json');
let id = 4;

module.exports = {
    getHouses: (req, res) => {
        res.status(200).send(houses);
    },
    createHouse: (req, res) => {
        const { address, imageURL, price} = req.body;
        
        const newHouse = {
            id,
            address,
            imageURL,
            price
        }
        
        houses.push(newHouse);
        id++;

        res.status(200).send(houses);

    },
    updateHouse: (req, res) => {
        const { id } = req.params;
        const { type } = req.body;

        const tgtIndex = houses.findIndex(function (bodyObj) {
            return bodyObj.id === +id;
        })

        const tgtBodyObj = houses[tgtIndex]

        if (type === 'plus') { 
            
            tgtBodyObj.price += 10000;
        
            res.status(200).send(houses);
        } else if (type === 'minus') {
            if (tgtBodyObj.price > 10000) {
                tgtBodyObj.price -= 10000;
            }
            res.status(200).send(houses);
        } else {
            res.status(400).send('Something went very very wrong!');
        }
    },
    deleteHouse: (req, res) => {
        const { houseId } = req.params;

        const tgtIndex = houses.findIndex(function (housesObj) {
            return housesObj.id === +houseId;
        })

        if (tgtIndex === -1) {
            res.status(404).send('House not found')
        } else {
            houses.splice(tgtIndex, 1);
            res.status(200).send(houses);
        }
    }
}