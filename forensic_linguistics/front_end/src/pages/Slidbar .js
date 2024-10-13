import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

const menuItems = [
  {
    name: "Home",
    icon: "home",
  },
  {
    name: "Case Studies",
    icon: "Case Studies",
    items: [
      "Famous Studies",
      "Solved Cases",
      "Unsolved Cases",
      "Historical Cases",
      "Political Cases",
    ],
  },
];

const Icon = ({ icon }) => (
  <span className="material-symbols-outlined">{icon}</span>
);

const NavHeader = () => (
  <header className="slidebar-header">
    <button type="button">
      <Icon icon="menu" />
    </button>
    <span>EXPLORE</span>
  </header>
);

const NavButton = ({ onClick, name, icon, isActive, hasSubNav }) => (
  <button
    type="button"
    onClick={() => onClick(name)}
    className={isActive ? "active" : ""}
  >
    {icon && <Icon icon={icon} />}
    <span>{name}</span>
    {hasSubNav && <Icon icon="expand_more" />}
  </button>
);

const SubMenu = ({ item, activeItem, handleClick }) => {
  const navRef = useRef(null);
  const isSubNavOpen = (item, items) =>
    items.some((i) => i === activeItem) || item === activeItem;
  const { name, items } = item;

  return (
    <div
      className={`sub-nav ${isSubNavOpen(name, items) ? "open" : ""}`}
      style={{
        height: !isSubNavOpen(name, items) ? 0 : navRef.current?.clientHeight,
      }}
    >
      <div ref={navRef} className="sub-nav-inner">
        {item?.items.map((subItem, index) => (
          <NavButton
            key={index}
            onClick={handleClick}
            name={subItem}
            isActive={activeItem === subItem}
          />
        ))}
      </div>
    </div>
  );
};

export const Slidbar = () => {
  const [activeItem, setActiveItem] = useState("");
  const handleClick = (item) => setActiveItem(item !== activeItem ? item : "");

  return (
    <aside className="sidebar">
      <NavHeader />
      {menuItems.map((item, index) => (
        <div key={index}>
          <NavButton
            onClick={handleClick}
            name={item.name}
            icon={item.icon}
            hasSubNav={!!item.items}
          />
          {item.items && (
            <SubMenu
              activeItem={activeItem}
              handleClick={handleClick}
              item={item}
            />
          )}
        </div>
      ))}
    </aside>
  );
};

// export default function NavMenu() {
//   const [isMenuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav className="d-flex">
//       <button className="menu-toggle" onClick={toggleMenu}>
//         <FontAwesomeIcon icon={faBars} />
//       </button>
//       <ul className={`menu ${isMenuOpen ? "open" : ""}`}>
//         <li>
//           <Link to="/Home">Home</Link>
//         </li>
//         <li className="dropdown-container">
//           <Link to="/case-studies">Case Studies</Link>
//           <ul className="dropdown">
//             <li>
//               <Link to="/case-studies/Famouse">Famous Studies</Link>
//             </li>
//             <li>
//               <Link to="/case-studies/Solved">Solved Cases</Link>
//             </li>
//             <li>
//               <Link to="/case-studies/Unsolved">Unsolved Cases</Link>
//             </li>
//             <li>
//               <Link to="/case-studies/Historical">Historical Cases</Link>
//             </li>
//             <li>
//               <Link to="/case-studies/Political">Political Cases</Link>
//             </li>
//           </ul>
//         </li>
//         <li className="dropdown-container">
//           <Link to="/Techniqes">Forensic Techniques & Tools</Link>
//           <ul className="dropdown">
//             <li>
//               <Link to="/case-studies/Techniqes">Techniques</Link>
//             </li>
//             <li>
//               <Link to="/case-studies/Tools">Tools</Link>
//             </li>
//             <li>
//               <Link to="/case-studies/Glossory">Glossary</Link>
//             </li>
//           </ul>
//         </li>
//         <li className="dropdown-container">
//           <Link to="/Blogs">Expert Interviews & Blogs</Link>
//           <ul className="dropdown">
//             <li>
//               <Link to="/case-studies/Interviews">Interviews</Link>
//             </li>
//             <li>
//               <Link to="/case-studies/Blogs">Blogs</Link>
//             </li>
//           </ul>
//         </li>
//         <li className="dropdown-container">
//           <Link to="/Resources">Educational Resources</Link>
//           <ul className="dropdown">
//             <li>
//               <Link to="/case-studies/Courses">Courses</Link>
//             </li>
//             <li>
//               <Link to="/case-studies/Books">Books</Link>
//             </li>
//           </ul>
//         </li>
//         <li>
//           <Link to="/Issues">Legal & Ethical Issues</Link>
//         </li>
//         <li className="dropdown-container">
//           <Link to="/Community">Forum & Community</Link>
//           <ul className="dropdown">
//             <li>
//               <Link to="/case-studies/Events">Discussions & Events</Link>
//             </li>
//           </ul>
//         </li>
//         <li>
//           <Link to="/Services">Services & Consultation</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// }
