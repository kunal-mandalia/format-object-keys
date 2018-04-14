/**
 * Get granular type of object
 * 
 * @param {*} object
 * @returns {String} the type of object, irrespective of how it was
 *  initialized
 */
const getType = object => Object.prototype.toString.call(object)

/**
 * Recursive function to iterate through generic data structures
 * and format object keys based on formatter function. Non objects
 * returned without changes
 * 
 * @param {*} Any data structure 
 * @param {Function} formatter function taking key as arg 
 * @returns {*} input object with formatted keys
 */
const formatObjectKeys = (object, formatter) => {
  const type = getType(object)
  if (type !== '[object Array]' && type !== '[object Object]') return object
  // array
  if (Array.isArray(object)) {
    return object.map(el => formatObjectKeys(el, formatter))
  }
  // hash
  return Object.keys(object)
    .reduce((acc, cur) => {
      acc[formatter(cur)] = formatObjectKeys(object[cur], formatter)
      return acc
    }, {})
}

module.exports = formatObjectKeys
