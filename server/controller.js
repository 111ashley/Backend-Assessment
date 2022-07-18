

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req,res) => {
        const fortunes = ["The expert at anything was once a beginner.", "The best is yet to come.", "The best way to predict the future is to create it.","Nothing is promised, invest in yourself.","Trust your gut and listen to your heart.","Everything is falling into place as it is meant to be!"];
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);

    },

    getFuture: (req,res) => {
        const future = ["You're going to be the next Elon Musk!","You're going to be famous!","You're going to be in Forbes Magazine!", "A big mansion, luxury cars, and non-stop vacations are in your future."]
        let randomIndex = Math.floor(Math.random () * future.length);
        let randomFuture = future[randomIndex];
        res.status(200).send(randomFuture);
    }   
 
};

// const books = require("/.db.json");
//  let globalId = 4


