// import ModuleControlButtons from "../Modules/ModuleControlButtons";
// import LessonControlButtons from "../Modules/LessonControlButtons";
// import { BsFileEarmarkText, BsGripVertical } from "react-icons/bs";
// import { FaSearch, FaChevronDown } from "react-icons/fa";
// import { useParams } from "react-router";
// import { assignments } from "../../Database";

// export default function Assignments() {
//   const { cid } = useParams();
//   const courseAssignments = assignments.filter(
//     (assignment) => assignment.course === cid
//   );

//   function formatDateTime(dateString: string) {
//     const date = new Date(dateString);
//     const optionsDate: Intl.DateTimeFormatOptions = {
//       month: "short",
//       day: "numeric",
//     };
//     const optionsTime: Intl.DateTimeFormatOptions = {
//       hour: "numeric",
//       minute: "2-digit",
//       hour12: true,
//     };
//     const datePart = date.toLocaleDateString(undefined, optionsDate);
//     const timePart = date.toLocaleTimeString(undefined, optionsTime);
//     return `${datePart} at ${timePart}`;
//   }

//   return (
//     <div id="wd-assignments">
//       <div className="input-group mb-3">
//         <span className="input-group-text">
//           <FaSearch />
//         </span>
//         <input
//           id="wd-search-assignment"
//           className="form-control"
//           placeholder="Search for Assignments"
//         />
//       </div>

//       {/* Buttons */}
//       <div className="d-flex justify-content-end mb-3">
//         <button
//           id="wd-add-assignment-group"
//           className="btn btn-outline-secondary me-2"
//         >
//           + Group
//         </button>
//         <button id="wd-add-assignment" className="btn btn-danger">
//           + Assignment
//         </button>
//       </div>

//       <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
//         <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center justify-content-between">
//           <div className="d-flex align-items-center">
//             <BsGripVertical className="me-2 fs-3" />
//             <FaChevronDown className="me-2" />
//             <span>ASSIGNMENTS</span>
//           </div>

//           <div className="d-flex align-items-center ms-auto">
//             <span className="badge bg-light text-dark fs-6 me-2">
//               40% of Total
//             </span>
//             <button className="btn btn-outline-secondary me-3">+</button>
//           </div>
//         </div>
//         <ul className="wd-lessons list-group rounded-0">
//           {courseAssignments.map((assignment) => (
//             <li
//               key={assignment._id}
//               className="wd-lesson list-group-item p-3 ps-1"
//             >
//               <BsGripVertical className="me-2 fs-3" />
//               <BsFileEarmarkText className="me-2 text-success fs-4" />
//               <a
//                 className="wd-assignment-link"
//                 href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
//               >
//                 {assignment.title}
//               </a>
//               <div>
//                 Multiple Modules | <strong>Not available until</strong>{" "}
//                 {formatDateTime(assignment.availableFrom)} |{" "}
//                 <strong>Due</strong> {formatDateTime(assignment.dueDate)} |{" "}
//                 {assignment.points} pts
//               </div>
//               <LessonControlButtons />
//             </li>
//           ))}
//         </ul>
//       </li>
//     </div>
//   );
// }
// src/Kanbas/Courses/Assignments/index.tsx

import React from "react";
import { BsFileEarmarkText, BsGripVertical } from "react-icons/bs";
import { FaSearch, FaChevronDown } from "react-icons/fa";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteAssignment } from "./reducer";

export default function Assignments() {
  const { cid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const courseAssignments = assignments.filter(
    (assignment: any) => assignment.course === cid
  );

  function formatDateTime(dateString: string) {
    const date = new Date(dateString);
    const optionsDate: Intl.DateTimeFormatOptions = {
      month: "short",
      day: "numeric",
    };
    const optionsTime: Intl.DateTimeFormatOptions = {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    };
    const datePart = date.toLocaleDateString(undefined, optionsDate);
    const timePart = date.toLocaleTimeString(undefined, optionsTime);
    return `${datePart} at ${timePart}`;
  }

  const handleDelete = (assignmentId: string) => {
    if (window.confirm("Are you sure you want to delete this assignment?")) {
      dispatch(deleteAssignment(assignmentId));
    }
  };

  return (
    <div id="wd-assignments">
      <div className="input-group mb-3">
        <span className="input-group-text">
          <FaSearch />
        </span>
        <input
          id="wd-search-assignment"
          className="form-control"
          placeholder="Search for Assignments"
        />
      </div>

      {/* Buttons */}
      {currentUser?.role === "FACULTY" && (
        <div className="d-flex justify-content-end mb-3">
          <button
            id="wd-add-assignment-group"
            className="btn btn-outline-secondary me-2"
          >
            + Group
          </button>
          {/* 点击 + Assignment 按钮，导航到 AssignmentEditor，用于创建新作业 */}
          <button
            id="wd-add-assignment"
            className="btn btn-danger"
            onClick={() => navigate(`/Kanbas/Courses/${cid}/Assignments/New`)}
          >
            + Assignment
          </button>
        </div>
      )}

      <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
        <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <BsGripVertical className="me-2 fs-3" />
            <FaChevronDown className="me-2" />
            <span>ASSIGNMENTS</span>
          </div>

          <div className="d-flex align-items-center ms-auto">
            <span className="badge bg-light text-dark fs-6 me-2">
              40% of Total
            </span>
            {currentUser?.role === "FACULTY" && (
              <button className="btn btn-outline-secondary me-3">+</button>
            )}
          </div>
        </div>
        <ul className="wd-lessons list-group rounded-0">
          {courseAssignments.map((assignment: any) => (
            <li
              key={assignment._id}
              className="wd-lesson list-group-item p-3 ps-1"
            >
              <BsGripVertical className="me-2 fs-3" />
              <BsFileEarmarkText className="me-2 text-success fs-4" />
              <Link
                className="wd-assignment-link"
                to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
              >
                {assignment.title}
              </Link>
              <div>
                Multiple Modules | <strong>Not available until</strong>{" "}
                {formatDateTime(assignment.availableFrom)} |{" "}
                <strong>Due</strong> {formatDateTime(assignment.dueDate)} |{" "}
                {assignment.points} pts
              </div>
              {/* 添加删除按钮 */}
              <div className="d-flex justify-content-end">
                {/* 仅当用户角色为 FACULTY 时，显示删除按钮 */}
                {currentUser?.role === "FACULTY" && (
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(assignment._id)}
                  >
                    Delete
                  </button>
                )}
              </div>
            </li>
          ))}
        </ul>
      </li>
    </div>
  );
}
