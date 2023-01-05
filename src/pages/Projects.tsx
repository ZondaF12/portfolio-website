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

    console.log(data);

    const sortedDesc = await res.sort(
      (objA: any, objB: any) =>
        new Date(objB["updated_at"]) - new Date(objA["updated_at"])
    );

    setData(sortedDesc);
  };

  useEffect(() => {
    getData();
  }, []);

  function getDate(IsoDate: string) {
    let year = new Date(IsoDate).getFullYear();
    let month = new Date(IsoDate).getMonth().toString().padStart(2, "0");

    return `${month} / ${year}`;
  }

  return (
    <div className="bg-background-blue w-screen h-screen">
      <div className="py-20 px-10 xl:px-[34.5%] lg:px-[20%] space-y-12 text-[14px] font-SFMono font-normal divide-zinc-700 divide-y">
        <h1 className="leading-7 font-SFMono font-semibold text-[16px] tracking-tight lg:tracking-wide lg:mt-20 text-text-highlight">
          <a className="text-gray-500 hover:text-neutral-600" href="/">
            ../
          </a>{" "}
          Projects
        </h1>
        <div className="divide-y divide-zinc-700 text-gray-500">
          {data.map((project) =>
            data.length < 1 ? (
              <div className="py-3">No projects found</div>
            ) : (
              <div className="divide-y divide-zinc-700 text-gray-500 relative">
                <div className="py-3">
                  <span className="absolute">
                    {new Date(project["updated_at"]).getFullYear()}
                  </span>
                  <div className="flex flex-row justify-between ml-[18%]">
                    <a
                      className="text-[#E5E5E5] hover:text-gray-500 truncate font-SFMono"
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
