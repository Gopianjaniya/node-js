const generateCoupenCode = ()=>{
    return Math.round(1000+(Math.random(0,9))*1000)
}
module.exports = { generateCoupenCode };