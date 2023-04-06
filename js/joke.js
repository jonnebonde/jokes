const url = "https://api.noroff.dev/api/v1/jokes";
const resultsContainer = document.querySelector(".joke__container");


const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const jokeId = params.get("joke");

const jokeUrl = "https://api.noroff.dev/api/v1/jokes/" + jokeId;


async function getApi() {
  try {
    const response = await fetch(jokeUrl);
    const results = await response.json();

    renderJoke(results);
  } catch (error) {
    console.log("Something went wrong trying to fetch API");
    resultsContainer.innerHTML = errorMessage(
      "Ops, something went wrong, try to refresh page (press F5)."
    );
  }
}

getApi();



function renderJoke(joke) {
  console.log(joke)
  resultsContainer.innerHTML = `<div>
                                <h2>${joke.type}</h2>
                                <p>${joke.setup}</p>
                                <span class="punchline">${joke.punchline}</span>
                              </div>`;

  const showPunchlineBtn = document.querySelector("#show-btn");
  const punchline = document.querySelector(".punchline");

showPunchlineBtn.addEventListener("click", togglePunchline);

function togglePunchline() {
  console.log(punchline)

  if(showPunchlineBtn.innerHTML === "Show Punchline") { 
    showPunchlineBtn.innerHTML = "Hide Punchline";
  } else {
    showPunchlineBtn.innerHTML = "Show Punchline";
  }


  punchline.classList.toggle("visible");  
}
}



