import { useEffect, useRef, useCallback } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Slide from "./Slide";

gsap.registerPlugin(ScrollTrigger);

const CircularSlider = ({ projects }) => {
  const circleContainerRef = useRef(null);
  const circleRef = useRef(null);
  const slideRef = useRef(null);
  const didUseEffectRef = useRef(null);

  const angle = useRef(0);
  const rectRight = useRef(0);
  const activeSlide = useRef(1);
  const didRotated = useRef(false);

  // update circleContainerRef height
  const heightUpdaterCircleContainer = () => {
    const slideNodeStyle = window.getComputedStyle(slideRef.current);
    const height = Number.parseFloat(slideNodeStyle.height);
    const marginTop = Number.parseFloat(slideNodeStyle.marginTop);
    const marginBottom = Number.parseFloat(slideNodeStyle.marginBottom);
    let totalHeight = height + marginTop + marginBottom;

    circleContainerRef.current.style.height = totalHeight + "px";
  };

  // mount circleContainerRef height updater event
  useEffect(() => {
    heightUpdaterCircleContainer();
    window.addEventListener("resize", heightUpdaterCircleContainer);

    return () => {
      window.removeEventListener("resize", heightUpdaterCircleContainer);
    };
  }, []);

  // calculate the arc of the circle slide
  const calculateArc = () => {
    const slideNodeStyle = window.getComputedStyle(slideRef.current);
    const width = Number.parseFloat(slideNodeStyle.width);
    const marginLeft = Number.parseFloat(slideNodeStyle.marginLeft);
    const marginRight = Number.parseFloat(slideNodeStyle.marginRight);

    return width + marginLeft + marginRight;
  };

  // calculate circumference of the circle
  const calculateCircumference = () => {
    const slideNodeStyle = window.getComputedStyle(slideRef.current);
    const marginBottom = Number.parseFloat(slideNodeStyle.marginBottom);
    const circleRadius = circleRef.current.clientHeight / 2;
    let totalRadius = marginBottom + circleRadius;

    return 2 * Math.PI * totalRadius;
  };

  // calculate the angle of the circle that was occupied for a single slide
  const calculateAngle = useCallback(() => {
    const arc = calculateArc();
    const circumference = calculateCircumference();

    return (arc / circumference) * 360;
  }, []);

  // add touch and drag events
  const hammerSetup = useCallback(async () => {
    let Hammer = (await import("hammerjs")).default;
    let timer;

    let slideItems = Array.from(circleRef.current.children);

    const goToSlide = function () {
      circleRef.current.classList.add("is--animating");
      circleRef.current.style.transform = `translateX(-50%) rotate(-${
        angle.current * activeSlide.current
      }deg)`;

      clearTimeout(timer);
      timer = setTimeout(() => {
        circleRef.current.classList.remove("is--animating");
      }, 400);
    };

    slideItems.forEach((slideItem) => {
      let hammertime = new Hammer(slideItem, {
        direction: Hammer.DIRECTION_VERTICAL,
      });

      hammertime.on("pan", (e) => {
        let percentage;

        percentage = (angle.current * e.deltaX) / rectRight.current;

        let transformPercentage =
          -(activeSlide.current * angle.current) + percentage;
        circleRef.current.style.transform = `translateX(-50%) rotate(${transformPercentage}deg)`;

        if (e.isFinal && didRotated.current) {
          if (percentage < 0) {
            activeSlide.current += 1;

            if (activeSlide.current > projects.length - 1) {
              activeSlide.current = projects.length - 1;
            }

            goToSlide();
          } else {
            activeSlide.current -= 1;

            if (activeSlide.current < 0) {
              activeSlide.current = 0;
            }

            goToSlide();
          }
        }
      });
    });
  }, [projects.length]);

  const handleResize = useCallback(() => {
    let slideItems = Array.from(circleRef.current.children);
    angle.current = calculateAngle();

    // rotate the slide to appropriate angle
    slideItems.forEach((slideItem, i) => {
      gsap.set(slideItem, {
        rotation: angle.current * i,
        duration: 1,
      });
    });

    // rotate circle to match active slide
    gsap.set(circleRef.current, {
      rotation: -(angle.current * activeSlide.current),
      duration: 1,
    });

    didRotated.current = true;

    // get the touch space for one direction of a slide
    let activeSlideRect = slideItems[0].getBoundingClientRect();
    rectRight.current = activeSlideRect.left + activeSlideRect.width;
  }, [calculateAngle]);

  const rotateSlide = useCallback(() => {
    let slideItems = Array.from(circleRef.current.children);
    angle.current = calculateAngle();

    // rotate the slide to appropriate angle
    slideItems.forEach((slideItem, i) => {
      gsap.to(slideItem, {
        rotation: angle.current * i,
        duration: 1,
      });
    });

    // rotate circle to match active slide
    gsap.to(circleRef.current, {
      rotation: -(angle.current * activeSlide.current),
      duration: 1,
      onComplete: hammerSetup,
    });

    didRotated.current = true;

    // get the touch space for one direction of a slide
    let activeSlideRect = slideItems[0].getBoundingClientRect();
    rectRight.current = activeSlideRect.left + activeSlideRect.width;

    window.addEventListener("resize", handleResize);
  }, [calculateAngle, hammerSetup, handleResize]);

  useEffect(() => {
    if (didUseEffectRef.current) {
      return;
    }
    didUseEffectRef.current = true;

    let sectionNode = circleContainerRef.current.parentNode;

    ScrollTrigger.create({
      onEnter: rotateSlide,
      trigger: sectionNode,
      start: "80% bottom",
      once: true,
    });

    return () => {
      window.removeEventListener("resize", rotateSlide);
    };
  }, [calculateAngle, hammerSetup, rotateSlide]);

  return (
    <div ref={circleContainerRef} className="relative h-40">
      <div
        ref={circleRef}
        className="absolute top-full left-1/2 -translate-x-1/2 w-[5000px] h-[5000px] rounded-full"
      >
        {projects.map((slide, i) => {
          if (i === 0) {
            return <Slide key={i} slide={slide} ref={slideRef} />;
          }

          return <Slide key={i} slide={slide} />;
        })}
      </div>
    </div>
  );
};

export default CircularSlider;
