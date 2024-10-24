export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" value="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea id="wd-description">
        The assignment is available online Submit a link to the landing page of
      </textarea>
      <br />
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-group" defaultValue="ASSIGNMENTS">
              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
              <option value="QUIZZES">QUIZZES</option>
              <option value="EXAMS">EXAMS</option>
              <option value="PROJECT">PROJECT</option>
            </select>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
          </td>
          <td>
            <select id="wd-display-grade-as" defaultValue="Percentage">
              <option value="Percentage">Percentage</option>
              <option value="Points">Points</option>
              <option value="Letter Grade">Letter Grade</option>
            </select>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select id="wd-submission-type" defaultValue="Online">
              <option value="Online">Online</option>
              <option value="On Paper">On Paper</option>
              <option value="External Tool">External Tool</option>
            </select>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <div>Online Entry Options</div>
            <div>
              <input id="wd-text-entry" type="checkbox" />
              <label htmlFor="wd-text-entry"> Text Entry</label>
            </div>
            <div>
              <input id="wd-website-url" type="checkbox" />
              <label htmlFor="wd-website-url"> Website URL</label>
            </div>
            <div>
              <input id="wd-media-recordings" type="checkbox" />
              <label htmlFor="wd-media-recordings"> Media Recordings</label>
            </div>
            <div>
              <input id="wd-student-annotation" type="checkbox" />
              <label htmlFor="wd-student-annotation"> Student Annotation</label>
            </div>
            <div>
              <input id="wd-file-upload" type="checkbox" />
              <label htmlFor="wd-file-upload"> File Uploads</label>
            </div>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-assign-to">Assign</label>
          </td>
          <td>
            <label htmlFor="wd-assign-to">Assign to</label>
            <br />
            <input id="wd-assign-to" value="Everyone" />
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-due-date">Due</label>
          </td>
          <td>
            <input id="wd-due-date" type="date" value="2024-05-13" />
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-available-from">Available from</label>
          </td>
          <td>
            <input id="wd-available-from" type="date" value="2024-05-06" />
            &nbsp;&nbsp;
            <label htmlFor="wd-available-until">Until</label>
            &nbsp;
            <input id="wd-available-until" type="date" value="2024-05-20" />
          </td>
        </tr>
      </table>
      <br />
      <button>Cancel</button>
      <button>Save</button>
    </div>
  );
}
