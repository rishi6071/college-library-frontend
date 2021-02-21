// Template for a Book
function Book(id, title, author, genre) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.genre = genre;
}


// Display Book Object Constructor
function Display() {
}

// Add methods to Display prototype
Display.prototype.add = function (book) {
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

Display.prototype.clear = function () {
    const libraryForm = document.querySelector('form[name="addBookForm"]');
    libraryForm.reset();
}


// Will call when the "Add Book" button is clicked
const addBook = () => {
    // Input values by User
    let book_id = document.querySelector('#bookId').value;
    let book_title = document.querySelector('#bookTitle').value.trim();
    let book_author = document.querySelector('#bookAuthor').value.trim();
    let book_genre = document.querySelector('input[name="bookGenre"]:checked').value;

    if (book_id == '' || book_title == '' || book_author == '' || book_genre == '')
        return false;

    // Creating the Book Object
    const book = new Book(book_id, book_title, book_author, book_genre);
    console.log(book);

    // Displaying the Book object
    const displayBook = new Display();
    displayBook.add(book);
    displayBook.clear();
}



{/* <form action="#" method="POST" name="addBookForm">
    <div class="form-group">
        <div class="row">
            <div class="col-lg-3 col-md-4 d-flex align-items-center">
                <label for="bookId">Book ID</label>
            </div>
            <div class="col-lg-9 col-md-8">
                <input type="number" class="form-control" id="bookId" name="bookId" placeholder="4-Digit Book ID..." />
            </div>
        </div>
    </div>

    <div class="form-group mt-3">
        <div class="row">
            <div class="col-lg-3 col-md-4 d-flex align-items-center">
                <label for="bookTitle">Title</label>
            </div>
            <div class="col-lg-9 col-md-8">
                <input type="text" class="form-control" id="bookTitle" name="bookTitle" />
            </div>
        </div>
    </div>

    <div class="form-group mt-3">
        <div class="row">
            <div class="col-lg-3 col-md-4 d-flex align-items-center">
                <label for="bookAuthor">Author</label>
            </div>
            <div class="col-lg-9 col-md-8">
                <input type="text" class="form-control" id="bookAuthor" name="bookAuthor" />
            </div>
        </div>
    </div>

    <div class="form-group mt-3">
        <div class="row">
            <div class="col-lg-3 col-md-4">
                <label for="bookGenre">Genre</label>
            </div>
            <div class="col-lg-9 col-md-8">
                <div class="form-check">
                    <input type="radio" class="form-check-input" name="bookGenre" id="genreFiction"
                        value="fiction" />
                    <label for="genreFiction" class="form-check-label">Fiction</label>
                </div>

                <div class="form-check">
                    <input type="radio" class="form-check-input" name="bookGenre"
                        id="genreProgramming" value="fiction" checked />
                    <label for="genreProgramming" class="form-check-label">Computer
                                                                Programming</label>
                </div>

                <div class="form-check">
                    <input type="radio" class="form-check-input" name="bookGenre" id="genreCooking"
                        value="programming" />
                    <label for="genreCooking" class="form-check-label">Cooking</label>
                </div>

                <div class="form-check">
                    <input type="radio" class="form-check-input" name="bookGenre"
                        id="genreTravelling" value="travelling" />
                    <label for="genreTravelling" class="form-check-label">Travelling</label>
                </div>
            </div>
        </div>
    </div>

    <div class="form-group mt-3">
        <input type="submit" class="btn px-4 addBookBtn" id="addBook_btn" value="Add Book" />
    </div>
</form> */}