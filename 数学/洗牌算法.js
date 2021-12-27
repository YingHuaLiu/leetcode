class FisherSolution {
    constructor(nums) {
        this.array = nums;
        // this.original = Object.assign([], nums);
    }

    // reset() {
    //   this.array = this.original;
    //   this.original = Object.assign([], this.array);
    // }

    shuffle() {
        for (let i = 0; i < this.array.length; i++) {
            // 注意是[i,array.length)的随机数
            const index = Math.floor(Math.random() * (this.array.length - i) + i);
            // 两两交换
            [this.array[i], this.array[index]] = [this.array[index], this.array[i]];
        }
        return this.array;
    }
}
