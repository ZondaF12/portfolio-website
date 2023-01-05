import React from "react";

function Index() {
  return (
    <div className="lg:flex lg:h-screen lg:justify-center lg:items-center bg-background-blue">
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
      <div className="py-16 lg:py-0 px-10 xl:px-[30%] lg:px-[20%] space-y-4 text-[15px] lg:mb-[112px] text-text-main">
        <img src="me.jpg" className="h-24 inline rounded-full" />
        <h1 className="leading-7 font-SFMono font-semibold text-[18px] tracking-tight lg:tracking-wide text-text-highlight">
          Ruaridh Bell
        </h1>
        <p className="font-newsreader italic font-normal text-[17px]">
          Constructing the future of the web.{" "}
          <span className="font-SFMono not-italic font-normal leading-7 text-[15px]">
            Self taught Software Engineer. Always learning and improving.
          </span>
        </p>
        <p className="font-SFMono font-normal leading-7 decoration-gray-500 decoration-2 underline-offset-2">
          Currently a Software Engineer @{" "}
          <a
            href="https://livecode.com/"
            target={"_blank"}
            className="underline text-[#ffb3e4]"
          >
            LiveCode
          </a>
          , with a wide range of responsibilities, ranging from API development
          to Designing and implementing new software solutions.
        </p>
        <p className="font-SFMono font-normal leading-7 decoration-gray-500 decoration-2 underline-offset-2">
          Some personal projects i've made to keep myself busy can be found{" "}
          <a href="/projects" className="underline">
            here
          </a>{" "}
        </p>
        <p className="font-SFMono font-normal leading-7 decoration-gray-500 decoration-2 underline-offset-2">
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
          </a>{" "}
        </p>
        <p className="font-newsreader italic font-normal text-[17px] text-text-header">
          "Innovation distinguishes between a leader and a follower"{" "}
          <span className="font-SFMono font-normal leading-7 decoration-gray-500 text-[15px] text-gray-500 not-italic">
            - Steve Jobs
          </span>
        </p>
      </div>
    </div>
  );
}

export default Index;
