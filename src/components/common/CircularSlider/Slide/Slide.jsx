import { forwardRef } from "react";
import Image from "next/image";
import styles from "./Slide.module.css";

const Slide = forwardRef(function Slide({ slide }, ref) {
  return (
    <div className="absolute bottom-1/2 left-1/2 -translate-x-1/2 origin-bottom w-2 h-1/2">
      <div
        ref={ref}
        className="absolute bottom-full left-50 -translate-x-1/2 mx-4 mb-6 md:mb-20"
      >
        <div className={styles.slide}>
          <Image
            src={slide.img}
            alt={slide.title}
            width={600}
            height={400}
            className="w-full aspect-video object-contain pointer-events-none select-none"
          />
          <p
            className={
              slide.bg +
              " p-2 border-t-2 border-black rounded-b-3xl text-center md:p-3 lg:p-4 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl"
            }
          >
            {slide.title}
          </p>
        </div>
        {slide.award && (
          <span className="absolute w-14 h-14 top-0 right-0 translate-x-1/2 translate-y-1/2 p-2 border-2 border-black rounded-full bg-white sm:w-16 sm:h-16 lg:w-20 lg:h-20 lg:p-2.5">
            <Image
              src={slide.award}
              alt="Award badge"
              width={300}
              height={300}
              className="pointer-events-none select-none"
            />
          </span>
        )}
      </div>
    </div>
  );
});

export default Slide;
