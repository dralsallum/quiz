export const speakText = (textToSpeak, lang = "ar-AR") => {
  if ("speechSynthesis" in window) {
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    const voices = window.speechSynthesis.getVoices();
    utterance.voice = voices.find((voice) => voice.lang === lang); // Pick the first voice that matches the language
    utterance.lang = lang;
    window.speechSynthesis.speak(utterance);
  } else {
    console.error("Speech Synthesis not supported!");
  }
};
