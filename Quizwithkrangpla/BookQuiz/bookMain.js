const books = require('./bookList').bookList;
//เริ่มเขียนต่อจากตรงนี้

function findByTitle(title){
    let titles = []
    
    for (const book of books) {
        if(book.title.includes(title)) // book.title === title
        titles.push(book)
    }
    return titles
}
//console.log(findByTitle('Specification by Example'))

function findByAuthors(author){
    let authors = []

    for (const book of books) {
        if(book.authors.includes(author))
        authors.push(book)
    }
    return authors
}
console.log(findByAuthors('Gojko Adzic'))