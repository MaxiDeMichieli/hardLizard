const fs = require('fs');

let sucursales = {
    db: './data/theaters.json',
    titulo: 'Nuestras Salas.', 
    leerJSON: ()=>{
        let salasJSON = fs.readFileSync(sucursales.db, 'utf-8');
        let salas = JSON.parse(salasJSON);
        return salas;
    },
    totalSalas: ()=>{
        let cantidad = sucursales.leerJSON().total_theaters;
        return cantidad;
    },
    listarSalas: ()=>{
        let salas = sucursales.leerJSON().theaters.map((sala)=>{
            return {name: sala.name, address: sala.address, description: sala.description}
        })
        return salas;
    }
};

module.exports = sucursales;