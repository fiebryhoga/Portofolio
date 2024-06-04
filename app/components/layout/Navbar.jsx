import { useState, useEffect, useRef } from "react";
import { IoIosHome } from "react-icons/io";
import { MdArticle } from "react-icons/md";
import { FaFolderOpen } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { BiSolidUserPin } from "react-icons/bi";
import Link from "next/link";

const Tooltip = ({ text, visible }) => {
  return (
    <div
      className={`absolute mt-2 w-max py-1 px-2 bg-black text-[#329f9a] text-sm rounded-lg transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      style={{ bottom: "-30px", left: "-10px" }}
    >
      {text}
    </div>
  );
};

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [tooltipVisible, setTooltipVisible] = useState(null);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const navbarTopPos = navbarRef.current ? navbarRef.current.offsetTop : 0;
      const threshold = 200;

      setVisible(
        prevScrollPos > currentScrollPos ||
          currentScrollPos < navbarTopPos + threshold
      );
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const handleMouseEnter = (index) => {
    setTooltipVisible(index);
  };

  const handleMouseLeave = () => {
    setTooltipVisible(null);
  };

  return (
    <div className="w-full px-6 sm:px-12 md:px-[200px] lg:px-[340px] xl:px-[500px] flex py-3 md:py-4 justify-center fixed z-50 transition-opacity duration-500">
      <nav
        ref={navbarRef}
        className={`navbar w-full py-3 flex rounded-lg bg-black bg-opacity-40 backdrop-blur-lg border border-white border-opacity-60 px-6 transition-all duration-300 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        <ul className="w-full flex flex-row justify-between px-6 sm:px-10 lg:px-8 xl:px-4 items-center relative">
          <li
            className="relative"
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={handleMouseLeave}
          >
            <Link href="#home" legacyBehavior>
              <a>
                <IoIosHome size={25} color="#329f9a" />
                <Tooltip text="Home" visible={tooltipVisible === 0} />
              </a>
            </Link>
          </li>
          <li
            className="relative"
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
          >
            <Link href="#about" legacyBehavior>
              <a>
                <BiSolidUserPin size={25} color="#329f9a" />
                <Tooltip text="About" visible={tooltipVisible === 1} />
              </a>
            </Link>
          </li>
          <li
            className="relative"
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
          >
            <Link href="#blog" legacyBehavior>
              <a>
                <MdArticle size={25} color="#329f9a" />
                <Tooltip text="Blog" visible={tooltipVisible === 2} />
              </a>
            </Link>
          </li>
          <li
            className="relative"
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={handleMouseLeave}
          >
            <Link href="#project" legacyBehavior>
              <a>
                <FaFolderOpen size={25} color="#329f9a" />
                <Tooltip text="Projects" visible={tooltipVisible === 3} />
              </a>
            </Link>
          </li>
          <li
            className="relative"
            onMouseEnter={() => handleMouseEnter(4)}
            onMouseLeave={handleMouseLeave}
          >
            <Link href="#tools" legacyBehavior>
              <a>
                <FaTools size={25} color="#329f9a" />
                <Tooltip text="Tools" visible={tooltipVisible === 4} />
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
