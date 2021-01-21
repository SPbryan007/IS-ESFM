-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jan 10, 2021 at 01:40 PM
-- Server version: 8.0.17
-- PHP Version: 7.3.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `inventario_db2`
--

-- --------------------------------------------------------

--
-- Table structure for table `articulo`
--

CREATE TABLE `articulo` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nombre` varchar(155) COLLATE utf8mb4_unicode_ci NOT NULL,
  `codigo` varchar(8) COLLATE utf8mb4_unicode_ci NOT NULL,
  `linea` enum('1','2','3') COLLATE utf8mb4_unicode_ci NOT NULL,
  `partida_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `articulo`
--

INSERT INTO `articulo` (`id`, `nombre`, `codigo`, `linea`, `partida_id`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'PAPEL MEMBRETADO TAMAÑO CARTA', '25600001', '1', 1, '2021-01-10 04:42:22', '2021-01-10 04:42:22', NULL),
(2, 'PAPEL MEMBRETADO TAMAÑO OFICIO', '25600002', '1', 1, '2021-01-10 04:42:43', '2021-01-10 04:42:43', NULL),
(3, 'FOLDER INSTITUCIONAL', '25600003', '1', 1, '2021-01-10 04:43:03', '2021-01-10 04:43:03', NULL),
(4, 'FOLDER KARDEX', '25600004', '1', 1, '2021-01-10 04:43:38', '2021-01-10 04:43:38', NULL),
(5, 'BASES DE MADERA CUADRADA', '31300001', '2', 2, '2021-01-10 04:45:27', '2021-01-10 04:45:27', NULL),
(6, 'BASE DE MADERA RECTACGULAR', '31300002', '2', 2, '2021-01-10 04:45:37', '2021-01-10 04:45:37', NULL),
(7, 'BLOCK DE PAPEL SABANA TAMAÑO CARTA RAYADO', '32100001', '1', 3, '2021-01-10 04:45:57', '2021-01-10 04:45:57', NULL),
(8, 'PAPEL BON BLANCO ALCALINO T/CARTA 75 GRS.', '32100002', '1', 3, '2021-01-10 04:46:38', '2021-01-10 04:46:38', NULL),
(9, 'PAPEL BON BLANCO ALCALINO T/OFICIO 75 Grs.', '32100003', '1', 3, '2021-01-10 04:47:03', '2021-01-10 04:47:03', NULL),
(10, 'PAPEL CARBONICO COLOR AZUL T/OFICIO', '32100004', '1', 3, '2021-01-10 04:47:22', '2021-01-10 04:47:22', NULL),
(11, 'PAPEL CARBONICO COLOR NEGRO T/OFICIO', '32100005', '2', 3, '2021-01-10 04:47:57', '2021-01-10 04:47:57', NULL),
(12, 'PAPEL CONTINUO PLANILLERO 14-7/8x11x2 CON COPIA', '32100006', '1', 3, '2021-01-10 04:48:32', '2021-01-10 04:48:32', NULL),
(13, 'PAPEL COPIA TAMAÑO OFICIO COLOR BLANCO', '32100007', '1', 3, '2021-01-10 04:48:47', '2021-01-10 04:48:47', NULL),
(14, 'PAPEL FOSFORESCENTE COLOR CELESTE', '32100008', '1', 3, '2021-01-10 04:49:22', '2021-01-10 04:49:22', NULL),
(15, 'PAPEL FOSFORESCENTE COLOR LECHUGA', '32100009', '1', 3, '2021-01-10 04:49:35', '2021-01-10 04:49:35', NULL),
(16, 'PAPEL FOSFORESCENTE COLOR ROSADO', '32100010', '1', 3, '2021-01-10 04:49:50', '2021-01-10 04:49:50', NULL),
(17, 'PAPEL LUSTRE COLOR AZUL', '32100011', '1', 3, '2021-01-10 04:50:04', '2021-01-10 04:50:04', NULL);

--
-- Triggers `articulo`
--
DELIMITER $$
CREATE TRIGGER `GENCODE_ARTICULO_BA_TRIGGER` BEFORE UPDATE ON `articulo` FOR EACH ROW BEGIN
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
            END
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `GENCODE_ARTICULO_BI_TRIGGER` BEFORE INSERT ON `articulo` FOR EACH ROW BEGIN
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
            END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `compra`
--

CREATE TABLE `compra` (
  `id_compra` bigint(20) UNSIGNED NOT NULL,
  `tipo_compra` enum('SER','COM','CON','CCH') COLLATE utf8mb4_unicode_ci NOT NULL,
  `nro_solicitud` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tipo_comprobante` enum('FACTURA','RECIBO') COLLATE utf8mb4_unicode_ci NOT NULL,
  `nro_comprobante` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nro_autorizacion` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `fecha_comprobante` date DEFAULT NULL,
  `fecha_solicitud` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `detalle_ingreso`
--

CREATE TABLE `detalle_ingreso` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `cantidad` double NOT NULL,
  `descripcion` text COLLATE utf8mb4_unicode_ci,
  `lote_id` bigint(20) UNSIGNED NOT NULL,
  `ingreso_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `detalle_salida`
--

CREATE TABLE `detalle_salida` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `cantidad` double NOT NULL,
  `descripcion` text COLLATE utf8mb4_unicode_ci,
  `lote_id` bigint(20) UNSIGNED NOT NULL,
  `salida_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `devolucion`
--

CREATE TABLE `devolucion` (
  `id_devolucion` bigint(20) UNSIGNED NOT NULL,
  `motivo` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `observacion` text COLLATE utf8mb4_unicode_ci,
  `id_salida` bigint(20) UNSIGNED NOT NULL,
  `usuario_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `donacion`
--

CREATE TABLE `donacion` (
  `id_donacion` bigint(20) UNSIGNED NOT NULL,
  `tipo_donacion` enum('ADO','DCO') COLLATE utf8mb4_unicode_ci NOT NULL,
  `nro_acta` varchar(15) COLLATE utf8mb4_unicode_ci NOT NULL,
  `fecha_acta` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `funcionario`
--

CREATE TABLE `funcionario` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nombre` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `apellido` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `documento` varchar(15) COLLATE utf8mb4_unicode_ci NOT NULL,
  `telefono` varchar(15) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `direccion` varchar(150) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `funcionario`
--

INSERT INTO `funcionario` (`id`, `nombre`, `apellido`, `documento`, `telefono`, `direccion`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Manuel', 'Perez', '10342838', '-', '-', '2021-01-10 03:47:04', '2021-01-10 03:47:04', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `ingreso`
--

CREATE TABLE `ingreso` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tipo_ingreso` enum('Compra','Devolucion','Donacion','INV_INICIAL') COLLATE utf8mb4_unicode_ci NOT NULL,
  `nro_ingreso` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `usuario_id` bigint(20) UNSIGNED NOT NULL,
  `proveedor_id` bigint(20) UNSIGNED DEFAULT NULL,
  `periodo_id` bigint(20) UNSIGNED NOT NULL,
  `observacion` text COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Triggers `ingreso`
--
DELIMITER $$
CREATE TRIGGER `NI_INGRESO_TRIGGER` BEFORE INSERT ON `ingreso` FOR EACH ROW BEGIN
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
            END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `lote`
--

CREATE TABLE `lote` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `stock` double NOT NULL,
  `saldo` double NOT NULL,
  `precio_u` double NOT NULL,
  `marca` varchar(155) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `unidad_medida_id` bigint(20) UNSIGNED DEFAULT NULL,
  `articulo_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2020_04_04_223859_create_proveedors_table', 1),
(3, '2020_05_16_041131_create_articulos_table', 1),
(4, '2020_10_06_234621_create_ingreso_table', 1),
(5, '2020_10_07_043905_create_salida_table', 1),
(6, '2020_10_27_023314_create_trigger', 1);

-- --------------------------------------------------------

--
-- Table structure for table `partida`
--

CREATE TABLE `partida` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nombre` varchar(155) COLLATE utf8mb4_unicode_ci NOT NULL,
  `codigo` varchar(6) COLLATE utf8mb4_unicode_ci NOT NULL,
  `descripcion` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `partida`
--

INSERT INTO `partida` (`id`, `nombre`, `codigo`, `descripcion`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Servicios de Imprenta, Fotocopiado y Fotográficos', '25600', 'Gastos que se realizan por trabajos de: diseño, diagramación, impresión, compaginación y otros.', '2021-01-10 04:25:48', '2021-01-10 04:26:48', NULL),
(2, 'Productos Agrícolas, Pecuarios y Forestales', '31300', 'Gastos para la adquisición de granos básicos, frutas y flores silvestres, goma, caña,\nsemillas y otros productos agroforestales y agropecuarios en bruto;', '2021-01-10 04:27:36', '2021-01-10 04:27:36', NULL),
(3, 'Papel', '32100', 'Gastos destinados a la adquisición de papel de escritorio y otros', '2021-01-10 04:28:32', '2021-01-10 04:28:32', NULL),
(4, 'Productos de Artes Gráficas', '32200', 'Gastos para la adquisición de productos de artes gráficas y otros relacionados. Incluye\ngastos destinados a la adquisición de artículos hechos de papel y cartón.', '2021-01-10 04:29:07', '2021-01-10 04:29:07', NULL),
(5, 'Combustibles, Lubricantes y Derivados para consumo', '34110', 'Gastos para la adquisición de petróleo crudo y parcialmente refinado, gasolina, kerosene,\nalcohol, aceites, grasas, fuel-oil, diesel, alquitrán, energía eléctrica y otros, como gas y\ncemento asfáltico.', '2021-01-10 04:30:13', '2021-01-10 04:30:13', NULL),
(6, 'Productos Químicos y Farmacéuticos', '34200', 'Gastos para la adquisición de compuestos químicos, tales como ácidos, sales, bases\nindustriales, salitres, calcáreos, pinturas, colorantes, pulimentos', '2021-01-10 04:33:23', '2021-01-10 04:33:23', NULL),
(7, 'Productos de Minerales no Metálicos y Plásticos', '34500', 'Gastos por la adquisición de productos de arcilla como macetas, floreros, ceniceros,\nadornos y otros.', '2021-01-10 04:34:28', '2021-01-10 04:35:15', NULL),
(8, 'Productos Metálicos', '34600', 'Gastos destinados a la adquisición de lingotes, planchas, planchones, hojalata, perfiles,\nalambres, varillas y otros,', '2021-01-10 04:35:08', '2021-01-10 04:35:08', NULL),
(9, 'Herramientas Menores', '34800', 'Gastos para la adquisición de herramientas y equipos menores para uso agropecuario,\nindustrial, de transporte, de construcción,', '2021-01-10 04:35:56', '2021-01-10 04:35:56', NULL),
(10, 'Material de Limpieza e Higiene', '39100', 'Gastos destinados a la adquisición de materiales como jabones, detergentes,\ndesinfectantes, paños, ceras, cepillos, escobas y otros.', '2021-01-10 04:36:24', '2021-01-10 04:36:24', NULL),
(11, 'Útiles de Escritorio y Oficina', '39500', 'Gastos destinados a la adquisición de útiles de escritorio como ser: tintas, lápices, bolígrafos, engrapadoras.', '2021-01-10 04:37:32', '2021-01-10 04:37:32', NULL),
(12, 'Útiles y Materiales Eléctricos', '39700', '-', '2021-01-10 04:41:15', '2021-01-10 04:41:15', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `periodo`
--

CREATE TABLE `periodo` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nombre` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `fecha_inicio` date NOT NULL,
  `fecha_fin` date NOT NULL,
  `estado` enum('EN CURSO','FINALIZADO') COLLATE utf8mb4_unicode_ci NOT NULL,
  `descripcion` text COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `proveedor`
--

CREATE TABLE `proveedor` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nit` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nombre` varchar(155) COLLATE utf8mb4_unicode_ci NOT NULL,
  `rubro` varchar(155) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `direccion` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `telefono` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `responsable` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `salida`
--

CREATE TABLE `salida` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nro_salida` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nro_pedido` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `finalidad` text COLLATE utf8mb4_unicode_ci,
  `observacion` text COLLATE utf8mb4_unicode_ci,
  `fecha_pedido` date DEFAULT NULL,
  `solicitante_id` bigint(20) UNSIGNED NOT NULL,
  `usuario_id` bigint(20) UNSIGNED NOT NULL,
  `autorizador_id` bigint(20) UNSIGNED NOT NULL,
  `verificador_id` bigint(20) UNSIGNED NOT NULL,
  `periodo_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Triggers `salida`
--
DELIMITER $$
CREATE TRIGGER `NS_SALIDA_TRIGGER` BEFORE INSERT ON `salida` FOR EACH ROW BEGIN
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
            END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `solicitante`
--

CREATE TABLE `solicitante` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `funcionario_id` bigint(20) UNSIGNED NOT NULL,
  `cargo` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `unidad_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `unidad`
--

CREATE TABLE `unidad` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nombre` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `funcionario_id` bigint(20) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `unidad_medida`
--

CREATE TABLE `unidad_medida` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `sigla` varchar(6) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nombre` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `descripcion` text COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `unidad_medida`
--

INSERT INTO `unidad_medida` (`id`, `sigla`, `nombre`, `descripcion`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Pz', 'Pieza', '-', '2021-01-10 13:10:22', '2021-01-10 13:10:22', NULL),
(2, 'U.', 'UNIDAD', '-', '2021-01-10 13:11:22', '2021-01-10 13:11:22', NULL),
(3, 'FL', 'FOLDER', '-', '2021-01-10 13:14:18', '2021-01-10 13:14:18', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `usuario`
--

CREATE TABLE `usuario` (
  `id_usuario` bigint(20) UNSIGNED NOT NULL,
  `username` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `rol` enum('ADMINISTRADOR','DEFAULT') COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `usuario`
--

INSERT INTO `usuario` (`id_usuario`, `username`, `password`, `rol`, `remember_token`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, '10342838', '$2y$10$XglGnKRovRHZfgKDBuNPgeiXCRDfQ2WQbZjV.KIFZfuOPSKSwAI6u', 'ADMINISTRADOR', NULL, '2021-01-10 03:47:05', '2021-01-10 03:47:05', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `articulo`
--
ALTER TABLE `articulo`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `articulo_codigo_unique` (`codigo`),
  ADD KEY `articulo_partida_id_foreign` (`partida_id`);

--
-- Indexes for table `compra`
--
ALTER TABLE `compra`
  ADD KEY `compra_id_compra_foreign` (`id_compra`);

--
-- Indexes for table `detalle_ingreso`
--
ALTER TABLE `detalle_ingreso`
  ADD PRIMARY KEY (`id`),
  ADD KEY `detalle_ingreso_lote_id_foreign` (`lote_id`),
  ADD KEY `detalle_ingreso_ingreso_id_foreign` (`ingreso_id`);

--
-- Indexes for table `detalle_salida`
--
ALTER TABLE `detalle_salida`
  ADD PRIMARY KEY (`id`),
  ADD KEY `detalle_salida_lote_id_foreign` (`lote_id`),
  ADD KEY `detalle_salida_salida_id_foreign` (`salida_id`);

--
-- Indexes for table `devolucion`
--
ALTER TABLE `devolucion`
  ADD PRIMARY KEY (`id_devolucion`),
  ADD KEY `devolucion_id_salida_foreign` (`id_salida`),
  ADD KEY `devolucion_usuario_id_foreign` (`usuario_id`);

--
-- Indexes for table `donacion`
--
ALTER TABLE `donacion`
  ADD KEY `donacion_id_donacion_foreign` (`id_donacion`);

--
-- Indexes for table `funcionario`
--
ALTER TABLE `funcionario`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `funcionario_documento_unique` (`documento`);

--
-- Indexes for table `ingreso`
--
ALTER TABLE `ingreso`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ingreso_usuario_id_foreign` (`usuario_id`),
  ADD KEY `ingreso_proveedor_id_foreign` (`proveedor_id`),
  ADD KEY `ingreso_periodo_id_foreign` (`periodo_id`);

--
-- Indexes for table `lote`
--
ALTER TABLE `lote`
  ADD PRIMARY KEY (`id`),
  ADD KEY `lote_unidad_medida_id_foreign` (`unidad_medida_id`),
  ADD KEY `lote_articulo_id_foreign` (`articulo_id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `partida`
--
ALTER TABLE `partida`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `partida_codigo_unique` (`codigo`);

--
-- Indexes for table `periodo`
--
ALTER TABLE `periodo`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `proveedor`
--
ALTER TABLE `proveedor`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `proveedor_nit_unique` (`nit`);

--
-- Indexes for table `salida`
--
ALTER TABLE `salida`
  ADD PRIMARY KEY (`id`),
  ADD KEY `salida_solicitante_id_foreign` (`solicitante_id`),
  ADD KEY `salida_usuario_id_foreign` (`usuario_id`),
  ADD KEY `salida_autorizador_id_foreign` (`autorizador_id`),
  ADD KEY `salida_verificador_id_foreign` (`verificador_id`),
  ADD KEY `salida_periodo_id_foreign` (`periodo_id`);

--
-- Indexes for table `solicitante`
--
ALTER TABLE `solicitante`
  ADD PRIMARY KEY (`id`),
  ADD KEY `solicitante_funcionario_id_foreign` (`funcionario_id`),
  ADD KEY `solicitante_unidad_id_foreign` (`unidad_id`);

--
-- Indexes for table `unidad`
--
ALTER TABLE `unidad`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `unidad_nombre_unique` (`nombre`),
  ADD KEY `unidad_funcionario_id_foreign` (`funcionario_id`);

--
-- Indexes for table `unidad_medida`
--
ALTER TABLE `unidad_medida`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id_usuario`),
  ADD UNIQUE KEY `usuario_username_unique` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `articulo`
--
ALTER TABLE `articulo`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `detalle_ingreso`
--
ALTER TABLE `detalle_ingreso`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `detalle_salida`
--
ALTER TABLE `detalle_salida`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `funcionario`
--
ALTER TABLE `funcionario`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `ingreso`
--
ALTER TABLE `ingreso`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `lote`
--
ALTER TABLE `lote`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `partida`
--
ALTER TABLE `partida`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `periodo`
--
ALTER TABLE `periodo`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `proveedor`
--
ALTER TABLE `proveedor`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `salida`
--
ALTER TABLE `salida`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `solicitante`
--
ALTER TABLE `solicitante`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `unidad`
--
ALTER TABLE `unidad`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `unidad_medida`
--
ALTER TABLE `unidad_medida`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `articulo`
--
ALTER TABLE `articulo`
  ADD CONSTRAINT `articulo_partida_id_foreign` FOREIGN KEY (`partida_id`) REFERENCES `partida` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

--
-- Constraints for table `compra`
--
ALTER TABLE `compra`
  ADD CONSTRAINT `compra_id_compra_foreign` FOREIGN KEY (`id_compra`) REFERENCES `ingreso` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `detalle_ingreso`
--
ALTER TABLE `detalle_ingreso`
  ADD CONSTRAINT `detalle_ingreso_ingreso_id_foreign` FOREIGN KEY (`ingreso_id`) REFERENCES `ingreso` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `detalle_ingreso_lote_id_foreign` FOREIGN KEY (`lote_id`) REFERENCES `lote` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Constraints for table `detalle_salida`
--
ALTER TABLE `detalle_salida`
  ADD CONSTRAINT `detalle_salida_lote_id_foreign` FOREIGN KEY (`lote_id`) REFERENCES `lote` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  ADD CONSTRAINT `detalle_salida_salida_id_foreign` FOREIGN KEY (`salida_id`) REFERENCES `salida` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Constraints for table `devolucion`
--
ALTER TABLE `devolucion`
  ADD CONSTRAINT `devolucion_id_devolucion_foreign` FOREIGN KEY (`id_devolucion`) REFERENCES `ingreso` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  ADD CONSTRAINT `devolucion_id_salida_foreign` FOREIGN KEY (`id_salida`) REFERENCES `salida` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  ADD CONSTRAINT `devolucion_usuario_id_foreign` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id_usuario`) ON DELETE RESTRICT ON UPDATE CASCADE;

--
-- Constraints for table `donacion`
--
ALTER TABLE `donacion`
  ADD CONSTRAINT `donacion_id_donacion_foreign` FOREIGN KEY (`id_donacion`) REFERENCES `ingreso` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `ingreso`
--
ALTER TABLE `ingreso`
  ADD CONSTRAINT `ingreso_periodo_id_foreign` FOREIGN KEY (`periodo_id`) REFERENCES `periodo` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `ingreso_proveedor_id_foreign` FOREIGN KEY (`proveedor_id`) REFERENCES `proveedor` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `ingreso_usuario_id_foreign` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id_usuario`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Constraints for table `lote`
--
ALTER TABLE `lote`
  ADD CONSTRAINT `lote_articulo_id_foreign` FOREIGN KEY (`articulo_id`) REFERENCES `articulo` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  ADD CONSTRAINT `lote_unidad_medida_id_foreign` FOREIGN KEY (`unidad_medida_id`) REFERENCES `unidad_medida` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

--
-- Constraints for table `salida`
--
ALTER TABLE `salida`
  ADD CONSTRAINT `salida_autorizador_id_foreign` FOREIGN KEY (`autorizador_id`) REFERENCES `funcionario` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `salida_periodo_id_foreign` FOREIGN KEY (`periodo_id`) REFERENCES `periodo` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `salida_solicitante_id_foreign` FOREIGN KEY (`solicitante_id`) REFERENCES `solicitante` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `salida_usuario_id_foreign` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id_usuario`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `salida_verificador_id_foreign` FOREIGN KEY (`verificador_id`) REFERENCES `funcionario` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Constraints for table `solicitante`
--
ALTER TABLE `solicitante`
  ADD CONSTRAINT `solicitante_funcionario_id_foreign` FOREIGN KEY (`funcionario_id`) REFERENCES `funcionario` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `solicitante_unidad_id_foreign` FOREIGN KEY (`unidad_id`) REFERENCES `unidad` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `unidad`
--
ALTER TABLE `unidad`
  ADD CONSTRAINT `unidad_funcionario_id_foreign` FOREIGN KEY (`funcionario_id`) REFERENCES `funcionario` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

--
-- Constraints for table `usuario`
--
ALTER TABLE `usuario`
  ADD CONSTRAINT `usuario_id_usuario_foreign` FOREIGN KEY (`id_usuario`) REFERENCES `funcionario` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
