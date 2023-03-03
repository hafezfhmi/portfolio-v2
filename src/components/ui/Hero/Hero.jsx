import Image from "next/image";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className="text-center z-30">
        <h1 className={styles.hero__header}>I am Hafez Fahmi</h1>
        <p className="mb-8 text-3xl font-medium md:text-5xl 2xl:mb-16">
          A Full-Stack{" "}
          <mark className={styles.hero__highlight}>JavaScript</mark>{" "}
          <br className="md:hidden" />
          <span>Developer</span>
        </p>
      </div>
      <div className="flex justify-center relative">
        <div className={styles.cat__container}></div>
        <div className="relative block h-80 w-72 2xl:w-[480px] 2xl:h-[480px]">
          <Image
            src="/images/cat-wizard.png"
            alt="Cat wizard"
            fill
            className="z-10 object-contain"
          />
          <div
            className={
              styles.bubble +
              " -top-14 -left-6 bg-main-yellow md:-top-6 md:-left-48 lg:-top-20 lg:-left-[340px] xl:-top-48 xl:-left-[420px] 2xl:-top-56 2xl:-left-[320px]"
            }
          >
            JavaScript
          </div>
          <div
            className={
              styles.bubble +
              " top-4 left-8 bg-main-red md:-left-20 lg:top-4 lg:-left-40 xl:top-4 xl:-left-72 2xl:top-4 2xl:-left-56"
            }
          >
            Express.js
          </div>
          <div
            className={
              styles.bubble +
              " -top-14 -right-6 bg-main-green  md:-top-6 md:-right-48 lg:-top-20 lg:-right-[340px] xl:-top-36 xl:-right-[420px] 2xl:-top-44 2xl:-right-80"
            }
          >
            Node.js
          </div>
          <div
            className={
              styles.bubble +
              " top-4 right-8 bg-main-blue md:-right-20  lg:top-4 lg:-right-40  xl:-top-2 xl:-right-52 2xl:-top-8 2xl:-right-32"
            }
          >
            React
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
