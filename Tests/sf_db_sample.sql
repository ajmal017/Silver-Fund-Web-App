CREATE DATABASE  IF NOT EXISTS `sf_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `sf_db`;
-- MySQL dump 10.13  Distrib 8.0.18, for Win64 (x86_64)
--
-- Host: localhost    Database: api
-- ------------------------------------------------------
-- Server version	8.0.18

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-----------------------------------------------------------------------

--
-- Table structure for table `equity_security_master`
--

DROP TABLE IF EXISTS `equity_security_master`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `equity_security_master` (
  `asset_id` VARCHAR(15) NOT NULL,
  `ticker` VARCHAR(8) NOT NULL,
  `conid` VARCHAR(15) NOT NULL,
  `cusip` VARCHAR(9) NOT NULL,
  `valid_date` TIMESTAMP NOT NULL,
  `industry_code` VARCHAR(3) NOT NULL,
  `country_code` VARCHAR(4) NOT NULL,
  `prim_exch` VARCHAR(1) NOT NULL,
  `currency` VARCHAR(4) NOT NULL,
  `flag` VARCHAR(1) DEFAULT NULL,
  PRIMARY KEY (`asset_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `equity_security_master`
--

LOCK TABLES `equity_security_master` WRITE;
/*!40000 ALTER TABLE `equity_security_master` DISABLE KEYS */;
INSERT INTO `equity_security_master` VALUES ('0001','AAPL', '45157951', '008000AA7', '2020-07-02 00:00:00','GIC','USA','N','USD','A'),('0002','AMZN','57149539','618065A8B','2020-07-02','GIC','USA','N','USD','A');
/*!40000 ALTER TABLE `equity_security_master` ENABLE KEYS */;
UNLOCK TABLES;

-----------------------------------------------------------------------

--
-- Table structure for table `fx`
--

DROP TABLE IF EXISTS `fx`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `fx` (
  `country_code` VARCHAR(6) NOT NULL,
  `date_` TIMESTAMP DEFAULT NULL,
  `exchange_rate` FLOAT DEFAULT NULL,
  `30_day_rate` FLOAT DEFAULT NULL,
  `90_day_rate` FLOAT DEFAULT NULL,
  `180_day_rate` FLOAT DEFAULT NULL,
  `1_year_rate` FLOAT DEFAULT NULL,
  `2_year_rate` FLOAT DEFAULT NULL,
  `3_year_rate` FLOAT DEFAULT NULL,
  `5_year_rate` FLOAT DEFAULT NULL,
  `7_year_rate` FLOAT DEFAULT NULL,
  `10_year_rate` FLOAT DEFAULT NULL,
  `20_year_rate` FLOAT DEFAULT NULL,
  `30_year_rate` FLOAT DEFAULT NULL,
  PRIMARY KEY (`country_code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fx`
--

LOCK TABLES `fx` WRITE;
/*!40000 ALTER TABLE `fx` DISABLE KEYS */;
INSERT INTO `fx` VALUES ('CHN','2020-07-02 00:00:00',0.14153,0.14083,0.13962,0.14426,0.14555,0.15079,0.14844,0.16109,0.16314,0.14756,0.12077,0.20877);
/*!40000 ALTER TABLE `fx` ENABLE KEYS */;
UNLOCK TABLES;

-----------------------------------------------------------------------

--
-- Table structure for table `position`
--

DROP TABLE IF EXISTS `position`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `position` (
  `asset_id` VARCHAR(15) NOT NULL,
  `date_` DATETIME NOT NULL,
  `ticker` VARCHAR(6) NOT NULL,
  `num_of_shares` INT(11) NOT NULL,
  `pos_type` VARCHAR(10) NOT NULL,
  `price` FLOAT NOT NULL,
  `position_value` FLOAT NOT NULL,
  KEY `asset_id` (`asset_id`),
  CONSTRAINT `position_ibfk_1` FOREIGN KEY (`asset_id`) REFERENCES `equity_security_master` (`asset_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `position`
--

LOCK TABLES `position` WRITE;
/*!40000 ALTER TABLE `position` DISABLE KEYS */;
INSERT INTO `position` VALUES ('0001', '20200704', 'AAPL',100,'stock',120.96,12096);
/*!40000 ALTER TABLE `position` ENABLE KEYS */;
UNLOCK TABLES;

-----------------------------------------------------------------------

--
-- Table structure for table `trade`
--

DROP TABLE IF EXISTS `trade`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `trade` (
  `trade_id` INT(11) NOT NULL,
  `asset_id` VARCHAR(8) NOT NULL,
  `trade_type` VARCHAR(8) NOT NULL,
  `num_of_shares` INT(11) NOT NULL,
  `price` FLOAT NOT NULL,
  `tot_price` FLOAT NOT NULL,
  `trade_status` VARCHAR(10) NOT NULL,
  `trade_time` TIMESTAMP DEFAULT NULL,
  PRIMARY KEY (`trade_id`),
  KEY `asset_id` (`asset_id`),
  CONSTRAINT `trade_ibfk_1` FOREIGN KEY (`asset_id`) REFERENCES `equity_security_master` (`asset_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `trade`
--

LOCK TABLES `trade` WRITE;
/*!40000 ALTER TABLE `trade` DISABLE KEYS */;
INSERT INTO `trade` VALUES (1,'0001','buy',100,120.96,12096,'complete','2020-07-02 00:00:00');
/*!40000 ALTER TABLE `trade` ENABLE KEYS */;
UNLOCK TABLES;

-----------------------------------------------------------------------

--
-- Table structure for table `market_data`
--

DROP TABLE IF EXISTS `market_data`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `market_data` (
  `asset_id` VARCHAR(15) NOT NULL,
  `date_` TIMESTAMP NOT NULL,
  `open_price` FLOAT NOT NULL,
  `close_price` FLOAT NOT NULL,
  `intra_high` FLOAT NOT NULL,
  `intra_low` FLOAT NOT NULL,
  `dividend` FLOAT DEFAULT NULL,
  `adj_factor` FLOAT DEFAULT NULL,
  `num_of_shares` INT(11) NOT NULL,
  `tot_value` FLOAT NOT NULL,
  `cap` FLOAT DEFAULT NULL,
  `usd_shr` INT(11) DEFAULT NULL,
  PRIMARY KEY (`asset_id`,`date_`),
  CONSTRAINT `market_data_ibfk_1` FOREIGN KEY (`asset_id`) REFERENCES `equity_security_master` (`asset_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `market_data`
--

LOCK TABLES `market_data` WRITE;
/*!40000 ALTER TABLE `market_data` DISABLE KEYS */;
INSERT INTO `market_data` VALUES ('0001','2020-07-02 00:00:00',110,120.12,130.01,99.12,0,1,633045,1548960000000,NULL,1);
/*!40000 ALTER TABLE `market_data` ENABLE KEYS */;
UNLOCK TABLES;

-----------------------------------------------------------------------

/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
