import { useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import CircularSlider from "@/components/common/CircularSlider";

gsap.registerPlugin(ScrollTrigger);

let projects = [
  {
    title: "KucingPunk Website",
    img: "/images/project-1.png",
    award: "/images/mwa-month.png",
    bg: "bg-main-yellow",
  },
  {
    title: "CatGallery Webapp",
    img: "/images/project-2.png",
    bg: "bg-main-red",
  },
  {
    title: "Portfolio Website",
    img: "/images/project-3.png",
    bg: "bg-main-blue",
  },
];

const Projects = () => {
  let sectionRef = useRef(null);

  return (
    <section
      ref={sectionRef}
      className="border-b-4 border-black py-14 overflow-hidden"
    >
      <h2 className="mb-16 text-6xl text-center font-extrabold uppercase">
        Projects
      </h2>
      <CircularSlider projects={projects} />
    </section>
  );
};

export default Projects;
