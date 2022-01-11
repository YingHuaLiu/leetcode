var MyHashMap = function () {
  this.BASE = 769;
  this.data = new Array(this.BASE).fill(0).map(() => []);
};

MyHashMap.prototype.put = function (key, value) {
  let hash = key % this.BASE;
  for (let item of this.data[hash]) {
    if(item[0] === key) {
      item[1] = value;
      return;
    }
  }
  this.data[hash].push([key, value]);
};
MyHashMap.prototype.get = function (key) {
  let hash = key % this.BASE;
  for (let item of this.data[hash]) {
    if(item[0] === key) {
      return item[1];
    }
  }
  return -1;
};
MyHashMap.prototype.remove = function (key) {
  let hash = key % this.BASE;
  let set = this.data[hash];
  for (let i = 0; i < set.length; i++) {
    if(set[i][0] === key) {
      set.splice(i, 1);
      return;
    }
  }
};
