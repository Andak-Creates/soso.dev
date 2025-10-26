import About from "@/components/landing-page/About";
import MySite from "@/components/landing-page/MySite";
import Projects from "@/components/landing-page/Projects";
import DraggableImages from "@/components/ui/DraggableImages";
import Image from "next/image";

const page = () => {
  return (
    <div>
      {/* Image */}
      <div className=" p-4 w-fit h-fit rounded-full mx-auto">
        {/* Image Holder */}
        <div className="relative h-[130px] w-[130px] rounded-full overflow-hidden border-4">
          <Image
            src={"/profilePic.png"}
            alt="profile Image"
            fill
            className="object-cover rounded-full"
          />
        </div>
      </div>

      {/* Welcome */}
      <div className="px-[30px] mt-8">
        <h1
          className="mx-auto max-w-2xl text-center 
        text-4xl font-medium leading-tight tracking-tighter
         text-text-primary md:text-6xl md:leading-16"
        >
          Hey, I&apos;m Kelvin! <br /> Welcome to my corner of the internet!
        </h1>
      </div>

      <div className="px-[30px] mt-5 text-center text-[16px]">
        <p className="lg:w-[70%] mx-auto leading-8">
          I&apos;m a front-end developer inlove with making music and a passion
          for building optimized and accessible web && mobile applications. I
          love exploring new technologies and continuously improving my skills
          to create seamless user experiences.
        </p>
      </div>

      {/* draggable Images */}
      <DraggableImages />

      {/* About section */}
      <About />

      {/* Projects section */}
      <Projects />

      {/* My Site Section */}
      <MySite />
    </div>
  );
};

export default page;
