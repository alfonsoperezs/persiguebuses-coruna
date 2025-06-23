CREATE TABLE `bus` (
    `id` int PRIMARY KEY,
    `matricula` varchar(10) NOT NULL,
    `modelo` varchar(255) NOT NULL,
    `tipo` enum('Rígido','Articulado','Midibus','Microbus','Pruebas') NOT NULL,
    `puertas` int NOT NULL,
    `fecha_matriculacion` date NOT NULL,
    `combustible` enum('Diesel','Híbrido','Eléctrico','GLP') NOT NULL DEFAULT 'Diesel'
);

CREATE TABLE `bus_linea` (
    `id` int NOT NULL,
    `num_linea` varchar(5) NOT NULL,
    `ult_fecha` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id, num_linea),
    FOREIGN KEY (id) REFERENCES bus(id)
);