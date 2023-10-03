const myPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => {
    //console.log('czas minal');
    if (Math.random()>0.5)
    resolve({name: 'maciek'})
else
reject('buuuuuu')
},1000)
})

console.log('1')

myPromise().then((value) => {
    console.log(value)
}).catch((reason) => {
    console.log(reason)
}).finally(() => {
     console.log('koniec')
})

//console.log(myPromise)
console.log('2')

const test = async () => {
    try {
        const myObject = await myPromise()
        console.log(myObject);
        console.log('test')
    } catch(e) {
        console.log(e)
    }     
}

test()

console.log('3')