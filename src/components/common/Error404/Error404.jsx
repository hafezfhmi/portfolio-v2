import Image from "next/image";
import styles from "./Error404.module.css";

const Error404 = () => {
  return (
    <div className={styles.error404}>
      <Image
        src="/images/404-sad.png"
        width={600}
        height={400}
        alt="cat crying"
      />
      <p className="text-lg md:text-xl xl:text-2xl 2xl:text-3xl">
        404. Page Not Found.
      </p>
    </div>
  );
};

export default Error404;
