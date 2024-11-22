## Laburos Ya

Este proyecto es una página web que permite cargar y mostrar servicios desde una base de datos MySQL usando Node.js y Express. El frontend está desarrollado con HTML, CSS y JavaScript. El backend se encarga de obtener los servicios desde una base de datos MySQL y enviarlos al frontend.

## Tecnologías utilizadas

- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express
- Base de datos: MySQL (con PHPMyAdmin para gestionar la base de datos)
  
## Requisitos

- Tener **Node.js** y **npm** (Node Package Manager) instalados.
- Tener **MySQL** instalado en tu sistema y configurado (o XAMPP).
- Tener **PHPMyAdmin** para gestionar la base de datos.
- 
### Instalación

1. Clona el repositorio:

   Primero, clona este repositorio en tu máquina local:
   
   git clone https://github.com/eliann313/proyecto-pp2.git

   2. Instalar dependencias:
   npm install (instalará sql, cors y express)

  3. Base de datos:
     Abrir PHPMYADMIN en localhost y crear bdd "freelancer"
     Luego crear tablas:

     CREATE TABLE personas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombrePersona VARCHAR(255),
    telefono VARCHAR(15)
);

CREATE TABLE zonas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombreZona VARCHAR(255)
);

CREATE TABLE servicios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombreServicio VARCHAR(255),
    descripcion TEXT,
    precio DECIMAL(10, 2),
    zona_id INT,
    persona_id INT,
    FOREIGN KEY (zona_id) REFERENCES zonas(id),
    FOREIGN KEY (persona_id) REFERENCES personas(id)
);

4. Conectar bdd en el back-end:
    
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', 
    database: 'freelancer'
});

5. Ejecutar servidor:
   node app.js


   Docu:
  https://docs.google.com/document/d/1w6c0GbejxiWQ2gmvQzOBUqekQV9Uzr90yuSA8qkEh_8/edit?tab=t.0#heading=h.583uimbracp1
