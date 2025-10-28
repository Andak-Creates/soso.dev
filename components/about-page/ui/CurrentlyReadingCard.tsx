import Image from "next/image";

const CurrentlyReadingCard = () => {
  return (
    <div className="hidden lg:col-span-2 lg:col-start-11 lg:row-span-10 lg:block lg:min-h-[50px]">
      <div className="group relative flex flex-col rounded-2xl border border-border-primary bg-bg-primary p-6 hover:bg-white overflow-hidden h-full row-span-8 col-span-7">
        <div
          className="user-select-none pointer-events-none absolute inset-0 z-30 bg-linear-to-tl
         from-indigo-400/20 via-transparent to-transparent opacity-0 transition-opacity duration-300
          ease-in-out group-hover:opacity-100"
        />

        <h2 className="mb-2 font-medium group-hover:text-black">
          Currently Reading
        </h2>
        <small className="fadedText">The Vampire Lestat </small>

        <div className="relative h-full">
          <div
            className="absolute left-1 top-6 h-full origin-bottom-left 
          transition-transform duration-300 ease-in-out group-hover:-rotate-3"
          >
            <div
              className="relative aspect-video h-full w-96 overflow-hidden rounded
             bg-red-500"
            >
              <div className="absolute left-5 h-full w-2 bg-slate-900/20 blur-sm" />
              <Image
                src="https://cdn.hmv.com/r/w-640/hmv/files/06/065bd9f5-b511-4beb-b6fc-cbd0d997fe14.jpg"
                alt="The Vampire lestat"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="absolute inset-0 h-full w-full bg-linear-to-t from-white via-transparent to-transparent" />
      </div>
    </div>
  );
};

export default CurrentlyReadingCard;
