import {
  FaBan,
  FaCheck,
  FaDownload,
  FaShare,
  FaHome,
  FaChartBar,
  FaBullhorn,
  FaBell,
} from "react-icons/fa";

export default function CourseStatus() {
  return (
    <div id="wd-course-status">
      <h2>Course Status</h2>

      {/* Publish/Unpublish Buttons */}
      <div className="d-flex gap-2 mb-3">
        <button className="btn btn-secondary btn-sm">
          {FaBan({ className: "me-1" })}
          Unpublish
        </button>
        <button className="btn btn-success btn-sm">
          {FaCheck({ className: "me-1" })}
          Publish
        </button>
      </div>

      {/* Other Action Buttons */}
      <div className="d-flex flex-column gap-2">
        <button className="btn btn-secondary btn-sm text-start">
          {FaDownload({ className: "me-2" })}
          Import Existing Content
        </button>

        <button className="btn btn-secondary btn-sm text-start">
          {FaShare({ className: "me-2" })}
          Import from Commons
        </button>

        <button className="btn btn-secondary btn-sm text-start">
          {FaHome({ className: "me-2" })}
          Choose Home Page
        </button>

        <button className="btn btn-secondary btn-sm text-start">
          {FaChartBar({ className: "me-2" })}
          View Course Stream
        </button>

        <button className="btn btn-secondary btn-sm text-start">
          {FaBullhorn({ className: "me-2" })}
          New Announcement
        </button>

        <button className="btn btn-secondary btn-sm text-start">
          {FaChartBar({ className: "me-2" })}
          New Analytics
        </button>

        <button className="btn btn-secondary btn-sm text-start">
          {FaBell({ className: "me-2" })}
          View Course Notifications
        </button>
      </div>
    </div>
  );
}
