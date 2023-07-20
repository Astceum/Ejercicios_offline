require('dotenv/config');
const mongoose = require('mongoose');

const MONGODB_URI =process.env.MONGO_URL

mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error de conexión:'));
db.once('open', () => {
  console.log('¡Conexión exitosa a la base de datos!');
});

module.exports = db;
   