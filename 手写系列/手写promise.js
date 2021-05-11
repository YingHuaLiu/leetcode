function Promise(executor) {
  this.promiseState = 'pending';
  this.promiseResult = null;
  this.callbacks = [];

  const resolve = (data) => {
    if(this.promiseState !== 'pending') {
      return;
    }
    this.promiseState = 'fulfilled';
    this.promiseResult = data;
    this.callbacks.forEach(item => {
      item.onResolved(this.promiseResult);
    });
  };

  const reject = (data) => {
    if(this.promiseState !== 'pending') {
      return;
    }
    this.promiseState = 'rejected';
    this.promiseResult = data;
    this.callbacks.forEach(item => {
      item.onRejected(this.promiseResult);
    });
  };

  try {
    executor(resolve, reject);
  } catch (e) {
    reject(e);
  }
}

Promise.prototype.then = function (onResolved, onRejected) {
  return new Promise((resolve, reject) => {
    function callback() {
      try {
        let result = onResolved(data);
        if(result instanceof Promise) {
          result.then(res => {
            resolve(res);
          }, err => {
            reject(err);
          });
        } else {
          resolve(result);
        }
      } catch (e) {
        reject(e);
      }
    }

    if(this.promiseState === 'fulfilled') {
      let result = onResolved(this.promiseResult);
      if(result instanceof Promise) {
        result.then(res => {
          resolve(res);
        }, err => {
          reject(err);
        });
      } else {
        resolve(result);
      }
    }
    if(this.promiseState === 'rejected') {
      let result = onRejected(this.promiseResult);
      if(result instanceof Promise) {
        result.then(res => {
          resolve(res);
        }, err => {
          reject(err);
        });
      } else {
        resolve(result);
      }
    }
    if(this.promiseState === 'pending') {
      this.callbacks.push({
        onResolved: function (data) {
          try {
            let result = onResolved(data);
            if(result instanceof Promise) {
              result.then(res => {
                resolve(res);
              }, err => {
                reject(err);
              });
            } else {
              resolve(result);
            }
          } catch (e) {
            reject(e);
          }
        },
        onRejected: function (data) {
          try {
            let result = onResolved(data);
            if(result instanceof Promise) {
              result.then(res => {
                resolve(res);
              }, err => {
                reject(err);
              });
            } else {
              resolve(result);
            }
          } catch (e) {
            reject(e);
          }
        }
      });
    }
  });
};

let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('s1');
  }, 1000);
  // resolve('s1');
});
const p2 = p1.then(res => {
  throw 'err1';
}, err => {
  return err;
});
console.log(p2);
