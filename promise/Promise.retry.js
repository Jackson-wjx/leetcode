// https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/387
// 实现Promise.retry, 成功后resolve结果，失败后重试，尝试超过一定次数才真正的reject
Promise.retry = function (promiseFn, times = 3) {
  return new Promise(async (resolve, reject) => {
    while (times --) {
      try {
        var ret = await promiseFn();
        resolve(ret);
        console.log('ret', ret);
        break;
      } catch (error) {
        if (!times) {
          console.log('reject');
          reject(error);
        }
      }
    }
  })
}

function getProm() {
  const n = Math.random();
  console.log('n:', n)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      n > 0.9 ? resolve(n) : reject(n);
    }, 1000);
  })
}

Promise.retry(getProm, 20);