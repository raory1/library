console.log("ok")

function Book(){
    if(!new.target){
        throw Error("You must use the 'new' operator to call the constructor");
    }
    this.title = title
    this.author = author
    this.pages = pages
    this.isFinished = isFinished
    this.info = function(){
        return(`${this.title}, ${this.author}, ${this.pages} pages, ${isFinished}`)
     }
}