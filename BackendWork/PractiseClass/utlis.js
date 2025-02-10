

const average = (a , b , c) => {
    return ((a + b + c)/3)
}

const averageSq = (average) => {
    return Math.sqrt(average)
}

module.exports = {average , averageSq}