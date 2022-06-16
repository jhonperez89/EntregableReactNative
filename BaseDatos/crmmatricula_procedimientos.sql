
CREATE DATABASE crmMatriculas
Go
USE crmMatriculas;
Go
 
CREATE TABLE departamento (
    id INT Identity(1,1) PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL
);
Go
CREATE TABLE persona (
    id INT Identity(1,1) PRIMARY KEY,
    nif VARCHAR(9) UNIQUE,
    nombre VARCHAR(25) NOT NULL,
    apellido1 VARCHAR(50) NOT NULL,
    apellido2 VARCHAR(50),
    ciudad VARCHAR(25) NOT NULL,
    direccion VARCHAR(50) NOT NULL,
    telefono VARCHAR(9),
    fecha_nacimiento DATE NOT NULL,
    sexo Char(1) NOT NULL,
    tipo Varchar(20) NOT NULL,
    Clave VARCHAR(12)
);
GO 
CREATE TABLE profesor (
    id_profesor INT PRIMARY KEY,
    id_departamento INT NOT NULL,
    FOREIGN KEY (id_profesor) REFERENCES persona(id),
    FOREIGN KEY (id_departamento) REFERENCES departamento(id)
);
 GO
 CREATE TABLE grado (
    id INT Identity(1,1) PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL
);
GO 
CREATE TABLE asignatura (
    id INT Identity(1,1) PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    creditos FLOAT NOT NULL,
    tipo VarChar(20) NOT NULL,
    curso TINYINT NOT NULL,
    cuatrimestre TINYINT NOT NULL,
    id_profesor INT,
    id_grado INT NOT NULL,
    FOREIGN KEY(id_profesor) REFERENCES profesor(id_profesor),
    FOREIGN KEY(id_grado) REFERENCES grado(id)
);
GO 
CREATE TABLE curso_escolar (
    id INT Identity(1,1) PRIMARY KEY,
    ano_inicio int NOT NULL,
    ano_fin int NOT NULL
);
GO
CREATE TABLE alumno_se_matricula_asignatura (
    id_alumno INT NOT NULL,
    id_asignatura INT NOT NULL,
    id_curso_escolar INT NOT NULL,
    PRIMARY KEY (id_alumno, id_asignatura, id_curso_escolar),
    FOREIGN KEY (id_alumno) REFERENCES persona(id),
    FOREIGN KEY (id_asignatura) REFERENCES asignatura(id),
    FOREIGN KEY (id_curso_escolar) REFERENCES curso_escolar(id)
);
GO 
 /* Departamento */
INSERT INTO departamento VALUES ('Inform�tica');
INSERT INTO departamento VALUES ('Matem�ticas');
INSERT INTO departamento VALUES ('Econom�a y Empresa');
INSERT INTO departamento VALUES ('Educaci�n');
INSERT INTO departamento VALUES ('Agronom�a');
INSERT INTO departamento VALUES ('Qu�mica y F�sica');
INSERT INTO departamento VALUES ('Filolog�a');
INSERT INTO departamento VALUES ('Derecho');
INSERT INTO departamento VALUES ('Biolog�a y Geolog�a');
GO 
 /* Persona */
INSERT INTO persona VALUES ('26902806M', 'Salvador', 'S�nchez', 'P�rez', 'Almer�a', 'C/ Real del barrio alto', '950254837', '1991/03/28', 'H', 'alumno','123456');
INSERT INTO persona VALUES ('89542419S', 'Juan', 'Saez', 'Vega', 'Almer�a', 'C/ Mercurio', '618253876', '1992/08/08', 'H', 'alumno','123456');
INSERT INTO persona VALUES ('11105554G', 'Zoe', 'Ramirez', 'Gea', 'Almer�a', 'C/ Marte', '618223876', '1979/08/19', 'M', 'profesor','123456');
INSERT INTO persona VALUES ('17105885A', 'Pedro', 'Heller', 'Pagac', 'Almer�a', 'C/ Estrella fugaz', NULL, '2000/10/05', 'H', 'alumno','123456');
INSERT INTO persona VALUES ('38223286T', 'David', 'Schmidt', 'Fisher', 'Almer�a', 'C/ Venus', '678516294', '1978/01/19', 'H', 'profesor','123456');
INSERT INTO persona VALUES ('04233869Y', 'Jos�', 'Koss', 'Bayer', 'Almer�a', 'C/ J�piter', '628349590', '1998/01/28', 'H', 'alumno','123456');
INSERT INTO persona VALUES ('97258166K', 'Ismael', 'Strosin', 'Turcotte', 'Almer�a', 'C/ Neptuno', NULL, '1999/05/24', 'H', 'alumno','123456');
INSERT INTO persona VALUES ('79503962T', 'Cristina', 'Lemke', 'Rutherford', 'Almer�a', 'C/ Saturno', '669162534', '1977/08/21', 'M', 'profesor','123456');
INSERT INTO persona VALUES ('82842571K', 'Ram�n', 'Herzog', 'Tremblay', 'Almer�a', 'C/ Urano', '626351429', '1996/11/21', 'H', 'alumno','123456');
INSERT INTO persona VALUES ('61142000L', 'Esther', 'Spencer', 'Lakin', 'Almer�a', 'C/ Plut�n', NULL, '1977/05/19', 'M', 'profesor','123456');
INSERT INTO persona VALUES ('46900725E', 'Daniel', 'Herman', 'Pacocha', 'Almer�a', 'C/ Andarax', '679837625', '1997/04/26', 'H', 'alumno','123456');
INSERT INTO persona VALUES ('85366986W', 'Carmen', 'Streich', 'Hirthe', 'Almer�a', 'C/ Almanzora', NULL, '1971-04-29', 'M', 'profesor','123456');
INSERT INTO persona VALUES ('73571384L', 'Alfredo', 'Stiedemann', 'Morissette', 'Almer�a', 'C/ Guadalquivir', '950896725', '1980/02/01', 'H', 'profesor','123456');
INSERT INTO persona VALUES ('82937751G', 'Manolo', 'Hamill', 'Kozey', 'Almer�a', 'C/ Duero', '950263514', '1977/01/02', 'H', 'profesor','123456');
INSERT INTO persona VALUES ('80502866Z', 'Alejandro', 'Kohler', 'Schoen', 'Almer�a', 'C/ Tajo', '668726354', '1980/03/14', 'H', 'profesor','123456');
INSERT INTO persona VALUES ('10485008K', 'Antonio', 'Fahey', 'Considine', 'Almer�a', 'C/ Sierra de los Filabres', NULL, '1982/03/18', 'H', 'profesor','123456');
INSERT INTO persona VALUES ('85869555K', 'Guillermo', 'Ruecker', 'Upton', 'Almer�a', 'C/ Sierra de G�dor', NULL, '1973/05/05', 'H', 'profesor','123456');
INSERT INTO persona VALUES ('04326833G', 'Micaela', 'Monahan', 'Murray', 'Almer�a', 'C/ Veleta', '662765413', '1976/02/25', 'H', 'profesor','123456');
INSERT INTO persona VALUES ('11578526G', 'Inma', 'Lakin', 'Yundt', 'Almer�a', 'C/ Picos de Europa', '678652431', '1998/09/01', 'M', 'alumno','123456');
INSERT INTO persona VALUES ('79221403L', 'Francesca', 'Schowalter', 'Muller', 'Almer�a', 'C/ Quinto pino', NULL, '1980/10/31', 'H', 'profesor','123456');
INSERT INTO persona VALUES ('79089577Y', 'Juan', 'Guti�rrez', 'L�pez', 'Almer�a', 'C/ Los pinos', '678652431', '1998/01/01', 'H', 'alumno','123456');
INSERT INTO persona VALUES ('41491230N', 'Antonio', 'Dom�nguez', 'Guerrero', 'Almer�a', 'C/ Cabo de Gata', '626652498', '1999/02/11', 'H', 'alumno','123456');
INSERT INTO persona VALUES ('64753215G', 'Irene', 'Hern�ndez', 'Mart�nez', 'Almer�a', 'C/ Zapillo', '628452384', '1996/03/12', 'M', 'alumno','123456');
INSERT INTO persona VALUES ('85135690V', 'Sonia', 'Gea', 'Ruiz', 'Almer�a', 'C/ Mercurio', '678812017', '1995/04/13', 'M', 'alumno','123456');
GO 
/* Profesor */
INSERT INTO profesor VALUES (3, 1);
INSERT INTO profesor VALUES (5, 2);
INSERT INTO profesor VALUES (8, 3);
INSERT INTO profesor VALUES (10, 4);
INSERT INTO profesor VALUES (12, 4);
INSERT INTO profesor VALUES (13, 6);
INSERT INTO profesor VALUES (14, 1);
INSERT INTO profesor VALUES (15, 2);
INSERT INTO profesor VALUES (16, 3);
INSERT INTO profesor VALUES (17, 4);
INSERT INTO profesor VALUES (18, 5);
INSERT INTO profesor VALUES (20, 6);
GO 
 /* Grado */
INSERT INTO grado VALUES ('Grado en Ingenier�a Agr�cola (Plan 2015)');
INSERT INTO grado VALUES ('Grado en Ingenier�a El�ctrica (Plan 2014)');
INSERT INTO grado VALUES ('Grado en Ingenier�a Electr�nica Industrial (Plan 2010)');
INSERT INTO grado VALUES ('Grado en Ingenier�a Inform�tica (Plan 2015)');
INSERT INTO grado VALUES ('Grado en Ingenier�a Mec�nica (Plan 2010)');
INSERT INTO grado VALUES ('Grado en Ingenier�a Qu�mica Industrial (Plan 2010)');
INSERT INTO grado VALUES ('Grado en Biotecnolog�a (Plan 2015)');
INSERT INTO grado VALUES ('Grado en Ciencias Ambientales (Plan 2009)');
INSERT INTO grado VALUES ('Grado en Matem�ticas (Plan 2010)');
INSERT INTO grado VALUES ('Grado en Qu�mica (Plan 2009)');
GO 
/* Asignatura */
INSERT INTO asignatura VALUES ('�lgegra lineal y matem�tica discreta', 6, 'b�sica', 1, 1, 3, 4);
INSERT INTO asignatura VALUES ('C�lculo', 6, 'b�sica', 1, 1, 14, 4);
INSERT INTO asignatura VALUES ('F�sica para inform�tica', 6, 'b�sica', 1, 1, 3, 4);
INSERT INTO asignatura VALUES ('Introducci�n a la programaci�n', 6, 'b�sica', 1, 1, 14, 4);
INSERT INTO asignatura VALUES ('Organizaci�n y gesti�n de empresas', 6, 'b�sica', 1, 1, 3, 4);
INSERT INTO asignatura VALUES ('Estad�stica', 6, 'b�sica', 1, 2, 14, 4);
INSERT INTO asignatura VALUES ('Estructura y tecnolog�a de computadores', 6, 'b�sica', 1, 2, 3, 4);
INSERT INTO asignatura VALUES ('Fundamentos de electr�nica', 6, 'b�sica', 1, 2, 14, 4);
INSERT INTO asignatura VALUES ('L�gica y algor�tmica', 6, 'b�sica', 1, 2, 3, 4);
INSERT INTO asignatura VALUES ('Metodolog�a de la programaci�n', 6, 'b�sica', 1, 2, 14, 4);
INSERT INTO asignatura VALUES ('Arquitectura de Computadores', 6, 'b�sica', 2, 1, 3, 4);
INSERT INTO asignatura VALUES ('Estructura de Datos y Algoritmos I', 6, 'obligatoria', 2, 1, 3, 4);
INSERT INTO asignatura VALUES ('Ingenier�a del Software', 6, 'obligatoria', 2, 1, 14, 4);
INSERT INTO asignatura VALUES ('Sistemas Inteligentes', 6, 'obligatoria', 2, 1, 3, 4);
INSERT INTO asignatura VALUES ('Sistemas Operativos', 6, 'obligatoria', 2, 1, 14, 4);
INSERT INTO asignatura VALUES ('Bases de Datos', 6, 'b�sica', 2, 2, 14, 4);
INSERT INTO asignatura VALUES ('Estructura de Datos y Algoritmos II', 6, 'obligatoria', 2, 2, 14, 4);
INSERT INTO asignatura VALUES ('Fundamentos de Redes de Computadores', 6 ,'obligatoria', 2, 2, 3, 4);
INSERT INTO asignatura VALUES ('Planificaci�n y Gesti�n de Proyectos Inform�ticos', 6, 'obligatoria', 2, 2, 3, 4);
INSERT INTO asignatura VALUES ('Programaci�n de Servicios Software', 6, 'obligatoria', 2, 2, 14, 4);
INSERT INTO asignatura VALUES ('Desarrollo de interfaces de usuario', 6, 'obligatoria', 3, 1, 14, 4);
INSERT INTO asignatura VALUES ('Ingenier�a de Requisitos', 6, 'optativa', 3, 1, NULL, 4);
INSERT INTO asignatura VALUES ('Integraci�n de las Tecnolog�as de la Informaci�n en las Organizaciones', 6, 'optativa', 3, 1, NULL, 4);
INSERT INTO asignatura VALUES ('Modelado y Dise�o del Software 1', 6, 'optativa', 3, 1, NULL, 4);
INSERT INTO asignatura VALUES ('Multiprocesadores', 6, 'optativa', 3, 1, NULL, 4);
INSERT INTO asignatura VALUES ('Seguridad y cumplimiento normativo', 6, 'optativa', 3, 1, NULL, 4);
INSERT INTO asignatura VALUES ('Sistema de Informaci�n para las Organizaciones', 6, 'optativa', 3, 1, NULL, 4); 
INSERT INTO asignatura VALUES ('Tecnolog�as web', 6, 'optativa', 3, 1, NULL, 4);
INSERT INTO asignatura VALUES ('Teor�a de c�digos y criptograf�a', 6, 'optativa', 3, 1, NULL, 4);
INSERT INTO asignatura VALUES ('Administraci�n de bases de datos', 6, 'optativa', 3, 2, NULL, 4);
INSERT INTO asignatura VALUES ('Herramientas y M�todos de Ingenier�a del Software', 6, 'optativa', 3, 2, NULL, 4);
INSERT INTO asignatura VALUES ('Inform�tica industrial y rob�tica', 6, 'optativa', 3, 2, NULL, 4);
INSERT INTO asignatura VALUES ('Ingenier�a de Sistemas de Informaci�n', 6, 'optativa', 3, 2, NULL, 4);
INSERT INTO asignatura VALUES ('Modelado y Dise�o del Software 2', 6, 'optativa', 3, 2, NULL, 4);
INSERT INTO asignatura VALUES ('Negocio Electr�nico', 6, 'optativa', 3, 2, NULL, 4);
INSERT INTO asignatura VALUES ('Perif�ricos e interfaces', 6, 'optativa', 3, 2, NULL, 4);
INSERT INTO asignatura VALUES ('Sistemas de tiempo real', 6, 'optativa', 3, 2, NULL, 4);
INSERT INTO asignatura VALUES ('Tecnolog�as de acceso a red', 6, 'optativa', 3, 2, NULL, 4);
INSERT INTO asignatura VALUES ('Tratamiento digital de im�genes', 6, 'optativa', 3, 2, NULL, 4);
INSERT INTO asignatura VALUES ('Administraci�n de redes y sistemas operativos', 6, 'optativa', 4, 1, NULL, 4);
INSERT INTO asignatura VALUES ('Almacenes de Datos', 6, 'optativa', 4, 1, NULL, 4);
INSERT INTO asignatura VALUES ('Fiabilidad y Gesti�n de Riesgos', 6, 'optativa', 4, 1, NULL, 4);
INSERT INTO asignatura VALUES ('L�neas de Productos Software', 6, 'optativa', 4, 1, NULL, 4);
INSERT INTO asignatura VALUES ('Procesos de Ingenier�a del Software 1', 6, 'optativa', 4, 1, NULL, 4);
INSERT INTO asignatura VALUES ('Tecnolog�as multimedia', 6, 'optativa', 4, 1, NULL, 4);
INSERT INTO asignatura VALUES ('An�lisis y planificaci�n de las TI', 6, 'optativa', 4, 2, NULL, 4);
INSERT INTO asignatura VALUES ('Desarrollo R�pido de Aplicaciones', 6, 'optativa', 4, 2, NULL, 4);
INSERT INTO asignatura VALUES ('Gesti�n de la Calidad y de la Innovaci�n Tecnol�gica', 6, 'optativa', 4, 2, NULL, 4);
INSERT INTO asignatura VALUES ('Inteligencia del Negocio', 6, 'optativa', 4, 2, NULL, 4);
INSERT INTO asignatura VALUES ('Procesos de Ingenier�a del Software 2', 6, 'optativa', 4, 2, NULL, 4);
INSERT INTO asignatura VALUES ('Seguridad Inform�tica', 6, 'optativa', 4, 2, NULL, 4);
INSERT INTO asignatura VALUES ('Biologia celular', 6, 'b�sica', 1, 1, NULL, 7);
INSERT INTO asignatura VALUES ('F�sica', 6, 'b�sica', 1, 1, NULL, 7);
INSERT INTO asignatura VALUES ('Matem�ticas I', 6, 'b�sica', 1, 1, NULL, 7);
INSERT INTO asignatura VALUES ('Qu�mica general', 6, 'b�sica', 1, 1, NULL, 7);
INSERT INTO asignatura VALUES ('Qu�mica org�nica', 6, 'b�sica', 1, 1, NULL, 7);
INSERT INTO asignatura VALUES ('Biolog�a vegetal y animal', 6, 'b�sica', 1, 2, NULL, 7);
INSERT INTO asignatura VALUES ('Bioqu�mica', 6, 'b�sica', 1, 2, NULL, 7);
INSERT INTO asignatura VALUES ('Gen�tica', 6, 'b�sica', 1, 2, NULL, 7);
INSERT INTO asignatura VALUES ('Matem�ticas II', 6, 'b�sica', 1, 2, NULL, 7);
INSERT INTO asignatura VALUES ('Microbiolog�a', 6, 'b�sica', 1, 2, NULL, 7);
INSERT INTO asignatura VALUES ('Bot�nica agr�cola', 6, 'obligatoria', 2, 1, NULL, 7);
INSERT INTO asignatura VALUES ('Fisiolog�a vegetal', 6, 'obligatoria', 2, 1, NULL, 7);
INSERT INTO asignatura VALUES ('Gen�tica molecular', 6, 'obligatoria', 2, 1, NULL, 7);
INSERT INTO asignatura VALUES ('Ingenier�a bioqu�mica', 6, 'obligatoria', 2, 1, NULL, 7);
INSERT INTO asignatura VALUES ('Termodin�mica y cin�tica qu�mica aplicada', 6, 'obligatoria', 2, 1, NULL, 7);
INSERT INTO asignatura VALUES ('Biorreactores', 6, 'obligatoria', 2, 2, NULL, 7);
INSERT INTO asignatura VALUES ('Biotecnolog�a microbiana', 6, 'obligatoria', 2, 2, NULL, 7);
INSERT INTO asignatura VALUES ('Ingenier�a gen�tica', 6, 'obligatoria', 2, 2, NULL, 7);
INSERT INTO asignatura VALUES ('Inmunolog�a', 6, 'obligatoria', 2, 2, NULL, 7);
INSERT INTO asignatura VALUES ('Virolog�a', 6, 'obligatoria', 2, 2, NULL, 7);
INSERT INTO asignatura VALUES ('Bases moleculares del desarrollo vegetal', 4.5, 'obligatoria', 3, 1, NULL, 7);
INSERT INTO asignatura VALUES ('Fisiolog�a animal', 4.5, 'obligatoria', 3, 1, NULL, 7);
INSERT INTO asignatura VALUES ('Metabolismo y bios�ntesis de biomol�culas', 6, 'obligatoria', 3, 1, NULL, 7);
INSERT INTO asignatura VALUES ('Operaciones de separaci�n', 6, 'obligatoria', 3, 1, NULL, 7);
INSERT INTO asignatura VALUES ('Patolog�a molecular de plantas', 4.5, 'obligatoria', 3, 1, NULL, 7);
INSERT INTO asignatura VALUES ('T�cnicas instrumentales b�sicas', 4.5, 'obligatoria', 3, 1, NULL, 7);
INSERT INTO asignatura VALUES ('Bioinform�tica', 4.5, 'obligatoria', 3, 2, NULL, 7);
INSERT INTO asignatura VALUES ('Biotecnolog�a de los productos hortofrut�culas', 4.5, 'obligatoria', 3, 2, NULL, 7);
INSERT INTO asignatura VALUES ('Biotecnolog�a vegetal', 6, 'obligatoria', 3, 2, NULL, 7);
INSERT INTO asignatura VALUES ('Gen�mica y prote�mica', 4.5, 'obligatoria', 3, 2, NULL, 7);
INSERT INTO asignatura VALUES ('Procesos biotecnol�gicos', 6, 'obligatoria', 3, 2, NULL, 7);
INSERT INTO asignatura VALUES ('T�cnicas instrumentales avanzadas', 4.5, 'obligatoria', 3, 2, NULL, 7);
GO
/* Curso escolar */
INSERT INTO curso_escolar VALUES (2021, 2022);
INSERT INTO curso_escolar VALUES (2022, 2023);
INSERT INTO curso_escolar VALUES (2023, 2024);
INSERT INTO curso_escolar VALUES (2024, 2025);
INSERT INTO curso_escolar VALUES (2025, 2026);
GO
/* Alumno se matricula en asignatura */
INSERT INTO alumno_se_matricula_asignatura VALUES (1, 1, 1);
INSERT INTO alumno_se_matricula_asignatura VALUES (1, 2, 1);
INSERT INTO alumno_se_matricula_asignatura VALUES (1, 3, 1);
INSERT INTO alumno_se_matricula_asignatura VALUES (2, 1, 1);
INSERT INTO alumno_se_matricula_asignatura VALUES (2, 2, 1);
INSERT INTO alumno_se_matricula_asignatura VALUES (2, 3, 1);
INSERT INTO alumno_se_matricula_asignatura VALUES (4, 1, 1);
INSERT INTO alumno_se_matricula_asignatura VALUES (4, 2, 1);
INSERT INTO alumno_se_matricula_asignatura VALUES (4, 3, 1);
INSERT INTO alumno_se_matricula_asignatura VALUES (24, 1, 5);
INSERT INTO alumno_se_matricula_asignatura VALUES (24, 2, 5);
INSERT INTO alumno_se_matricula_asignatura VALUES (24, 3, 5);
INSERT INTO alumno_se_matricula_asignatura VALUES (24, 4, 5);
INSERT INTO alumno_se_matricula_asignatura VALUES (24, 5, 5);
INSERT INTO alumno_se_matricula_asignatura VALUES (24, 6, 5);
INSERT INTO alumno_se_matricula_asignatura VALUES (24, 7, 5);
INSERT INTO alumno_se_matricula_asignatura VALUES (24, 8, 5);
INSERT INTO alumno_se_matricula_asignatura VALUES (24, 9, 5);
INSERT INTO alumno_se_matricula_asignatura VALUES (24, 10, 5);
INSERT INTO alumno_se_matricula_asignatura VALUES (23, 1, 5);
INSERT INTO alumno_se_matricula_asignatura VALUES (23, 2, 5);
INSERT INTO alumno_se_matricula_asignatura VALUES (23, 3, 5);
INSERT INTO alumno_se_matricula_asignatura VALUES (23, 4, 5);
INSERT INTO alumno_se_matricula_asignatura VALUES (23, 5, 5);
INSERT INTO alumno_se_matricula_asignatura VALUES (23, 6, 5);
INSERT INTO alumno_se_matricula_asignatura VALUES (23, 7, 5);
INSERT INTO alumno_se_matricula_asignatura VALUES (23, 8, 5);
INSERT INTO alumno_se_matricula_asignatura VALUES (23, 9, 5);
INSERT INTO alumno_se_matricula_asignatura VALUES (23, 10, 5);
INSERT INTO alumno_se_matricula_asignatura VALUES (19, 1, 5);
INSERT INTO alumno_se_matricula_asignatura VALUES (19, 2, 5);
INSERT INTO alumno_se_matricula_asignatura VALUES (19, 3, 5);
INSERT INTO alumno_se_matricula_asignatura VALUES (19, 4, 5);
INSERT INTO alumno_se_matricula_asignatura VALUES (19, 5, 5);
INSERT INTO alumno_se_matricula_asignatura VALUES (19, 6, 5);
INSERT INTO alumno_se_matricula_asignatura VALUES (19, 7, 5);
INSERT INTO alumno_se_matricula_asignatura VALUES (19, 8, 5);
INSERT INTO alumno_se_matricula_asignatura VALUES (19, 9, 5);
INSERT INTO alumno_se_matricula_asignatura VALUES (19, 10, 5);
