// https://leetcode-cn.com/problems/dui-lie-de-zui-da-zhi-lcof/solution/ru-he-jie-jue-o1-fu-za-du-de-api-she-ji-ti-by-z1m/
var MaxQueue = function () {
  this.queue = [];
  this.dequeue = [];
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function () {
  if(this.dequeue.length) {
    return this.dequeue[0];
  }
  return -1;
};

/**
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function (value) {
  this.queue.push(value);
  while (this.dequeue.length && this.dequeue[this.dequeue.length - 1] < value) {
    this.dequeue.pop();
  }
  this.dequeue.push(value);
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function () {
  if(this.queue.length) {
    let value = this.queue.shift();
    if(value === this.dequeue[0]) {
      this.dequeue.shift();
    }
    return value;
  }
  return -1;
};
