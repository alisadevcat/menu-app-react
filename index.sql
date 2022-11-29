-- phpMyAdmin SQL Dump
-- version 4.9.3
-- https://www.phpmyadmin.net/
--
-- Хост: localhost:8889
-- Время создания: Ноя 29 2022 г., 13:07
-- Версия сервера: 5.7.26
-- Версия PHP: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- База данных: `menu_react`
--

-- --------------------------------------------------------

--
-- Структура таблицы `branches`
--

CREATE TABLE `branches` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `branches`
--

INSERT INTO `branches` (`id`, `slug`, `title`, `active`, `created_at`, `updated_at`) VALUES
(1, 'azulinda', 'Azulinda', 1, NULL, NULL),
(2, 'laluce', 'LaLuce', 1, NULL, NULL),
(3, 'sunan', 'Sunan', 1, NULL, NULL),
(4, 'auma', 'Auma', 1, NULL, NULL),
(5, 'maxal', 'Maxal', 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Структура таблицы `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `menus`
--

CREATE TABLE `menus` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `title2` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `subitle` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `subtitle2` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `menu_price` int(11) DEFAULT NULL,
  `footer_local` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `footer_notice` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `footer_notice2` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `watermark` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `base_template` tinyint(4) NOT NULL DEFAULT '0',
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `menu_type_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `menus`
--

INSERT INTO `menus` (`id`, `name`, `title`, `title2`, `subitle`, `subtitle2`, `menu_price`, `footer_local`, `footer_notice`, `footer_notice2`, `watermark`, `base_template`, `user_id`, `menu_type_id`, `created_at`, `updated_at`) VALUES
(1, 'Menu Azulinda Snacks', NULL, NULL, NULL, NULL, NULL, NULL, 'There may be a risk associated with consuming raw shellfish as is the case with other raw protein products. Please consume at your own risk**', 'The products with an indicated price are not included in the all-inclusive package and are priced in mexican pesos, inclusing iva**', NULL, 1, 1, 1, '2022-01-31 00:20:26', '2022-01-31 00:20:26'),
(2, 'Second Default Azulinda Drinks', '', '', '', '', NULL, '', 'There may be a risk associated with consuming raw shellfish as is the case with other raw protein products. Please consume at your own risk**', 'The products with an indicated price are not included in the all-inclusive package and are priced in mexican pesos, inclusing iva**', '', 1, 1, 2, '2021-10-28 04:17:36', '2021-10-29 04:17:36'),
(3, 'Azulinda Snacks', '', '', '', '', NULL, '', 'There may be a risk associated with consuming raw shellfish as is the case with other raw protein products. Please consume at your own risk**', 'The products with an indicated price are not included in the all-inclusive package and are priced in mexican pesos, inclusing iva**', '', 1, 1, 4, '2021-10-28 04:17:36', '2021-10-29 04:17:36'),
(4, 'Mobile Menu', NULL, NULL, NULL, NULL, NULL, NULL, 'There may be a risk associated with consuming raw shellfish as is the case with other raw protein products. Please consume at your own risk**', 'The products with an indicated price are not included in the all-inclusive package and are priced in mexican pesos, inclusing iva**', NULL, 1, 1, 3, '2022-10-03 13:02:24', '2022-10-03 13:02:24'),
(5, 'd', NULL, NULL, NULL, NULL, NULL, NULL, 'There may be a risk associated with consuming raw shellfish as is the case with other raw protein products. Please consume at your own risk**', 'The products with an indicated price are not included in the all-inclusive package and are priced in mexican pesos, inclusing iva**', NULL, 0, 1, 4, '2022-10-03 16:43:29', '2022-10-03 16:43:29'),
(6, 'd', NULL, NULL, NULL, NULL, NULL, NULL, 'There may be a risk associated with consuming raw shellfish as is the case with other raw protein products. Please consume at your own risk**', 'The products with an indicated price are not included in the all-inclusive package and are priced in mexican pesos, inclusing iva**', NULL, 0, 1, 2, '2022-10-03 16:44:51', '2022-10-03 16:44:51'),
(7, 'latest', NULL, NULL, NULL, NULL, NULL, NULL, 'There may be a risk associated with consuming raw shellfish as is the case with other raw protein products. Please consume at your own risk**', 'The products with an indicated price are not included in the all-inclusive package and are priced in mexican pesos, inclusing iva**', NULL, 0, 1, 2, '2022-10-04 06:29:23', '2022-10-04 06:29:23'),
(8, 'f', NULL, NULL, NULL, NULL, NULL, NULL, 'There may be a risk associated with consuming raw shellfish as is the case with other raw protein products. Please consume at your own risk**', 'The products with an indicated price are not included in the all-inclusive package and are priced in mexican pesos, inclusing iva**', NULL, 0, 1, 2, '2022-10-04 06:30:54', '2022-10-04 06:30:54'),
(9, 'f', NULL, NULL, NULL, NULL, NULL, NULL, 'There may be a risk associated with consuming raw shellfish as is the case with other raw protein products. Please consume at your own risk**', 'The products with an indicated price are not included in the all-inclusive package and are priced in mexican pesos, inclusing iva**', NULL, 0, 1, 3, '2022-10-04 06:30:54', '2022-10-04 06:30:54'),
(10, 'latest', NULL, NULL, NULL, NULL, NULL, NULL, 'There may be a risk associated with consuming raw shellfish as is the case with other raw protein products. Please consume at your own risk**', 'The products with an indicated price are not included in the all-inclusive package and are priced in mexican pesos, inclusing iva**', NULL, 0, 1, 2, '2022-10-04 10:20:03', '2022-10-04 10:20:03');

-- --------------------------------------------------------

--
-- Структура таблицы `menu_files`
--

CREATE TABLE `menu_files` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `file` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `hash` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `menu_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `menu_items`
--

CREATE TABLE `menu_items` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `subtitle` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `style` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'No_Style',
  `price` int(11) DEFAULT NULL,
  `modifier` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `mod_text` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `notice` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ordering` int(11) NOT NULL DEFAULT '0',
  `section_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `menu_items`
--

INSERT INTO `menu_items` (`id`, `title`, `subtitle`, `style`, `price`, `modifier`, `mod_text`, `notice`, `ordering`, `section_id`, `created_at`, `updated_at`) VALUES
(1, 'Oysters', 'lemon wedges, cocktail sauce, shallot mignonette', 'No_Style', 10, '', '', '', 0, 1, '2022-04-26 10:45:21', NULL),
(2, 'Shrimp Cocktail', 'cocktail sauce', 'No_Style', 10, '', '', '', 1, 7, '2022-04-26 10:45:21', NULL),
(3, 'Crudo ', 'daily preperation', 'No_Style', 10, '', '', '', 2, 1, '2022-04-26 10:45:21', NULL),
(4, 'Seafood Tower', '', 'No_Style', 10, '', '', '', 3, 1, '2022-04-26 10:45:21', NULL),
(5, 'Warm Smoked Trout Dip', 'rosemary potato chips', 'No_Style', 12, '', '', '', 0, 2, '2022-04-26 10:45:21', NULL),
(6, 'Crab Fritters', 'aji amarillo aioli', 'No_Style', 12, '', '', '', 1, 8, '2022-04-26 10:45:21', NULL),
(7, 'Clam Chowder', 'oyster crackers', 'No_Style', 12, '', '', '', 2, 2, '2022-04-26 10:45:21', NULL),
(8, 'Golden Crisp Wild Shrimp ', 'chili-lime dressing', 'No_Style', 16, '', '', '', 3, 8, '2022-04-26 10:45:21', NULL),
(9, 'Fried Fish Sandwich', 'lettuce, beefsteak tomato, remoulade, garlic bread hoagie', 'No_Style', 20, 'add:', 'bacon, cheese, crushed avocado', '', 4, 7, '2022-04-26 10:45:21', NULL),
(10, 'Fried Shrimp Po Boy', 'lettuce, beefsteak tomato, sriracha aioli, garlic bread hoagie', 'No_Style', 20, 'add:', 'bacon, cheese, crushed avocado', '', 5, 5, '2022-04-26 10:45:21', NULL),
(11, 'Beer Battered Fish & Chips', 'remoulade, lemon', 'No_Style', 24, '', '', '', 6, 2, '2022-04-26 10:45:21', NULL),
(12, 'Pan Roasted Salmon', 'corn succotash, shishito peppers, tomato', 'No_Style', 29, '', '', '', 7, 2, '2022-04-26 10:45:21', NULL),
(13, 'Tuna', 'roasted broccolini, green olive & calabrian chili relish, tahini yogurt', 'No_Style', 34, '', '', '', 8, 5, '2022-04-26 10:45:21', NULL),
(14, 'Scallops', 'roasted asparagus, lemon garlic butter', 'No_Style', 38, '', '', '', 9, 5, '2022-04-26 10:45:21', NULL),
(15, 'Shrimp Linguine Genovese', 'roasted tomatoes, garlic breadcrumbs, pecorino romano, arugula, pesto', 'No_Style', 26, '', '', '', 10, 7, '2022-04-26 10:45:21', NULL),
(16, 'Lobster Ravioli Gratin', 'spicy vodka sauce, parmesan, garlic bread', 'No_Style', 30, '', '', '', 11, 2, '2022-04-26 10:45:21', NULL),
(17, 'Tomato Bisque ', 'parmesan crisps', 'No_Style', 10, '', '', '', 0, 3, '2022-04-26 10:45:21', NULL),
(18, 'Fava Bean Hummus', 'radish', 'No_Style', 12, '', '', '', 1, 6, '2022-04-26 10:45:21', NULL),
(19, 'Mediterranean Salad', 'pickled shallots, roasted tomato, feta, oregano vinaigrette', 'No_Style', 16, '', '', '', 2, 6, '2022-04-26 10:45:21', NULL),
(20, 'Caesar Salad', 'parmesan, brioche croutons, caesar dressing', 'No_Style', 16, '', '', '', 3, 6, '2022-04-26 10:45:21', NULL),
(21, 'Forager’s Salad', 'kale, wild mushroom roasted tomato & corn, oregano vinaigrette', 'No_Style', 16, '', '', '', 4, 5, '2022-04-26 10:45:21', NULL),
(22, 'White Bean Salad', 'gimelli, olives, chili, capers, red onions, arugula, lemon dressing', 'No_Style', 16, '', '', '', 5, 3, '2022-04-26 10:45:21', NULL),
(23, 'Eggplant Lasagna', 'tomato, breadcrumbs, basil', 'No_Style', 22, '', '', '', 6, 4, '2022-04-26 10:45:21', NULL),
(24, 'Buttermilk Fried Chicken Sandwich', 'pickles, chili ranch, brioche bun', 'No_Style', 18, 'add:', 'bacon, cheese, crushed avocado', '', 7, 3, '2022-04-26 10:45:21', NULL),
(25, 'Black Angus Burger', 'two beef patties, muenster, caramelized onion, pickles, garlic aioli', 'No_Style', 20, '', 'add:', 'fried egg, bacon, crushed avocado, wild mushroom, impossible™ burger $10', 8, 3, '2022-04-26 10:45:21', NULL),
(26, 'Pot-Roasted Ricotta Chicken', 'cannellini bean fricassee, preserved lemon, crème fraiche, baby kale', 'No_Style', 26, '', '', '', 9, 8, '2022-04-26 10:45:21', NULL),
(27, 'Braised Short Ribs', 'asparagus, warm potato salad, preserved lemon', 'No_Style', 28, '', '', '', 10, 8, '2022-04-26 10:45:21', NULL),
(28, '14oz. Black Angus Ribeye', 'roasted herbed potatoes, king trumpet mushrooms, garlic butter', 'No_Style', 49, '', '', '', 11, 6, '2022-04-26 10:45:21', NULL),
(29, 'Steak Fries', '', 'No_Style', 8, '', '', '', 0, 4, '2022-04-26 10:45:21', NULL),
(30, 'Small Salad', 'wild mushrooms', 'No_Style', 6, '', '', '', 1, 4, '2022-04-26 10:45:21', NULL);

-- --------------------------------------------------------

--
-- Структура таблицы `menu_sections`
--

CREATE TABLE `menu_sections` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `id_parent_section` int(11) NOT NULL DEFAULT '0',
  `subtitle` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `style` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'No_Style',
  `side` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'left',
  `field_order` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'title,price,icons,subtitle,modifier,mod_text',
  `ordering` int(11) NOT NULL DEFAULT '0',
  `menu_type_id` bigint(20) UNSIGNED NOT NULL,
  `menu_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `menu_sections`
--

INSERT INTO `menu_sections` (`id`, `id_parent_section`, `subtitle`, `title`, `price`, `style`, `side`, `field_order`, `ordering`, `menu_type_id`, `menu_id`, `created_at`, `updated_at`) VALUES
(1, 0, '', 'Starters', '', 'No_Style', 'left', 'title,price,icons,subtitle,modifier,mod_text', 0, 1, 1, '2021-10-28 12:17:36', NULL),
(2, 0, '', 'SALADS', '', 'No_Style', 'left', 'title,price,icons,subtitle,modifier,mod_text', 1, 1, 1, '2021-10-28 12:17:36', NULL),
(3, 0, '', 'KIDS', '', 'No_Style', 'left', 'title,price,icons,subtitle,modifier,mod_text', 2, 1, 1, '2021-10-28 12:17:36', NULL),
(4, 0, '', 'SIDES', '', 'No_Style', 'left', 'title,price,icons,subtitle,modifier,mod_text', 3, 1, 1, '2021-10-28 12:17:36', NULL),
(5, 0, '', 'LAND &amp; SEA', '', 'No_Style', 'right', 'title,price,icons,subtitle,modifier,mod_text', 4, 1, 1, '2021-10-28 12:17:36', NULL),
(6, 0, '', 'CHOPS &amp; STEAKS', '', 'No_Style', 'right', 'title,price,icons,subtitle,modifier,mod_text', 4, 1, 1, '2021-10-28 12:17:36', NULL),
(7, 0, '', 'SWEETS', '', 'No_Style', 'right', 'title,price,icons,subtitle,modifier,mod_text', 6, 1, 1, '2021-10-28 12:17:36', NULL),
(8, 0, '', 'SAUCES', '', 'No_Style', 'right', 'title,price,icons,subtitle,modifier,mod_text', 7, 1, 1, '2021-10-28 12:17:36', NULL);

-- --------------------------------------------------------

--
-- Структура таблицы `menu_types`
--

CREATE TABLE `menu_types` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `shortname` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `template` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `media` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'print',
  `width` int(11) NOT NULL DEFAULT '216',
  `height` int(11) NOT NULL DEFAULT '279',
  `paper` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'Letter',
  `orientation` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'Portrait',
  `size` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'short',
  `branch_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `menu_types`
--

INSERT INTO `menu_types` (`id`, `name`, `shortname`, `template`, `media`, `width`, `height`, `paper`, `orientation`, `size`, `branch_id`, `created_at`, `updated_at`) VALUES
(1, 'Azulinda | Snacks & Shared (US Letter / Half)', 'azulinda_snacks_shared', 'azulindaHalf', 'print', 216, 279, 'Letter', 'Portrait', 'short', 1, '2021-10-28 04:17:36', '2021-10-29 04:17:36'),
(2, 'Azulinda | Drinks (US Letter)', 'azulinda_drinks', 'azulindaFull', 'print', 216, 279, 'Letter', 'Portrait', 'short', 1, '2021-10-28 04:17:36', '2021-10-29 04:17:36'),
(3, 'Azulinda | Mobile Menu', 'azulinda_mobile', 'azulindaMobile', 'mobile', 0, 0, 'Mobile', 'Mobile', 'short', 1, '2021-10-28 04:17:36', '2021-10-29 04:17:36'),
(4, 'La Luce | Dinner (US Letter)', 'laluce_dinner', 'laluceDinner', 'print', 216, 356, 'Letter', 'Portrait', 'long', 2, '2021-10-28 04:17:36', '2021-10-29 04:17:36'),
(5, 'La Luce | Drinks (US Letter)', 'laluce_drinks', 'laluceDrinks', 'print', 216, 356, 'Letter', 'Portrait', 'short', 2, '2021-10-28 04:17:36', '2021-10-29 04:17:36'),
(6, 'La Luce | Mobile Menu', 'laluce_mobile', 'laluceMobile', 'mobile', 0, 0, 'Mobile', 'Mobile', 'short', 2, '2021-10-28 04:17:36', '2021-10-29 04:17:36'),
(7, 'Sunan | Food (US Letter)', 'sunan_food', 'sunanFood', 'print', 216, 279, 'Letter', 'Portrait', 'short', 3, '2021-10-28 04:17:36', '2021-10-29 04:17:36'),
(8, 'Sunan | Drinks (US Letter)', 'sunan_drinks', 'sunanDrinks', 'print', 216, 279, 'Letter', 'Portrait', 'short', 3, '2021-10-28 04:17:36', '2021-10-29 04:17:36'),
(9, 'Sunan | Mobile Menu', 'sunan_mobile', 'sunanMobile', 'mobile', 0, 0, 'Mobile', 'Mobile', 'short', 3, '2021-10-28 04:17:36', '2021-10-29 04:17:36'),
(10, 'Auma | Food', 'auma_food', 'aumaFood', 'print', 216, 279, 'Letter', 'Portrait', 'short', 4, '2021-10-28 04:17:36', '2021-10-29 04:17:36'),
(11, 'Auma | Mobile Menu', 'auma_mobile', 'aumaMobile', 'mobile', 0, 0, 'Mobile', 'Mobile', 'short', 4, '2021-10-28 04:17:36', '2021-10-29 04:17:36'),
(12, 'Maxal | Breakfast/Lunch (US Letter)', 'maxal_breakfast_lunch', 'maxalBreakfastLunch', 'print', 216, 279, 'Letter', 'Portrait', 'short', 5, '2021-10-28 04:17:36', '2021-10-29 04:17:36'),
(13, 'Maxal | Dinner (US Letter)', 'maxal_dinner', 'maxalDinner', 'print', 216, 279, 'Letter', 'Portrait', 'short', 5, '2021-10-28 04:17:36', '2021-10-29 04:17:36'),
(14, 'Maxal | Drinks (US Letter)', 'maxal_drinks', 'maxalDrinks', 'print', 216, 279, 'Letter', 'Portrait', 'short', 5, '2021-10-28 04:17:36', '2021-10-29 04:17:36'),
(15, 'Maxal | Mobile Menu', 'maxal_mobile', 'maxalMobile', 'mobile', 0, 0, 'Mobile', 'Mobile', 'short', 5, '2021-10-28 04:17:36', '2021-10-29 04:17:36');

-- --------------------------------------------------------

--
-- Структура таблицы `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(31, '2014_10_12_000000_create_users_table', 1),
(32, '2014_10_12_100000_create_password_resets_table', 1),
(33, '2019_08_19_000000_create_failed_jobs_table', 1),
(34, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(35, '2022_09_12_070623_create_branches_table', 1),
(36, '2022_09_12_070936_create_menu_types_table', 1),
(37, '2022_09_12_070958_create_roles_table', 1),
(38, '2022_09_12_072839_create_role_user_table', 1),
(39, '2022_09_30_100523_create_menus_table', 1),
(40, '2022_09_30_101220_create_menu_files_table', 1),
(41, '2022_09_30_101502_create_menu_sections_table', 1),
(42, '2022_09_30_101556_create_menu_items_table', 1);

-- --------------------------------------------------------

--
-- Структура таблицы `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `roles`
--

CREATE TABLE `roles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `role_user`
--

CREATE TABLE `role_user` (
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `role_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `login` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '0',
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `name`, `login`, `email`, `password`, `active`, `email_verified_at`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'admin', 'login', 'email@mail.ru', 'asdf1234', 1, NULL, '', '2021-11-20 22:02:22', '2021-11-22 22:02:20');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `branches`
--
ALTER TABLE `branches`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `branches_slug_unique` (`slug`);

--
-- Индексы таблицы `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Индексы таблицы `menus`
--
ALTER TABLE `menus`
  ADD PRIMARY KEY (`id`),
  ADD KEY `menus_user_id_foreign` (`user_id`),
  ADD KEY `menus_menu_type_id_foreign` (`menu_type_id`);

--
-- Индексы таблицы `menu_files`
--
ALTER TABLE `menu_files`
  ADD PRIMARY KEY (`id`),
  ADD KEY `menu_files_menu_id_foreign` (`menu_id`);

--
-- Индексы таблицы `menu_items`
--
ALTER TABLE `menu_items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `menu_items_section_id_foreign` (`section_id`);

--
-- Индексы таблицы `menu_sections`
--
ALTER TABLE `menu_sections`
  ADD PRIMARY KEY (`id`),
  ADD KEY `menu_sections_menu_type_id_foreign` (`menu_type_id`),
  ADD KEY `menu_sections_menu_id_foreign` (`menu_id`);

--
-- Индексы таблицы `menu_types`
--
ALTER TABLE `menu_types`
  ADD PRIMARY KEY (`id`),
  ADD KEY `menu_types_branch_id_foreign` (`branch_id`);

--
-- Индексы таблицы `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Индексы таблицы `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Индексы таблицы `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `role_user`
--
ALTER TABLE `role_user`
  ADD PRIMARY KEY (`user_id`,`role_id`),
  ADD KEY `role_user_role_id_foreign` (`role_id`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_login_unique` (`login`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `branches`
--
ALTER TABLE `branches`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT для таблицы `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `menus`
--
ALTER TABLE `menus`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT для таблицы `menu_files`
--
ALTER TABLE `menu_files`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `menu_items`
--
ALTER TABLE `menu_items`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT для таблицы `menu_sections`
--
ALTER TABLE `menu_sections`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT для таблицы `menu_types`
--
ALTER TABLE `menu_types`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT для таблицы `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT для таблицы `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `menus`
--
ALTER TABLE `menus`
  ADD CONSTRAINT `menus_menu_type_id_foreign` FOREIGN KEY (`menu_type_id`) REFERENCES `menu_types` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `menus_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Ограничения внешнего ключа таблицы `menu_files`
--
ALTER TABLE `menu_files`
  ADD CONSTRAINT `menu_files_menu_id_foreign` FOREIGN KEY (`menu_id`) REFERENCES `menus` (`id`) ON DELETE CASCADE;

--
-- Ограничения внешнего ключа таблицы `menu_items`
--
ALTER TABLE `menu_items`
  ADD CONSTRAINT `menu_items_section_id_foreign` FOREIGN KEY (`section_id`) REFERENCES `menu_sections` (`id`) ON DELETE CASCADE;

--
-- Ограничения внешнего ключа таблицы `menu_sections`
--
ALTER TABLE `menu_sections`
  ADD CONSTRAINT `menu_sections_menu_id_foreign` FOREIGN KEY (`menu_id`) REFERENCES `menus` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `menu_sections_menu_type_id_foreign` FOREIGN KEY (`menu_type_id`) REFERENCES `menu_types` (`id`) ON DELETE CASCADE;

--
-- Ограничения внешнего ключа таблицы `menu_types`
--
ALTER TABLE `menu_types`
  ADD CONSTRAINT `menu_types_branch_id_foreign` FOREIGN KEY (`branch_id`) REFERENCES `branches` (`id`) ON DELETE CASCADE;

--
-- Ограничения внешнего ключа таблицы `role_user`
--
ALTER TABLE `role_user`
  ADD CONSTRAINT `role_user_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `role_user_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;