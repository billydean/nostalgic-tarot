import React, { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footers";
import ReadingSpace from "./components/Reading";

function App() {
  const [count, setCount] = useState(0);
  const [selection, setSelection] = useState([]);
  const [readingClass, setReadingClass] = useState("reading");
  const [started, setStart] = useState(false);
  const [cardData, setCardData] = useState([]);

  const shuffleCards = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  };

  const card_ids = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21,
  ];

  useEffect(() => {
    shuffleCards(card_ids);
    const shuffledSlice = card_ids.slice(0, 5);
    let cards = [];
    for (let each of shuffledSlice) {
      fetch(`/api/${each}`)
        .then((response) => response.json())
        .then((data) => cards.push(data));
    }
    setCardData(cards);
  }, []);

  async function start() {
    setReadingClass("reading open");
    setStart(true);
    for (let each of selection) {
      let card = document.querySelector(`.${each}`);
      let c = card.children;
      c[0].classList.toggle("flipped");
      card.classList.toggle("resting");
      card.classList.toggle("select-card");
      card.classList.toggle(`target-${selection.indexOf(each)}`);
    }
    document
      .querySelector(".target-0 > div > .front")
      .setAttribute(
        "style",
        `background-image: url(${cardData[0].url}); background-size: contain;`
      );
    document
      .querySelector(".target-1 > div > .front")
      .setAttribute(
        "style",
        `background-image: url(${cardData[1].url}); background-size: contain;`
      );
    document
      .querySelector(".target-2 > div > .front")
      .setAttribute(
        "style",
        `background-image: url(${cardData[2].url}); background-size: contain;`
      );
    document
      .querySelector(".target-3 > div > .front")
      .setAttribute(
        "style",
        `background-image: url(${cardData[3].url}); background-size: contain;`
      );
    document
      .querySelector(".target-4 > div > .front")
      .setAttribute(
        "style",
        `background-image: url(${cardData[4].url}); background-size: contain;`
      );
  }

  function clear() {
    setStart(false);
    for (let each of selection) {
      let card = document.querySelector(`.${each}`);
      let c = card.children;
      c[0].classList.toggle("flipped");
      c[0].removeAttribute("style");
      card.classList.add("resting");
      card.classList.toggle(`target-${selection.indexOf(each)}`);
    }
    setReadingClass("reading");
    setCount(0);
    setSelection([]);
    shuffleCards(card_ids);
    const shuffledSlice = card_ids.slice(0, 5);
    let cards = [];
    for (let each of shuffledSlice) {
      fetch(`/api/${each}`)
        .then((response) => response.json())
        .then((data) => cards.push(data));
    }
    setCardData(cards);
  }

  return (
    <div className="App">
      <Header />
      <ReadingSpace
        class={readingClass}
        count={count}
        setCount={setCount}
        selection={selection}
        setSelection={setSelection}
        started={started}
        cardData={cardData}
      />
      <div className="buttons">
        {started ? (
          <div
            className="button enabled"
            style={{ position: "relative" }}
            onClick={() => clear()}
          >
            <span className="btn button-label">restart</span>
            <span className="btn button-fill">restart</span>
          </div>
        ) : (
          <div
            className={`button ${count == 5 ? "enabled" : ""}`}
            style={{ position: "relative" }}
            onClick={() => {
              if (count === 5) {
                start();
              }
            }}
          >
            <span className="btn button-label">start</span>
            <span className="btn button-fill">start</span>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
