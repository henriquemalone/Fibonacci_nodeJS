'use strict'

const fibonacci = () => {
    let f = [0, 1]
    let ultimo = 0;

    while(ultimo < 230){
        ultimo = f[f.length - 1] + f[f.length-2]
        f.push(ultimo)
    }  

    return f
}

const isFibonnaci = (num) => {
    const f = fibonacci()
    const result = f.includes(num)

    return result
}

module.exports = {
    fibonacci,
    isFibonnaci
}
