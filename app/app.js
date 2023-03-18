// array is plural object inside is singular
var GAMES = [
    { 
    gameTitle: "Grand Theft Auto V",
    gameThumbImg: "gtathumb_300x300.jpg",
    gameFullImg: "gtacover.jpg",
    gameBriefDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, possimus unde facere aliquam perferendis aliquid!",
    gameDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, neque quisquam ipsa cum aliquid tempore eveniet fugit, libero, qui animi deserunt officiis deleniti? Assumenda quis soluta esse deleniti, nisi officia?",
    gameRating:"M",
    },
    { 
    gameTitle: "APEX",
    gameThumbImg: "apexthumb_300x300.jpg",
    gameFullImg: "apex.jpg",
    gameBriefDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, possimus unde facere aliquam perferendis aliquid!",
    gameDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, neque quisquam ipsa cum aliquid tempore eveniet fugit, libero, qui animi deserunt officiis deleniti? Assumenda quis soluta esse deleniti, nisi officia?",
    gameRating:"E",
    },
    {
    gameTitle: "FIFA",
    gameThumbImg: "fifathumb_300X300.jpg",
    gameFullImg: "fifa.jpg",
    gameBriefDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, possimus unde facere aliquam perferendis aliquid!",
    gameDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, neque quisquam ipsa cum aliquid tempore eveniet fugit, libero, qui animi deserunt officiis deleniti? Assumenda quis soluta esse deleniti, nisi officia?",
    gameRating:"E",
    },
    { 
        gameTitle: "C.O.D",
        gameThumbImg: "codthumb_300x300.jpg",
        gameFullImg: "cod.jpg",
        gameBriefDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, possimus unde facere aliquam perferendis aliquid!",
        gameDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, neque quisquam ipsa cum aliquid tempore eveniet fugit, libero, qui animi deserunt officiis deleniti? Assumenda quis soluta esse deleniti, nisi officia?",
        gameRating:"M",
    },
   
];

//load  data
function loadData(){
  $("#app").before(`<div class="hero"></div><h1> Best Seller</h1>`);
    $.each(GAMES, function(index,game){
        
        $("#app").append(`<div id="${index}" class="game-holder">
        <h4>${game.gameTitle}</h4>
        <div class="game-image">
          <img
            src="images/thumbnails/thumbs-assets/${game.gameThumbImg}"
            alt="${game.gameTitle}"
          />
        </div>
        <div class="brief-rating">
          <div class="brief-desc">
            ${game.gameBriefDescription}
          </div>
          <div class="rating">Rating: ${game.gameRating}</div>
        </div>
      </div>`);
    });

    initListeners();

}

function initListeners(){ 
  
  $(".game-holder").click(function(e){
    let gameIndex = e.currentTarget.id;
    

    $("#app").html(`
    <div class="wrapper">
    <div class="fullImage">
      <img src="images/${GAMES[gameIndex].gameFullImg}" alt="${GAMES[gameIndex].gameTitle}" />
    </div>
    <div class="detailInfo">
      <div class="detailTitle">${GAMES[gameIndex].gameTitle}</div>
      <div class="detailDesc">
      ${GAMES[gameIndex].gameDescription}
      </div>
      <div class="gameDetails">
        <div class="detail">$19.99</div>
        <div class="detail">${GAMES[gameIndex].gameRating}</div>
      </div>
    </div>
  </div>
  <div class="close">CLOSE</div>
  `);
  addCloseListener();

  function addCloseListener(){
    $(".close").click(function(){
      $("#app").html("");
      loadData();
    })
  }
  });
}    
    
$(document).ready(function(){
    loadData();
    initListeners();
    
});


// gameTitle: "GTA IV",
// gameThumbImg: "gtathumb_300x300.jpg",
// gameFullImg: "gtacover.jpg",
// gameBriefDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, possimus unde facere aliquam perferendis aliquid!",
// gameDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, neque quisquam ipsa cum aliquid tempore eveniet fugit, libero, qui animi deserunt officiis deleniti? Assumenda quis soluta esse deleniti, nisi officia?",
// gameRating:"E",