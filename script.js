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
        
            console.log(resp.data)
            let searchedPlayer = resp.data
            function getPlayersTeam(searchedPlayer) {

            }
            
        })
    }
    renderMyPlayer()
    
})



            

document.addEventListener("DOMContentLoaded", event => {
    
    
})
// // Handler Functions 
// function UseNameToCreateCard() {
    
//         const searchString = event.target.value;
//         if(searchString == `${data.full_name && data.last_name}`) {
//             return createCard(player)
//         }
// }
function createCard(player) {

    let playerName = document.getElementById("get-player")
    let div = document.createElement("div")
    div.className = "card"
    mainDiv().appendChild(div)
    
    const playerCard = 
    `<h2>${player.first_name} ${player.last_name}</h2>
    <ul>
        <li>
            Position: ${player.position}
            Team: ${player.team.full_name}
            abbreviation: ${player.team.abbreviation}
        <li>
    </ul>`
    
    div.innerHTML += playerCard
    }
