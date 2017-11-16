'use strict'

function future() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("hello from async!")
        }, 2000)
    })
}

async function sayFutureHello() {
    return await future();
}

sayFutureHello().then(data => {
    console.log(data);
});