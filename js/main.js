// Загрузка данных из data.json
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        // Главная страница — статистика
        const statsContainer = document.getElementById('stats-container');
        if (statsContainer) {
            statsContainer.innerHTML = `
                <div class="col-md-3">
                    <div class="card stat-card">
                        <div class="stat-number">${data.stats.books_count}</div>
                        <div>Всего книг</div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card stat-card">
                        <div class="stat-number" style="color: #27ae60;">${data.stats.available_count}</div>
                        <div>Доступно</div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card stat-card">
                        <div class="stat-number">${data.stats.readers_count}</div>
                        <div>Читателей</div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card stat-card">
                        <div class="stat-number">${data.stats.rentals_count}</div>
                        <div>Выдач книг</div>
                    </div>
                </div>
            `;
        }

        // Страница книг
        const booksTable = document.getElementById('books-table');
        if (booksTable) {
            booksTable.innerHTML = data.books.map(book => `
                <tr>
                    <td>${book.id}</td>
                    <td>${book.title}</td>
                    <td>${book.author}</td>
                    <td>${book.genre}</td>
                    <td>${book.year}</td>
                    <td>${book.available 
                        ? '<span class="badge bg-success">Доступна</span>' 
                        : '<span class="badge bg-danger">Выдана</span>'}</td>
                </tr>
            `).join('');
        }

        // Страница авторов
        const authorsTable = document.getElementById('authors-table');
        if (authorsTable) {
            authorsTable.innerHTML = data.authors.map(author => `
                <tr>
                    <td>${author.id}</td>
                    <td>${author.name}</td>
                    <td>${author.books_count}</td>
                </tr>
            `).join('');
        }

        // Страница жанров
        const genresTable = document.getElementById('genres-table');
        if (genresTable) {
            genresTable.innerHTML = data.genres.map(genre => `
                <tr>
                    <td>${genre.id}</td>
                    <td>${genre.name}</td>
                    <td>${genre.books_count}</td>
                </tr>
            `).join('');
        }

        // Страница читателей
        const readersTable = document.getElementById('readers-table');
        if (readersTable) {
            readersTable.innerHTML = data.readers.map(reader => `
                <tr>
                    <td>${reader.id}</td>
                    <td>${reader.name}</td>
                    <td>${reader.ticket}</td>
                    <td>${reader.user_id}</td>
                    <td>${reader.rentals_count}</td>
                </tr>
            `).join('');
        }

        // Страница статистики
        const topAuthors = document.getElementById('top-authors');
        if (topAuthors) {
            topAuthors.innerHTML = data.stats.top_authors.map(a => `
                <li class="list-group-item d-flex justify-content-between">
                    ${a.name} <span class="badge bg-primary">${a.cnt}</span>
                </li>
            `).join('');
        }

        const topGenres = document.getElementById('top-genres');
        if (topGenres) {
            topGenres.innerHTML = data.stats.top_genres.map(g => `
                <li class="list-group-item d-flex justify-content-between">
                    ${g.name} <span class="badge bg-success">${g.cnt}</span>
                </li>
            `).join('');
        }

        const topReaders = document.getElementById('top-readers');
        if (topReaders) {
            topReaders.innerHTML = data.stats.top_readers.map(r => `
                <li class="list-group-item d-flex justify-content-between">
                    ${r.name} <span class="badge bg-warning text-dark">${r.cnt}</span>
                </li>
            `).join('');
        }
    })
    .catch(error => console.error('Ошибка загрузки данных:', error));