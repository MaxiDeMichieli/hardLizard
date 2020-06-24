const fs = require('fs');

let homePage = {
    db: './data/movies.json',
    titulo: 'Bienvenido a DH Movies... ',
    leerJSON: ()=>{
        let moviesJSON = fs.readFileSync(homePage.db, 'utf-8');
        let movies = JSON.parse(moviesJSON);
        return movies;
    },
    cantidad: ()=>{
        return homePage.leerJSON().total_movies;
    },
    listarPelis: ()=>{
        let movies = homePage.leerJSON();
        let titleMovies = [];
        movies.movies.forEach((movie)=>{
            titleMovies.push(movie.title);
        });
        titleMovies.sort();
        return titleMovies;
    },
    piePagina: '\n\n\nRecordá que podés visitar las secciones:\n- En Cartelera\n- Más votadas\n- Sucursales\n- Contacto\n- Preguntas Frecuentes'
};

module.exports = homePage;