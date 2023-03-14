import { useState } from "react";
import Link from "next/link";
import { RemoveScroll } from "react-remove-scroll";
import styles from "./MobileNav.module.css";

const navigationList = [
  { text: "About", link: "/#about" },
  { text: "Projects", link: "/#projects" },
  { text: "Contact", link: "/#contact" },
];

const MobileNav = () => {
  const [showNav, setShowNav] = useState(false);

  const handleShowNav = () => {
    setShowNav((prev) => !prev);
  };

  return (
    <RemoveScroll enabled={showNav} removeScrollBar={false}>
      <div className="md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          onClick={handleShowNav}
          className={styles.mobileNav__button}
        >
          {showNav ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          )}
        </svg>

        <nav
          className={
            (showNav ? "left-0 " : "left-full ") + styles.mobileNav__nav
          }
        >
          <Link
            href="/"
            onClick={handleShowNav}
            className="absolute top-4 left-4 text-3xl font-bold"
          >
            HFz
          </Link>
          {navigationList.map((navigationItem) => (
            <Link
              key={navigationItem.text}
              href={navigationItem.link}
              onClick={handleShowNav}
            >
              {navigationItem.text}
            </Link>
          ))}
        </nav>
      </div>
    </RemoveScroll>
  );
};

export default MobileNav;
