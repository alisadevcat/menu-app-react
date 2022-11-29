-- MySQL dump 10.13  Distrib 5.7.26, for osx10.10 (x86_64)
--
-- Host: localhost    Database: menu_react
-- ------------------------------------------------------
-- Server version	5.7.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `branches`
--

DROP TABLE IF EXISTS `branches`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `branches` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `branches_slug_unique` (`slug`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `branches`
--

LOCK TABLES `branches` WRITE;
/*!40000 ALTER TABLE `branches` DISABLE KEYS */;
INSERT INTO `branches` VALUES (1,'azulinda','Azulinda',1,NULL,NULL),(2,'laluce','LaLuce',1,NULL,NULL),(3,'sunan','Sunan',1,NULL,NULL),(4,'auma','Auma',1,NULL,NULL),(5,'maxal','Maxal',1,NULL,NULL);
/*!40000 ALTER TABLE `branches` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `failed_jobs` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `failed_jobs`
--

LOCK TABLES `failed_jobs` WRITE;
/*!40000 ALTER TABLE `failed_jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `failed_jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `menu_files`
--

DROP TABLE IF EXISTS `menu_files`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `menu_files` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `file` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `hash` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `menu_id` bigint(20) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `menu_files_menu_id_foreign` (`menu_id`),
  CONSTRAINT `menu_files_menu_id_foreign` FOREIGN KEY (`menu_id`) REFERENCES `menus` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `menu_files`
--

LOCK TABLES `menu_files` WRITE;
/*!40000 ALTER TABLE `menu_files` DISABLE KEYS */;
/*!40000 ALTER TABLE `menu_files` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `menu_items`
--

DROP TABLE IF EXISTS `menu_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `menu_items` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `subtitle` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `style` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'No_Style',
  `price` int(11) DEFAULT NULL,
  `modifier` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `mod_text` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `notice` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ordering` int(11) NOT NULL DEFAULT '0',
  `section_id` bigint(20) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `menu_items_section_id_foreign` (`section_id`),
  CONSTRAINT `menu_items_section_id_foreign` FOREIGN KEY (`section_id`) REFERENCES `menu_sections` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `menu_items`
--

LOCK TABLES `menu_items` WRITE;
/*!40000 ALTER TABLE `menu_items` DISABLE KEYS */;
INSERT INTO `menu_items` VALUES (1,'Oysters','lemon wedges, cocktail sauce, shallot mignonette','No_Style',10,'','','',0,1,'2022-04-26 10:45:21',NULL),(2,'Shrimp Cocktail','cocktail sauce','No_Style',10,'','','',1,7,'2022-04-26 10:45:21',NULL),(3,'Crudo ','daily preperation','No_Style',10,'','','',2,1,'2022-04-26 10:45:21',NULL),(4,'Seafood Tower','','No_Style',10,'','','',3,1,'2022-04-26 10:45:21',NULL),(5,'Warm Smoked Trout Dip','rosemary potato chips','No_Style',12,'','','',0,2,'2022-04-26 10:45:21',NULL),(6,'Crab Fritters','aji amarillo aioli','No_Style',12,'','','',1,8,'2022-04-26 10:45:21',NULL),(7,'Clam Chowder','oyster crackers','No_Style',12,'','','',2,2,'2022-04-26 10:45:21',NULL),(8,'Golden Crisp Wild Shrimp ','chili-lime dressing','No_Style',16,'','','',3,8,'2022-04-26 10:45:21',NULL),(9,'Fried Fish Sandwich','lettuce, beefsteak tomato, remoulade, garlic bread hoagie','No_Style',20,'add:','bacon, cheese, crushed avocado','',4,7,'2022-04-26 10:45:21',NULL),(10,'Fried Shrimp Po Boy','lettuce, beefsteak tomato, sriracha aioli, garlic bread hoagie','No_Style',20,'add:','bacon, cheese, crushed avocado','',5,5,'2022-04-26 10:45:21',NULL),(11,'Beer Battered Fish & Chips','remoulade, lemon','No_Style',24,'','','',6,2,'2022-04-26 10:45:21',NULL),(12,'Pan Roasted Salmon','corn succotash, shishito peppers, tomato','No_Style',29,'','','',7,2,'2022-04-26 10:45:21',NULL),(13,'Tuna','roasted broccolini, green olive & calabrian chili relish, tahini yogurt','No_Style',34,'','','',8,5,'2022-04-26 10:45:21',NULL),(14,'Scallops','roasted asparagus, lemon garlic butter','No_Style',38,'','','',9,5,'2022-04-26 10:45:21',NULL),(15,'Shrimp Linguine Genovese','roasted tomatoes, garlic breadcrumbs, pecorino romano, arugula, pesto','No_Style',26,'','','',10,7,'2022-04-26 10:45:21',NULL),(16,'Lobster Ravioli Gratin','spicy vodka sauce, parmesan, garlic bread','No_Style',30,'','','',11,2,'2022-04-26 10:45:21',NULL),(17,'Tomato Bisque ','parmesan crisps','No_Style',10,'','','',0,3,'2022-04-26 10:45:21',NULL),(18,'Fava Bean Hummus','radish','No_Style',12,'','','',1,6,'2022-04-26 10:45:21',NULL),(19,'Mediterranean Salad','pickled shallots, roasted tomato, feta, oregano vinaigrette','No_Style',16,'','','',2,6,'2022-04-26 10:45:21',NULL),(20,'Caesar Salad','parmesan, brioche croutons, caesar dressing','No_Style',16,'','','',3,6,'2022-04-26 10:45:21',NULL),(21,'Forager’s Salad','kale, wild mushroom roasted tomato & corn, oregano vinaigrette','No_Style',16,'','','',4,5,'2022-04-26 10:45:21',NULL),(22,'White Bean Salad','gimelli, olives, chili, capers, red onions, arugula, lemon dressing','No_Style',16,'','','',5,3,'2022-04-26 10:45:21',NULL),(23,'Eggplant Lasagna','tomato, breadcrumbs, basil','No_Style',22,'','','',6,4,'2022-04-26 10:45:21',NULL),(24,'Buttermilk Fried Chicken Sandwich','pickles, chili ranch, brioche bun','No_Style',18,'add:','bacon, cheese, crushed avocado','',7,3,'2022-04-26 10:45:21',NULL),(25,'Black Angus Burger','two beef patties, muenster, caramelized onion, pickles, garlic aioli','No_Style',20,'','add:','fried egg, bacon, crushed avocado, wild mushroom, impossible™ burger $10',8,3,'2022-04-26 10:45:21',NULL),(26,'Pot-Roasted Ricotta Chicken','cannellini bean fricassee, preserved lemon, crème fraiche, baby kale','No_Style',26,'','','',9,8,'2022-04-26 10:45:21',NULL),(27,'Braised Short Ribs','asparagus, warm potato salad, preserved lemon','No_Style',28,'','','',10,8,'2022-04-26 10:45:21',NULL),(28,'14oz. Black Angus Ribeye','roasted herbed potatoes, king trumpet mushrooms, garlic butter','No_Style',49,'','','',11,6,'2022-04-26 10:45:21',NULL),(29,'Steak Fries','','No_Style',8,'','','',0,4,'2022-04-26 10:45:21',NULL),(30,'Small Salad','wild mushrooms','No_Style',6,'','','',1,4,'2022-04-26 10:45:21',NULL);
/*!40000 ALTER TABLE `menu_items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `menu_sections`
--

DROP TABLE IF EXISTS `menu_sections`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `menu_sections` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `id_parent_section` int(11) NOT NULL DEFAULT '0',
  `subtitle` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `style` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'No_Style',
  `side` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'left',
  `field_order` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'title,price,icons,subtitle,modifier,mod_text',
  `ordering` int(11) NOT NULL DEFAULT '0',
  `menu_type_id` bigint(20) unsigned NOT NULL,
  `menu_id` bigint(20) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `menu_sections_menu_type_id_foreign` (`menu_type_id`),
  KEY `menu_sections_menu_id_foreign` (`menu_id`),
  CONSTRAINT `menu_sections_menu_id_foreign` FOREIGN KEY (`menu_id`) REFERENCES `menus` (`id`) ON DELETE CASCADE,
  CONSTRAINT `menu_sections_menu_type_id_foreign` FOREIGN KEY (`menu_type_id`) REFERENCES `menu_types` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `menu_sections`
--

LOCK TABLES `menu_sections` WRITE;
/*!40000 ALTER TABLE `menu_sections` DISABLE KEYS */;
INSERT INTO `menu_sections` VALUES (1,0,'','Starters','','No_Style','left','title,price,icons,subtitle,modifier,mod_text',0,1,1,'2021-10-28 12:17:36',NULL),(2,0,'','SALADS','','No_Style','left','title,price,icons,subtitle,modifier,mod_text',1,1,1,'2021-10-28 12:17:36',NULL),(3,0,'','KIDS','','No_Style','left','title,price,icons,subtitle,modifier,mod_text',2,1,1,'2021-10-28 12:17:36',NULL),(4,0,'','SIDES','','No_Style','left','title,price,icons,subtitle,modifier,mod_text',3,1,1,'2021-10-28 12:17:36',NULL),(5,0,'','LAND &amp; SEA','','No_Style','right','title,price,icons,subtitle,modifier,mod_text',4,1,1,'2021-10-28 12:17:36',NULL),(6,0,'','CHOPS &amp; STEAKS','','No_Style','right','title,price,icons,subtitle,modifier,mod_text',4,1,1,'2021-10-28 12:17:36',NULL),(7,0,'','SWEETS','','No_Style','right','title,price,icons,subtitle,modifier,mod_text',6,1,1,'2021-10-28 12:17:36',NULL),(8,0,'','SAUCES','','No_Style','right','title,price,icons,subtitle,modifier,mod_text',7,1,1,'2021-10-28 12:17:36',NULL);
/*!40000 ALTER TABLE `menu_sections` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `menu_types`
--

DROP TABLE IF EXISTS `menu_types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `menu_types` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `shortname` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `template` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `media` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'print',
  `width` int(11) NOT NULL DEFAULT '216',
  `height` int(11) NOT NULL DEFAULT '279',
  `paper` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'Letter',
  `orientation` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'Portrait',
  `size` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'short',
  `branch_id` bigint(20) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `menu_types_branch_id_foreign` (`branch_id`),
  CONSTRAINT `menu_types_branch_id_foreign` FOREIGN KEY (`branch_id`) REFERENCES `branches` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `menu_types`
--

LOCK TABLES `menu_types` WRITE;
/*!40000 ALTER TABLE `menu_types` DISABLE KEYS */;
INSERT INTO `menu_types` VALUES (1,'Azulinda | Snacks & Shared (US Letter / Half)','azulinda_snacks_shared','azulindaHalf','print',216,279,'Letter','Portrait','short',1,'2021-10-28 04:17:36','2021-10-29 04:17:36'),(2,'Azulinda | Drinks (US Letter)','azulinda_drinks','azulindaFull','print',216,279,'Letter','Portrait','short',1,'2021-10-28 04:17:36','2021-10-29 04:17:36'),(3,'Azulinda | Mobile Menu','azulinda_mobile','azulindaMobile','mobile',0,0,'Mobile','Mobile','short',1,'2021-10-28 04:17:36','2021-10-29 04:17:36'),(4,'La Luce | Dinner (US Letter)','laluce_dinner','laluceDinner','print',216,356,'Letter','Portrait','long',2,'2021-10-28 04:17:36','2021-10-29 04:17:36'),(5,'La Luce | Drinks (US Letter)','laluce_drinks','laluceDrinks','print',216,356,'Letter','Portrait','short',2,'2021-10-28 04:17:36','2021-10-29 04:17:36'),(6,'La Luce | Mobile Menu','laluce_mobile','laluceMobile','mobile',0,0,'Mobile','Mobile','short',2,'2021-10-28 04:17:36','2021-10-29 04:17:36'),(7,'Sunan | Food (US Letter)','sunan_food','sunanFood','print',216,279,'Letter','Portrait','short',3,'2021-10-28 04:17:36','2021-10-29 04:17:36'),(8,'Sunan | Drinks (US Letter)','sunan_drinks','sunanDrinks','print',216,279,'Letter','Portrait','short',3,'2021-10-28 04:17:36','2021-10-29 04:17:36'),(9,'Sunan | Mobile Menu','sunan_mobile','sunanMobile','mobile',0,0,'Mobile','Mobile','short',3,'2021-10-28 04:17:36','2021-10-29 04:17:36'),(10,'Auma | Food','auma_food','aumaFood','print',216,279,'Letter','Portrait','short',4,'2021-10-28 04:17:36','2021-10-29 04:17:36'),(11,'Auma | Mobile Menu','auma_mobile','aumaMobile','mobile',0,0,'Mobile','Mobile','short',4,'2021-10-28 04:17:36','2021-10-29 04:17:36'),(12,'Maxal | Breakfast/Lunch (US Letter)','maxal_breakfast_lunch','maxalBreakfastLunch','print',216,279,'Letter','Portrait','short',5,'2021-10-28 04:17:36','2021-10-29 04:17:36'),(13,'Maxal | Dinner (US Letter)','maxal_dinner','maxalDinner','print',216,279,'Letter','Portrait','short',5,'2021-10-28 04:17:36','2021-10-29 04:17:36'),(14,'Maxal | Drinks (US Letter)','maxal_drinks','maxalDrinks','print',216,279,'Letter','Portrait','short',5,'2021-10-28 04:17:36','2021-10-29 04:17:36'),(15,'Maxal | Mobile Menu','maxal_mobile','maxalMobile','mobile',0,0,'Mobile','Mobile','short',5,'2021-10-28 04:17:36','2021-10-29 04:17:36');
/*!40000 ALTER TABLE `menu_types` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `menus`
--

DROP TABLE IF EXISTS `menus`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `menus` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
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
  `user_id` bigint(20) unsigned NOT NULL,
  `menu_type_id` bigint(20) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `menus_user_id_foreign` (`user_id`),
  KEY `menus_menu_type_id_foreign` (`menu_type_id`),
  CONSTRAINT `menus_menu_type_id_foreign` FOREIGN KEY (`menu_type_id`) REFERENCES `menu_types` (`id`) ON DELETE CASCADE,
  CONSTRAINT `menus_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `menus`
--

LOCK TABLES `menus` WRITE;
/*!40000 ALTER TABLE `menus` DISABLE KEYS */;
INSERT INTO `menus` VALUES (1,'Menu Azulinda Snacks',NULL,NULL,NULL,NULL,NULL,NULL,'There may be a risk associated with consuming raw shellfish as is the case with other raw protein products. Please consume at your own risk**','The products with an indicated price are not included in the all-inclusive package and are priced in mexican pesos, inclusing iva**',NULL,1,1,1,'2022-01-31 00:20:26','2022-01-31 00:20:26'),(2,'Second Default Azulinda Drinks','','','','',NULL,'','There may be a risk associated with consuming raw shellfish as is the case with other raw protein products. Please consume at your own risk**','The products with an indicated price are not included in the all-inclusive package and are priced in mexican pesos, inclusing iva**','',1,1,2,'2021-10-28 04:17:36','2021-10-29 04:17:36'),(3,'Azulinda Snacks','','','','',NULL,'','There may be a risk associated with consuming raw shellfish as is the case with other raw protein products. Please consume at your own risk**','The products with an indicated price are not included in the all-inclusive package and are priced in mexican pesos, inclusing iva**','',1,1,4,'2021-10-28 04:17:36','2021-10-29 04:17:36'),(4,'Mobile Menu',NULL,NULL,NULL,NULL,NULL,NULL,'There may be a risk associated with consuming raw shellfish as is the case with other raw protein products. Please consume at your own risk**','The products with an indicated price are not included in the all-inclusive package and are priced in mexican pesos, inclusing iva**',NULL,1,1,3,'2022-10-03 13:02:24','2022-10-03 13:02:24'),(5,'d',NULL,NULL,NULL,NULL,NULL,NULL,'There may be a risk associated with consuming raw shellfish as is the case with other raw protein products. Please consume at your own risk**','The products with an indicated price are not included in the all-inclusive package and are priced in mexican pesos, inclusing iva**',NULL,0,1,4,'2022-10-03 16:43:29','2022-10-03 16:43:29'),(6,'d',NULL,NULL,NULL,NULL,NULL,NULL,'There may be a risk associated with consuming raw shellfish as is the case with other raw protein products. Please consume at your own risk**','The products with an indicated price are not included in the all-inclusive package and are priced in mexican pesos, inclusing iva**',NULL,0,1,2,'2022-10-03 16:44:51','2022-10-03 16:44:51'),(7,'latest',NULL,NULL,NULL,NULL,NULL,NULL,'There may be a risk associated with consuming raw shellfish as is the case with other raw protein products. Please consume at your own risk**','The products with an indicated price are not included in the all-inclusive package and are priced in mexican pesos, inclusing iva**',NULL,0,1,2,'2022-10-04 06:29:23','2022-10-04 06:29:23'),(8,'f',NULL,NULL,NULL,NULL,NULL,NULL,'There may be a risk associated with consuming raw shellfish as is the case with other raw protein products. Please consume at your own risk**','The products with an indicated price are not included in the all-inclusive package and are priced in mexican pesos, inclusing iva**',NULL,0,1,2,'2022-10-04 06:30:54','2022-10-04 06:30:54'),(9,'f',NULL,NULL,NULL,NULL,NULL,NULL,'There may be a risk associated with consuming raw shellfish as is the case with other raw protein products. Please consume at your own risk**','The products with an indicated price are not included in the all-inclusive package and are priced in mexican pesos, inclusing iva**',NULL,0,1,3,'2022-10-04 06:30:54','2022-10-04 06:30:54'),(10,'latest',NULL,NULL,NULL,NULL,NULL,NULL,'There may be a risk associated with consuming raw shellfish as is the case with other raw protein products. Please consume at your own risk**','The products with an indicated price are not included in the all-inclusive package and are priced in mexican pesos, inclusing iva**',NULL,0,1,2,'2022-10-04 10:20:03','2022-10-04 10:20:03');
/*!40000 ALTER TABLE `menus` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (31,'2014_10_12_000000_create_users_table',1),(32,'2014_10_12_100000_create_password_resets_table',1),(33,'2019_08_19_000000_create_failed_jobs_table',1),(34,'2019_12_14_000001_create_personal_access_tokens_table',1),(35,'2022_09_12_070623_create_branches_table',1),(36,'2022_09_12_070936_create_menu_types_table',1),(37,'2022_09_12_070958_create_roles_table',1),(38,'2022_09_12_072839_create_role_user_table',1),(39,'2022_09_30_100523_create_menus_table',1),(40,'2022_09_30_101220_create_menu_files_table',1),(41,'2022_09_30_101502_create_menu_sections_table',1),(42,'2022_09_30_101556_create_menu_items_table',1);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `password_resets`
--

DROP TABLE IF EXISTS `password_resets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `password_resets`
--

LOCK TABLES `password_resets` WRITE;
/*!40000 ALTER TABLE `password_resets` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_resets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personal_access_tokens`
--

DROP TABLE IF EXISTS `personal_access_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) unsigned NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personal_access_tokens`
--

LOCK TABLES `personal_access_tokens` WRITE;
/*!40000 ALTER TABLE `personal_access_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `personal_access_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role_user`
--

DROP TABLE IF EXISTS `role_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `role_user` (
  `user_id` bigint(20) unsigned NOT NULL,
  `role_id` bigint(20) unsigned NOT NULL,
  PRIMARY KEY (`user_id`,`role_id`),
  KEY `role_user_role_id_foreign` (`role_id`),
  CONSTRAINT `role_user_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE,
  CONSTRAINT `role_user_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role_user`
--

LOCK TABLES `role_user` WRITE;
/*!40000 ALTER TABLE `role_user` DISABLE KEYS */;
/*!40000 ALTER TABLE `role_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `roles` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `login` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '0',
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_login_unique` (`login`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'admin','login','email@mail.ru','asdf1234',1,NULL,'','2021-11-20 22:02:22','2021-11-22 22:02:20');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-29 13:07:13
