import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Subjects", path: "/subjects" },
    { name: "Leaderboard", path: "/leaderboard" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav className="w-full bg-white shadow-md p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-slate-950">
          PisayDecks
        </Link>
        <ul className="flex space-x-6 items-center">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className={`text-sm font-medium hover:text-slate-950 ${
                  pathname === item.path ? "text-slate-950" : "text-slate-600"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
          <li>            
            <Link to="/profile">
              <div class="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                  <span class="font-medium text-gray-600 dark:text-gray-300">JL</span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
