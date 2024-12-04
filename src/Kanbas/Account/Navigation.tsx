import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  const { pathname } = useLocation();

  return (
    <ul className="list-group">
      {links.map((link) => (
        <li
          key={link}
          className={`list-group-item ${
            pathname.includes(link) ? "active" : ""
          }`}
        >
          <Link to={`/Kanbas/Account/${link}`} className="text-decoration-none">
            {link}
          </Link>
        </li>
      ))}
    </ul>
  );
}
