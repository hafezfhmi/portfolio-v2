import ProjectCard from "@/components/common/ProjectCard";

let projects = [
  {
    title: "CatGallery Webapp",
    img: "/images/project-2.png",
    bg: "bg-main-red",
    desc: "A cat gallery full-stack webapp that allows the user to upload their cat image and interact with each other",
    skills: ["React", "HTML/CSS", "Node.js", "Express.js", "MySQL", "Docker"],
    github: "https://github.com/hafezfhmi/CatGallery",
  },
  {
    title: "KucingPunk Website",
    img: "/images/project-1.png",
    award: "/images/mwa-month.png",
    bg: "bg-main-yellow",
    desc: "An NFT project's website that display the detail of the NFT. Achieved 10k+ MYR in profit and awarded Site of the Month by Malaysia Website Awards",
    skills: ["React", "Next.js", "HTML/CSS", "Node.js"],
    github: "https://github.com/hafezfhmi/kucingpunk.com",
    site: "https://www.kucingpunk.com",
  },
  {
    title: "Portfolio Website",
    img: "/images/project-3.png",
    bg: "bg-main-blue",
    desc: "My portfolio website to showcase my skills and related details on the industry",
    skills: ["React", "Next.js", "HTML/CSS", "TailwindCSS"],
    github: "https://github.com/hafezfhmi/portfolio",
    site: "http://hafezfhmi.com",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-10 border-b-2 border-black">
      <h2 className="mb-16 text-5xl text-center font-bold uppercase">
        Projects
      </h2>
      <div className="grid gap-6 px-6 lg:grid-cols-3 lg:gap-12 lg:auto-rows-fr">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
