import { Link, useLocation } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

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

              <Avatar className="rounded-full w-10 h-10">
                <AvatarImage src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/340px-Default_pfp.svg.png"/>
                <AvatarFallback className="text-xs font-medium">
                  {/* FIRST AND THIRD LETTER OF THE EMAIL */}
                </AvatarFallback>
              </Avatar>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
