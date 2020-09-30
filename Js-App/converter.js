const varietyConverter = (varietyObject) => {
    const varietyHTMLRepresentation = `
      <option value="${varietyObject.name}">${varietyObject.name}</option>
   `

    return varietyHTMLRepresentation
}

