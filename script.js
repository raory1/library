const library = []
const showBtn = document.getElementById("show-dialog");
const dialog = document.getElementById("dialog");
const submitBtn = dialog.querySelector("#submitBtn");
const cancelBtn = dialog.querySelector("#cancelBtn");
const bookTitle = document.getElementById("title")
const bookAuthor = document.getElementById("author")
const bookPages = document.getElementById("pages")
const form = document.getElementById("book-form");

const table = document.getElementById("books-table")
const tbody = document.querySelector("#books-table tbody")

function Book(title, author, pages, status){
    if(!new.target){
        throw Error("You must use the 'new' operator to call the constructor");
    }
    this.id = crypto.randomUUID()
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
}

function addBookToLibrary(title, author, pages, status){
    const book = new Book(title, author, pages, status)
    library.push(book)
}

function displayBooks(){
    tbody.innerHTML = ""
    library.forEach(book => {
        const tr = document.createElement("tr")
        for(const property in book) {
            const td = document.createElement("td")
            td.innerText = book[property]
            tr.append(td)
        }
        tbody.append(tr)
    })
}

addBookToLibrary("The Hobbit", "aa", "230", true)
addBookToLibrary("O guarani", "José de Alencar", "230", true)
addBookToLibrary("A Sereia", "Kiera Cass", "200", false)

showBtn.addEventListener("click", () => {
  dialog.showModal();
});

submitBtn.addEventListener("click", (e) => {
    if(form.checkValidity() === true){
        e.preventDefault();
        addBookToLibrary(bookTitle.value, bookAuthor.value, bookPages.value)
        displayBooks()
        form.reset();
        dialog.close();
    }
});

cancelBtn.addEventListener("click", (e) =>{
    e.preventDefault();
    dialog.close();
})

displayBooks()

