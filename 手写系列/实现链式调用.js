/**
 * 实现一个EatMan
 * 说明：实现一个EatMan，EatMan可以有以下一些行为
 * 示例：
 *  1. EatMan(“Hank”)输出:
 *   Hi! This is Hank!
 *  2. EatMan(“Hank”).eat(“dinner”).eat(“supper”)输出
 *   Hi This is Hank!
 *   Eat dinner~
 *   Eat supper~
 *  3. EatMan(“Hank”).eat('dinner').eatFirst(“lunch”)输出
 *   Eat lunch~
 *   Hi This is Hank!
 *   Eat supper~
 *  4. EatMan(“Hank”).eat('dinner').eatFirst(“lunch”).eatFirst("breakfast")输出
 *   Eat breakfast~
 *   Eat lunch~
 *   Hi This is Hank!
 *   Eat supper~
 */

function EatMan(name) {
    return new _eatman(name);
}

function _eatman(name) {
    this.arr = [];
    this.arr.push({
        type: 'EatMan', name: name,
    });

    this.eat = (name) => {
        this.arr.push({
            type: 'eat', name: name,
        });
        this.next();
        return this;
    };

    this.eatFirst = (name) => {
        this.arr.unshift({
            type: 'eatFirst', name: name,
        });
        this.next();
        return this;
    };

    this.next = () => {
        if (this.timeout) {
            clearTimeout(this.timeout);
        }
        this.timeout = setTimeout(() => {
            this.arr.forEach((a) => {
                switch (a.type) {
                    case 'EatMan':
                        console.log(`Hi! This is ${a.name}!`);
                        break;

                    default:
                        console.log(`Eat ${a.name}~`);
                        break;
                }
            });
        }, 100);
    };
    return this;
}

EatMan('Hank').eat('dinner').eatFirst('lunch').eatFirst('breakfast')