import React, { useEffect, useState } from "react";
import "./App.css";

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const mic = new SpeechRecognition();

mic.continuous = true;
mic.interimResults = true;
mic.lang = "en-US";

function App() {
  const [isListening, setIsListening] = useState(false);
  const [note, setNote] = useState(null);
  const [savedNotes, setSavedNotes] = useState([]);

  return (
    <div className="container ">
      <div className="box">
        <h2>Current Note</h2>
        <button>Save Note</button>
        <button>Start/Stop</button>
      </div>
      <div className="box">
        <h2>Notes</h2>
      </div>
    </div>
  );
}

export default App;
