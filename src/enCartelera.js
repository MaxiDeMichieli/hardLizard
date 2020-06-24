const fs = require('fs');

let enCartelera = {
    db: './data/movies.json',
    titulo: 'En Cartelera.',
    leerJSON: ()=>{
        let moviesJSON = fs.readFileSync(enCartelera.db, 'utf-8');
        let movies = JSON.parse(moviesJSON);
        return movies;
    },
    cantidad: ()=>{
        return enCartelera.leerJSON().total_movies;
    },
    listarPelis: ()=>{
        let movies = enCartelera.leerJSON().movies;
        let peliReseña = movies.map((movie)=>{
            return {title: movie.title, overview: movie.overview};
        });
        peliReseña.sort((a,b)=>{
            if(a.title > b.title){
                return 1;
            }else if(a.title < b.title){
                return -1;
            }else{
                return 0;
            }
        })
        return peliReseña;
    },
};

module.exports = enCartelera;