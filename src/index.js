const db = require('./config/firebaseConfig').firestore()
const { execSync } = require('child_process')
const fs = require('fs')
const base64 = require('base64-img')

sendPetsToFirebase()
function sendPetsToFirebase() {
    const consolidatedPets = require('../__examples-json/consolidated-pets.json')

    try {
        consolidatedPets.map(async pet => {
            await _insertPet(pet)
        })
    } catch(err) {
        console.warn('Erro ao enviar pets para o Firebase')
        
    }
}

async function getBase64ImageAndConsolidatePets() {
    try {
        const cats = require('../__examples-json/cats.json')
        const dogs = require('../__examples-json/dogs.json')
        const consolidatedPets = [ ...cats, ...dogs ]

        consolidatedPets.forEach(async pet => {
            if(pet.imgUrl) {
                _getBase64ImageV2(pet)
            }
        })

        await _sleep(10000)

        fs.appendFileSync(`${__dirname}/consolidated-pets.json`, JSON.stringify(consolidatedPets))
        console.log('Finalizado! \\o/')
        process.exit(0)        
    } catch (err) {
        console.warn(err.message)
    }
}

function _getBase64ImageV2(pet) {
    base64.requestBase64(pet.imgUrl, (err, res, body) => {
        if(err) {
            console.warn('Erro ao converter para BASE64')
            return
        }
        pet.img = body
    })
}

function _getBase64Image(pet) {
        const base64Image = execSync(`python3 scripts/tobase64mime.py ${pet.imgUrl}`)
        return base64Image.toString()
}

function _insertPet(animal) {
    try {
        return db.collection('animals').add(animal)
    } catch (err) {
        throw err.message
    }
}

function _sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
