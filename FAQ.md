# Frequently Asked Questions (FAQ)

Here are answers to some common questions about the Awesome Kartikey Joke Teller project.

**Q1: Why isn't the joke playing when I click the button?**

*   **Internet Connection:** Ensure you have a stable internet connection. The application needs to fetch jokes from JokeAPI and audio from VoiceRSS.
*   **API Key Issues:** The embedded VoiceRSS API key might have reached its limit or become invalid. You can register for your own free key at [VoiceRSS](http://www.voicerss.org/registration.aspx) and update it in `script.js`.
*   **Browser Compatibility:** While the VoiceRSS SDK attempts broad compatibility, ensure you're using a modern browser (like Chrome, Firefox, Edge, Safari) that supports the necessary audio formats (`mp3` preferred) and `fetch` API. Check your browser's console (usually F12) for any error messages.
*   **API Services Down:** Occasionally, the external JokeAPI or VoiceRSS services might be temporarily unavailable. Try again later.
*   **Ad Blockers/Privacy Extensions:** Some browser extensions might block requests to external APIs. Try disabling them temporarily for this site.

**Q2: Can I use my own VoiceRSS API key?**

*   Yes! It's recommended.
    1.  Register for a free API key at [VoiceRSS](http://www.voicerss.org/registration.aspx).
    2.  Open the `script.js` file.
    3.  Locate the `VoiceRSS.speech` function call within the `tellJoke` function.
    4.  Replace the value of the `key` property (`'93ee2353823048d8bb38575b54abcfa8'`) with your own API key.
    ```javascript
    // Inside script.js, within the tellJoke function
    VoiceRSS.speech({
        key: 'YOUR_OWN_API_KEY_HERE', // Replace this string
        src: joke,
        // ... other parameters
    });
    ```

**Q3: Is the VoiceRSS API key included in the code secure?**

*   **No.** The API key is included directly in the client-side JavaScript (`script.js`). This means anyone can view the key by inspecting the page's source code. For a simple demonstration project like this, it might be acceptable, but **it is not secure practice for a production application.** Exposing API keys client-side can lead to abuse and potentially exhaust your API quota or incur costs if the service were paid.
*   **How to improve security?** The best practice is to create a backend proxy server. Your frontend would send the joke text to *your* backend, which would then securely call the VoiceRSS API using the key stored on the server, and stream the audio back to the client.

**Q4: Can I change the type of jokes fetched?**

*   Yes. The type of joke is determined by the `jokeApiUrl` variable in `script.js`.
*   Currently, it's set to fetch 'Programming' jokes and blacklist certain categories:
    ```javascript
    const jokeApiUrl = 'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit';
    ```
*   You can change `Programming` to other categories supported by JokeAPI (e.g., `Any`, `Miscellaneous`, `Dark`, `Pun`). Refer to the [JokeAPI Documentation](https://jokeapi.dev/) for available categories and parameters. You can also adjust the `blacklistFlags`.

**Q5: Why does the "Get Another Joke" button become disabled sometimes?**

*   The button is intentionally disabled to prevent multiple simultaneous requests while the application is busy. It disables when you click it (to start fetching the joke and generating audio) and re-enables automatically once the joke audio has finished playing (detected via the `ended` event on the audio element). This provides visual feedback and ensures smooth operation.

**Q6: Can I change the voice or language of the TTS?**

*   Yes. The `VoiceRSS.speech` call in `script.js` includes parameters for voice (`v`) and language (`hl`):
    ```javascript
    VoiceRSS.speech({
        // ... other parameters
        hl: 'en-us', // Language (e.g., 'en-gb', 'es-es')
        v: 'Linda',  // Voice (depends on language)
        // ... other parameters
    });
    ```
*   Refer to the [VoiceRSS Documentation](http://www.voicerss.org/api/) for available languages and corresponding voices. Change the `hl` and `v` parameters accordingly.

**Q7: Where did the robot animation come from?**

*   The animated robot background GIF is sourced from Giphy, as mentioned in the `style.css` comments: `ROBOT.GIF from Giphy - https://giphy.com/gifs/robot-cinema-4d-eyedesyn-3o7abtn7DuREEpsyWY`