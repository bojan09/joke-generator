const button = document.querySelector("#button");
const audioElement = document.querySelector("#audio");

// Disable/Enable button
function toggleButton() {
  button.disabled = !button.disabled;
}

// Passing Joke to VoiceRSS API
function tellMe(joke) {
  VoiceRSS.speech({
    key: VoiceApiKey,
    src: joke,
    hl: "en-us",
    r: 0,
    c: "mp3",
    f: "44khz_16bit_stereo",
    ssml: false,
  });
}

// Get Jokes from Joke API
async function getJokes() {
  let joke = "";

  const jokeApiUrl =
    "https://v2.jokeapi.dev/joke/Programming,Pun,Spooky?blacklistFlags=nsfw,religious,political,racist,sexist";
  try {
    const response = await fetch(jokeApiUrl);
    const data = await response.json();

    // two part jokes
    if (data.setup) {
      joke = `${data.setup} ... ${data.delivery}`;
    } else {
      // single part jokes
      joke = data.joke;
    }

    // Text-to-Speech
    tellMe(joke);

    // Disable button
    toggleButton();
  } catch (err) {
    console.log("Fetch error", err);
  }
}

// Event Listeners
button.addEventListener("click", getJokes);
audioElement.addEventListener("ended", toggleButton);
