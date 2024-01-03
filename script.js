const myLibrary = [];

function Book(title, author, length, read) {
    this.title = title;
    this.author = author;
    this.length = length;
    this.read = read;
    this.info = function() {
      return `${title} by ${author}, ${length} pages, ${read}`;
    }
  }



  function addBookToLibrary(book) {
    myLibrary.push(book);
  }
  
  function displayBooks() {
    const table = document.querySelector('table');
    const tbody = document.createElement('tbody');
    table.appendChild(tbody);
    for (let i = 0; i < myLibrary.length; i++) {
        const tr = document.createElement('tr');
        tbody.appendChild(tr);
        for (let j = 0; j < 5; j++) {
            const td = document.createElement('td');
            tr.appendChild(td);
            if (j === 0) {
                td.textContent = myLibrary[i].title;
            } else if (j === 1) {
                td.textContent = myLibrary[i].author;
            } else if (j === 2) {
                td.textContent = myLibrary[i].length;
            } else if (j === 3) {
                td.textContent = myLibrary[i].read;
            } else {
                const button = document.createElement('button');
                button.textContent = 'Remove Book';
                button.addEventListener('click', function() {
                    removeBookFromLibrary(i);
                });
                td.appendChild(button);
            }
        }
    }
}

function removeBookFromLibrary(index) {
    myLibrary.splice(index, 1);
    displayBooks();  // Refresh the display
}

   const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'not read yet');

    addBookToLibrary(theHobbit);

    

    const testBook = new Book('test', 'test', 100, 'read');

    addBookToLibrary(testBook);

    displayBooks();
    
