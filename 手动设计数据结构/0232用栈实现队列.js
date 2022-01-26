var MyQueue = function () {
  this.stack = [];
  this.help = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.stack.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if(!this.help.length) {
    while (this.stack.length) {
      this.help.push(this.stack.pop());
    }
  }
  return this.help.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  if(!this.help.length) {
    while (this.stack.length) {
      this.help.push(this.stack.pop());
    }
  }
  return this.help[this.help.length - 1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return !this.stack.length && !this.help.length;
};
