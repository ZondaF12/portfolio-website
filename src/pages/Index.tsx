import React from "react";

function Index() {
  return (
    <div className="flex h-screen justify-center items-center bg-background-blue font-SFMono">
      <header>
        <title>Ruaridh Bell</title>
        <link rel="icon" href="/favicon.ico" />
        <meta content="Ruaridh Bell" property="og:title" />
        <meta
          content="Fullstack Software Developer"
          property="og:description"
        />
        <meta content="https://ruaridhbell.com" property="og:url" />
      </header>
      <div className="px-10 xl:px-[30%] lg:px-[20%] space-y-4 text-[15px] lg:mb-[112px] text-text-main">
        <img src="me.jpg" className="h-24 inline rounded-full" />
        <h2 className="leading-7 font-SFMono text-[15px] tracking-tight lg:tracking-wide text-text-highlight">
          Hi, my name is
        </h2>
        <h1 className="leading-7 font-SFMono font-semibold text-[28px] tracking-tight lg:tracking-wide text-text-header">
          Ruaridh Bell.
        </h1>
        <p className="font-SFMono not-italic leading-7 text-[15px]">
          I'm a Self taught Software Engineer and MEng Electronic and Electrical
          Engineering graduate. Always learning and improving.
        </p>
        <p className="font-SFMono leading-7 decoration-gray-500 decoration-2 underline-offset-2">
          Currently a Software Engineer @{" "}
          <a
            href="https://livecode.com/"
            target={"_blank"}
            className="underline text-[#ffb3e4]"
          >
            LiveCode
          </a>
          , with a wide range of responsibilities, ranging from API development
          to designing and implementing new software solutions.
        </p>
        <p className="font-SFMono leading-7 decoration-gray-500 decoration-2 underline-offset-2">
          Some personal projects i've made to keep myself busy can be found{" "}
          <a href="/projects" className="underline">
            here
          </a>
          .{" "}
        </p>
        <p className="font-SFMono leading-7 decoration-gray-500 decoration-2 underline-offset-2">
          Reach me at{" "}
          <a
            href="https://twitter.com/ruaridhbell"
            className="underline"
            target={"_blank"}
          >
            @ruaridhbell
          </a>{" "}
          or{" "}
          <a
            href="mailto:hi@ruaridhbell.com"
            className="underline"
            target={"_blank"}
          >
            hi@ruaridhbell.com
          </a>
          .{" "}
        </p>
        <p className="font-SFMono italic text-[17px] text-text-header">
          "Innovation distinguishes between a leader and a follower"{" "}
          <span className="font-SFMono leading-7 decoration-gray-500 text-[15px] text-gray-500 not-italic">
            - Steve Jobs
          </span>
        </p>
      </div>
    </div>
  );
}

export default Index;
