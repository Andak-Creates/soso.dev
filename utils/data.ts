export interface Music {
  id: number;
  image: string;
  title: string;
  link: string;
}

export interface YoutubeVideos {
  id: number;
  category: string;
  desc: string;
  link: string;
}

export const youtubeVideos: YoutubeVideos[] = [
  {
    id: 1,
    category: "Music Video",
    desc: "Sunflower (Official YouTube Video)",
    link: "https://www.youtube.com/embed/LHkoyAvdD4E?si=JgOZvGTPOjNU2g39",
  },
  {
    id: 2,
    category: "Podcast",
    desc: "Is It Okay to Date Your Friend's Sister or Ex-Girlfriend? | Relationship Ep1",
    link: "https://www.youtube.com/embed/VgvSx6ww5Wc?si=cMjTDUOXmznVb1ud",
  },
  {
    id: 3,
    category: "Podcast",
    desc: "Is It Okay to Date Your Friend's Sister or Ex-Girlfriend? | Relationship Ep1, pt2",
    link: "https://www.youtube.com/embed/PdUrED_23uA?si=_gPSuLmaWtptPJIz",
  },
];
