import Image from "next/image";
import Link from "next/link";
import { MdNavigateNext } from "react-icons/md";

const Page = () => {
  const projects = [
    {
      id: 1,
      image: "/avatars/image1.jpg",
      title: "My Project Title",
      description: "This is where I input the project description",
      link: "link to project",
    },

    {
      id: 2,
      image: "/avatars/image2.jpg",
      title: "My Project Title",
      description: "This is where I input the project description",
      link: "link to project",
    },
  ];

  return (
    <div>
      <div className="my-[30px]">
        <h1 className="text-[30px] text-center md:w-[40%] md:mx-auto md:text-[50px]">
          A collection of my recent Projects.
        </h1>
      </div>

      {/* Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[50px] px-3 md:px-[30px] ">
        {projects.map((project) => (
          <div key={project.id} className=" md:px-2.5 group cursor-pointer">
            {/* Image */}
            <div className="h-[300px] sm:h-[350px] md:h-[400px] w-full rounded-2xl relative overflow-hidden">
              <Image
                src={project.image}
                alt="project image"
                fill
                className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              />

              <span className="text-white bg-black absolute px-5 rounded-full top-1 left-1">
                Live
              </span>
            </div>

            {/* title and description */}
            <div className="my-5">
              <h2 className="text-[23px] font-medium">{project.title}</h2>
              <p className="fadedText my-4">{project.description}</p>

              <Link
                href={project.link}
                className="text-blue-700 flex flex-row gap-0 hover:gap-2 w-fit"
              >
                <small>Visit {project.title}</small>
                <MdNavigateNext />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
