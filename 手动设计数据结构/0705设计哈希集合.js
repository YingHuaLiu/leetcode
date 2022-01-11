var MyHashSet = function () {
  this.BASE = 769;
  this.data = new Array(this.BASE).fill(0).map(() => []);
};

MyHashSet.prototype.add = function (key) {
  let hash = key % this.BASE;
  for (let item of this.data[hash]) {
    if(item === key) {
      return;
    }
  }
  this.data[hash].push(key);
};

MyHashSet.prototype.remove = function (key) {
  let hash = key % this.BASE;
  let set = this.data[hash];
  for (let i = 0; i < set.length; i++) {
    if(set[i] === key) {
      set.splice(i, 1);
      return;
    }
  }
};

MyHashSet.prototype.contains = function (key) {
  let hash = key % this.BASE;
  for (let item of this.data[hash]) {
    if(item === key) {
      return true;
    }
  }
  return false;
};
