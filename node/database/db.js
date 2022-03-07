const { Sequelize } = require('sequelize');

const database = new Sequelize('peliculas','root','y1OKpX@Hz&R!',{
  host: 'localhost',
  dialect: 'mysql'
});

module.exports.database = database;

try {
  database.authenticate();
  console.log("Conectado");
} catch (error) {
  console.log("Algo esta mal, revisemos");
}


/*try{
  database.authenticate();
  console.log('Conectado');
}catch(error){
  console.log('Algo está mal, revisemos');
}*/