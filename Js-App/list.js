









const varietyList = (variety) => {

    for (const currentvarietyObject of variety) {
        const varietyHTML = varietyConverter(currentvarietyObject)
        const varietyDivElement = document.querySelector(".variety_body")
        varietyDivElement.innerHTML += varietyHTML
    }
}

