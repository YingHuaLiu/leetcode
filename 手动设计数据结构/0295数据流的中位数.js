const { PriorityQueue } = require('@datastructures-js/priority-queue');

class MedianFinder {
  constructor() {
    /**
     * 维护两个优先队列，l表示前一半，r表示后一半，并规定l的size等于r的size，或者等于r的size加一
     * l是大顶堆，r是小顶堆
     * 如果l和r的总size是偶数，那么这样两个堆顶的平均值是中位数
     * 如果l和r的总size是奇数，那么中位数是l的堆顶
     */
    this.l = new PriorityQueue((a, b) => b - a);
    this.r = new PriorityQueue((a, b) => a - b);
  }

  addNum(num) {
    let s1 = this.l.size(), s2 = this.r.size();
    /**
     * 分情况讨论
     * 1 l和r的size一样，那么总size是偶数或者是0
     *  如果总size为0，num加进l中
     *  如果num小于等于r的peek，加进l中
     *  如果num大于r的peek，那么就将r的堆顶dequeue到l，将num加进r
     * 2 l和r的size不一样（即l比r多一个）,那么num加进去要使得l和r的size一样
     *  如果num比l的堆顶小，那么就将l的堆顶dequeue到r，将num加进l
     *  如果num大于等于l的堆顶，那么就将num加进r
     */
    if(s1 === s2) {
      if(this.l.isEmpty() || num <= this.r.front()) {
        this.l.enqueue(num);
      } else {
        this.l.enqueue(this.r.dequeue());
        this.r.enqueue(num);
      }
    } else {
      if(num >= this.l.front()) {
        this.r.enqueue(num);
      } else {
        this.r.enqueue(this.l.dequeue());
        this.l.enqueue(num);
      }
    }
  }

  findMedian() {
    let s1 = this.l.size(), s2 = this.r.size();
    if(s1 === s2) {
      return (this.l.front() + this.r.front()) / 2;
    } else {
      return this.l.front();
    }
  }
}

let medianFinder = new MedianFinder();
medianFinder.addNum(-1);
medianFinder.addNum(-2);
medianFinder.addNum(-3);
medianFinder.addNum(-4);
medianFinder.addNum(-5);

console.log(medianFinder.findMedian());
