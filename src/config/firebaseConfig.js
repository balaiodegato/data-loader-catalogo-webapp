const admin = require('firebase-admin')
const serviceAccount = require('./serviceAccountKey.json');

const firebaseConfig = {
    apiKey: "AIzaSyCi4_CE3Wi4UtdRG-oPUHCPuCQCjYyJQS8",
    authDomain: "dataloadercatalogobalaiogato.firebaseapp.com",
    databaseURL: "https://dataloadercatalogobalaiogato.firebaseio.com",
    projectId: "dataloadercatalogobalaiogato",
    storageBucket: "dataloadercatalogobalaiogato.appspot.com",
    messagingSenderId: "40664839026",
    appId: "1:40664839026:web:340802d5a1e3a89ea023eb"
}

module.exports = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://dataloadercatalogobalaiogato.firebaseio.com"
});