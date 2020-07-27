/**
 * Write a stack using your preferred instantiation pattern. Implement a min function
 * that returns the minimum value of all the elements in the stack in constant time.stack.  

 * All of the functions in the Stack should run in constant time!
 *
 * var example = new Stack()
 *  example.push(4)
 *  example.push(3)
 *  example.min() === 3
 *  example.push(3)
 *  example.push(2)
 *  example.push(2)
 *  example.min() === 2
 */

/**
 * Stack Class
 */
var Stack = function () {
  var storage = {};
  var index = 0;
  var minValueStorage = [];

  // add an item to the top of the stack
  this.push = function (value) {
    if (
      !minValueStorage.length ||
      value <= minValueStorage[minValueStorage.length - 1]
    ) {
      minValueStorage.push(value);
    }
    storage[index] = value;
    index++;
  };

  // remove an item from the top of the stack
  this.pop = function () {
    if (storage.size()) {
      index--;
      var takenOut = storage[index];
      if (takenOut === minValueStorage[minValueStorage.length - 1]) {
        minValueStorage.pop();
      }
      delete storage[index];
      return takenOut;
    }
  };

  // return the number of items in the stack
  this.size = function () {
    return index;
  };

  // return the minimum value in the stack
  this.min = function () {
    return minValueStorage[minValueStorage.length - 1];
  };
};
