// ----> Code Written in Modern JavaScript [ES6]

// Array for Storing Book Objects
let booklist = [];

// Rendering Stored Library Book onload
const renderStoredBooks = () => {
    let library = new Library();

    if (localStorage.getItem('booklist') == null)
        localStorage.setItem('booklist', JSON.stringify([]));

    booklist = JSON.parse(localStorage.getItem('booklist'));
    booklist.forEach((book, index, booklist) => {
        library.add(book);
    });
}

// Library Class
class Library {

    // Method to display the Book
    add(book) {
        const library_books_list = document.querySelector('#library_books_list');

        const bookRow = document.createElement('tr');
        const bookID = document.createElement('th');
        bookID.scope = "row";
        bookID.innerText = book.id;

        const bookTitle = document.createElement('td');
        bookTitle.innerText = book.title;

        const bookAuthor = document.createElement('td');
        bookAuthor.innerText = book.author;

        const bookGenre = document.createElement('td');
        bookGenre.innerText = '@' + book.genre;

        bookRow.append(bookID, bookTitle, bookAuthor, bookGenre);
        library_books_list.appendChild(bookRow);
    }

    // To Clear all the Books from Storage & Screen
    clear() {
        const libraryForm = document.querySelector('form[name="addBookForm"]');
        libraryForm.reset();
    }

    // To Show Status Toast Message
    showStatus(status, message, color) {
        const status_box = document.querySelector('#statusMessage');
        status_box.innerHTML = `<div class="container toast_box me-auto" style="background-color: ${color}">
                                <strong>${status}!</strong> 
                                <span class="ms-2">${message}.</span>
                                <button type="button" onclick="removeStatus()" class="btn-close ripple" aria-label="Close"></button>
                            </div>`;
    }

    // To Remove the Status Toast Message
    removeStatus() {
        const status_box = document.querySelector('#statusMessage');
        status_box.innerHTML = '';
    }
}

// Book Class
class Book {
    constructor(id, title, author, genre) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.genre =  genre;
    }
}

// Will call when the "Add Book" button is clicked
const addBook = () => {
    // Input values by User
    let book_id = document.querySelector('#bookId').value;
    let book_title = document.querySelector('#bookTitle').value.trim();
    let book_author = document.querySelector('#bookAuthor').value.trim();

    let book_genre;
    try {
        book_genre = document.querySelector('input[name="bookGenre"]:checked').value;
    }
    catch (message) {
        // Nothing
    }

    const library = new Library();
    if (book_id.length < 4 || book_id.length > 4 || book_title.length < 3 || book_author.length < 3 || book_genre == undefined) {
        library.showStatus("Warning", "Empty/Wrong Value", "#fff3cd");
        setTimeout(library.removeStatus, 2500);
        return false;
    }
    else {
        library.showStatus("Success", "Book has been Added", "#d1e7dd");
        setTimeout(library.removeStatus, 2500);
    }

    // Checking if book_id already exist
    let flag = 1;
    JSON.parse(localStorage.getItem('booklist')).forEach((book, index, booklist) => {
        if (book.id == book_id) {
            library.showStatus("Error", "Book-ID Already Exists", "#f8d7da");
            setTimeout(library.removeStatus, 2500);
            flag = 2;
            return false;
        }
    });
    if(flag != 1) 
        return false;

    const book = new Book(book_id, book_title, book_author, book_genre);
    booklist.push(book);
    localStorage.setItem('booklist', JSON.stringify(booklist));
    console.log(JSON.parse(localStorage.booklist));

    library.add(book);
    library.clear();
}