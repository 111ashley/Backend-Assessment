

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
    },

    getBooks: (req, res) => res.status(200).send(books),

    postBook: (req, res) => {
        const { title, imageURL } = req.body;
        const newBook = {
          id: globalId,
          title,
          imageURL
        }
        books.push(newBook)
        res.status(200).send(books)
        globalId++
        
      }
 
}

const books = [
    {
        id: 1,
        title: "Rich Dad Poor Dad",
        imageURL: "https://m.media-amazon.com/images/I/51AHZGhzZEL._SL500_.jpg",
    },
    {
        id: 2,
        title: "The Secret",
        imageURL: "https://i.guim.co.uk/img/media/93b005182d65ea2e7ba15248c7e2f85bcb960e94/0_0_3600_5400/master/3600.jpg?width=700&quality=85&auto=format&fit=max&s=59c3efea82394deaed027d7cbd43409f",
    },
    {
        id: 3,
        title: "The 48 Laws of Power",
        imageURL: "https://images-na.ssl-images-amazon.com/images/I/41KY-NORo9L._SX355_BO1,204,203,200_.jpg",
    },
]

let globalId = 4



// const books = require("/.db.json");
//  let globalId = 4


