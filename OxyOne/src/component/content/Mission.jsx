import React, { useEffect } from "react";
import planting from "../../assets/Planting.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Mission = () => {
  useEffect(() => {
    gsap.fromTo(
      ".section-text",
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        stagger: 0.8,
        scrollTrigger: {
          trigger: ".section-text-container",
          start: "top 80%",
          end: "bottom 60%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      ".planting-image",
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".planting-image",
          start: "top 80%",
          end: "bottom 60%",
          scrub: true,
        },
      }
    );
  }, []);

  const sectionContent = [
    {
      title: "Who we are",
      text: "Oxyvan is a globally recognised non-profit organisation focused on environmental conservation and sustainable, socially just development. ATREE engages in the generation and dissemination of rigorous interdisciplinary knowledge that informs and is informed by the needs of grassroots communities, policymakers, and the wider public. It prioritises capacity-building for producing the next generation of scholars.",
    },
    {
      title: "What we do",
      text: "Oxyvan is a globally recognised non-profit organisation focused on environmental conservation and sustainable, socially just development. ATREE engages in the generation and dissemination of rigorous interdisciplinary knowledge that informs and is informed by the needs of grassroots communities, policymakers, and the wider public. It prioritises capacity-building for producing the next generation of scholars.",
    },
  ];

  return (
    <div className="w-full flex flex-col md:flex-row px-4 md:px-8 py-14">
      <div className="w-full lg:w-1/2 md:p-4 flex flex-col justify-center text-justify section-text-container">
        {sectionContent.map(({ title, text }, index) => (
          <div key={index} className={`section-text ${index !== 0 ? "mt-4" : ""}`}>
            <h4 className="text-primary text-2xl font-bold">{title}</h4>
            <p>{text}</p>
            <div className="mt-5">
              <hr className="border-1 border-dashed border-green-700" />
              <hr className="border-1 mt-0.5 border-dashed border-green-700" />
            </div>
          </div>
        ))}
      </div>
      <div className="w-full lg:w-1/2 p-4 flex justify-center items-center relative">
        <div className="w-96 h-96 bg-gradient-to-r from-green-400 to-yellow-400 rounded-3xl"></div>
        <img
          src={planting}
          alt="Planting"
          className="planting-image absolute lg:top-20 lg:left-20 w-full h-full lg:w-96 lg:h-96 object-cover rounded-3xl"
        />
      </div>
    </div>
  );
};

export default Mission;
