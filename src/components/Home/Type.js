import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Developing Self Assembling Crane with Kocecranes",
          "Software Engineering Fellow @ Headstarter AI",
          "Mechatronics @ Aalto university",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 1,
        pauseFor: 2000,
        delay: 0.002,
      }}
    />
  );
}

export default Type;
