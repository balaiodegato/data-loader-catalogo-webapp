
function getAnimalsOnTable() {
    const tableRef = document.getElementById('main-table')
    let contentFile = [];

    for (let i = 0, row; row = tableRef.rows[i]; i++) {
        try {
            const id = row.children[1].textContent

            // const tdWithImg = row.children[2]
            // const divImg = tdWithImg.children[0]
            // const img = divImg.children[0]
            // const imgUrl = img.getAttribute('src')

            const name = row.children[3].textContent
            const gender = row.children[4].textContent
            const rescue_date = row.children[5].textContent
            const adoption_date = row.children[6].textContent
            const where_is = row.children[7].textContent
            const when_born = row.children[8].textContent
            const castrated = row.children[9].textContent
            const test_result = row.children[10].textContent
            const behaviour_info = row.children[11].textContent
            const rescue_info = row.children[12].textContent
            const historic = row.children[13].textContent
            const adoption_requirements = row.children[14].textContent
            const status = row.children[15].textContent

            contentFile = [
                ...contentFile, 
                { 
                    id,
                    name,
                    gender,
                    rescue_date, 
                    adoption_date, 
                    where_is,
                    when_born,
                    castrated,
                    test_result,
                    behaviour_info,
                    rescue_info,
                    historic,
                    adoption_requirements,
                    status//,
                    //imgUrl
                }
            ]

            console.log(`Linha ${i}: ${nome} - ${imgPath}`)
        } catch (err) {
            console.log(`Linha ${i}: Não tem animal`)
        }
    }


    saveNameAndImage(contentFile)
}

function saveNameAndImage(contentFile) {
    console.log(JSON.stringify(contentFile));
}