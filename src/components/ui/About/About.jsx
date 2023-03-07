import styles from "./About.module.css";

const About = () => {
  return (
    <section className="border-b-4 border-black bg-main-purple">
      <h2 className="py-3 pl-4 border-b-4 border-black text-6xl font-extrabold uppercase">
        About
      </h2>
      <div className="grid md:grid-cols-2 text-3xl">
        <div className="py-6 px-4 border-b-4 border-black md:border-b-0 md:border-r-4">
          <p>
            Hi! I am Hafez Fahmi,
            <br />a Full-Stack JavaScript
            <br /> Developer.
          </p>
          <br />
          <p>
            I enjoy playing around with <br />
            technologies to create <br />
            solutions that have an <br />
            impact on the user.
          </p>
        </div>
        <div className="py-6 px-4">
          <p className="mb-10">What I&apos;ve worked with:</p>

          <div className="grid grid-cols-6 gap-2 text-center text-base md:text-lg xl:text-3xl">
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
