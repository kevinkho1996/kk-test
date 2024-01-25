import Image from "next/image";
import { AiOutlineHome } from "react-icons/ai";
import { BsPeople } from "react-icons/bs";
import { TiContacts } from "react-icons/ti";
import { FiMail } from "react-icons/fi";
import { RxDashboard } from "react-icons/rx";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";
import { useContext } from "react";
import { SidebarContext } from "@/context/SidebarContext";
import { useRouter } from "next/router";

const sidebarItems = [
  {
    name: "Home",
    href: "/",
    icon: AiOutlineHome,
  },
  {
    name: "About",
    href: "/about",
    icon: BsPeople,
  },
  {
    name: "Mails",
    href: "/mails",
    icon: FiMail,
  },
  {
    name: "Contact",
    href: "/contact",
    icon: TiContacts,
  },
];

const Sidebar = () => {
  const router = useRouter();
  const { isCollapsed, toggleSidebarcollapse } = useContext(SidebarContext);

  return (
    <div className="sidebar__wrapper">
      <button className="btn" onClick={toggleSidebarcollapse}>
        {isCollapsed ? <MdKeyboardArrowRight /> : <MdKeyboardArrowLeft />}
      </button>
      <aside className="sidebar" data-collapse={isCollapsed}>
        <div className="sidebar__top">
          <Image
            width={80}
            height={80}
            className="sidebar__logo"
            src="/logogram.png"
            alt="logo"
          />
          <Image
            width={116}
            height={10}
            className="sidebar__logo-name"
            src="/logotype.png"
            alt="logo"
          />
        </div>
        <ul className="sidebar__list">
            <li className="sidebar__item">
                <Link
                className={`sidebar__link ${
                    router.pathname === "/" ? "sidebar__link--active" : ""
                }`}
                href="/"
                >
                <span className="sidebar__icon">
                    <RxDashboard />
                </span>
                <span className="sidebar__name">Dashboard</span>
                </Link>
            </li>
            <li className="sidebar__item">
                <Link
                className={`sidebar__link ${
                    router.pathname === "/about" ? "sidebar__link--active" : ""
                }`}
                href="/about"
                >
                <span className="sidebar__icon">
                    <BsPeople />
                </span>
                <span className="sidebar__name">About</span>
                </Link>
            </li>
            <li className="sidebar__item">
                <Link
                className={`sidebar__link ${
                    router.pathname === "/mails" ? "sidebar__link--active" : ""
                }`}
                href="/mails"
                >
                <span className="sidebar__icon">
                    <FiMail />
                </span>
                <span className="sidebar__name">Mails</span>
                </Link>
            </li>
            <li className="sidebar__item">
                <Link
                className={`sidebar__link ${
                    router.pathname === "/contact" ? "sidebar__link--active" : ""
                }`}
                href="/contact"
                >
                <span className="sidebar__icon">
                    <TiContacts />
                </span>
                <span className="sidebar__name">Contact</span>
                </Link>
            </li>
        </ul>

      </aside>
    </div>
  );
};

export default Sidebar;