//CRUD

let cats = ["Fluffy"]

exports.create = (req, res) => {
  const { name } = req.params
  //cats.push(req.params.name)

  cats.push(name)
  res.send(name)
}

exports.read = (req, res) => {
  // console.log(req.user)
  res.send(cats)
}

// Update a cat's name by adding an asterisk (*) to the end
exports.update = (req, res) => {
  const { index } = req.params // Index of the cat to update
  if (index >= 0 && index < cats.length) {
    cats[index] += "*"
    res.send(cats[index])
  } else {
    res.status(404).send("Cat not found")
  }
}

// Delete a cat by its index
exports.delete = (req, res) => {
  const { index } = req.params // Index of the cat to delete
  if (index >= 0 && index < cats.length) {
    const deletedCat = cats.splice(index, 1)
    res.send(deletedCat[0])
  } else {
    res.status(404).send("Cat not found")
  }
}
