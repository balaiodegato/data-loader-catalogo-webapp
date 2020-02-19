const converter = require('csvtojson')
const db = require('./config/firebaseConfig').firestore()
const animals = require('../tests/animals.json')

const SHEET_PATH = 'C:\\Users\\Danie\\Desktop\\Gatos.csv'

async function main() {
    try {
        // const animals = await convertCsvToJSON(SHEET_PATH)

        getAnimals()

        // await insertAnimal(animals[0])
        // animals.map(async animal => {
        //     await insertAnimal(animal)
        // })
    } catch (err) {
        console.warn(err.message);
    }
}

main()

async function convertCsvToJSON(csvContent) {
    return converter().fromFile(csvContent)
}

function insertAnimal(animal) {
    try {
        return db.collection('animals').add(animal)
    } catch (err) {
        throw err.message
    }
}

async function getAnimals() {
    const animalsRef = db.collection('animals');
    animalsRef.get()
        .then(snapshot => {
            snapshot.forEach(doc => {
                console.log(doc.id, '=>', doc.data());
            });
        })
        .catch(err => {
            console.log('Error getting documents', err);
        });
}

function clearAllAnimals() {

}