import { Link } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";

export default function KanbasNavigation() {
  return (
    <div
      id="wd-kanbas-navigation"
      style={{ width: 120 }}
      className="position-fixed bottom-0 top-0 d-none d-md-block bg-white z-2 border-end"
    >
      {/* Northeastern Logo Section */}
      <div className="bg-black text-center p-2">
        <div className="text-danger fs-1 fw-bold">N</div>
        <div className="text-white small">LUX VERITAS VIRTUS</div>
      </div>

      {/* Account Section */}
      <Link to="/Kanbas/Account" className="text-decoration-none">
        <div className="bg-black text-center p-2 hover-bg-dark">
          {FaRegCircleUser({ className: "fs-2 text-white" })}
          <div className="text-white small">Account</div>
        </div>
      </Link>

      {/* Dashboard Section - Standalone White */}
      <Link to="/Kanbas/Dashboard" className="text-decoration-none">
        <div className="bg-white text-center p-2 border hover-bg-light">
          {AiOutlineDashboard({ className: "fs-2 text-danger" })}
          <div className="text-danger small">Dashboard</div>
        </div>
      </Link>

      {/* Navigation Items Section */}
      <div className="bg-black text-center p-2">
        <Link to="/Kanbas/Dashboard" className="text-decoration-none">
          <div className="mb-2 hover-bg-dark p-1 rounded">
            {LiaBookSolid({ className: "fs-2 text-danger" })}
            <div className="text-white small">Courses</div>
          </div>
        </Link>
        <Link to="/Kanbas/Calendar" className="text-decoration-none">
          <div className="mb-2 hover-bg-dark p-1 rounded">
            {IoCalendarOutline({ className: "fs-2 text-danger" })}
            <div className="text-white small">Calendar</div>
          </div>
        </Link>
        <Link to="/Kanbas/Inbox" className="text-decoration-none">
          <div className="mb-2 hover-bg-dark p-1 rounded">
            {FaInbox({ className: "fs-2 text-danger" })}
            <div className="text-white small">Inbox</div>
          </div>
        </Link>
        <Link to="/Labs" className="text-decoration-none">
          <div className="hover-bg-dark p-1 rounded">
            {LiaCogSolid({ className: "fs-2 text-danger" })}
            <div className="text-white small">Labs</div>
          </div>
        </Link>
      </div>
    </div>
  );
}
