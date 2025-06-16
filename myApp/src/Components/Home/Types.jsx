import React from "react";
import {Typed} from "react-typed";

const TypingEffect = () => {
  return (
    <div className="text-2xl font-bold text-black">
      <Typed
        strings={[
          "Web Developer",
          "Web Designer",
          "Software Engineer",
          "UI/UX Designer",
          "Freelancer",
        ]}
        typeSpeed={70}
        backSpeed={70}
        backDelay={1000}
        loop
      />
    </div>
  );
};

export default TypingEffect;
