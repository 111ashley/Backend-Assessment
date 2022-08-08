const books = [
    {
        id: 1,
        title: "Rich Dad Poor Dad",
        imageURL: "https://m.media-amazon.com/images/I/51AHZGhzZEL._SL500_.jpg",
    },
    {
        id: 2,
        title: "The Secret",
        imageURL: "https://images-na.ssl-images-amazon.com/images/I/51RQ5km2gkL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
    },
    {
        id: 3,
        title: "The 48 Laws of Power",
        imageURL: "https://images-na.ssl-images-amazon.com/images/I/41KY-NORo9L._SX355_BO1,204,203,200_.jpg",
    },
    {
        id: 4,
        title: "The Daily Laws",
        imageURL: "https://images-na.ssl-images-amazon.com/images/I/41nTxAwQQHL._SX329_BO1,204,203,200_.jpg"
    },
    {
        id: 5,
        title: "The Mountain Is You",
        imageURL: "https://images-na.ssl-images-amazon.com/images/I/41N62t+ANTL._SX331_BO1,204,203,200_.jpg"
    }
    // {
    //     id: 6,
    //     title: "Do It For Yourself",
    //     imageURL: "https://images-na.ssl-images-amazon.com/images/I/41hoNOV87KL._SX373_BO1,204,203,200_.jpg"
    // }
   
]

let globalId = 6


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
          imageURL,
        }
        books.push(newBook)
        res.status(200).send(books)
        globalId++
        
      },
      deleteBook: (req, res) => {
        let{id} = req.params
        let index = books.findIndex(book => +book.id === +id)
        if(index === -1){
            res.status(400).send("book not found")
        } else {
            books.splice(index,1)
            res.status(200).send(books)
        }
      }

}

// const books = require("/.db.json");
//  let globalId = 4


