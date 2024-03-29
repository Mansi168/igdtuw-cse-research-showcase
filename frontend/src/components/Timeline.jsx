import React, { useRef, useState, useEffect } from "react";
import Heading from "./Heading";
import Section from "./Section";
import { timeline } from "../constants";

const Timeline = () => {
  const timelineRef = useRef(null);
  const [isPrevArrowDisabled, setIsPrevArrowDisabled] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const tl = timelineRef.current;
      if (tl.scrollLeft === 0) {
        setIsPrevArrowDisabled(true);
      } else {
        setIsPrevArrowDisabled(false);
      }
    };

    const tl = timelineRef.current;
    tl.addEventListener("scroll", handleScroll);

    return () => {
      tl.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTimeline = (direction) => {
    const scrolling = 280; // Adjust this value as needed
    const tl = timelineRef.current;

    if (direction === "next") {
      tl.scrollLeft += scrolling;
      setIsPrevArrowDisabled(false); // Enable prev arrow when next arrow is clicked
    } else if (direction === "prev") {
      tl.scrollLeft -= scrolling;
    }
  };

  return (
    <Section id="timeline">
      <div className="container relative z-2">
        <Heading className="md:max-w-md lg:max-w-2xl" title="Our Schedule" />
        <div className="timeline" ref={timelineRef}>
          {timeline.map((item, index) => (
            <div className="timeline-content" key={index}>
              <div className="timeline-period">{item.period}</div>
              <div className="timieline-title">{item.title}</div>
              {item.text}
            </div>
          ))}
        </div>
        <div className="arrows">
          <button
            className={`arrow arrow__prev ${
              isPrevArrowDisabled ? "disabled" : ""
            }`}
            onClick={() => scrollTimeline("prev")}
            disabled={isPrevArrowDisabled}
          >
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/arrow_prev.svg"
              alt="prev timeline arrow"
            />
          </button>
          <button
            className="arrow arrow__next"
            onClick={() => scrollTimeline("next")}
          >
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/arrow_next.svg"
              alt="next timeline arrow"
            />
          </button>
        </div>
      </div>
    </Section>
  );
};

export default Timeline;
