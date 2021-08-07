Function.prototype.myCall = function (context, ...args) {
    // 如果context为null或者undefined,就默认指向window
    context = context || window;
    // 将调用myCall的函数挂载到对象上
    context.fn = this;
    // 执行并拿到返回结果
    let result = context.fn(...args);
    // 清除其属性
    delete context.fn;
    // 返回结果
    return result;
}

Function.prototype.myApply = function (context, args) {
    // 如果args不为undefined或者null,并且args不是数组，则报错
    if (args && !Array.isArray(args)) {
        throw('arguments is not an array')
    }
    // 如果args为undefined或者null,防止下面调用函数报args不是数组的错，将它赋为[]
    if (args === undefined || args === null) {
        args = []
    }
    context = context || window;
    context.fn = this;
    let result = context.fn(...args);
    delete context.fn;

    return result;
}

Function.prototype.myBind = function (context) {
    // bind的返回值是一个函数 这个函数可以通过new调用，也可以直接调用
    // 提取bind的参数,因为第一个是context对象 所以需要分割
    const args = [...arguments].slice(1);
    // 获取context,如果没有就指向为window
    context = context || window;
    // 用_this变量保存当前的函数（在当前作用域this指向的就是函数体本身）
    const _this = this;
    const result = function () {
        const otherArgs = [...arguments]
        // 如果是通过 new 调用的，绑定 this 为实例对象
        // 否则就是直接调用，那么我们需要为其绑定this
        return _this.apply(this instanceof result ? this : context, args.concat(otherArgs));
    }
    // 绑定原型链,实例就可以继承绑定函数的原型中的值
    result.prototype = Object.create(this.prototype);

    return result;
}

function test() {
}

const obj = { name: 'obj' }
test.myApply(obj, 1, 2, 3)