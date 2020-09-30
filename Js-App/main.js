const url = "https://localhost:5001/api/beanvariety/";


let postObject = {}
const button = document.querySelector("#run-button");
button.addEventListener("click", () => {
    getAllBeanVarieties()
        .then(beanVarieties => {
            varietyList(beanVarieties)
        })
});

function getAllBeanVarieties() {
    return fetch(url).then(resp => resp.json());
}


const buttonAdd = document.querySelector("#save-button");
buttonAdd.addEventListener("click", () => {
    addBeanVariety()

});

function addBeanVariety() {
    postObject.Name = document.querySelector(".varietyName").value
    postObject.Region = document.querySelector(".varietyRegion").value
    postObject.Notes = document.querySelector(".varietyNotes").value

    return fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(postObject)
    })
}