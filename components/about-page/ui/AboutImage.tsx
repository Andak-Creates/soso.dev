import Image from "next/image";

interface ImageProps {
  img: string;
}

const AboutImage = ({ img }: ImageProps) => {
  return (
    <div className="mb-8 lg:hidden w-[80%] md:w-[300px] mx-auto md:mx-0">
      <div className="relative mx-auto w-full lg:w-fit">
        <div className="group inline-block text-center w-full">
          <div
            className="rounded-[20px] border border-border-primary p-2 w-full"
            style={{ height: 278 }}
          >
            <div
              className="grid h-full place-items-center rounded-xl border-2 border-[#A5AEB81F]/10 bg-[#EDEEF0]"
              style={{
                boxShadow: "rgba(165, 174, 184, 0.32) 0px 2px 1.5px 0px inset",
              }}
            ></div>
          </div>
        </div>
        <Image
          className="absolute left-0 top-0 h-[270px] w-full lg:w-[180px] rotate-[-8deg] rounded-lg object-cover shadow"
          alt="A headshot"
          src={img}
          width={180}
          height={270}
        />
      </div>
    </div>
  );
};

export default AboutImage;
