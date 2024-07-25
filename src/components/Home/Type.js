import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "SWE Fellow @ Headstarter AI",
          "Mechatronics Engineer in industry",
          "Scholorship holder at Aalto university",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 1,
        pauseFor: 1000,
        delay: 4,
      }}
    />
  );
}

export default Type;
