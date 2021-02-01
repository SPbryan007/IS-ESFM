-- MySQL dump 10.13  Distrib 8.0.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: inventario_db
-- ------------------------------------------------------
-- Server version	8.0.17

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `articulo`
--

DROP TABLE IF EXISTS `articulo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `articulo` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(155) COLLATE utf8mb4_unicode_ci NOT NULL,
  `codigo` varchar(8) COLLATE utf8mb4_unicode_ci NOT NULL,
  `linea` enum('1','2','3') COLLATE utf8mb4_unicode_ci NOT NULL,
  `partida_id` bigint(20) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `articulo_codigo_unique` (`codigo`),
  KEY `articulo_partida_id_foreign` (`partida_id`),
  CONSTRAINT `articulo_partida_id_foreign` FOREIGN KEY (`partida_id`) REFERENCES `partida` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `articulo`
--

LOCK TABLES `articulo` WRITE;
/*!40000 ALTER TABLE `articulo` DISABLE KEYS */;
/*!40000 ALTER TABLE `articulo` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_unicode_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `GENCODE_ARTICULO_BI_TRIGGER` BEFORE INSERT ON `articulo` FOR EACH ROW BEGIN
                DECLARE CA INT;
                SET @CP = (SELECT codigo FROM partida WHERE id = NEW.partida_id);
                SET CA = (SELECT COUNT(*)+1 FROM articulo WHERE partida_id = NEW.partida_id);
                IF(CA<10)THEN
                    IF NOT EXISTS(SELECT 1 FROM articulo WHERE codigo = CONCAT(@CP,'00',CA)) THEN
                        SET NEW.codigo = CONCAT(@CP,'00',CA);
                    ELSE
                        SET CA = CA+1;
                        SET NEW.codigo = CONCAT(@CP,'00',CA);
                    END IF;
                    ELSE IF(CA<100) THEN
                           IF NOT EXISTS(SELECT 1 FROM articulo WHERE codigo = CONCAT(@CP,'0',CA)) THEN
                                SET NEW.codigo = CONCAT(@CP,'0',CA);
                           ELSE
                                SET CA = CA+1;
                                SET NEW.codigo = CONCAT(@CP,'0',CA);
                            END IF;
                        ELSE IF(CA<1000)THEN
                             IF NOT EXISTS(SELECT 1 FROM articulo WHERE codigo = CONCAT(@CP,CA)) THEN
                                SET NEW.codigo = CONCAT(@CP,CA);
                             ELSE
                                SET CA = CA+1;
                                SET NEW.codigo = CONCAT(@CP,CA);
                             END IF;
                        ELSE IF(CA>=1000)THEN
                             IF NOT EXISTS(SELECT 1 FROM articulo WHERE codigo = CONCAT(@CP,CA)) THEN
                                SET NEW.codigo = CONCAT(@CP,CA);
                             ELSE
                                SET CA = CA+1;
                                SET NEW.codigo = CONCAT(@CP,CA);
                             END IF;
                           END IF;
                        END IF;
                    END IF;
                END IF;
            END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_unicode_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `GENCODE_ARTICULO_BA_TRIGGER` BEFORE UPDATE ON `articulo` FOR EACH ROW BEGIN
                DECLARE CA INT;
                SET @CP = (SELECT codigo FROM partida WHERE id = NEW.partida_id);
                SET CA = (SELECT COUNT(*)+1 FROM articulo WHERE partida_id = NEW.partida_id);
                IF(NEW.partida_id <> OLD.partida_id)THEN
                    IF(CA<10)THEN
                        IF NOT EXISTS(SELECT 1 FROM articulo WHERE codigo = CONCAT(@CP,'00',CA)) THEN
                            SET NEW.codigo = CONCAT(@CP,'00',CA);
                        ELSE
                            SET CA = CA+1;
                            SET NEW.codigo = CONCAT(@CP,'00',CA);
                        END IF;
                        ELSE IF(CA<100) THEN
                                IF NOT EXISTS(SELECT 1 FROM articulo WHERE codigo = CONCAT(@CP,'0',CA)) THEN
                                    SET NEW.codigo = CONCAT(@CP,'0',CA);
                                ELSE
                                    SET CA = CA+1;
                                    SET NEW.codigo = CONCAT(@CP,'0',CA);
                                END IF;
                                ELSE IF(CA<1000)THEN
                                    IF NOT EXISTS(SELECT 1 FROM articulo WHERE codigo = CONCAT(@CP,CA)) THEN
                                        SET NEW.codigo = CONCAT(@CP,CA);
                                    ELSE
                                        SET CA = CA+1;
                                        SET NEW.codigo = CONCAT(@CP,CA);
                                    END IF;
                                END IF;
                            END IF;
                        END IF;
                END IF;
            END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `compra`
--

DROP TABLE IF EXISTS `compra`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `compra` (
  `id_compra` bigint(20) unsigned NOT NULL,
  `tipo_compra` enum('SER','COM','CON','CCH') COLLATE utf8mb4_unicode_ci NOT NULL,
  `nro_solicitud` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tipo_comprobante` enum('FACTURA','RECIBO') COLLATE utf8mb4_unicode_ci NOT NULL,
  `nro_comprobante` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nro_autorizacion` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `fecha_comprobante` date DEFAULT NULL,
  `fecha_solicitud` date DEFAULT NULL,
  KEY `compra_id_compra_foreign` (`id_compra`),
  CONSTRAINT `compra_id_compra_foreign` FOREIGN KEY (`id_compra`) REFERENCES `ingreso` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `compra`
--

LOCK TABLES `compra` WRITE;
/*!40000 ALTER TABLE `compra` DISABLE KEYS */;
/*!40000 ALTER TABLE `compra` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `detalle_ingreso`
--

DROP TABLE IF EXISTS `detalle_ingreso`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `detalle_ingreso` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `cantidad` double NOT NULL,
  `descripcion` text COLLATE utf8mb4_unicode_ci,
  `lote_id` bigint(20) unsigned NOT NULL,
  `ingreso_id` bigint(20) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `detalle_ingreso_lote_id_foreign` (`lote_id`),
  KEY `detalle_ingreso_ingreso_id_foreign` (`ingreso_id`),
  CONSTRAINT `detalle_ingreso_ingreso_id_foreign` FOREIGN KEY (`ingreso_id`) REFERENCES `ingreso` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `detalle_ingreso_lote_id_foreign` FOREIGN KEY (`lote_id`) REFERENCES `lote` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `detalle_ingreso`
--

LOCK TABLES `detalle_ingreso` WRITE;
/*!40000 ALTER TABLE `detalle_ingreso` DISABLE KEYS */;
/*!40000 ALTER TABLE `detalle_ingreso` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `detalle_salida`
--

DROP TABLE IF EXISTS `detalle_salida`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `detalle_salida` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `cantidad` double NOT NULL,
  `descripcion` text COLLATE utf8mb4_unicode_ci,
  `lote_id` bigint(20) unsigned NOT NULL,
  `salida_id` bigint(20) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `detalle_salida_lote_id_foreign` (`lote_id`),
  KEY `detalle_salida_salida_id_foreign` (`salida_id`),
  CONSTRAINT `detalle_salida_lote_id_foreign` FOREIGN KEY (`lote_id`) REFERENCES `lote` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `detalle_salida_salida_id_foreign` FOREIGN KEY (`salida_id`) REFERENCES `salida` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `detalle_salida`
--

LOCK TABLES `detalle_salida` WRITE;
/*!40000 ALTER TABLE `detalle_salida` DISABLE KEYS */;
/*!40000 ALTER TABLE `detalle_salida` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `devolucion`
--

DROP TABLE IF EXISTS `devolucion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `devolucion` (
  `id_devolucion` bigint(20) unsigned NOT NULL,
  `motivo` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `observacion` text COLLATE utf8mb4_unicode_ci,
  `id_salida` bigint(20) unsigned NOT NULL,
  `usuario_id` bigint(20) unsigned NOT NULL,
  PRIMARY KEY (`id_devolucion`),
  KEY `devolucion_id_salida_foreign` (`id_salida`),
  KEY `devolucion_usuario_id_foreign` (`usuario_id`),
  CONSTRAINT `devolucion_id_devolucion_foreign` FOREIGN KEY (`id_devolucion`) REFERENCES `ingreso` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `devolucion_id_salida_foreign` FOREIGN KEY (`id_salida`) REFERENCES `salida` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `devolucion_usuario_id_foreign` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id_usuario`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `devolucion`
--

LOCK TABLES `devolucion` WRITE;
/*!40000 ALTER TABLE `devolucion` DISABLE KEYS */;
/*!40000 ALTER TABLE `devolucion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `donacion`
--

DROP TABLE IF EXISTS `donacion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `donacion` (
  `id_donacion` bigint(20) unsigned NOT NULL,
  `tipo_donacion` enum('ADO','DCO') COLLATE utf8mb4_unicode_ci NOT NULL,
  `nro_acta` varchar(15) COLLATE utf8mb4_unicode_ci NOT NULL,
  `fecha_acta` date DEFAULT NULL,
  KEY `donacion_id_donacion_foreign` (`id_donacion`),
  CONSTRAINT `donacion_id_donacion_foreign` FOREIGN KEY (`id_donacion`) REFERENCES `ingreso` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `donacion`
--

LOCK TABLES `donacion` WRITE;
/*!40000 ALTER TABLE `donacion` DISABLE KEYS */;
/*!40000 ALTER TABLE `donacion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `funcionario`
--

DROP TABLE IF EXISTS `funcionario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `funcionario` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `apellido` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `documento` varchar(15) COLLATE utf8mb4_unicode_ci NOT NULL,
  `telefono` varchar(15) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `direccion` varchar(150) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `funcionario_documento_unique` (`documento`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `funcionario`
--

LOCK TABLES `funcionario` WRITE;
/*!40000 ALTER TABLE `funcionario` DISABLE KEYS */;
INSERT INTO `funcionario` VALUES (1,'admin','admin','admin',NULL,NULL,'2021-02-01 06:05:28','2021-02-01 06:05:28',NULL);
/*!40000 ALTER TABLE `funcionario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ingreso`
--

DROP TABLE IF EXISTS `ingreso`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ingreso` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `tipo_ingreso` enum('Compra','Donacion','INV_INICIAL') COLLATE utf8mb4_unicode_ci NOT NULL,
  `nro_ingreso` varchar(7) COLLATE utf8mb4_unicode_ci NOT NULL,
  `usuario_id` bigint(20) unsigned NOT NULL,
  `proveedor_id` bigint(20) unsigned DEFAULT NULL,
  `periodo_id` bigint(20) unsigned NOT NULL,
  `observacion` text COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ingreso_usuario_id_foreign` (`usuario_id`),
  KEY `ingreso_proveedor_id_foreign` (`proveedor_id`),
  KEY `ingreso_periodo_id_foreign` (`periodo_id`),
  CONSTRAINT `ingreso_periodo_id_foreign` FOREIGN KEY (`periodo_id`) REFERENCES `periodo` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `ingreso_proveedor_id_foreign` FOREIGN KEY (`proveedor_id`) REFERENCES `proveedor` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `ingreso_usuario_id_foreign` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id_usuario`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ingreso`
--

LOCK TABLES `ingreso` WRITE;
/*!40000 ALTER TABLE `ingreso` DISABLE KEYS */;
/*!40000 ALTER TABLE `ingreso` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_unicode_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `NI_INGRESO_TRIGGER` BEFORE INSERT ON `ingreso` FOR EACH ROW BEGIN
                DECLARE IA INT;
                IF(NEW.tipo_ingreso != 'INV_INICIAL')THEN

                    SET IA = (SELECT COUNT(*)+1 FROM ingreso WHERE periodo_id = NEW.periodo_id AND deleted_at IS NULL AND tipo_ingreso <> 'INV_INICIAL' );
                    IF(IA<10)THEN
                        IF NOT EXISTS( SELECT 1 FROM ingreso WHERE nro_ingreso = CONCAT('00',IA) AND periodo_id = NEW.periodo_id AND deleted_at IS NULL) THEN
                            SET NEW.nro_ingreso = CONCAT('00',IA);
                        ELSE
                            SET IA = IA+1;
                            SET NEW.nro_ingreso = CONCAT('00',IA);
                        END IF;
                        ELSE IF(IA<100) THEN
                               IF NOT EXISTS( SELECT 1 FROM ingreso WHERE nro_ingreso = CONCAT('0',IA) AND periodo_id = NEW.periodo_id AND deleted_at IS NULL)THEN
                                    SET NEW.nro_ingreso = CONCAT('0',IA);
                               ELSE
                                    SET IA = IA+1;
                                    SET NEW.nro_ingreso = CONCAT('0',IA);
                                END IF;
                            ELSE IF(IA<1000)THEN
                                    IF NOT EXISTS(SELECT 1 FROM ingreso WHERE nro_ingreso = IA AND periodo_id = NEW.periodo_id AND deleted_at IS NULL ) THEN
                                    SET NEW.nro_ingreso = IA;
                                ELSE
                                    SET IA = IA+1;
                                    SET NEW.nro_ingreso = IA;
                                 END IF;
                            END IF;
                        END IF;
                    END IF;
                END IF;
            END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `lote`
--

DROP TABLE IF EXISTS `lote`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lote` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `stock` double NOT NULL,
  `saldo` double NOT NULL,
  `precio_u` double NOT NULL,
  `marca` varchar(155) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `unidad_medida_id` bigint(20) unsigned DEFAULT NULL,
  `articulo_id` bigint(20) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `lote_unidad_medida_id_foreign` (`unidad_medida_id`),
  KEY `lote_articulo_id_foreign` (`articulo_id`),
  CONSTRAINT `lote_articulo_id_foreign` FOREIGN KEY (`articulo_id`) REFERENCES `articulo` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `lote_unidad_medida_id_foreign` FOREIGN KEY (`unidad_medida_id`) REFERENCES `unidad_medida` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lote`
--

LOCK TABLES `lote` WRITE;
/*!40000 ALTER TABLE `lote` DISABLE KEYS */;
/*!40000 ALTER TABLE `lote` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (1,'2014_10_12_000000_create_users_table',1),(2,'2020_04_04_223859_create_proveedors_table',1),(3,'2020_05_16_041131_create_articulos_table',1),(4,'2020_10_06_234621_create_ingreso_table',1),(5,'2020_10_07_043905_create_salida_table',1),(6,'2020_10_27_023314_create_trigger',1);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `partida`
--

DROP TABLE IF EXISTS `partida`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `partida` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(155) COLLATE utf8mb4_unicode_ci NOT NULL,
  `codigo` varchar(6) COLLATE utf8mb4_unicode_ci NOT NULL,
  `descripcion` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `partida_codigo_unique` (`codigo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `partida`
--

LOCK TABLES `partida` WRITE;
/*!40000 ALTER TABLE `partida` DISABLE KEYS */;
/*!40000 ALTER TABLE `partida` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `periodo`
--

DROP TABLE IF EXISTS `periodo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `periodo` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `fecha_inicio` date NOT NULL,
  `fecha_fin` date NOT NULL,
  `estado` enum('EN CURSO','FINALIZADO') COLLATE utf8mb4_unicode_ci NOT NULL,
  `descripcion` text COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `periodo`
--

LOCK TABLES `periodo` WRITE;
/*!40000 ALTER TABLE `periodo` DISABLE KEYS */;
/*!40000 ALTER TABLE `periodo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `proveedor`
--

DROP TABLE IF EXISTS `proveedor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `proveedor` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `nit` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nombre` varchar(155) COLLATE utf8mb4_unicode_ci NOT NULL,
  `rubro` varchar(155) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `direccion` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `telefono` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `responsable` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `proveedor_nit_unique` (`nit`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `proveedor`
--

LOCK TABLES `proveedor` WRITE;
/*!40000 ALTER TABLE `proveedor` DISABLE KEYS */;
/*!40000 ALTER TABLE `proveedor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `salida`
--

DROP TABLE IF EXISTS `salida`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `salida` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `nro_salida` varchar(7) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nro_pedido` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `finalidad` text COLLATE utf8mb4_unicode_ci,
  `observacion` text COLLATE utf8mb4_unicode_ci,
  `fecha_pedido` date DEFAULT NULL,
  `solicitante_id` bigint(20) unsigned NOT NULL,
  `usuario_id` bigint(20) unsigned NOT NULL,
  `autorizador_id` bigint(20) unsigned NOT NULL,
  `verificador_id` bigint(20) unsigned NOT NULL,
  `periodo_id` bigint(20) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `salida_solicitante_id_foreign` (`solicitante_id`),
  KEY `salida_usuario_id_foreign` (`usuario_id`),
  KEY `salida_autorizador_id_foreign` (`autorizador_id`),
  KEY `salida_verificador_id_foreign` (`verificador_id`),
  KEY `salida_periodo_id_foreign` (`periodo_id`),
  CONSTRAINT `salida_autorizador_id_foreign` FOREIGN KEY (`autorizador_id`) REFERENCES `funcionario` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `salida_periodo_id_foreign` FOREIGN KEY (`periodo_id`) REFERENCES `periodo` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `salida_solicitante_id_foreign` FOREIGN KEY (`solicitante_id`) REFERENCES `solicitante` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `salida_usuario_id_foreign` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id_usuario`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `salida_verificador_id_foreign` FOREIGN KEY (`verificador_id`) REFERENCES `funcionario` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `salida`
--

LOCK TABLES `salida` WRITE;
/*!40000 ALTER TABLE `salida` DISABLE KEYS */;
/*!40000 ALTER TABLE `salida` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_unicode_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `NS_SALIDA_TRIGGER` BEFORE INSERT ON `salida` FOR EACH ROW BEGIN
                DECLARE IA INT;
                SET IA = (SELECT COUNT(*)+1 FROM salida WHERE periodo_id = NEW.periodo_id AND deleted_at IS NULL );
                IF(IA<10)THEN
                    IF NOT EXISTS( SELECT 1 FROM salida WHERE nro_salida = CONCAT('00',IA) AND periodo_id = NEW.periodo_id AND deleted_at IS NULL) THEN
                        SET NEW.nro_salida = CONCAT('00',IA);
                    ELSE
                        SET IA = IA+1;
                        SET NEW.nro_salida = CONCAT('00',IA);
                    END IF;
                    ELSE IF(IA<100) THEN
                           IF NOT EXISTS( SELECT 1 FROM salida WHERE nro_salida = CONCAT('0',IA) AND periodo_id = NEW.periodo_id AND deleted_at IS NULL)THEN
                                SET NEW.nro_salida = CONCAT('0',IA);
                           ELSE
                                SET IA = IA+1;
                                SET NEW.nro_salida = CONCAT('0',IA);
                            END IF;
                        ELSE IF(IA<1000)THEN
                                IF NOT EXISTS(SELECT 1 FROM salida WHERE nro_salida = IA AND periodo_id = NEW.periodo_id AND deleted_at IS NULL ) THEN
                                SET NEW.nro_salida = IA;
                            ELSE
                                SET IA = IA+1;
                                SET NEW.nro_salida = IA;
                             END IF;
                        END IF;
                    END IF;
                END IF;
            END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `solicitante`
--

DROP TABLE IF EXISTS `solicitante`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `solicitante` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `funcionario_id` bigint(20) unsigned NOT NULL,
  `cargo` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `unidad_id` bigint(20) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `solicitante_funcionario_id_foreign` (`funcionario_id`),
  KEY `solicitante_unidad_id_foreign` (`unidad_id`),
  CONSTRAINT `solicitante_funcionario_id_foreign` FOREIGN KEY (`funcionario_id`) REFERENCES `funcionario` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `solicitante_unidad_id_foreign` FOREIGN KEY (`unidad_id`) REFERENCES `unidad` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `solicitante`
--

LOCK TABLES `solicitante` WRITE;
/*!40000 ALTER TABLE `solicitante` DISABLE KEYS */;
/*!40000 ALTER TABLE `solicitante` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `unidad`
--

DROP TABLE IF EXISTS `unidad`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `unidad` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `funcionario_id` bigint(20) unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `unidad_nombre_unique` (`nombre`),
  KEY `unidad_funcionario_id_foreign` (`funcionario_id`),
  CONSTRAINT `unidad_funcionario_id_foreign` FOREIGN KEY (`funcionario_id`) REFERENCES `funcionario` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `unidad`
--

LOCK TABLES `unidad` WRITE;
/*!40000 ALTER TABLE `unidad` DISABLE KEYS */;
/*!40000 ALTER TABLE `unidad` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `unidad_medida`
--

DROP TABLE IF EXISTS `unidad_medida`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `unidad_medida` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `sigla` varchar(6) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nombre` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `descripcion` text COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `unidad_medida`
--

LOCK TABLES `unidad_medida` WRITE;
/*!40000 ALTER TABLE `unidad_medida` DISABLE KEYS */;
/*!40000 ALTER TABLE `unidad_medida` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `id_usuario` bigint(20) unsigned NOT NULL,
  `username` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `rol` enum('ADMINISTRADOR','INVITADO') COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id_usuario`),
  UNIQUE KEY `usuario_username_unique` (`username`),
  CONSTRAINT `usuario_id_usuario_foreign` FOREIGN KEY (`id_usuario`) REFERENCES `funcionario` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'admin','$2y$10$yq.qVex9HKR8DlFInXgTcerDoR63WNlIEewkNg9/0RNAvIUhkXYrO','ADMINISTRADOR',NULL,'2021-02-01 06:05:29','2021-02-01 06:05:29',NULL);
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-02-01  2:39:55
