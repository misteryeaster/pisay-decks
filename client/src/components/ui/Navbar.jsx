import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Subjects", path: "/subjects" },
    { name: "Decks", path: "/decks" },
    { name: "Profile", path: "/profile" },
  ];

  return (
    <nav className="w-full bg-white shadow-md p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-blue-600">
          PisayDecks
        </Link>
        <ul className="flex space-x-6">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className={`text-sm font-medium hover:text-blue-500 ${
                  pathname === item.path ? "text-blue-600" : "text-gray-600"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
