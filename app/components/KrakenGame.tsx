"use client";
import { useEffect } from "react";

const KrakenGame = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/js/krakenflap.js";
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="krakenflap">
      <link
        rel="preload"
        as="font"
        href="/js/assets/Kenney Mini Square.ttf"
        type="font/ttf"
        crossOrigin="anonymous"
      />
      <style>{`
              @font-face {
                  font-family: kenney_mini_square_regular;
                  src: url('/js/assets/Kenney Mini Square.ttf');
              }
          `}</style>
    </div>
  );
};

export default KrakenGame;
