import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteAssignment } from "./reducer";
import {
  FaSearch,
  FaPlus,
  FaEllipsisV,
  FaCaretDown,
  FaFileAlt,
  FaCheckCircle,
  FaTrash,
} from "react-icons/fa";

export default function Assignments() {
  const { cid } = useParams();
  const dispatch = useDispatch();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const courseAssignments = assignments.filter(
    (assignment: any) => assignment.course === cid
  );

  const handleDeleteAssignment = (assignmentId: string) => {
    if (window.confirm("Are you sure you want to delete this assignment?")) {
      dispatch(deleteAssignment(assignmentId));
    }
  };

  return (
    <div id="wd-assignments" className="p-4">
      {/* Search and Action Buttons Row */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="position-relative">
          {FaSearch({
            className:
              "position-absolute top-50 start-0 translate-middle-y ms-2 text-muted",
          })}
          <input
            id="wd-search-assignment"
            placeholder="Search..."
            className="form-control ps-5"
            style={{ width: "300px" }}
          />
        </div>
        <div className="d-flex gap-2">
          <button
            id="wd-add-assignment-group"
            className="btn btn-outline-secondary"
          >
            {FaPlus({ className: "me-1" })}+ Group
          </button>
          <Link
            to={`/Kanbas/Courses/${cid}/Assignments/new`}
            id="wd-add-assignment"
            className="btn btn-danger"
          >
            {FaPlus({ className: "me-1" })}+ Assignment
          </Link>
        </div>
      </div>

      {/* Assignments Section Header */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="d-flex align-items-center">
          {FaEllipsisV({ className: "me-2 text-muted" })}
          {FaCaretDown({ className: "me-2 text-muted" })}
          <h3 id="wd-assignments-title" className="mb-0 fw-bold">
            ASSIGNMENTS
          </h3>
        </div>
        <div className="d-flex align-items-center">
          <span className="badge bg-light text-dark me-2">40% of Total</span>
          {FaPlus({ className: "me-2 text-muted" })}
          {FaEllipsisV({ className: "text-muted" })}
        </div>
      </div>

      {/* Assignments List */}
      <ul id="wd-assignment-list" className="list-group">
        {courseAssignments.map((assignment: any) => (
          <li
            key={assignment._id}
            className="wd-assignment-list-item list-group-item border-0 p-3 mb-2"
            style={{ borderLeft: "3px solid green !important" }}
          >
            <div className="d-flex justify-content-between align-items-start">
              <div className="d-flex align-items-start">
                {FaEllipsisV({ className: "me-3 mt-1 text-muted" })}
                <div className="d-flex align-items-center me-3">
                  {FaFileAlt({ className: "text-muted" })}
                </div>
                <div>
                  <Link
                    className="wd-assignment-link text-decoration-none fw-bold text-dark"
                    to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                  >
                    {assignment.title}
                  </Link>
                  <div className="text-muted small mt-1">
                    <span className="text-danger">Multiple Modules</span> |{" "}
                    <b>Not available until</b> May 6 at 12:00am | <b>Due</b> May
                    13 at 11:59pm | {assignment.points} pts
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center">
                {FaCheckCircle({ className: "text-success me-2" })}
                {FaTrash({
                  className: "text-danger me-2",
                  onClick: () => handleDeleteAssignment(assignment._id),
                  style: { cursor: "pointer" },
                })}
                {FaEllipsisV({ className: "text-muted" })}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
