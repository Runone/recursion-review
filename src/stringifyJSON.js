// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

//need to satisfy these below conditions
//case for null
//case for number
//case for boolean
//case for string
//case for array
//case for embedded array
//case for object
//case for object embedded array and object
//case for undefined
//case for functions

var stringifyJSON = function(obj) {
  let results = [];
  console.log(obj);
  //when obj is null
  if (obj === null) {
    return 'null';
  }

  //when obj is number or boolean
  if (typeof obj === 'number' || typeof obj === 'boolean') {
    return obj.toString();
  }

  //when obj is a string
  if (typeof obj === 'string') {
    return "\"" + obj + "\"" ; 
  }

  //when obj is an array
  if (Array.isArray(obj) && obj.length === 0) {
      results += '[]';
      return results
    }
      if (Array.isArray(obj) && obj.length > 0) {
      var newArray = [];
      obj.forEach(element => {
        newArray.push(stringifyJSON(element));
      });
      results += '[' + newArray.join(',') + ']'
      return results
    }  
  //when obj is an object
  for (let key in obj) {
      if (typeof obj[key] !== 'undefined' && typeof obj[key] !== 'function') {
    results.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
  }

  }
  var newResults = '{' + results.join() + '}';
  return newResults;

};
