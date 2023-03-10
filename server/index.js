const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require('./controller')
const { getFortune } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune)


let { addVehicle, getVehicle, deleteVehicle} = require('./controller')

app.post('/vehicle', addVehicle)

app.get('/vehicle', getVehicle)

app.delete('/veicle:make', deleteVehicle)
app.delete('/veicle:model', deleteVehicle)
app.delete('/veicle:year', deleteVehicle)




app.listen(4000, () => console.log("Server running on 4000"));
