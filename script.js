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
        
            console.log("player data", resp.data)
            let searchedPlayer = resp.data
            
            function createCard(player) {
                
                let div = document.createElement("div")
                div.className = "card"
                mainDiv().appendChild(div)
                
                const playerCard = 
                `<h2>${player[0].first_name} ${player[0].last_name}</h2>
                <ul>
                <li>
                Position: ${player[0].position}
                Team: ${player[0].team.full_name}
                abbreviation: ${player[0].team.abbreviation}
                <li>
                </ul>`
                
                div.innerHTML += playerCard
            }
            createCard(searchedPlayer)
        
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
