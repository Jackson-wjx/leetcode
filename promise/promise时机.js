for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log('time', i)
  }, 0)
  new Promise((resolve, reject) => {
    console.log('p', i)
    resolve(i) // 将 i 作为 resolve 函数的参数传递
  }).then((i) => { // 接收 resolve 函数的参数 i
    console.log('p2', i)
  })
  console.log('f', i)
}