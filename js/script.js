const url = "https://api.noroff.dev/api/v1/jokes";

const resultsContainer = document.querySelector(".container");


async function getApi() {
  try {
    const response = await fetch(url);
    const results = await response.json();
    console.log(results)
    renderHtml(results);
    filterJokes(results);

  } catch (error) {
    console.log("Something went wrong trying to fetch API", error);
    resultsContainer.innerHTML = errorMessage(error);
  }
}

getApi();



function renderHtml(jokes) {

  resultsContainer.innerHTML = "";

  for (let i = 0; i < jokes.length; i++) {
    
          resultsContainer.innerHTML += `<div class="results">
                                          <a href="joke.html?joke=${jokes[i].id}">
                                            <h2>${jokes[i].type}</h2>
                                            <p>${jokes[i].setup}</p>
                                          </a>
                                        </div>`;
  }

}



function filterJokes(jokes) {

  const filterJokesGeneralBtn = document.querySelector("#filter-general");
  const filterJokesProgrammingBtn = document.querySelector("#filter-programming");
  const filterJokesAllBtn = document.querySelector("#filter-all");
  

  function filteringJokes() {

    console.log(event.target.innerHTML);

    const filterCriteria = event.target.innerHTML;

    const filteredJokes = jokes.filter(function (joke) {

      if (filterCriteria.toLowerCase() === joke.type.toLowerCase()) {
        return true;
      } else if (filterCriteria.toLowerCase() === "all") {
        return true;
      }
    });

    renderHtml(filteredJokes);
  }


  filterJokesGeneralBtn.addEventListener("click", filteringJokes);
  filterJokesProgrammingBtn.addEventListener("click", filteringJokes);
  filterJokesAllBtn.addEventListener("click", filteringJokes);
}
