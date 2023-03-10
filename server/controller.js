let database = []

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = [
    "A beautiful, smart, and loving person will be coming into your life.",
    "A dubious friend may be an enemy in camouflage.",
    "A faithful friend is a strong defense.",
    "A fresh start will put you on your way.",
    "A friend is a present you give yourself."
    ]
    

        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);

    },
    addVehicle: (req, res) => {
        database.push(req.body)
        res.status(200).send(database)
    },
    getVehicle: (req, res) => {
        res.status(200).send(database)
    },
    deleteVehicle: (req, res) => {
        let make = req.params.make
        let model = req.params.model
        let year = req.params.year

        let index 
        
        for(let i = 0; i < database.length; i++) {
            let currentVehicle = database[i].make.model.year

            if (currentVehicle === vehicle){
                index = 1
            }

            if(index === undefined) {
                res.status(200).send(database)
            }else {
                database.splice(index, 1)
                res.status(200).send(database)
            }

        }
    }   

    

}