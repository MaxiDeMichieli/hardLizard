const fs = require('fs');

let masVotadas = {
    db: './data/movies.json',
    titulo: 'Más votadas.', 
    leerJSON: ()=>{
        let moviesJSON = fs.readFileSync(masVotadas.db, 'utf-8');
        let movies = JSON.parse(moviesJSON);
        return movies
    },
    listarPelis: ()=>{
        let mayorSiete = [];
        masVotadas.leerJSON().movies.forEach((pelicula)=>{
            if(pelicula.vote_average >= 7){
                mayorSiete.push({title: pelicula.title, vote_average: pelicula.vote_average, overview: pelicula.overview})
            }
        });
        mayorSiete.sort((a,b)=> b.vote_average - a.vote_average)
        return mayorSiete;
    },
    cantidad: ()=>{
        return masVotadas.listarPelis().length;
    },
    ratingPromedio: ()=>{
        let ratings = masVotadas.listarPelis().map((pelicula)=>{
            return pelicula.vote_average;
        });
        let sumaRatings = ratings.reduce((acum, rating)=>{
            return acum + rating;
        });
        let promedioRating = sumaRatings / masVotadas.cantidad();
        let promedioRedondo = Math.round(promedioRating * 100) / 100;
        return promedioRedondo;
    }
};

module.exports = masVotadas;