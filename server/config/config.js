/////////////
// Puerto
//////////////

process.env.PORT = process.env.PORT || 3000;


//////////////
// Entorno
/////////////

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


//////////////
// Vencimiento del Token
/////////////
// 60 segundos
// 60 Minutos
// 24 horas
// 30 días

process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;



//////////////
// Seed del Autenticación
/////////////

process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';



/////////////
// Base de Datos
/////////////

let urlDB;

if (process.env.NODE_ENV === 'dev') {

    urlDB = 'mongodb://localhost:27017/cafe';
} else {

    urlDB = 'mongodb://cafe-user:Pujs2002@ds129762.mlab.com:29762/cafe';
}

process.env.URLDB = urlDB;