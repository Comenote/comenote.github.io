# comenote.github.io
Моя часть работы включает в себя:

Frontend:

Бекенд-шаблон HTML страницы создания списка.

Отправка POST запроса на сервер с созданием списка. После ответа сервера пользователь должен быть перенаправлен на главную страницу.

Backend-шаблон HTML страницы детального отображения списка. На этой странице должна быть возможность отредактировать и удалить список.

Отправка PUT запроса на сервер с отредактированным списком. После ответа сервера пользователь должен быть перенаправлен на главную страницу.

Отправка DELETE запроса на сервер для удаления списка. После ответа сервера пользователь должен быть перенаправлен на главную страницу.


Backend:

Авторизация с использованием Passport.js.

Роут GET /lists, который будет отдавать HTML страницу с формой создания списка.

Роут GET /lists/${id}, который будет отдавать HTML страницу детального отображения списка.

Роут GET /api/lists/${id} отображения заметки со списком.

Роут POST /api/lists для добавления нового списка задач с учетом того, что количество позиций в списке - не ограничено и заранее не известно.

Роут PUT /api/lists/${id} для редактирования списка задач.

Роут DELETE /api/lists/${id} для удаления заметки со списком.

