import React from "react";
import { FaChevronDown } from "react-icons/fa"; // 导入 ChevronDown 图标

export default function AssignmentEditor() {
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
            value="A1 - ENV + HTML"
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
            value="The assignment is available online. Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section, Links to each of the lab assignments, Link to the Kanbas application, Links to all relevant source code repositories. The Kanbas application should include a link to navigate back to the landing page."
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
            value={100}
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
            <select id="wd-group" className="form-control">
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
            <select id="wd-display-grade-as" className="form-control">
              <option value="Percentage">Percentage</option>
            </select>
            <span className="input-group-text">
              <FaChevronDown />
            </span>
          </div>
        </div>
      </div>

      {/* Submission Type with Chevron */}
      <div className="row mb-3">
        <label htmlFor="wd-submission-type" className="col-sm-2 col-form-label">
          Submission Type
        </label>
        <div className="col-sm-10">
          <div className="input-group">
            <select id="wd-submission-type" className="form-control">
              <option value="Online">Online</option>
            </select>
            <span className="input-group-text">
              <FaChevronDown />
            </span>
          </div>
        </div>
      </div>

      {/* Online Entry Options */}
      <div className="row mb-3">
        <label className="col-sm-2 col-form-label">Online Entry Options</label>
        <div className="col-sm-10">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="wd-text-entry"
            />
            <label className="form-check-label" htmlFor="wd-text-entry">
              Text Entry
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="wd-website-url"
              defaultChecked
            />
            <label className="form-check-label" htmlFor="wd-website-url">
              Website URL
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="wd-media-recordings"
            />
            <label className="form-check-label" htmlFor="wd-media-recordings">
              Media Recordings
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="wd-student-annotation"
            />
            <label className="form-check-label" htmlFor="wd-student-annotation">
              Student Annotation
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="wd-file-upload"
            />
            <label className="form-check-label" htmlFor="wd-file-upload">
              File Uploads
            </label>
          </div>
        </div>
      </div>

      {/* Assign To */}
      <div className="row mb-3">
        <label htmlFor="wd-assign-to" className="col-sm-2 col-form-label">
          Assign To
        </label>
        <div className="col-sm-10">
          <input id="wd-assign-to" className="form-control" value="Everyone" />
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
            value="2024-05-13"
          />
        </div>
      </div>

      {/* Available From and Until */}
      <div className="row mb-3">
        <label htmlFor="wd-available-from" className="col-sm-2 col-form-label">
          Available from
        </label>
        <div className="col-sm-5">
          <input
            id="wd-available-from"
            type="date"
            className="form-control"
            value="2024-05-06"
          />
        </div>
        <label htmlFor="wd-available-until" className="col-sm-2 col-form-label">
          Until
        </label>
        <div className="col-sm-5">
          <input
            id="wd-available-until"
            type="date"
            className="form-control"
            value="2024-05-20"
          />
        </div>
      </div>

      {/* Cancel and Save Buttons */}
      <div className="d-flex justify-content-end">
        <button id="wd-cancel" className="btn btn-danger me-2">
          Cancel
        </button>
        <button id="wd-save" className="btn btn-success">
          Save
        </button>
      </div>
    </div>
  );
}
