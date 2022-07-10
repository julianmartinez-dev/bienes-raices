import express from 'express'
import usuariosRoutes from './routes/usuarioRoutes.js';

//Crear la app
const app = express();

//Habilitar pug
app.set('view engine', 'pug')
app.set('views', './views')
app.use(express.static('public'))


app.use('/auth', usuariosRoutes)


//Definir el proyecto y arrancar el proyecto
const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})