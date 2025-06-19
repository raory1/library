console.log("ok")

function Book(title, author, pages){
    if(!new.target){
        throw Error("You must use the 'new' operator to call the constructor");
    }
    this.title = title
    this.author = author
    this.pages = pages
    this.info = function(){
        return(`${this.title}, ${this.author}, ${this.pages} pages`)
     }
}

const books = []
function createBook(title, author, pages){
    const book = new Book(title, author, pages)
    books.push(book)
}

createBook("The Hobbit", "", "230")
console.log(books)