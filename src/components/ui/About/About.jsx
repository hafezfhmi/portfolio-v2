import styles from "./About.module.css";

const About = () => {
  return (
    <section className="border-b-2 border-black bg-main-purple">
      <h2
        id="about"
        className="py-3 pl-6 border-b-2 border-black text-5xl font-bold uppercase"
      >
        About
      </h2>
      <div className="grid md:grid-cols-2 text-lg md:text-xl xl:text-2xl 2xl:text-3xl">
        <div className="flex flex-col justify-center py-8 px-6 border-b-2 border-black md:border-b-0 md:border-r-2">
          <p>
            I&apos;m a full-stack developer with a passion for creating scalable
            web applications that solve complex problems and deliver exceptional
            user experiences. I&apos;m always seeking new challenges and
            opportunities to learn and grow, committed to delivering innovative
            solutions that meet business and user needs.
          </p>
          <br />
          <p>
            When I&apos;m not coding, I enjoy learning about tech to &quot;level
            up myself&quot;, working on personal projects, and exploring my
            interest in the economic and finance sector.
          </p>
        </div>
        <div className="py-8 px-6">
          <div className="grid grid-cols-6 gap-x-3 gap-y-4 text-center">
            <p className={styles.skill + " col-span-3 bg-main-yellow"}>
              JavaScript
            </p>
            <p className={styles.skill + " col-span-3 bg-main-blue"}>React</p>
            <p className={styles.skill + " col-span-3 bg-main-green"}>
              Node.js
            </p>
            <p className={styles.skill + " col-span-3 bg-main-red"}>
              Express.js
            </p>

            <p className={styles.skill + " col-span-3 bg-main-blue"}>
              TailwindCSS
            </p>
            <p className={styles.skill + " col-span-3 bg-main-darkBlue"}>
              MySQL
            </p>
            <p className={styles.skill + " col-span-3 bg-main-green"}>
              MongoDB
            </p>
            <p className={styles.skill + " col-span-3 bg-main-blue"}>Docker</p>
            <p className={styles.skill + " col-span-3 bg-white"}>Next.js</p>
            <p className={styles.skill + " col-span-3 bg-main-red"}>SASS</p>
            <p className={styles.skill + " col-span-3 bg-main-yellow"}>HTML</p>
            <p className={styles.skill + " col-span-3 bg-main-darkBlue"}>CSS</p>
            <p className={styles.skill + " col-span-3 bg-main-red"}>Jest</p>
            <p className={styles.skill + " col-span-3 bg-white"}>Cypress</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
