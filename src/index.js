const db = require('./config/firebaseConfig').firestore()
const { execSync } = require('child_process')

const cats = require('../__examples-json/cats.json')
const dogs = require('../__examples-json/dogs.json')

main()
async function main() {
    try {
        cats.forEach(async cat => {
            await insertAnimal(cat)
        })

        dogs.forEach(async dog => {
            await insertAnimal(dog)
        })
    } catch (err) {
        console.warn(err.message);
    }
}

function getBase64Image(pet) {
    if(pet.imgUrl) {
        const base64Image = execSync(`python3 scripts/tobase64mime.py ${pet.imgUrl}`)
        return base64Image.toString()
    }
    return null
}

function insertAnimal(animal) {
    try {
        return db.collection('animals').add(animal)
    } catch (err) {
        throw err.message
    }
}
