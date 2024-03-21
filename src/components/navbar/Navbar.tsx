import "./navbar.scss";

type NavbarProps = {
  onClick: (selected: NavItem) => void;
};

type NavItem = {
  type: "STUDENT" | "TEACHER" | "COURSES";
};

const Navbar = (props: NavbarProps) => {
  const navItems: NavItem[] = [
    {
      type: "COURSES",
    },
    {
      type: "STUDENT",
    },
    {
      type: "TEACHER",
    },
  ];
  return (
    <nav>
      {navItems.map((n) => (
        <button onClick={() => props.onClick(n)}>{n.type}</button>
      ))}
    </nav>
  );
};

export default Navbar;
