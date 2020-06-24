const contacto = require('./contacto');
const enCartelera = require('./enCartelera');
const homePage = require('./homePage');
const masVotadas = require('./masVotadas');
const preguntasFrecuentes = require('./preguntasFrecuentes');
const sucursales = require('./sucursales');

let index = {
    homePage: (res)=>{
        res.write(`${homePage.titulo}\n\n\nHay ${homePage.cantidad()} películas:\n\n\n`);
        homePage.listarPelis().forEach((pelicula)=>{
            res.write(`-${pelicula}\n\n`);
        });
        res.write(homePage.piePagina);
        res.end()
    },
    enCartelera: (res)=>{
        res.write(`${enCartelera.titulo}\n\n\nHay ${enCartelera.cantidad()} películas:\n\n\n`);
        enCartelera.listarPelis().forEach((pelicula)=>{
            res.write(`- ${pelicula.title}\nReseña: ${pelicula.overview}\n\n`)
        });
        res.end();
    },
    masVotadas: (res)=>{
        res.write(`${masVotadas.titulo}\n\n\nHay ${masVotadas.cantidad()} películas con rating mayor a 7.\n\nEl rating promedio es de: ${masVotadas.ratingPromedio()}\n\n\n\nPelículas:\n\n\n`);
        masVotadas.listarPelis().forEach((pelicula)=>{
            res.write(`- ${pelicula.title}\nRating: ${pelicula.vote_average}\nReseña: ${pelicula.overview}\n\n`)
        });
        res.end();
    },
    contacto: (res)=>{
        res.write(`${contacto.titulo}\n\n\n${contacto.contenido}`);
        res.end();
    },
    sucursales: (res)=>{
        res.write(`${sucursales.titulo}\n\n\n\nTenemos ${sucursales.totalSalas()} salas disponibles:\n\n`);
        sucursales.listarSalas().forEach((sala)=>{
            res.write(`- ${sala.name}\nDirección: ${sala.address}\n${sala.description}\n\n`)
        })
        res.end();
    },
    preguntasFrecuentes: (res)=>{
        res.write(`${preguntasFrecuentes.titulo}\n\n\nTenemos ${preguntasFrecuentes.cantidad()} preguntas frecuentes:\n\n`);
        preguntasFrecuentes.listaFaqs().forEach((faq)=>{
            res.write(`- ${faq.faq_title}\n     ${faq.faq_answer}\n\n`)
        })
        res.end();
    },
    paginaIncorrecta: (res)=>{
        res.write('Ups... página no encontrada');
        res.end();
    }

};

module.exports = index;