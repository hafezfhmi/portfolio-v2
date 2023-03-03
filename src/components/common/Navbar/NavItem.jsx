import Link from "next/link";

const NavItem = ({ text, link }) => {
  return (
    <Link
      href={link}
      className="group relative py-2 pl-4 pr-12 border-l-4 border-black bg-black text-white uppercase overflow-hidden"
    >
      {text}
      <span className="absolute w-full h-full left-0 top-full bg-white mix-blend-difference duration-700 pointer-events-none group-hover:top-0" />
    </Link>
  );
};

export default NavItem;
