# Chambalancer

Chambalancer es una plataforma web para la publicación y gestión de servicios. Los usuarios pueden registrarse, iniciar sesión, publicar servicios y ver los servicios publicados por otros usuarios.

## Instrucciones de Instalación y Ejecución

### Prerrequisitos

- Node.js (versión 14 o superior)
- npm (versión 6 o superior)
- MongoDB (instalado y en ejecución)

### Instalación

1. Clona este repositorio en tu máquina local:
    ```bash
    git clone https://github.com/tu-usuario/chambalancer.git
    cd chambalancer
    cd frontend
    ```

2. Instala las dependencias del proyecto:
    ```bash
    npm install
    ```

### Configuración del Backend

1. Navega al directorio del backend:
    ```bash
    cd backend
    ```

2. Inicia el servidor backend:
    ```bash
    npm run dev
    ```

### Configuración del Frontend

1. Navega al directorio del frontend:
    ```bash
    cd frontend
    ```

2. Inicia el servidor frontend:
    ```bash
    npm run dev
    ```

### Ejecución

1. Abre tu navegador y navega a `http://localhost:5173` para acceder a la aplicación.

## Descripción del Proyecto

### Estructura del Proyecto

La estructura del proyecto es la siguiente:

```plaintext
chambalancer/
│
├── backend/
│   ├── models/
│   ├── index.js
│   └── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── views/
│   │   ├── icons/
│   │   ├── App.tsx
│   │   ├── index.tsx
│   │   └── styles/
│   │       └── global.css
│   ├── package.json
│   └── vite.config.ts
│
└── README.md

## Uso del Proyecto
Login: Los usuarios pueden iniciar sesión con su correo electrónico y contraseña.
![image](https://github.com/FabianVaz/Chambalancer/assets/99071781/ddd2c923-3f11-4bbf-a71b-0f493740ae03)
![image](https://github.com/FabianVaz/Chambalancer/assets/99071781/a1da0e62-d110-43db-89fd-69c3080ae543)

Registro: Los nuevos usuarios pueden registrarse proporcionando su nombre, apellido, correo electrónico, número de teléfono y una imagen de perfil (aún en desarrollo).
![image](https://github.com/FabianVaz/Chambalancer/assets/99071781/76257f3c-8370-4493-a84e-852a9725f5d1)
Para regresar a la página de Login sólo que hay que presionar el botón de "Regresar"
Así luce la parte de registro en la base de datos:
![image](https://github.com/FabianVaz/Chambalancer/assets/99071781/e922e37a-fa4a-48f7-913b-379525101633)
con estos perfiles se pueden ingresar de momento a la plataforma (de necesitar uno sólo agréguelo en la opción de registro).

Publicación de Servicios: Los usuarios pueden publicar nuevos servicios con detalles como el nombre del servicio, descripción, precio y una opción de agregar imagen que sigue en desarrollo.
![image](https://github.com/FabianVaz/Chambalancer/assets/99071781/387e6c7c-4361-4cad-9ff0-3f9c361daef1)
Así luce la parte de servicios en la base de datos:
![image](https://github.com/FabianVaz/Chambalancer/assets/99071781/e4a539a8-de3d-47b0-abff-6507ed1811af)

Visualización de Servicios: Los usuarios pueden ver todos los servicios publicados por ellos y por otros usuarios.
![image](https://github.com/FabianVaz/Chambalancer/assets/99071781/e175c5fa-5262-429d-9c99-e691c59234c5)
Adicional si clickeas en About o Contact te redireccionará a las páginas.
![image](https://github.com/FabianVaz/Chambalancer/assets/99071781/6c831ead-7dcf-439f-940c-913382c8f9e6)
![image](https://github.com/FabianVaz/Chambalancer/assets/99071781/e14bcd6b-157d-4850-bdad-1459e4be0a5b)
![image](https://github.com/FabianVaz/Chambalancer/assets/99071781/bdd8107d-9379-4409-8d13-799ff3a0979a)
Y por último para regresar al login sólo hay que seleccionar la opción de cerrar sesión en la barra de navegación.
![image](https://github.com/FabianVaz/Chambalancer/assets/99071781/e2ed361d-add4-4cb8-8940-b81282286c19)

## Descripción de las Pruebas y Cómo Ejecutarlas
Pruebas del Frontend
Para ejecutar las pruebas del frontend:
1.- Asegúrate de estar en el directorio frontend.
2.- Ejecuta las pruebas con el siguiente comando:

    ```bash
    npm run test
    ```

