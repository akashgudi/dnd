const createEnemy = async (modelObject) => {
    await modelObject.save()
    console.log("created enemy", modelObject)
}
module.exports = { createEnemy }