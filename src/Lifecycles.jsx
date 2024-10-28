import { useEffect } from "react";
import { useState } from "react";

async function loadRandomQuote() {
  const response = await fetch("https://dummyjson.com/quotes/random");
  return await response.json();
}

export function Lifecycles() {
  const [counter, setCounter] = useState(0);
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    /*fetch("https://dummyjson.com/quotes/random")
      .then((response) => response.json())
      .then((randomQuote) => {
        setQuote(randomQuote);
      });*/

    loadRandomQuote().then(setQuote);

    /*return () => {
      alert("Komponenten försvann!");
    };*/
  }, []);

  if (quote == null) {
    return <>Loading...</>;
  }

  return (
    <>
      <p>{quote.quote}</p>
      <span>- {quote.author}</span>
      <br />
      <span>{counter}</span>
      <button onClick={() => setCounter(counter + 1)}>Inc</button>
    </>
  );
}
