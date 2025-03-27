const button = document.getElementById('jokeBtn');
const audioElement = document.getElementById('audio');

const jokeApiUrl = 'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit';  
let joke = ''
function tellJoke(joke){
  if(joke){
    VoiceRSS.speech({
      key: '93ee2353823048d8bb38575b54abcfa8',
      src: joke,
      hl: 'en-us',
      v: 'Linda',
      c: 'mp3',
      f: '44khz_16bit_stereo',
      ssml: false
    });
  }
}

// Get a joke from the API
async function getJoke() {
    try {
      const response = await fetch(jokeApiUrl);
      const data = await response.json();
      if(data.type === 'single'){
        joke = data.joke;
      } else if (data.type === 'twopart'){
        joke = `${data.setup} ... ${data.delivery}`;
      }
      console.log(joke);
      // Disable Button
      toggleButton();
      // Text-to-Speech
      return tellJoke(joke);
    } catch (error) {
      console.log('Error fetching joke:', error);
      return null;
    }
}

function toggleButton(){
  button.disabled = !button.disabled;
}

// Event Listeners
button.addEventListener('click', getJoke);
audio.addEventListener('ended', toggleButton);