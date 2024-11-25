// import React from "react";
// import { useParams, Link } from "react-router-dom";
// import { FaChevronDown } from "react-icons/fa";

// export default function AssignmentEditor() {
//   const { cid } = useParams();

//   // Static assignment data
//   const assignment = {
//     title: "A1 - ENV + HTML",
//     description:
//       "The assignment is available online. Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section, Links to each of the lab assignments, Link to the Kanbas application, Links to all relevant source code repositories. The Kanbas application should include a link to navigate back to the landing page.",
//     points: 100,
//     dueDate: "2024-05-13",
//     availableFrom: "2024-05-06",
//     availableUntil: "2024-05-20",
//   };

//   return (
//     <div id="wd-assignments-editor" className="container mt-4">
//       <div className="row mb-3">
//         <label htmlFor="wd-name" className="col-sm-2 col-form-label">
//           Assignment Name
//         </label>
//         <div className="col-sm-10">
//           <input
//             id="wd-name"
//             className="form-control"
//             value={assignment.title}
//             readOnly
//           />
//         </div>
//       </div>

//       {/* Assignment Description */}
//       <div className="row mb-3">
//         <label htmlFor="wd-description" className="col-sm-2 col-form-label">
//           Assignment Description
//         </label>
//         <div className="col-sm-10">
//           <textarea
//             id="wd-description"
//             rows={6}
//             className="form-control"
//             value={assignment.description}
//             readOnly
//           />
//         </div>
//       </div>

//       {/* Points */}
//       <div className="row mb-3">
//         <label htmlFor="wd-points" className="col-sm-2 col-form-label">
//           Points
//         </label>
//         <div className="col-sm-10">
//           <input
//             id="wd-points"
//             type="number"
//             className="form-control"
//             value={assignment.points}
//             readOnly
//           />
//         </div>
//       </div>

//       {/* Assignment Group with Chevron */}
//       <div className="row mb-3">
//         <label htmlFor="wd-group" className="col-sm-2 col-form-label">
//           Assignment Group
//         </label>
//         <div className="col-sm-10">
//           <div className="input-group">
//             <select id="wd-group" className="form-control" disabled>
//               <option value="ASSIGNMENTS">ASSIGNMENTS</option>
//             </select>
//             <span className="input-group-text">
//               <FaChevronDown />
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* Display Grade As with Chevron */}
//       <div className="row mb-3">
//         <label
//           htmlFor="wd-display-grade-as"
//           className="col-sm-2 col-form-label"
//         >
//           Display Grade as
//         </label>
//         <div className="col-sm-10">
//           <div className="input-group">
//             <select id="wd-display-grade-as" className="form-control" disabled>
//               <option value="Percentage">Percentage</option>
//             </select>
//             <span className="input-group-text">
//               <FaChevronDown />
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* Assign To, Due, Available From in a Card */}
//       <div className="row mb-3">
//         <label className="col-sm-2 col-form-label">Assign</label>
//         <div className="col-sm-10">
//           <div className="card p-3">
//             <div className="row mb-3">
//               <label htmlFor="wd-assign-to" className="col-sm-2 col-form-label">
//                 Assign To
//               </label>
//               <div className="col-sm-10">
//                 <input
//                   id="wd-assign-to"
//                   className="form-control"
//                   value="Everyone"
//                   readOnly
//                 />
//               </div>
//             </div>

//             {/* Due Date */}
//             <div className="row mb-3">
//               <label htmlFor="wd-due-date" className="col-sm-2 col-form-label">
//                 Due
//               </label>
//               <div className="col-sm-10">
//                 <input
//                   id="wd-due-date"
//                   type="date"
//                   className="form-control"
//                   value={assignment.dueDate}
//                   readOnly
//                 />
//               </div>
//             </div>

//             {/* Available From and Until */}
//             <div className="row mb-3">
//               <div className="col-sm-6">
//                 <label htmlFor="wd-available-from" className="col-form-label">
//                   Available from
//                 </label>
//                 <input
//                   id="wd-available-from"
//                   type="date"
//                   className="form-control"
//                   value={assignment.availableFrom}
//                   readOnly
//                 />
//               </div>
//               <div className="col-sm-6">
//                 <label htmlFor="wd-available-until" className="col-form-label">
//                   Until
//                 </label>
//                 <input
//                   id="wd-available-until"
//                   type="date"
//                   className="form-control"
//                   value={assignment.availableUntil}
//                   readOnly
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Cancel and Save Buttons */}
//       <div className="d-flex justify-content-end">
//         <Link
//           to={`/Kanbas/Courses/${cid}/Assignments`}
//           className="btn btn-danger me-2"
//         >
//           Cancel
//         </Link>
//         <Link
//           to={`/Kanbas/Courses/${cid}/Assignments`}
//           className="btn btn-success"
//         >
//           Save
//         </Link>
//       </div>
//     </div>
//   );
// }
import React from "react";
import { useParams, Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { assignments } from "../../Database";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();

  // Retrieve the assignment from the database
  const assignment = assignments.find((a) => a._id === aid && a.course === cid);

  // Handle case where assignment is not found
  if (!assignment) {
    return (
      <div className="container mt-4">
        <h3>Assignment not found</h3>
        <Link
          to={`/Kanbas/Courses/${cid}/Assignments`}
          className="btn btn-primary"
        >
          Back to Assignments
        </Link>
      </div>
    );
  }

  return (
    <div id="wd-assignments-editor" className="container mt-4">
      <div className="row mb-3">
        <label htmlFor="wd-name" className="col-sm-2 col-form-label">
          Assignment Name
        </label>
        <div className="col-sm-10">
          <input
            id="wd-name"
            className="form-control"
            value={assignment.title}
            readOnly
          />
        </div>
      </div>

      {/* Assignment Description */}
      <div className="row mb-3">
        <label htmlFor="wd-description" className="col-sm-2 col-form-label">
          Assignment Description
        </label>
        <div className="col-sm-10">
          <textarea
            id="wd-description"
            rows={6}
            className="form-control"
            value={assignment.description || ""}
            readOnly
          />
        </div>
      </div>

      {/* Points */}
      <div className="row mb-3">
        <label htmlFor="wd-points" className="col-sm-2 col-form-label">
          Points
        </label>
        <div className="col-sm-10">
          <input
            id="wd-points"
            type="number"
            className="form-control"
            value={assignment.points}
            readOnly
          />
        </div>
      </div>

      {/* Assignment Group with Chevron */}
      <div className="row mb-3">
        <label htmlFor="wd-group" className="col-sm-2 col-form-label">
          Assignment Group
        </label>
        <div className="col-sm-10">
          <div className="input-group">
            <select id="wd-group" className="form-control" disabled>
              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            </select>
            <span className="input-group-text">
              <FaChevronDown />
            </span>
          </div>
        </div>
      </div>

      {/* Display Grade As with Chevron */}
      <div className="row mb-3">
        <label
          htmlFor="wd-display-grade-as"
          className="col-sm-2 col-form-label"
        >
          Display Grade as
        </label>
        <div className="col-sm-10">
          <div className="input-group">
            <select id="wd-display-grade-as" className="form-control" disabled>
              <option value="Percentage">Percentage</option>
            </select>
            <span className="input-group-text">
              <FaChevronDown />
            </span>
          </div>
        </div>
      </div>

      {/* Assign To, Due, Available From in a Card */}
      <div className="row mb-3">
        <label className="col-sm-2 col-form-label">Assign</label>
        <div className="col-sm-10">
          <div className="card p-3">
            <div className="row mb-3">
              <label htmlFor="wd-assign-to" className="col-sm-2 col-form-label">
                Assign To
              </label>
              <div className="col-sm-10">
                <input
                  id="wd-assign-to"
                  className="form-control"
                  value="Everyone"
                  readOnly
                />
              </div>
            </div>

            {/* Due Date */}
            <div className="row mb-3">
              <label htmlFor="wd-due-date" className="col-sm-2 col-form-label">
                Due
              </label>
              <div className="col-sm-10">
                <input
                  id="wd-due-date"
                  type="date"
                  className="form-control"
                  value={assignment.dueDate}
                  readOnly
                />
              </div>
            </div>

            {/* Available From and Until */}
            <div className="row mb-3">
              <div className="col-sm-6">
                <label htmlFor="wd-available-from" className="col-form-label">
                  Available from
                </label>
                <input
                  id="wd-available-from"
                  type="date"
                  className="form-control"
                  value={assignment.availableFrom}
                  readOnly
                />
              </div>
              <div className="col-sm-6">
                <label htmlFor="wd-available-until" className="col-form-label">
                  Until
                </label>
                <input
                  id="wd-available-until"
                  type="date"
                  className="form-control"
                  value={assignment.availableUntil}
                  readOnly
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cancel and Save Buttons */}
      <div className="d-flex justify-content-end">
        <Link
          to={`/Kanbas/Courses/${cid}/Assignments`}
          className="btn btn-danger me-2"
        >
          Cancel
        </Link>
        <Link
          to={`/Kanbas/Courses/${cid}/Assignments`}
          className="btn btn-success"
        >
          Save
        </Link>
      </div>
    </div>
  );
}
