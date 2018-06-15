var recipes = {};

Function updateObjectWithKeyAndValue(object, key, value) {
  return recipes.assign({}, object, { [key]: value })
}