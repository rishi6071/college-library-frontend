// Dynamically Rendering AddNote Form
const renderAddNoteForm = () => {

    const addNote_box = document.querySelector('#addNote_box');

    const form = document.createElement('form');
    form.action = "#";
    form.method = "POST";
    form.name = "addNoteForm";

    // --> Name of Book
    const bookNameGroup = document.createElement('div');
    bookNameGroup.className = "form-group";

    const bookNameRow = document.createElement('div');
    bookNameRow.className = "row";

    const bookNameLabelCol = document.createElement('div');
    bookNameLabelCol.className = "col-lg-3 col-md-4 d-flex align-items-center";

    const bookNameLabel = document.createElement('label');
    bookNameLabel.setAttribute('for', 'bookName');
    bookNameLabel.innerText = "Name of Book";
    bookNameLabelCol.appendChild(bookNameLabel);

    const bookNameInputCol = document.createElement('div');
    bookNameInputCol.className = "col-lg-9 col-md-8";

    const bookNameInput = document.createElement('input');
    bookNameInput.type = "text";
    bookNameInput.className = "form-control";
    bookNameInput.id = "bookName";
    bookNameInput.name = "bookName";
    bookNameInputCol.appendChild(bookNameInput);

    bookNameRow.append(bookNameLabelCol, bookNameInputCol);
    bookNameGroup.appendChild(bookNameRow);

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
        genreInput.value = genre.toLowerCase();

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
    const addNoteBtnGroup = document.createElement('div');
    addNoteBtnGroup.className = "form-group mt-3";

    const addNoteBtn = document.createElement('input');
    addNoteBtn.type = "submit";
    addNoteBtn.className = "btn px-4 addNoteBtn";
    addNoteBtn.id = "addnote_btn";
    addNoteBtn.addEventListener('click', (event) => {
        event.preventDefault();
        addNote();
    });
    addNoteBtn.value = "Add Note";

    addNoteBtnGroup.appendChild(addNoteBtn);

    form.append(bookNameGroup, bookAuthorGroup, bookGenreGroup, addNoteBtnGroup);
    addNote_box.appendChild(form);
}

const addNote = () => {
}

{/* <form action="#" method="POST" name="addNoteForm">
    <div class="form-group">
        <div class="row">
            <div class="col-lg-3 col-md-4 d-flex align-items-center">
                <label for="bookName">Name of Book</label>
            </div>
            <div class="col-lg-9 col-md-8">
                <input type="text" class="form-control" id="bookName" name="bookName" />
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
        <input type="submit" class="btn px-4 addNoteBtn" id="addnote_btn" value="Add Note" />
    </div>
</form> */}