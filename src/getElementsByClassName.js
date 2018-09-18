// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  // your code here
//get the classes from document.body
//get the classnames from the function
//return he the classnames with recursive

var newResult = [];
var body = document.body;
var findElement = function (element) {
  
  if (!element.classList) {
    return 
  } 
  else {
  element.classList.forEach(function(name){
    if(name === className) {
      newResult.push(element);
    }
    
  })
  element.childNodes.forEach(function(child) {
    findElement(child);
  });
  }
}

findElement(body);

return newResult;
};
