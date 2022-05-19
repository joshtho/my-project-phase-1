const searchBar = document.getElementById('myInput')
const submitBtn = document.querySelector('.submit')
submitBtn.addEventListener('submit', (event) => {
    event.preventDefault()
    fetchAllPlayers()
})

// Event Handlers 
// const firstFindMyPlayer (event) => {
//         event.preventDefault()
//         console.log(event)
//         fetch('https://www.balldontlie.io/api/v1/players')
//         .then(response => response.json())
//         .then(data => {
//             const searchString = event.target.value;
//             if(searchString == `${data.full_name && data.last_name}`) {
//                 return createCard(player)
//             }
//         })
//     }
// Fetch Functions
function fetchAllPlayers(event) {
    console.log(event)
    fetch('https://www.balldontlie.io/api/v1/players')
        .then(response => response.json())
        .then(data => console.log(data))
}
// function findMyPlayer(object) {
//     object.find(foundPlayer)
// }
// function foundPlayer(player) {
//     return player.
// }
// // Handler Functions 
// function UseNameToCreateCard() {
    
//         const searchString = event.target.value;
//         if(searchString == `${data.full_name && data.last_name}`) {
//             return createCard(player)
//         }
// }
// function createCard(player) {

//     let playerName = document.getElementById("get-player")
//     let div = document.createElement("div")
//     div.className = "card"
//     playerName.append(div)
    
//     const playerCard = `<h2>${player.first_name} ${player.last_name}</h2>
//     <p>
//     Position: ${player.position}
//     Team: ${player.team.full_name}
//     </p>`
    
//     div.innerHTML += playerCard
//     }
