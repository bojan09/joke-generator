# joke-generator

Using the Voice RSS Text to Speach API to generate the voice.
In the code the server response from Voice RSS which holds the audio data was modified in order to pass the audio data to a custom audioElement, onto which the audioElement.play() method has been attached. So when the user click the button a Voice generated joke can start
link: https://www.voicerss.org/sdk/javascript.aspx

Using the Joke API by sv443 to generate the jokes

In the code the fetch API method was used in order to pass in the Url from the Jokes API. The Url is then passed onto the JokeAPI Server. From where we're getting a response, which is parsed into JSON (becouse we only need the body of the response) and stored in the data variable. From there with a if/else statement we are getting the data.setup and data.delivery for 2 part jokes, and using data.joke for 1 part jokes. In the async function there is also a joke variable that is populated from either the 1 part jokes or the 2 part jokes that are using the if/else statement. Then the joke variable is outputed with the string of the joke that is recived from the JokeAPI.
link: https://sv443.net/jokeapi/v2//

There is also another function that is attached to the 'Tell me a Joke' button. So that whenever it's clicked it takes the parameter of the variable Joke, and calls the SpeechAPI function, and uses the Joke variable as the source.

Project link:
