import { useEffect, useState } from "react";
import React from "react";
import got from "got";

function Projects() {
  const [data, setData] = useState([]);

  const getData = async () => {
    let res;
    await fetch("https://api.github.com/users/zondaf12/repos")
      .then((response) => response.json())
      .then((data) => {
        res = data;
      });

    const sortedDesc = await res.sort(
      (objA: any, objB: any) =>
        new Date(objB["updated_at"]).valueOf() -
        new Date(objA["updated_at"]).valueOf()
    );

    setData(sortedDesc);
  };

  useEffect(() => {
    getData();
  }, []);

  function getDate(IsoDate: string) {
    let year: number = new Date(IsoDate).getFullYear();
    let month: string = (new Date(IsoDate).getMonth() + 1).toString();

    month = month.toString().padStart(2, "0");

    return `${month} / ${year}`;
  }

  return (
    <div className="bg-background-blue h-screen">
      <div className="py-20 px-10 xl:px-[34.5%] lg:px-[20%] space-y-12 text-[14px] font-SFMono divide-zinc-700 divide-y">
        <h1 className="leading-7 font-SFMono font-semibold text-[16px] tracking-tight lg:tracking-wide text-text-highlight">
          <a className="text-text-main hover:text-text-header" href="/">
            ../
          </a>{" "}
          Projects
        </h1>
        <div className="divide-y divide-zinc-700 text-text-main">
          {data.map((project) =>
            data.length < 1 ? (
              <div className="py-3">No projects found</div>
            ) : (
              <div className="divide-y divide-zinc-700 text-gray-500 relative">
                <div className="py-3">
                  <span className="absolute">
                    {project["language"] === "JavaScript"
                      ? "JS"
                      : project["language"] === "TypeScript"
                      ? "TS"
                      : project["language"]}
                  </span>
                  <div className="flex flex-row justify-between ml-[18%]">
                    <a
                      className="text-text-header hover:text-text-highlight truncate font-SFMono"
                      href={project["html_url"]}
                    >
                      {project["name"]}
                    </a>
                    <span className="text-gray-500">
                      {getDate(project["updated_at"])}
                    </span>
                  </div>
                </div>
              </div>
            )
          )}
          <div />
        </div>
      </div>
    </div>
  );
}

export default Projects;
