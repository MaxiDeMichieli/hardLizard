const fs = require('fs');

let preguntasFrecuentes = {
    db: './data/faqs.json',
    titulo: 'Preguntas Frecuentes.',
    leerJSON: ()=>{
        let faqsJSON = fs.readFileSync(preguntasFrecuentes.db, 'utf-8');
        let faqs = JSON.parse(faqsJSON);
        return faqs;
    },
    cantidad: ()=>{
        let cantidad = preguntasFrecuentes.leerJSON().total_faqs;
        return cantidad;
    },
    listaFaqs: ()=>{
        let lista = preguntasFrecuentes.leerJSON().faqs;
        return lista;
    }
};

module.exports = preguntasFrecuentes;