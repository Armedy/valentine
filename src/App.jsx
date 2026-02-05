import { useState } from "react";
import { Link } from "react-router-dom"; // ← add this
import lovesvg from "./assets/All You Need Is Love SVG Cut File.svg";
import lovesvg2 from "./assets/All You Need Is Love SVG Cut File.gif";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure my Rasmalai?",
      "Really sure Kuchupuchu?",
      "Think again Maalkin!",
      "Last chance Gulaab Jamun!",
      "Surely not Billu Badmosh?",
      "You might regret this madam ji!",
      "Give it another thought my love!",
      "Are you absolutely certain cutie?",
      "This could be a mistake kaju katli!",
      "Have a heart jaahil aurat!",
      "Don't be so cold bandariya!",
      "Change of heart?",
      "Wouldn't you reconsider?",
      "Is that your final answer?",
      "You're breaking my heart ;(",
      "Is that your final answer?",
      "You're breaking my heart ;(",
      "Plsss? :( You're breaking my heart",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="overflow-hidden flex flex-col items-center justify-center pt-4 h-screen -mt-16 selection:bg-rose-600 selection:text-white text-zinc-900">
      {yesPressed ? (
        <>
          <img
            src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
            alt="Happy bears kissing"
          />
          <div className="text-4xl md:text-6xl font-bold my-4">Ok Yayyyyy!!!</div>
        </>
      ) : (
        <>
          {/* Top-left love sticker → clickable to /photos */}
          <Link
            to="/photos"
            aria-label="Open photo slideshow"
            className="fixed animate-pulse top-10 md:left-24 left-6 focus:outline-none focus:ring-2 focus:ring-rose-500 rounded"
            title="See our photos"
          >
            <img
              src={lovesvg}
              alt="All you need is love"
              className="md:w-40 w-28 cursor-pointer select-none"
            />
          </Link>

          {/* Bottom-right love sticker → clickable to /photos */}
          <Link
            to="/photos"
            aria-label="Open photo slideshow"
            className="fixed bottom-16 animate-pulse md:right-24 right-10 z-10 focus:outline-none focus:ring-2 focus:ring-rose-500 rounded"
            title="See our photos"
          >
            <img
              src={lovesvg2}
              alt="All you need is love"
              className="md:w-40 w-32 cursor-pointer select-none"
            />
          </Link>

          {/* Main bear image (kept non-clickable) */}
          <img
            className="h-[230px] rounded-lg shadow-lg"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.webp"
            alt="Cute bear holding roses"
          />

          <h1 className="font-display text-5xl leading-tight">
            Hey Angel, Will you be my Valentine?
          </h1>
          <div className="flex flex-wrap justify-center gap-2 items-center">
            <button
              className={`bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg mr-4`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className="bg-rose-500 hover:bg-rose-600 rounded-lg text-white font-bold py-2 px-4"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
      <Footer />
    </div>
  );
}

const Footer = () => {
  return (
    <a
      className="fixed bottom-2 right-2 backdrop-blur-md opacity-80 hover:opacity-95 border p-1 rounded border-rose-300"
      href="https://github.com/Xeven777/valentine"
      target="__blank"
      rel="noreferrer"
    >
      Made with <span role="img" aria-label="heart">❤️</span>
    </a>
  );
};