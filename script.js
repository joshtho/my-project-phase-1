//Node getters
const homePage = document.getElementById("HomePage")
const mainDiv = () => document.getElementById('main')
const searchBar = document.getElementById('myInput')
const submitBtn = document.querySelector('.container')
const listPage = document.getElementById("listPage")

// Helpers
function resetMainDiv() {
    mainDiv().innerHTML = ""
}

//Event Handler
function renderHomePage() {
    resetMainDiv();
    const h1 = document.createElement("h1");
    const p = document.createElement("p");

    const img1 = new Image(207, 243);
    const img2 = new Image(350, 196);

    img1.src = "http://i.imgur.com/yqtj8vi.jpg"
    img2.src = "https://andscape.com/wp-content/uploads/2017/06/nbalogo.jpg?w=700"

    p.innerText = "Have you ever been talking with your buddies about the NBA " 
    + "and wondered what happend to that certain player that seems to have a "
    + "new team every year? Wonder no more, we got you."
    h1.innerText = "Who he play for?"

    mainDiv().appendChild(h1)
    mainDiv().appendChild(img1)
    mainDiv().appendChild(p)
    mainDiv().appendChild(img2)
}

function renderFavoriteListPage() {
    resetMainDiv();
    const h1 = document.createElement("h1");
    h1.innerText = "Your favorites"
    mainDiv().appendChild(h1);
    renderFavoritePlayers();
}

const renderFavoritePlayers = () => {
    const ul = document.createElement("ul")
    quotes.forEach(data => renderOnePlayer(data, ul))
    mainDiv().appendChild(ul);
}

const renderOnePlayer = (data, ul) => {
    const li = document.createElement('li');
    li.innerText = data.quote
    ul.appendChild(li)
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
            btn.innerText = "Home"
            btn.className = "button"
            const btn2 = document.createElement("button")
            btn2.innerText = "Save to Favorites"
            btn2.className = 'button'
            
            btn.addEventListener("click", renderHomePage)
            btn2.addEventListener("click", () => favoritePlayer(onePlayer))
            
            mainDiv().appendChild(btn2)
            mainDiv().appendChild(btn)
            
        })
    }
    renderMyPlayer();
   
})
}

function attachHomePageEvent() {
    homePage.addEventListener("click", renderHomePage)
}          
function attachFavoriteListClickEvent() {
    listPage.addEventListener("click", renderFavoriteListPage)
}


document.addEventListener("DOMContentLoaded", event => {
    renderHomePage(); 
    attachSubmitForm();
    attachHomePageEvent();
    attachFavoriteListClickEvent();
    homePage.style.marginLeft = "100px"
    
})