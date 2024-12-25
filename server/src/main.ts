import app from './config/application.js';
import AppDataSource from './config/database.js';

const PORT = 3000;

(async () => {
    try {
        await AppDataSource.initialize();

        app.listen(PORT, () => {
            console.log('Начало руководство маршрутом');
        });
    } catch (e) {
        console.log(e);

        console.error('Ошибка при подключении к базе данных');
    }
})();
