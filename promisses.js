/* Promisses */

function show() {
    setTimeout(() => {
        console.log('oi!')
    }, 2000);

    console.log('Até logo!')
}

//show()

const minhaPromise = new Promise((resolve, reject) => {
    let n = 9
    if(n>10) {
        resolve()
    }else {
        reject()
    }
})

minhaPromise
.then(result => console.log('resolveu'))
.catch(err => console.log('errou'))
.finally(() => console.log('finally!'))