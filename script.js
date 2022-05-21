const mainDiv = () => document.getElementById('main')
const searchBar = document.getElementById('myInput')
const submitBtn = document.querySelector('.container')

// Helpers
function resetMainDiv() {
    mainDiv().innerHTML = ""
}

submitBtn.addEventListener('submit', (event) => {
    event.preventDefault()
    resetMainDiv()
    let playerName = event.target[0].value 
    
    function renderMyPlayer() {
        fetch(`https://www.balldontlie.io/api/v1/players?search=${playerName}`)
        .then(response => response.json())
        .then(resp => {
        
            console.log(resp)
            console.log(resp.data[0].team)
            //findPlayer(playersObject)
            //console.log(playersObject.find(name => name.first_name === firstName && name.last_name === lastName))
        })
    }
    renderMyPlayer()
    
})

// Event Handlers 

            // Fetch Functions

            

document.addEventListener("DOMContentLoaded", event => {
    
    
})
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
