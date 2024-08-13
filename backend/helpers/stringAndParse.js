const stringAndParse = (jsonObject) => {
  return JSON.parse(JSON.stringify(jsonObject));
};

module.exports = stringAndParse;
