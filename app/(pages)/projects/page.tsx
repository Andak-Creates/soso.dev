import Image from "next/image";
import Link from "next/link";
import { MdNavigateNext } from "react-icons/md";

const page = () => {
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
    <div className="">
      <div className="my-[30px]">
        <h1 className="text-[30px] text-center md:w-[40%] md:mx-auto md:text-[50px]">
          A collection of my recent Projects.
        </h1>
      </div>

      {/* Projects */}
      <div className="flex flex-col gap-[50px]">
        {projects.map((project) => (
          <div key={project.id} className="px-10 md:px-[60px]">
            {/* Image */}
            <div className="h-[250px] sm:h-[350px] md:h-[500px] lg:h-[650px] xl:h-[800px] w-full border rounded-3xl relative overflow-hidden">
              <Image
                src={project.image}
                alt="project image"
                fill
                className="object-cover"
              />
            </div>

            {/* title and description */}
            <div className="my-5">
              <h2 className="text-[23px] font-medium">{project.title}</h2>
              <p className="fadedText my-4">{project.description}</p>

              <Link
                href={project.link}
                className="text-blue-700 flex flex-row gap-2"
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

export default page;
