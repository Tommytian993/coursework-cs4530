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
      className="position-fixed bottom-0 top-0 d-none d-md-block bg-white z-2"
    >
      {/* Northeastern Logo Section */}
      <div className="bg-black text-center p-2">
        <div className="text-danger fs-1 fw-bold">N</div>
        <div className="text-white small">LUX VERITAS VIRTUS</div>
      </div>

      {/* Account Section */}
      <div className="bg-black text-center p-2">
        {FaRegCircleUser({ className: "fs-2 text-white" })}
        <div className="text-white small">Account</div>
      </div>

      {/* Dashboard Section - Standalone White */}
      <div className="bg-white text-center p-2 border">
        {AiOutlineDashboard({ className: "fs-2 text-danger" })}
        <div className="text-danger small">Dashboard</div>
      </div>

      {/* Navigation Items Section */}
      <div className="bg-black text-center p-2">
        <div className="mb-2">
          {LiaBookSolid({ className: "fs-2 text-danger" })}
          <div className="text-white small">Courses</div>
        </div>
        <div className="mb-2">
          {IoCalendarOutline({ className: "fs-2 text-danger" })}
          <div className="text-white small">Calendar</div>
        </div>
        <div className="mb-2">
          {FaInbox({ className: "fs-2 text-danger" })}
          <div className="text-white small">Inbox</div>
        </div>
        <div>
          {LiaCogSolid({ className: "fs-2 text-danger" })}
          <div className="text-white small">Labs</div>
        </div>
      </div>
    </div>
  );
}
