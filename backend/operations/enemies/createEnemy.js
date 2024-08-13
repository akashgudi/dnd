const createEnemy = async (modelObject) => {
  await modelObject.save();
};
module.exports = { createEnemy };
