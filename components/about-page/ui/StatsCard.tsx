import StatsChartSVG from "../svgs/StatsChartSVG";

const StatsCard = () => {
  return (
    <div className="lg:col-span-3 lg:row-span-4">
      <div className="group relative flex flex-col rounded-2xl border border-border-primary bg-bg-primary p-6 hover:bg-white overflow-hidden h-[220px] row-span-8 col-span-7">
        <div className="user-select-none pointer-events-none absolute inset-0 z-30 bg-linear-to-tl from-indigo-400/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100" />

        <h2 className="mb-2 font-medium group-hover:text-black">
          Music Stats{" "}
          <span className="ml-2 text-xs uppercase fadedText">coming soon</span>
        </h2>

        <div className="absolute inset-x-0 bottom-0">
          <StatsChartSVG />
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
