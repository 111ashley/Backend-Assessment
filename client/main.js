const booksContainer = document.querySelector('#books-container')
const form = document.querySelector('form')
const postBookBtn = document.getElementById("add-book-btn")
const complimentBtn = document.getElementById("complimentButton")


const baseURL = `http://localhost:4000/api/books`

const booksCallback = ({ data: books }) => displayBooks(books)
const errCallback = err => console.log(err)

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)

const fortuneBtn = document.getElementById("fortuneButton")
console.log("Button clicked!")
const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
    .then (res => {
        const data = res.data;
        alert(data);
    });

};

fortuneBtn.addEventListener('click', getFortune)

const futureBtn = document.getElementById("futureButton")
console.log("Button Was Clicked!")
const getFuture = () => {
    axios.get("http://localhost:4000/api/future/")
    .then (res => {
        const data = res.data;
        alert(data);
    });
};

futureBtn.addEventListener('click',getFuture)


const getBooks = () => axios.get(baseURL).then(booksCallback).catch(errCallback)
const postBook = body => axios.post(baseURL, body).then(booksCallback).catch(errCallback)
const deleteBook = id => axios.delete(`${baseURL}/${id}`).then(booksCallback).catch(errCallback)
function submitHandler(e) {
    e.preventDefault()

    let title = document.querySelector('#title')
    let imageURL = document.querySelector('#img')


    let body = {
        title: title.value,
        imageURL: imageURL.value
    }

    postBook(body)
        title.value = ''
        imageURL.value = ''

}

function createBookCard(book){
    const bookCard = document.createElement('div')
    bookCard.classList.add('book-card')
    bookCard.innerHTML = `<img alt='book cover image' src=${book.imageURL} class="book-cover-image"/>
    <p class="title">${book.title}</p> 
    <button onclick="deleteBook(${book.id})" style="background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2NO2tms5tq6m6YoqCOlIHjBhc90UMrbhsMdG0TMdnGsQUQe2G3X83GRBQKeiPNCWiM70&usqp=CAU)">DELETE</button>
    `
    booksContainer.appendChild(bookCard)
}

function displayBooks(arr) {
    booksContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++){
        createBookCard(arr[i])
    }
}

form.addEventListener('submit', submitHandler)
getBooks()
