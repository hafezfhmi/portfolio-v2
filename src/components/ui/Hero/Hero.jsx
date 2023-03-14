import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import styles from "./Hero.module.css";

const Hero = () => {
  const sectionRef = useRef(null);
  const catRef = useRef(null);
  const bubble1Ref = useRef(null);
  const bubble2Ref = useRef(null);
  const bubble3Ref = useRef(null);
  const bubble4Ref = useRef(null);
  const headerRef = useRef(null);
  const subHeaderRef = useRef(null);
  const didAnimateRef = useRef(false);

  useEffect(() => {
    if (didAnimateRef.current) {
      return;
    }

    didAnimateRef.current = true;

    let tl1 = gsap.timeline({ repeat: -1, yoyo: true });
    let tl2 = gsap.timeline({ repeat: -1, yoyo: true });
    let tlText = gsap.timeline();

    // Initial load
    tlText.set(sectionRef.current, { opacity: 100 });

    // text and cat animation
    tlText
      .from(headerRef.current, {
        duration: 0.8,
        y: "100%",
        clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 0%)",
        ease: "circ.out",
      })
      .from(subHeaderRef.current, {
        duration: 0.8,
        y: "100%",
        clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 0%)",
        ease: "circ.out",
      })
      .from(catRef.current, { duration: 1.5, y: 100, ease: "circ.out" })
      .from(
        [
          bubble1Ref.current,
          bubble2Ref.current,
          bubble3Ref.current,
          bubble4Ref.current,
        ],
        { scale: 0, duration: 1.5 },
        "<"
      );

    // bubble move animation
    tl1
      .to([bubble1Ref.current, bubble4Ref.current], {
        y: -10,
        ease: "power1.inOut",
        duration: 2.5,
      })
      .to([bubble1Ref.current, bubble4Ref.current], {
        y: 10,
        ease: "power1.inOut",
        duration: 2.5,
      });

    tl2
      .to([bubble2Ref.current, bubble3Ref.current], {
        y: 10,
        ease: "power1.inOut",
        duration: 2.5,
      })
      .to([bubble2Ref.current, bubble3Ref.current], {
        y: -10,
        ease: "power1.inOut",
        duration: 2.5,
      });
  }, []);

  return (
    <section ref={sectionRef} className={styles.hero}>
      <div className="text-center">
        <h1 className={styles.hero__header} ref={headerRef}>
          I am Hafez Fahmi
        </h1>
        <p className={styles.hero__subHeader} ref={subHeaderRef}>
          A Full-Stack{" "}
          <mark className={styles.hero__highlight}>JavaScript</mark>{" "}
          <br className="md:hidden" /> Developer
        </p>
      </div>
      <div className="flex justify-center relative">
        <div className={styles.cat__container}></div>
        <div className="relative block h-80 w-72 2xl:w-[480px] 2xl:h-[480px]">
          <div className="absolute bottom-0 overflow-hidden">
            <Image
              src="/images/cat-wizard.png"
              alt="Cat wizard"
              width={605}
              height={707}
              priority
              className="z-10 pointer-events-none select-none"
              ref={catRef}
            />
          </div>

          <div
            className={
              styles.bubble +
              " -top-14 -left-6 bg-main-yellow md:-top-6 md:-left-48 lg:-top-20 lg:-left-[340px] xl:-top-48 xl:-left-[420px] 2xl:-top-56 2xl:-left-[320px]"
            }
            ref={bubble1Ref}
          >
            JavaScript
          </div>
          <div
            className={
              styles.bubble +
              " top-4 left-8 bg-main-red md:-left-20 lg:top-4 lg:-left-40 xl:top-4 xl:-left-72 2xl:top-4 2xl:-left-56"
            }
            ref={bubble2Ref}
          >
            Express.js
          </div>
          <div
            className={
              styles.bubble +
              " -top-14 -right-6 bg-main-green  md:-top-6 md:-right-48 lg:-top-20 lg:-right-[340px] xl:-top-36 xl:-right-[420px] 2xl:-top-44 2xl:-right-80"
            }
            ref={bubble3Ref}
          >
            Node.js
          </div>
          <div
            className={
              styles.bubble +
              " top-4 right-8 bg-main-blue md:-right-20  lg:top-4 lg:-right-40  xl:-top-2 xl:-right-52 2xl:-top-8 2xl:-right-32"
            }
            ref={bubble4Ref}
          >
            React
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
