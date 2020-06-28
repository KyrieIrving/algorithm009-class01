async function foo() {
    console.log('foo');
}
async function bar() {
    console.log('bar start');
    await foo();
    // new Promise(fucntion (resolve) {
        // resolve(foo())
    // })
    console.log('bar end');
}
console.log('script start');
setTimeout(() => {
    console.log('setTimeout')
}, 0); // 会添加到延时消息队列中， 等消息队列的任务执行完，再将延时消息队列中任务添加到消息队列中
bar();
new Promise(function(resolve) {
    console.log('promise executor');
    resolve();
}).then(function() {
    console.log('promise then')
})
console.log('script end')
// console.log('script start');
// console.log('bar start');
// console.log('foo');
// console.log('promise executor');
// console.log('script end')
// console.log('promise then')
// console.log('bar end');
// console.log('setTimeout')