export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" className="p-4">
      {/* Assignment Name */}
      <div className="mb-4">
        <label htmlFor="wd-name" className="form-label fw-bold">
          Assignment Name
        </label>
        <input id="wd-name" value="A1 - ENV + HTML" className="form-control" />
      </div>

      {/* Assignment Description */}
      <div className="mb-4">
        <label htmlFor="wd-description" className="form-label fw-bold">
          Description
        </label>
        <textarea id="wd-description" className="form-control" rows={8}>
          The assignment is available online Submit a link to the landing page
          of your Web application running on Netlify. The landing page should
          include: • Your full name and section • Links to each of the lab
          assignments • Link to the Kanbas application • Links to all relevant
          source code repositories The Kanbas application should include a link
          to navigate back to the landing page.
        </textarea>
      </div>

      {/* Form Fields */}
      <div className="row g-3">
        {/* Points */}
        <div className="col-md-6">
          <div className="d-flex align-items-center">
            <label htmlFor="wd-points" className="form-label me-3 mb-0">
              Points
            </label>
            <input
              id="wd-points"
              value={100}
              className="form-control"
              style={{ width: "100px" }}
            />
          </div>
        </div>

        {/* Assignment Group */}
        <div className="col-md-6">
          <label htmlFor="wd-group" className="form-label">
            Assignment Group
          </label>
          <select
            id="wd-group"
            defaultValue="ASSIGNMENTS"
            className="form-select"
          >
            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            <option value="QUIZZES">QUIZZES</option>
            <option value="EXAMS">EXAMS</option>
            <option value="PROJECT">PROJECT</option>
          </select>
        </div>

        {/* Display Grade as */}
        <div className="col-md-6">
          <label htmlFor="wd-display-grade-as" className="form-label">
            Display Grade as
          </label>
          <select
            id="wd-display-grade-as"
            defaultValue="Percentage"
            className="form-select"
          >
            <option value="Percentage">Percentage</option>
            <option value="Points">Points</option>
            <option value="Letter Grade">Letter Grade</option>
          </select>
        </div>

        {/* Submission Type */}
        <div className="col-md-6">
          <label htmlFor="wd-submission-type" className="form-label">
            Submission Type
          </label>
          <select
            id="wd-submission-type"
            defaultValue="Online"
            className="form-select"
          >
            <option value="Online">Online</option>
            <option value="On Paper">On Paper</option>
            <option value="External Tool">External Tool</option>
          </select>
        </div>

        {/* Online Entry Options */}
        <div className="col-12">
          <div className="ms-md-5">
            <div className="fw-bold mb-2">Online Entry Options</div>
            <div className="form-check">
              <input
                id="wd-text-entry"
                type="checkbox"
                className="form-check-input"
              />
              <label htmlFor="wd-text-entry" className="form-check-label">
                Text Entry
              </label>
            </div>
            <div className="form-check">
              <input
                id="wd-website-url"
                type="checkbox"
                className="form-check-input"
                defaultChecked
              />
              <label htmlFor="wd-website-url" className="form-check-label">
                Website URL
              </label>
            </div>
            <div className="form-check">
              <input
                id="wd-media-recordings"
                type="checkbox"
                className="form-check-input"
              />
              <label htmlFor="wd-media-recordings" className="form-check-label">
                Media Recordings
              </label>
            </div>
            <div className="form-check">
              <input
                id="wd-student-annotation"
                type="checkbox"
                className="form-check-input"
              />
              <label
                htmlFor="wd-student-annotation"
                className="form-check-label"
              >
                Student Annotation
              </label>
            </div>
            <div className="form-check">
              <input
                id="wd-file-upload"
                type="checkbox"
                className="form-check-input"
              />
              <label htmlFor="wd-file-upload" className="form-check-label">
                File Uploads
              </label>
            </div>
          </div>
        </div>

        {/* Assign to */}
        <div className="col-md-6">
          <label htmlFor="wd-assign-to" className="form-label">
            Assign to
          </label>
          <input
            id="wd-assign-to"
            value="Everyone"
            className="form-control"
            placeholder="Assign to"
          />
        </div>

        {/* Due Date */}
        <div className="col-md-6">
          <label htmlFor="wd-due-date" className="form-label">
            Due
          </label>
          <input
            id="wd-due-date"
            type="datetime-local"
            value="2024-05-13T23:59"
            className="form-control"
          />
        </div>

        {/* Available from */}
        <div className="col-md-6">
          <label htmlFor="wd-available-from" className="form-label">
            Available from
          </label>
          <input
            id="wd-available-from"
            type="datetime-local"
            value="2024-05-06T00:00"
            className="form-control"
          />
        </div>

        {/* Available until */}
        <div className="col-md-6">
          <label htmlFor="wd-available-until" className="form-label">
            Until
          </label>
          <input
            id="wd-available-until"
            type="datetime-local"
            className="form-control"
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-4 d-flex justify-content-end gap-2">
        <button className="btn btn-secondary">Cancel</button>
        <button className="btn btn-danger">Save</button>
      </div>
    </div>
  );
}
