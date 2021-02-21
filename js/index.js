// Dynamically Rendering AddBook Form
const renderAddBookForm = () => {

    const addBook_box = document.querySelector('#addBook_box');

    const form = document.createElement('form');
    form.action = "#";
    form.method = "POST";
    form.name = "addBookForm";

    // --> Book ID
    const bookIdGroup = document.createElement('div');
    bookIdGroup.className = "form-group";

    const bookIdRow = document.createElement('div');
    bookIdRow.className = "row";

    const bookIdLabelCol = document.createElement('div');
    bookIdLabelCol.className = "col-lg-3 col-md-4 d-flex align-items-center";

    const bookIdLabel = document.createElement('label');
    bookIdLabel.setAttribute('for', 'bookId');
    bookIdLabel.innerText = "Book ID";
    bookIdLabelCol.appendChild(bookIdLabel);

    const bookIdInputCol = document.createElement('div');
    bookIdInputCol.className = "col-lg-9 col-md-8";

    const bookIdInput = document.createElement('input');
    bookIdInput.type = "number";
    bookIdInput.className = "form-control";
    bookIdInput.id = "bookId";
    bookIdInput.name = "bookId";
    bookIdInput.placeholder = "4-Digit Book ID...";
    bookIdInputCol.appendChild(bookIdInput);

    bookIdRow.append(bookIdLabelCol, bookIdInputCol);
    bookIdGroup.appendChild(bookIdRow);

    // --> Title of Book
    const bookTitleGroup = document.createElement('div');
    bookTitleGroup.className = "form-group mt-3";

    const bookTitleRow = document.createElement('div');
    bookTitleRow.className = "row";

    const bookTitleLabelCol = document.createElement('div');
    bookTitleLabelCol.className = "col-lg-3 col-md-4 d-flex align-items-center";

    const bookTitleLabel = document.createElement('label');
    bookTitleLabel.setAttribute('for', 'bookTitle');
    bookTitleLabel.innerText = "Title";
    bookTitleLabelCol.appendChild(bookTitleLabel);

    const bookTitleInputCol = document.createElement('div');
    bookTitleInputCol.className = "col-lg-9 col-md-8";

    const bookTitleInput = document.createElement('input');
    bookTitleInput.type = "text";
    bookTitleInput.className = "form-control";
    bookTitleInput.id = "bookTitle";
    bookTitleInput.name = "bookTitle";
    bookTitleInputCol.appendChild(bookTitleInput);

    bookTitleRow.append(bookTitleLabelCol, bookTitleInputCol);
    bookTitleGroup.appendChild(bookTitleRow);

    // --> Name of Author
    const bookAuthorGroup = document.createElement('div');
    bookAuthorGroup.className = "form-group mt-3";

    const bookAuthorRow = document.createElement('div');
    bookAuthorRow.className = "row";

    const bookAuthorLabelCol = document.createElement('div');
    bookAuthorLabelCol.className = "col-lg-3 col-md-4 d-flex align-items-center";

    const bookAuthorLabel = document.createElement('label');
    bookAuthorLabel.setAttribute('for', 'bookAuthor');
    bookAuthorLabel.innerText = "Author";

    const bookAuthorInputCol = document.createElement('div');
    bookAuthorInputCol.className = "col-lg-9 col-md-8";

    const bookAuthorInput = document.createElement('input');
    bookAuthorInput.type = "text";
    bookAuthorInput.className = "form-control";
    bookAuthorInput.id = "bookAuthor";
    bookAuthorInput.name = "bookAuthor";
    console.log('Hello');

    bookAuthorLabelCol.appendChild(bookAuthorLabel);
    bookAuthorInputCol.appendChild(bookAuthorInput);

    bookAuthorRow.append(bookAuthorLabelCol, bookAuthorInputCol);
    bookAuthorGroup.appendChild(bookAuthorRow);

    // --> Genre
    const bookGenreGroup = document.createElement('div');
    bookGenreGroup.className = "form-group mt-3";

    const bookGenreRow = document.createElement('div');
    bookGenreRow.className = "row";

    const bookGenreLabelCol = document.createElement('div');
    bookGenreLabelCol.className = "col-lg-3 col-md-4";

    const bookGenreLabel = document.createElement('label');
    bookGenreLabel.setAttribute('for', 'bookGenre');
    bookGenreLabel.innerText = "Genre";
    bookGenreLabelCol.appendChild(bookGenreLabel);

    const bookGenreInputCol = document.createElement('div');
    bookGenreInputCol.className = "col-lg-9 col-md-8";

    const genres = ['Fiction', 'Programming', 'Cooking', 'Travelling'];
    genres.forEach((genre, index, genres) => {
        const genreInputGroup = document.createElement('div');
        genreInputGroup.className = "form-check";

        const genreInput = document.createElement('input');
        genreInput.type = "radio";
        genreInput.className = "form-check-input";
        genreInput.name = "bookGenre";
        genreInput.id = "genre" + genre;
        genreInput.value = genre;

        const genreLabel = document.createElement('label');
        genreLabel.setAttribute('for', 'genre' + genre);
        genreLabel.className = "form-check-label";
        genreLabel.innerText = genre;

        genreInputGroup.append(genreInput, genreLabel);
        bookGenreInputCol.append(genreInputGroup);
    });

    bookGenreRow.append(bookGenreLabelCol, bookGenreInputCol);
    bookGenreGroup.appendChild(bookGenreRow);

    // --> Add Note Button
    const addBookBtnGroup = document.createElement('div');
    addBookBtnGroup.className = "form-group mt-3";

    const addBookBtn = document.createElement('input');
    addBookBtn.type = "submit";
    addBookBtn.className = "btn px-4 addBookBtn";
    addBookBtn.id = "addBook_btn";
    addBookBtn.addEventListener('click', (event) => {
        event.preventDefault();
        addBook();
    });
    addBookBtn.value = "Add Book";
    addBookBtnGroup.appendChild(addBookBtn);

    form.append(bookIdGroup, bookTitleGroup, bookAuthorGroup, bookGenreGroup, addBookBtnGroup);
    addBook_box.appendChild(form);
}


// Template for a Book
function Book(id, title, author, genre) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.genre = genre;
}

// Display Constructor
function Display() {

}


// Add methods to Display prototype


const addBook = () => {
    // Input values by User
    let book_id = document.querySelector('#bookId').value;
    let book_title = document.querySelector('#bookTitle').value.trim();
    let book_author = document.querySelector('#bookAuthor').value.trim();
    let book_genre = document.querySelector('input[name="bookGenre"]:checked').value;

    if(book_id == '' || book_title == '' || book_author == '' || book_genre == '')
        return false;

    const library_books_list = document.querySelector('#library_books_list');

    const bookRow = document.createElement('tr');
    const bookID = document.createElement('th');
    bookID.scope = "row";
    bookID.innerText = book_id;
    
    const bookTitle = document.createElement('td');
    bookTitle.innerText = book_title;

    const bookAuthor = document.createElement('td');
    bookAuthor.innerText = book_author;

    const bookGenre = document.createElement('td');
    bookGenre.innerText = '@' + book_genre;

    bookRow.append(bookID, bookTitle, bookAuthor, bookGenre);
    library_books_list.appendChild(bookRow);
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