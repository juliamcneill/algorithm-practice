// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// push(x) -- Push element x onto stack.
// pop() -- Removes the element on top of the stack.
// top() -- Get the top element.
// getMin() -- Retrieve the minimum element in the stack.

var MinStack = function () {
  this.stack = {};
  this.minStack = {};
  this.i = 0;
};

MinStack.prototype.push = function (x) {
  this.stack[this.i] = x;

  if (
    this.minStack[this.i - 1] === undefined ||
    x < this.minStack[this.i - 1]
  ) {
    this.minStack[this.i] = x;
  } else {
    this.minStack[this.i] = this.minStack[this.i - 1];
  }

  this.i++;
};

MinStack.prototype.pop = function () {
  this.i--;
  var takenOut = this.stack[this.i];
  delete this.stack[this.i];
  delete this.minStack[this.i];
  return takenOut;
};

MinStack.prototype.top = function () {
  return this.stack[this.i - 1];
};

MinStack.prototype.getMin = function () {
  return this.minStack[this.i - 1];
};
