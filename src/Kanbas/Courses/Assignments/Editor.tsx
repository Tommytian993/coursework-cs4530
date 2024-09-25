import React from "react";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      {/* Assignment Name */}
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" value="A1 - ENV + HTML" />
      <br />
      <br />

      {/* Assignment Description */}
      <textarea
        id="wd-description"
        rows={6}
        cols={50}
        value="The assignment is available online Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section Links to each of the lab assignments Link to the Kanbas application Links to all relevant source code repositories The Kanbas application should include a link to navigate back to the landing page."
      />
      <br />
      <br />

      {/* Points */}
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" type="number" value={100} />
          </td>
        </tr>
        <br />
        <br />

        {/* Assignment Group */}
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-group">
              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            </select>
          </td>
        </tr>
        <br />
        <br />

        {/* Display Grade As */}
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
          </td>
          <td>
            <select id="wd-display-grade-as">
              <option value="Percentage">Percentage</option>
            </select>
          </td>
        </tr>
        <br />
        <br />

        {/* Submission Type */}
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select id="wd-submission-type">
              <option value="Online">Online</option>
            </select>
          </td>
        </tr>
        <br />
        <br />

        {/* Online Entry Options */}
        <tr>
          <td align="right" valign="top">
            <label>Online Entry Options</label>
          </td>
          <td>
            <input type="checkbox" id="wd-text-entry" /> Text Entry
            <br />
            <input type="checkbox" id="wd-website-url" /> Website URL
            <br />
            <input type="checkbox" id="wd-media-recordings" /> Media Recordings
            <br />
            <input type="checkbox" id="wd-student-annotation" /> Student
            Annotation
            <br />
            <input type="checkbox" id="wd-file-upload" /> File Uploads
          </td>
        </tr>
        <br />
        <br />

        {/* Assign To */}
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-assign-to">Assign To</label>
          </td>
          <td>
            <input id="wd-assign-to" value="Everyone" />
          </td>
        </tr>
        <br />
        <br />

        {/* Due Date */}
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-due-date">Due</label>
          </td>
          <td>
            <input id="wd-due-date" type="date" value="2024-05-13" />
          </td>
        </tr>
        <br />
        <br />

        {/* Available From and Until */}
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-available-from">Available from</label>
          </td>
          <td>
            <input id="wd-available-from" type="date" value="2024-05-06" />
          </td>
          <td align="right" valign="top">
            <label htmlFor="wd-available-until">Until</label>
          </td>
          <td>
            <input id="wd-available-until" type="date" value="2024-05-20" />
          </td>
        </tr>
      </table>

      <br />
      <br />

      {/* Cancel and Save Buttons */}
      {/* Hi I'm not sure about the last wd-name I assume we can replace the "name" with cancel/save since here are 2 buttons? */}
      <button id="wd-cancel">Cancel</button>
      <button id="wd-save">Save</button>
    </div>
  );
}
