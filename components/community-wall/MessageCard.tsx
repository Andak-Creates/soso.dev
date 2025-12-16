// components/MessageCard.tsx
import { Message } from "@/utils/supabase";

interface MessageCardProps {
  message: Message;
  rotation: number;
}

const gradients = [
  "from-rose-500 to-rose-200",
  "from-yellow-200 to-pink-400",
  "from-purple-400 to-pink-300",
  "from-teal-300 to-blue-100",
  "from-green-400 to-yellow-200",
];

const doodles = [
  // Doodle 1 - Hand drawn style
  <svg
    key="doodle1"
    className="absolute bottom-1"
    width="187"
    height="211"
    viewBox="0 0 187 211"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M49.9164 21.5361C45.538 18.9661 45.095 18.6423 39.9746 16.0037C32.7994 12.3062 25.169 7.91453 17.6312 5.8162C13.5213 4.67211 14.9956 7.90923 16.2292 10.9167C18.6493 16.8171 21.563 22.5439 24.1071 28.394C25.4887 31.5711 26.7501 34.8008 28.1682 37.9615C29.925 41.8769 30.0596 39.8194 30.7612 36.7125C33.824 23.1492 37.853 10.8709 48.1322 3.12233C48.6377 2.74126 50.2757 1.80775 49.7111 2.0813C44.983 4.37197 40.2336 6.55376 35.3876 8.58768C26.9813 12.1159 18.4575 15.3477 9.9751 18.6887C8.31824 19.3413 6.65769 19.9856 5.01868 20.6813C4.14052 21.054 3.24807 21.405 2.42536 21.8933C2.17637 22.0411 1.81612 22.2281 1.83933 22.5685C1.89113 23.3281 23.8132 22.8697 24.5282 22.8941C35.2424 23.2593 46.0229 24.6381 56.7536 25.3086"
      stroke="white"
      strokeWidth="2.4"
      strokeLinecap="round"
    />
  </svg>,
  // Doodle 2 - Swirly lines
  <svg
    key="doodle2"
    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
    width="183"
    height="215"
    viewBox="0 0 183 215"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M120.36 3.66043C119.011 8.23066 115.679 17.5265 118.526 22.2081C120.901 26.1154 129.345 21.582 131.553 20.4189C137.329 17.3755 142.408 13.032 146.755 8.20543C148.091 6.72281 149.757 4.76426 150.616 2.84486C152.105 -0.482205 148.337 3.15818 148.217 3.31536C144.589 8.08563 142.564 14.0807 141.613 19.9329C141.005 23.6655 140.102 30.8713 143.757 33.8144C145.384 35.1244 148.619 34.7626 150.293 34.2082C156.013 32.3128 160.703 27.7666 164.494 23.2977C167.003 20.3395 170.867 15.7341 171.632 11.6489C171.686 11.3646 171.526 10.8423 171.239 10.8755C169.685 11.0554 167.482 15.523 167.479 15.5291C164.992 20.3129 163.524 24.6312 162.263 29.9428C160.687 36.5789 159.171 44.9519 161.227 51.7311C164.006 60.8936 175.77 53.77 180.894 51.7282"
      stroke="#F6FBFE"
      strokeWidth="2.4"
      strokeLinecap="round"
    />
  </svg>,
  // Doodle 3 - Face-like
  <svg
    key="doodle3"
    className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 141 149"
  >
    <path
      d="M 26.981 61.83 L 26.981 74.677 M 44.538 50.696 L 53.103 50.696 M 26.124 33.995 C 27.044 33.88 26.553 28.914 26.553 28 M 3 49.412 L 15.847 49.412 M 18.416 39.562 C 17.65 39.562 15.799 37.754 15.419 36.992 M 39.828 39.562 C 42.301 39.562 42.631 37.946 44.538 36.992 M 39.828 59.69 C 39.954 60.701 43.944 63.889 44.966 64.4 M 15.418 61.402 C 12.318 61.402 11.383 64.062 8.995 65.256"
      fill="transparent"
      strokeWidth="4"
      stroke="white"
      strokeLinecap="round"
      strokeMiterlimit="10"
    />
  </svg>,
  // Doodle 4 - Scribble
  <svg
    key="doodle4"
    className="absolute left-1/2 top-1/2 h-full w-3/4 -translate-x-1/2 -translate-y-1/2"
    width="191"
    height="117"
    viewBox="0 0 191 117"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M43.8532 21.6587C35.2616 30.8676 9.64144 58.5872 18.7959 49.9377C28.5802 40.6931 37.719 30.7576 47.412 21.4126C49.1624 19.725 50.8448 17.9477 52.7717 16.4649C56.3375 13.721 47.0667 23.4289 44.0477 26.765C32.8988 39.0849 29.2779 42.82 17.9058 55.5342C14.0593 59.8346 10.1855 64.113 6.46175 68.5201C4.9633 70.2936 -2.50903 79.0773 5.38398 72.0587"
      stroke="white"
      strokeWidth="2.4"
      strokeLinecap="round"
    />
  </svg>,
  // Doodle 5 - Smiley
  <svg
    key="doodle5"
    className="absolute bottom-4 right-4 h-14 w-14 rotate-[25deg] mix-blend-color-dodge"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 126 138"
  >
    <path
      d="M 41.415 66.638 C 41.415 67.654 41.122 69.39 42.621 69.39 C 43.635 69.39 45.145 68.037 45.203 66.982 C 45.265 65.875 45.041 64.574 43.654 64.574 C 42.904 64.574 41.057 64.256 40.726 64.918 M 76.202 63.541 C 76.202 65.768 75.913 67.317 78.767 66.561 C 80.82 66.019 83.436 64.364 83.436 61.993 C 83.436 59.224 81.101 59.413 78.958 59.413 C 76.889 59.413 77.58 61.96 77.58 63.541 M 24.537 86.593 C 30.682 92.172 36.278 98.044 44.209 101.158 C 49.42 103.205 55.301 102.764 60.779 102.764 C 67.156 102.764 72.485 100.923 77.963 97.68 C 88.004 91.734 98.735 83.23 104.522 72.87 C 106.994 68.444 107.62 64.203 108.579 59.413"
      fill="transparent"
      strokeWidth="5"
      stroke="#469C66"
      strokeLinecap="round"
      strokeMiterlimit="10"
    />
  </svg>,
];

export default function MessageCard({ message, rotation }: MessageCardProps) {
  const gradientIndex = message.name.length % gradients.length;
  const doodleIndex = message.message.length % doodles.length;

  // Generate initials for avatar fallback
  const initials = message.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <div
      className="flex flex-col items-start justify-between gap-2 rounded-xl border-2 border-gray-200 bg-gray-50 p-2.5 h-[300px] w-[250px] shadow-[12px_12px_0px_0px_rgba(214,218,222,0.3)]"
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <div
        className={`h-full w-full rounded-md bg-gradient-to-b ${gradients[gradientIndex]} relative flex items-center justify-center text-balance p-4 text-center`}
      >
        {doodles[doodleIndex]}
        <p className="z-10 line-clamp-6 text-center text-xl font-bold text-white drop-shadow-sm">
          {message.message}
        </p>
      </div>
      <div className="flex w-full items-center space-x-2">
        <div className="h-8 w-8 flex-shrink-0 rounded-full bg-gray-300 border-2 border-transparent ring-1 ring-gray-300 flex items-center justify-center text-sm font-semibold text-gray-700">
          {initials}
        </div>
        <p className="truncate text-gray-600">{message.name}</p>
      </div>
    </div>
  );
}
