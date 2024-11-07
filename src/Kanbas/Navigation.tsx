import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";

export default function KanbasNavigation() {
  const { pathname } = useLocation();

  const links = [
    { label: "Dashboard", path: "/Kanbas/Dashboard", icon: AiOutlineDashboard },
    { label: "Courses", path: "/Kanbas/Dashboard", icon: LiaBookSolid },
    { label: "Calendar", path: "/Kanbas/Calendar", icon: IoCalendarOutline },
    { label: "Inbox", path: "/Kanbas/Inbox", icon: FaInbox },
    { label: "Labs", path: "/Labs", icon: LiaCogSolid },
  ];

  return (
    <div
      id="wd-kanbas-navigation"
      style={{ width: 120 }}
      className="position-fixed bottom-0 top-0 d-none d-md-block bg-white z-2 border-end d-flex flex-column"
    >
      {/* Northeastern Logo Section */}
      <div className="bg-black text-center p-2 flex-shrink-0">
        <div className="text-danger fs-1 fw-bold">N</div>
        <div className="text-white small">LUX VERITAS VIRTUS</div>
      </div>

      {/* Account Section */}
      <Link to="/Kanbas/Account" className="text-decoration-none flex-shrink-0">
        <div
          className={`text-center p-2 ${
            pathname.includes("Account") ? "bg-white" : "bg-black"
          }`}
        >
          {FaRegCircleUser({
            className: `fs-2 ${
              pathname.includes("Account") ? "text-danger" : "text-white"
            }`,
          })}
          <div
            className={`small ${
              pathname.includes("Account") ? "text-danger" : "text-white"
            }`}
          >
            Account
          </div>
        </div>
      </Link>

      {/* Navigation Items Section - Takes remaining space */}
      <div className="bg-black text-center p-2 flex-grow-1 d-flex flex-column justify-content-start">
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className="text-decoration-none mb-2"
          >
            <div className="hover-bg-dark p-1 rounded">
              {link.icon({
                className: `fs-2 ${
                  pathname.includes(link.label) ? "text-danger" : "text-danger"
                }`,
              })}
              <div
                className={`small ${
                  pathname.includes(link.label) ? "text-danger" : "text-white"
                }`}
              >
                {link.label}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
