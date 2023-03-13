import Link from "next/link";
import NavItem from "./NavItem";

const navigationList = [
  { text: "About", link: "/" },
  { text: "Projects", link: "/" },
  { text: "Contact", link: "/" },
];

const Navbar = () => {
  return (
    <div className="hidden justify-between items-center sticky top-0 border-t-2 border-b-2 border-black bg-white text-3xl font-bold z-[100] md:flex">
      <Link href="/" className="ml-6 mr-12">
        HFz
      </Link>
      <nav className="flex items-center">
        {navigationList.map((navigationItem) => (
          <NavItem
            key={navigationItem.text}
            text={navigationItem.text}
            link={navigationItem.link}
          />
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
