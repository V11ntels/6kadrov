import { DataSource } from 'typeorm';

const AppDataSource = new DataSource({
    type: 'mysql', // Тип базы данных
    host: 'MySQL-8.0', // Хост базы данных
    port: 3306, // Порт MySQL
    username: 'root', // Имя пользователя
    password: '', // Пароль
    database: '6kadrov', // Имя базы данных
    synchronize: false, // Автоматическое обновление структуры базы (только для разработки)
    logging: true, // Логирование запросов
    entities: ['./**/entities/*.js'], // Пути к сущностям
});

export default AppDataSource;
