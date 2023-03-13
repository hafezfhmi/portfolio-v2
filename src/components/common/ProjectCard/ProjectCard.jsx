import Image from "next/image";
import styles from "./ProjectCard.module.css";

const ProjectCard = ({ project }) => {
  return (
    <div className="flex flex-col border-2 border-black rounded-3xl bg-white overflow-hidden duration-200">
      <div className="flex justify-center">
        <Image
          src={project.img}
          alt={project.title}
          width={600}
          height={400}
          className="lg:aspect-video lg:object-contain"
        />
      </div>

      <div className="flex flex-col flex-grow">
        <p
          className={
            project.bg +
            " p-2 border-y-2 border-black text-center text-xl md:text-2xl xl:text-3xl 2xl:text-4xl"
          }
        >
          {project.title}
        </p>
        <div className="flex flex-col justify-between flex-grow p-4">
          <p className="mb-4 text-center text-base md:text-lg xl:text-xl 2xl:text-2xl">
            {project.desc}
          </p>

          <div className="flex flex-wrap gap-y-2 gap-x-3 ">
            {project.skills.map((skill, i) => (
              <p key={i} className={project.bg + " " + styles.skills}>
                {skill}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
