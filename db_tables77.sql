-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Янв 19 2020 г., 01:06
-- Версия сервера: 10.4.11-MariaDB
-- Версия PHP: 7.2.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `db_tables`
--

-- --------------------------------------------------------

--
-- Структура таблицы `person`
--

CREATE TABLE `person` (
  `id` int(50) NOT NULL,
  `variant1` text CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `variant2` text CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `variant3` text CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `variant4` text CHARACTER SET utf8 COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Дамп данных таблицы `person`
--

INSERT INTO `person` (`id`, `variant1`, `variant2`, `variant3`, `variant4`) VALUES
(1, '{\"name\": \"Вася1\",\"age\": \"25\",\"gender\": \"male\",\"address\": \"vul. Shevchenka, bud. 17 m. Bila Tserkva Kyiv\"}', '{\"name\": \"Вася2\",\"age\": \"25\",\"gender\": \"male\",\"address\": \"vul. Shevchenka, bud. 17 m. Bila Tserkva Kyiv\"}', '{\"name\": \"Вася3\",\"age\": \"25\",\"gender\": \"male\",\"address\": \"vul. Shevchenka, bud. 17 m. Bila Tserkva Kyiv\"}', '{\"name\": \"Вася4\",\"age\": \"25\",\"gender\": \"male\",\"address\": \"vul. Shevchenka, bud. 17 m. Bila Tserkva Kyiv\"}'),
(2, '{\"name\": \"Катерина1\",\"age\": \"28\",\"gender\": \"female\",\"address\": \"вулиця Любарського, 14, Дніпро\"}', '{\"name\": \"Катерина2\",\"age\": \"28\",\"gender\": \"female\",\"address\": \"вулиця Любарського, 14, Дніпро\"}', '{\"name\": \"Катерина3\",\"age\": \"28\",\"gender\": \"female\",\"address\": \"вулиця Любарського, 14, Дніпро\"}', '{\"name\": \"Катерина4\",\"age\": \"28\",\"gender\": \"female\",\"address\": \"вулиця Любарського, 14, Дніпро\"}'),
(3, '{\"name\": \"Рома1\",\"age\": \"32\",\"gender\": \"male\",\"address\": \"бульвар Дружби Народів, 18/7, Київ\"}', '{\"name\": \"Рома2\",\"age\": \"32\",\"gender\": \"male\",\"address\": \"бульвар Дружби Народів, 18/7, Київ\"}', '{\"name\": \"Рома3\",\"age\": \"32\",\"gender\": \"male\",\"address\": \"бульвар Дружби Народів, 18/7, Київ\"}', '{\"name\": \"Рома4\",\"age\": \"32\",\"gender\": \"male\",\"address\": \"бульвар Дружби Народів, 18/7, Київ\"}'),
(4, '{\"name\": \"Евгений1\",\"age\": \"38\",\"gender\": \"male\",\"address\": \"Садова вулиця, 109, Прилуки, Чернігівська область\"}', '{\"name\": \"Евгений2\",\"age\": \"38\",\"gender\": \"male\",\"address\": \"Садова вулиця, 109, Прилуки, Чернігівська область\"}', '{\"name\": \"Евгений3\",\"age\": \"38\",\"gender\": \"male\",\"address\": \"Садова вулиця, 109, Прилуки, Чернігівська область\"}', '{\"name\": \"Евгений4\",\"age\": \"38\",\"gender\": \"male\",\"address\": \"Садова вулиця, 109, Прилуки, Чернігівська область\"}'),
(5, '{\"name\": \"Марина1\",\"age\": \"26\",\"gender\": \"female\",\"address\": \"Першотравнева вулиця, 43Б, Кременчук\"}', '{\"name\": \"Марина2\",\"age\": \"26\",\"gender\": \"female\",\"address\": \"Першотравнева вулиця, 43Б, Кременчук\"}', '{\"name\": \"Марина3\",\"age\": \"26\",\"gender\": \"female\",\"address\": \"Першотравнева вулиця, 43Б, Кременчук\"}', '{\"name\": \"Марина4\",\"age\": \"26\",\"gender\": \"female\",\"address\": \"Першотравнева вулиця, 43Б, Кременчук\"}'),
(6, '{\"name\": \"Дмитро1\",\"age\": \"42\",\"gender\": \"male\",\"address\": \"Василівський провулок, 10, Кропивницький\"}', '{\"name\": \"Дмитро2\",\"age\": \"42\",\"gender\": \"male\",\"address\": \"Василівський провулок, 10, Кропивницький\"}', '{\"name\": \"Дмитро3\",\"age\": \"42\",\"gender\": \"male\",\"address\": \"Василівський провулок, 10, Кропивницький\"}', '{\"name\": \"Дмитро4\",\"age\": \"42\",\"gender\": \"male\",\"address\": \"Василівський провулок, 10, Кропивницький\"}'),
(7, '{\"name\": \"Олена1\",\"age\": \"20\",\"gender\": \"female\",\"address\": \"вулиця Кропивницького, 3, Вінниця\"}', '{\"name\": \"Олена2\",\"age\": \"20\",\"gender\": \"female\",\"address\": \"вулиця Кропивницького, 3, Вінниця\"}', '{\"name\": \"Олена3\",\"age\": \"20\",\"gender\": \"female\",\"address\": \"вулиця Кропивницького, 3, Вінниця\"}', '{\"name\": \"Олена4\",\"age\": \"20\",\"gender\": \"female\",\"address\": \"вулиця Кропивницького, 3, Вінниця\"}'),
(8, '{\"name\": \"Максим1\",\"age\": \"39\",\"gender\": \"male\",\"address\": \"вулиця Лемківська, 9а, Львів\"}', '{\"name\": \"Максим2\",\"age\": \"39\",\"gender\": \"male\",\"address\": \"вулиця Лемківська, 9а, Львів\"}', '{\"name\": \"Максим3\",\"age\": \"39\",\"gender\": \"male\",\"address\": \"вулиця Лемківська, 9а, Львів\"}', '{\"name\": \"Максим4\",\"age\": \"39\",\"gender\": \"male\",\"address\": \"вулиця Лемківська, 9а, Львів\"}'),
(9, '{\"name\": \"Ганна1\",\"age\": \"44\",\"gender\": \"female\",\"address\": \"вулиця Євгена Коновальця, 11а, Івано-Франківськ\"}', '{\"name\": \"Ганна2\",\"age\": \"44\",\"gender\": \"female\",\"address\": \"вулиця Євгена Коновальця, 11а, Івано-Франківськ\"}', '{\"name\": \"Ганна3\",\"age\": \"44\",\"gender\": \"female\",\"address\": \"вулиця Євгена Коновальця, 11а, Івано-Франківськ\"}', '{\"name\": \"Ганна4\",\"age\": \"44\",\"gender\": \"female\",\"address\": \"вулиця Євгена Коновальця, 11а, Івано-Франківськ\"}'),
(10, '{\"name\": \"Олександра1\",\"age\": \"25\",\"gender\": \"female\",\"address\": \"вулиця Коперника, 1, Тернопіль\"}', '{\"name\": \"Олександра2\",\"age\": \"25\",\"gender\": \"female\",\"address\": \"вулиця Коперника, 1, Тернопіль\"}', '{\"name\": \"Олександра3\",\"age\": \"25\",\"gender\": \"female\",\"address\": \"вулиця Коперника, 1, Тернопіль\"}', '{\"name\": \"Олександра4\",\"age\": \"25\",\"gender\": \"female\",\"address\": \"вулиця Коперника, 1, Тернопіль\"}'),
(11, '{\"name\": \"Олексій1\",\"age\": \"32\",\"gender\": \"male\",\"address\": \"вулиця Кузнецька, 49, Миколаїв\"}', '{\"name\": \"Олексій2\",\"age\": \"32\",\"gender\": \"male\",\"address\": \"вулиця Кузнецька, 49, Миколаїв\"}', '{\"name\": \"Олексій3\",\"age\": \"32\",\"gender\": \"male\",\"address\": \"вулиця Кузнецька, 49, Миколаїв\"}', '{\"name\": \"Олексій4\",\"age\": \"32\",\"gender\": \"male\",\"address\": \"вулиця Кузнецька, 49, Миколаїв\"}');

-- --------------------------------------------------------

--
-- Структура таблицы `persons_update_emails`
--

CREATE TABLE `persons_update_emails` (
  `id` int(11) NOT NULL,
  `email` varchar(50) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Дамп данных таблицы `persons_update_emails`
--

INSERT INTO `persons_update_emails` (`id`, `email`) VALUES
(1, 'kohan.dev@gmail.com'),
(2, 'katerina@getnada.com'),
(3, 'roman@dropjar.com'),
(4, 'eugene@getnada.com'),
(5, 'dmytro@getnada.com'),
(6, 'olena@getnada.com'),
(7, 'olha@getnada.com'),
(8, 'maksym@getnada.com'),
(9, 'hanna@getnada.com'),
(10, 'oleksandra@getnada.com');

-- --------------------------------------------------------

--
-- Структура таблицы `person_logs`
--

CREATE TABLE `person_logs` (
  `id` int(50) NOT NULL,
  `time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `version` text CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `val` text COLLATE utf8mb4_bin NOT NULL,
  `change_val` varchar(50) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `user` varchar(50) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `old_value` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `new_value` varchar(100) COLLATE utf8mb4_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Дамп данных таблицы `person_logs`
--

INSERT INTO `person_logs` (`id`, `time`, `version`, `val`, `change_val`, `user`, `old_value`, `new_value`) VALUES
(32, '2020-01-19 00:04:52', 'variant1', 'name', 'age', 'admin', '77', '17'),
(33, '2020-01-19 00:04:59', 'variant1', 'name', 'name', 'admin', 'Вася7777', 'Вася777'),
(34, '2020-01-19 00:05:09', 'variant1', 'name', 'age', 'admin', '17', '77'),
(35, '2020-01-19 00:05:15', 'variant1', 'name', 'name', 'admin', 'Вася777', 'Вася7777'),
(36, '2020-01-19 00:05:18', 'variant1', 'name', 'age', 'admin', '77', '17'),
(37, '2020-01-19 00:05:21', 'variant1', 'name', 'name', 'admin', 'Вася7777', 'Вася777'),
(38, '2020-01-19 00:05:24', 'variant1', 'name', 'age', 'admin', '17', '77'),
(39, '2020-01-19 00:05:27', 'variant1', 'name', 'name', 'admin', 'Вася777', 'Вася77'),
(40, '2020-01-19 00:05:29', 'variant1', 'name', 'age', 'admin', '77', '17'),
(41, '2020-01-19 00:05:32', 'variant1', 'name', 'name', 'admin', 'Вася77', 'Вася777'),
(42, '2020-01-19 00:05:34', 'variant1', 'name', 'age', 'admin', '17', '27'),
(43, '2020-01-19 00:05:37', 'variant1', 'name', 'name', 'admin', 'Вася777', 'GTNZ'),
(44, '2020-01-19 00:05:39', 'variant1', 'name', 'age', 'admin', '27', '22'),
(45, '2020-01-19 00:05:41', 'variant1', 'name', 'address', 'admin', 'vul. Sheva, bud. 17 m. Bila Tserkva Kyiv456', 'Dnipro'),
(46, '2020-01-19 00:05:44', 'variant1', 'name', 'age', 'admin', '22', '22'),
(47, '2020-01-19 00:05:47', 'variant1', 'name', 'name', 'admin', 'GTNZ', 'аыаыааыаыв');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `person`
--
ALTER TABLE `person`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `persons_update_emails`
--
ALTER TABLE `persons_update_emails`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `person_logs`
--
ALTER TABLE `person_logs`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `person`
--
ALTER TABLE `person`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT для таблицы `persons_update_emails`
--
ALTER TABLE `persons_update_emails`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT для таблицы `person_logs`
--
ALTER TABLE `person_logs`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
