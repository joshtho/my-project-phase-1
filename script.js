// Node getters
const homePage = document.getElementById("HomePage")
const mainDiv = () => document.getElementById('main')
const searchBar = document.getElementById('myInput')
const submitBtn = document.querySelector('.container')

// Helpers
function resetMainDiv() {
    mainDiv().innerHTML = ""
}
//Event Handler
function reloadHomePage() {
    document.location.reload();
}    

//Event Listeners

function attachSubmitForm() {
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
                
                resetMainDiv()
                mainDiv().className = "card"
                
                const playerCard = 
                `<h2>${player[0].first_name} ${player[0].last_name}</h2>
                
                <h3>${player[0].team.full_name}</h3>
                <h4>${player[0].team.abbreviation}</h4>
                <h4>${player[0].position}</h4>`
                
                mainDiv().innerHTML += playerCard
                
                
            }
            createCard(searchedPlayer)
            const btn = document.createElement("button")
            btn.innerText = "Done"
            btn.className = "button"
            btn.addEventListener("click", reloadHomePage)
            mainDiv().appendChild(btn)
            
        })
    }
    renderMyPlayer()
})
}

function attachHomePageReloadEvent() {
    homePage.addEventListener("click", reloadHomePage)
}          



            

document.addEventListener("DOMContentLoaded", event => {
    attachSubmitForm();
    attachHomePageReloadEvent()
    homePage.style.marginLeft = "100px"

})
