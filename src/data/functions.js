import { words as data } from "./data";

export const getRandomWords = () => {
  const words = data.sort(() => Math.random() - 0.5).slice(0, 10);

  const word = words.map(word=> {
    word = {...word, process: "none"}
    return word
  })

  return word;
};


