import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes.js";

function App() {
  return (
    <div>
      <Header />
      <Footer />

      {notes.map((item, key) => (
        <Note key={item.key} title={item.title} content={item.content} />
      ))}
    </div>
  );
}

export default App;
