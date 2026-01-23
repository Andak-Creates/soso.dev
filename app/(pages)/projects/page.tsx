import Image from "next/image";
import Link from "next/link";
import { MdNavigateNext } from "react-icons/md";

const Page = () => {
  const projects = [
    {
      id: 1,
      image: "/projects/triberPic.png",
      title: "The Triber Platform",
      description:
        "Contributed to the Triber platform as a Frontend Engineering Intern, gaining hands-on exposure to the development workflow, participating in feature testing, and supporting the team throughout the product development lifecycle.",
      link: "https://thetriberplatform.com/",
      status: "Live",
      type: "Web Application",
    },

    {
      id: 2,
      image: "/projects/trueNorthpic.png",
      title: "TrueNorth Solutions",
      description:
        "Developed the TrueNorth website using Next.js, implementing the design and enhancing the UI with improved responsiveness for a seamless user experience. The site is currently deployed in demo mode on Vercel, pending backend integration.",
      link: "https://true-north-design2.vercel.app/",
      status: "Demo",
      type: "Web Application",
    },

    {
      id: 3,
      image: "/projects/deckedoutThumb.jpg",
      title: "Decks Out",
      description:
        "A mobile party card game app currently in testing on TestFlight. The app features multiple interactive game modes, including Truth or Dare, Never Have I Ever, Do or Drink, Adult Charades, and Ice Breaker Roulette, organized into themed categories like Mild Mischief, Risky Business, and Sin City. Designed for smooth interactions, intuitive UI, and engaging group play.",
      link: "",
      status: "testing Phase",
      type: "Mobile Application",
    },

    {
      id: 4,
      image: "/projects/theScenePic.jpg",
      title: "TheScene",
      description:
        "A social discovery app that helps users find and attend parties based on location, preferences, and trending events. Features include personalized recommendations, ticket links, and a social feed. Currently in development, with a focus on responsive UI and seamless user experience.",
      link: "",
      status: "In Progress",
      type: "Mobile Application",
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

              <span className="text-black bg-white absolute px-5 rounded-full top-2 left-3 border border-[red]">
                {project.status}
              </span>
            </div>

            {/* title and description */}
            <div className="my-5">
              <h2 className="text-[23px] font-semibold">
                {project.title}{" "}
                <span className="text-[12px] text-[#aaa]">{project.type}</span>
              </h2>
              <p className="fadedText my-2">{project.description} </p>

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
