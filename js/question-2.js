// Question 2
// Make a call to the Rawg API.

/*
 * Loop through the results and display the following properties in HTML, but only for the first eight results:
 * Name
 * Rating
 * Number of tags (not the tag details, just the amount of tags)
 */

/*
 * The styling for this assignment is not important but loading indicator should be displayed while the API call is in progress.
 */

/*
 * Be sure to handle any potential errors in the code.
 */

/*
 * You can use either regular promise or async/await syntax to make the call.
 */

//

const url =
  "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=f170552368c54d0285c907b783ccdfe6";

const proxy = "https://noroffcors.herokuapp.com/";
const crosFix = proxy + url;

const resultConteiner = document.querySelector(".game-results");

async function getRawg() {
  try {
    // fetch
    const response = await fetch(crosFix); //fetch(url)
    const data = await response.json();
    //console.log(data);
    const resultfacts = data.results;
    //console.log(resultfacts);
    resultConteiner.innerHTML = "";

    for (let i = 0; i < 8; i++) {
      resultConteiner.innerHTML += `
      <div class="game">
          <div class="name">${resultfacts[i].name}</div>
          <div> Rating: ${resultfacts[i].rating}</div>
          <div> Tags: ${resultfacts[i].tags.length}</div>
      </div>`;
    }
    console.log("succses");
  } catch (error) {
    resultConteiner.innerHTML = "";
    console.error(error);
    resultConteiner.innerHTML += displayError("Error: Failed to fetch API data");
  }
}

getRawg();
