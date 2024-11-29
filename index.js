



const URL = "https://picsum.photos/v2/list?page=20&limit=45";

let fetchImg = async () => {
 
  let response = await fetch(URL);
  let data = await response.json();
console.log(data);
 
  let cardsContainer = document.getElementById("cards-container");

  // Loop through the data and create a card for each product
  data.forEach(product => {
    let card = document.createElement("div");
    card.classList.add("card");

    // Create the card header
    let cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header");
    cardHeader.innerHTML = `
      <h2>${product.author}</h2>
      <button class="three-dots">
        <span></span>
        <span></span>
        <span></span>
      </button>
    `;
    let threeDotsButton = cardHeader.querySelector(".three-dots");
    threeDotsButton.addEventListener("click", () => {
      console.log("button was clicked!");
      alert(`  ${product.author}`);
    });

    // Create the card image container
    let cardImgContainer = document.createElement("div");
    cardImgContainer.classList.add("card-img-container");
    cardImgContainer.innerHTML = `
      <img src="${product.download_url}" alt="${product.author}" style="height:300px; width:300px" >
      <button class="image-button">View</button>
    `;
   let viewBtn= cardImgContainer.querySelector(".image-button");
   viewBtn.addEventListener("click", () => {
    // Open a new tab with image and description
    const newTab = window.open();
    newTab.document.write(`
      <html>
        <head>
          <title></title>
          
            <style>
          * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        position: relative;
        height: 100vh;
        width: 100%;
        display: flex;
        justify-content: center; /* Center content horizontally */
        align-items: center;     /* Center content vertically */
        overflow: hidden;
        background:beige;
      }

      #photo {
        // width: 500px; 
        // height: 600px; 
        object-fit: cover; /* Ensures image covers the given dimensions */
        position: absolute; /* Position the image absolutely */
        z-index: 1; /* Image stays in the background */
      }

     h1{
        position: absolute;
        top: 10px; /* Distance from the top of the image */
        left: 50%;
        transform: translateX(-50%);
        color: black;
        font-size: 1.5em;
        z-index: 2; /* Ensure the h2 is above the image */
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
     }
       
      .description {
        position: absolute;
        top: 75%;
        left: 50%;
        transform: translate(-50%, -50%); /* Center text */
        color:rgb(119, 190, 167); ; /* White text for contrast */
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Text shadow for readability */
        z-index: 2; /* Text is above the image */
      }

      .description {
        font-size: 1.2em;
        text-align: center;
      }
        .menu {
        position: absolute;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        padding: 10px 20px;
        font-size: 1.2em;
        background-color: rgba(0, 0, 0, 0.7);
        color: white;
        border: none;
        cursor: pointer;
        z-index: 3; /* Button is above both text and image */
      }

      .menu:hover {
        background-color: rgba(0, 0, 0, 0.9); /* Darken the button on hover */
      }
        </style>
         
        </head>
        <body>
          <h1>${product.author}</h1>
          <img src="${product.download_url}" alt="${product.author}" id="photo" style="height:600px; width:700px"   >
          <p class="description">${product.description}</p>
          <button class="menu">Back To Home</button>
         <script>
        let menuBtn = document.querySelector('.menu');
            menuBtn.addEventListener('click', function() {
              // Navigate to home page
              window.location.href = 'index.html'; // Or you can use '/' if it is the root of your site
            });
         </script>
        </body>
      </html>
    `);
  });

    // Append the card sections to the card
    card.appendChild(cardHeader);
    card.appendChild(cardImgContainer);
    // card.appendChild(cardFooter);

    // Append the card to the container
    cardsContainer.appendChild(card);

  });
};

// Call the fetchImg function to load and display the data
fetchImg();

function alertfun(){
  alert("How Can I Help You ?");
}





