// import ModuleControlButtons from "../Modules/ModuleControlButtons";
// import LessonControlButtons from "../Modules/LessonControlButtons";
// import { BsFileEarmarkText, BsGripVertical } from "react-icons/bs";
// import { FaSearch } from "react-icons/fa";
// import { FaChevronDown } from "react-icons/fa";
// export default function Assignments() {
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
//             <ModuleControlButtons />
//           </div>
//         </div>
//         <ul className="wd-lessons list-group rounded-0">
//           <li className="wd-lesson list-group-item p-3 ps-1">
//             <BsGripVertical className="me-2 fs-3" />
//             <BsFileEarmarkText className="me-2 text-success fs-4" />
//             <a
//               className="wd-assignment-link"
//               href="#/Kanbas/Courses/1234/Assignments/123"
//             >
//               A1 - ENV + HTML
//             </a>
//             <div>
//               Multiple Modules | <strong>Not available until</strong> May 6 at
//               12:00am | <strong>Due</strong> May 13 at 11:59pm | 100 pts
//             </div>
//             <LessonControlButtons />
//           </li>
//           <li className="wd-lesson list-group-item p-3 ps-1">
//             <BsGripVertical className="me-2 fs-3" />
//             <BsFileEarmarkText className="me-2 text-success fs-4" />
//             <a
//               className="wd-assignment-link"
//               href="#/Kanbas/Courses/1234/Assignments/124"
//             >
//               A2 - CSS + BOOTSTRAP
//             </a>
//             <div>
//               Multiple Modules | <strong>Not available until</strong> May 13 at
//               12:00am | <strong>Due</strong> May 20 at 11:59pm | 100 pts
//             </div>
//             <LessonControlButtons />
//           </li>
//           <li className="wd-lesson list-group-item p-3 ps-1">
//             <BsGripVertical className="me-2 fs-3" />
//             <BsFileEarmarkText className="me-2 text-success fs-4" />
//             <a
//               className="wd-assignment-link"
//               href="#/Kanbas/Courses/1234/Assignments/125"
//             >
//               A3 - JAVASCRIPT + REACT
//             </a>
//             <div>
//               Multiple Modules | <strong>Not available until</strong> May 20 at
//               12:00am | <strong>Due</strong> May 27 at 11:59pm | 100 pts
//             </div>
//             <LessonControlButtons />
//           </li>
//         </ul>
//       </li>
//     </div>
//   );
// }
import ModuleControlButtons from "../Modules/ModuleControlButtons";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { BsFileEarmarkText, BsGripVertical } from "react-icons/bs";
import { FaSearch, FaChevronDown } from "react-icons/fa";
import { useParams } from "react-router";
import { assignments } from "../../Database";

export default function Assignments() {
  const { cid } = useParams();
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === cid
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
      <div className="d-flex justify-content-end mb-3">
        <button
          id="wd-add-assignment-group"
          className="btn btn-outline-secondary me-2"
        >
          + Group
        </button>
        <button id="wd-add-assignment" className="btn btn-danger">
          + Assignment
        </button>
      </div>

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
            <button className="btn btn-outline-secondary me-3">+</button>
            <ModuleControlButtons />
          </div>
        </div>
        <ul className="wd-lessons list-group rounded-0">
          {courseAssignments.map((assignment) => (
            <li
              key={assignment._id}
              className="wd-lesson list-group-item p-3 ps-1"
            >
              <BsGripVertical className="me-2 fs-3" />
              <BsFileEarmarkText className="me-2 text-success fs-4" />
              <a
                className="wd-assignment-link"
                href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
              >
                {assignment.title}
              </a>
              <div>
                Multiple Modules | <strong>Not available until</strong>{" "}
                {formatDateTime(assignment.availableFrom)} |{" "}
                <strong>Due</strong> {formatDateTime(assignment.dueDate)} |{" "}
                {assignment.points} pts
              </div>
              <LessonControlButtons />
            </li>
          ))}
        </ul>
      </li>
    </div>
  );
}
