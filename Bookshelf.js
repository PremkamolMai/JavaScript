class Bookshelf {
    constructor(capacity){
        this.capacity = capacity
        this.books = []

    }
    addBook(title,author,genre){
            if( title === ''){
                return undefined 
            }else if(this.capacity <= this.books.length){
                return null
            }else{
                this.books.push({ title:title, author:author, genre:genre })
                return { title:title, author:author, genre:genre }
            }
        }
        
    removeBook(title) {
        let removedBook = this.books.filter(book => book.title.toLowerCase() === title.toLowerCase())//หาตัวนั้น
        
        if (removedBook) {
            this.books = this.books.filter(book => book.title.toLowerCase() !== title.toLowerCase()) //ลบ
            return removedBook
        }
        return -1
        }
    
    getBooksByGenre(genre){
        return this.books.filter(x => x.genre.toLowerCase() === genre.toLowerCase())
    }
}
const b = new Bookshelf(4)
console.log('-------add-------');
console.log (b.addBook( "Java", "Aj. Umaporn", "Computer" ))
console.log (b.addBook( "Java", "John Doe","Computer"))
console.log (b.addBook( "Happy Potter", "JK Bowling","Novel"))
console.log (b.addBook( "Happy Potter", "JK Bowling","Novel"))
console.log (b.addBook( " ","JK Bowling", "Novel"))


console.log('-------remove-------');

console.log (b.removeBook("Java"))

console.log('----------------');
// console.log (b.getBooksByGenre("COMPUTER"))


console.log(b.books);

// { title: "Dinosaur", author: "Nigel", genre: "Documentary" }
// { title: "Its", author: "Stiven Queen", genre: "Novel" }
// { title: "Java Programming", author: "Aj. Umaporn", genre: "Computer" }
// { title: "Java Script Programming", author: "Aj. Umaporn", genre: "Computer" }