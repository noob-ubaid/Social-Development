import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".title", {
      y : 20,
      opacity : 0,
      duration : 0.4,
      delay : 0.3,
      stagger : 0.02
    });
    tl.from(".para", {
      y : 20,
      opacity : 0,
      duration : 0.4,
    });
    tl.from(".img", {
      y : 20,
      opacity : 0,
      duration : 0.35,
    });
  });
  return (
    <div className="flex items-center mt-80 gap-8 mb-6 md:mt-16 md:gap-16 justify-between flex-col-reverse md:flex-row">
      <div>
        <h2 className="text-3xl title dark:text-white md:text-4xl text-center md:text-left md:font-bold lg:text-[45px] font-semibold">
          The Social Impact Hub -{" "}
          <span
            style={{
              color: "#ad49e1",
              fontWeight: "bold",
              fontStyle: "italic",
            }}
          >
            <Typewriter
              words={[
                "GreenPulse",
                "EventSphere",
                "CivicConnect",
                "ServeSphere",
              ]}
              loop={Infinity}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={70}
              delaySpeed={1000}
            />
          </span>
        </h2>
        <p className="max-w-[750px] para text-gray-400 text-center md:text-left mt-6">
          Create, join, and manage events that matter. From tree plantations to
          community donations — GreenPulse is your gateway to local impact.
          Connect with others, organize meaningful initiatives, and make a
          lasting difference in your community — one event at a time.
        </p>
      </div>
      <div>
        <img
          className="rounded-md img w-full md:w-[700px]"
          src="https://media.istockphoto.com/id/1022255954/photo/people-planting-tree-in-park.jpg?s=612x612&w=0&k=20&c=g_lC-Irk0zpLf7Mi3SyPQIKqfSk4UpDACCIXrNeNE5A="
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
