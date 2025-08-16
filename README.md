# Awesome Kartikey Joke Teller

A fun web application that tells you programming jokes using text-to-speech technology. Click a button and listen to a randomly fetched joke!

![Screenshot](https://iamkartikey.vercel.app/project-screenshots/joke-teller.png)

## Description

This project is a simple, front-end web application built with HTML, CSS, and JavaScript. It fetches programming jokes from the [JokeAPI](https://v2.jokeapi.dev/) and uses the [VoiceRSS](http://www.voicerss.org/) Text-to-Speech (TTS) service to read the jokes aloud through your browser.

## Features

- Fetches random programming jokes.
- Filters out potentially NSFW, religious, political, racist, sexist, or explicit jokes.
- Uses Text-to-Speech (TTS) to read the joke aloud.
- Simple and intuitive user interface.
- Visual feedback: Button disables while fetching/playing the joke.
- Responsive design for different screen sizes.

## Tech Stack

- **HTML5:** For the basic structure of the web page.
- **CSS3:** For styling the user interface, including responsive design and animations.
- **JavaScript (ES6+):** For application logic, fetching data, and interacting with APIs.
- **APIs:**
  - [JokeAPI](https://v2.jokeapi.dev/): Used to fetch programming jokes.
  - [VoiceRSS API](http://www.voicerss.org/): Used for Text-to-Speech conversion.

## Setup Instructions

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/awesome-kartikey/joke-teller.git
    cd joke-teller
    ```
2.  **Open the HTML file:**
    Simply open the `index.html` file in your web browser.

    _Note:_ This project uses a public VoiceRSS API key embedded directly in the `script.js` file for demonstration purposes. If you plan to deploy this or use it extensively, it's highly recommended to get your own free API key from [VoiceRSS](http://www.voicerss.org/registration.aspx) and replace the existing key in `script.js`. Keep in mind that exposing API keys client-side is generally not recommended for production applications (see [FAQ.md](./FAQ.md)).

## Usage

1.  Open `index.html` in your browser.
2.  Click the "Get Another Joke" button.
3.  Listen to the joke being read aloud!
4.  The button will be temporarily disabled while the joke is being fetched and played. It will automatically re-enable once the audio finishes.
5.  Click the button again to hear another joke.
