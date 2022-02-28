const users =[
    "pepe argento",
    "moni",
    "lazaro gomes",
    "fatiga",
    "maria elena",
    "dardo",
]
const randomNumber = (length) => {
    return Math.floor(Math.random() * (length - 1))
}

function getWinnerAndOthers (){
    const randomNum = Math.floor(Math.random() * (users.length - 1))
    const winner = users[randomNum]
    const upcoming = users.filter((user) => user !== winner)

    return {winner,upcoming}
}
module.exports = {
    winner: getWinnerAndOthers,
    random: randomNumber
}