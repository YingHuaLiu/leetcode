export class PriorityQueue{
  constructor(arr){
    if (arr.length){
      this.tree = arr;
      return;
    }
    this.tree = [];
  }

  // 入队
  enqueue(val){
    this.tree.push(val);
  }

  // 出队
  dequeue(){
    let maxIndex = 0;
    for (let i = 1; i < this.tree.length; i++){
      if (this.tree[i] > this.tree[maxIndex]){
        maxIndex = i;
      }
    }
    this.tree.splice(maxIndex, 1);
  }

  // 取队首
  getFirst(){
    return this.tree[0];
  }
}