const library = []

function Book(title, author, pages){
    if(!new.target){
        throw Error("You must use the 'new' operator to call the constructor");
    }
    this.id = crypto.randomUUID()
    this.title = title
    this.author = author
    this.pages = pages
    this.info = function(){
        return(`${this.title}, ${this.author}, ${this.pages} pages`)
     }
}

function addBookToLibrary(title, author, pages){
    const book = new Book(title, author, pages)
    library.push(book)
}

addBookToLibrary("The Hobbit", "", "230")
console.log(library)