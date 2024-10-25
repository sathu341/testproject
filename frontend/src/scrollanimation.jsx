import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './ScrollAnimation.css'; // Add styling as needed

gsap.registerPlugin(ScrollTrigger);

const ScrollAnimation = () => {
  const sectionRefs = useRef([]);

  useEffect(() => {
    sectionRefs.current.forEach((section, index) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          scrollTrigger: {
            trigger: section,
            start: "top 80%", // Starts when the top of the section is in 80% of the viewport
            end: "top 20%",   // Ends when the top of the section is in 20% of the viewport
            toggleActions: "play none none reverse", // On enter, play animation. On leave, reverse.
            markers: true, // Optional: shows visual markers for testing
          },
        }
      );
    });
  }, []);

  return (
    <div className="scroll-container">
      {[...Array(5)].map((_, index) => (
        <section
          key={index}
          ref={(el) => sectionRefs.current[index] = el}
          className="scroll-section"
        >
          <h2>Section {index + 1}</h2>
          <p>This is the content for section {index + 1}.</p>
        </section>
      ))}
    </div>
  );
};

export default ScrollAnimation;
