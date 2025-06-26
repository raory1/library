const library = []
const showBtn = document.getElementById("show-dialog");
const dialog = document.getElementById("dialog");
const submitBtn = dialog.querySelector("#submitBtn");

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

function displayBooks(){
    library.forEach(book => {
        const div = document.createElement("div")
        const p = document.createElement("p")
        p.append(`${book.title}, write by ${book.author}, has ${book.pages} page(s)`)
        div.append(p)
        document.body.append(div)
    })
}

addBookToLibrary("The Hobbit", "aa", "230")
addBookToLibrary("O guarani", "José de Alencar", "230")
addBookToLibrary("A Sereia", "Kiera Cass", "200")
displayBooks()
console.log(library)

showBtn.addEventListener("click", () => {
  dialog.showModal();
});

jsCloseBtn.addEventListener("click", (e) => {
  e.preventDefault();
  dialog.close();
});
