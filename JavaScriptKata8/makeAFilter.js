// Implement the filter Method on a Prototype

Array.prototype.myFilter = function(callback) {
  const newArray = [];
  // Only change code below this line
    for(let [index, value] of this.entries()) {

      if(callback(value, index, this)) {
        newArray.push(value)
      }
    }
  // Only change code above this line
  return newArray;
};

Array.prototype.myFilter = function(callback) {
  const newArray = [];
  // Only change code below this line
    for(let item of this.entries()) {
      if(callback(item[1], item[0], this)) {
        newArray.push(item[1])
      }
    }
    console.log(newArray)
  // Only change code above this line
  return newArray;
};