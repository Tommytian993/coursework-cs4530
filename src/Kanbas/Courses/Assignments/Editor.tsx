// src/Kanbas/Courses/Assignments/Editor.tsx

import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, updateAssignment } from "./reducer";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const isNewAssignment = aid === "New";

  const [assignment, setAssignment] = useState<any>({
    title: "",
    description: "",
    points: 0,
    dueDate: "",
    availableFrom: "",
    availableUntil: "",
    course: cid,
  });

  useEffect(() => {
    if (!isNewAssignment) {
      // 编辑已有作业
      const existingAssignment = assignments.find(
        (a: any) => a._id === aid && a.course === cid
      );
      if (existingAssignment) {
        setAssignment(existingAssignment);
      } else {
        // 作业未找到，返回作业列表
        navigate(`/Kanbas/Courses/${cid}/Assignments`);
      }
    }
  }, [aid, cid, assignments, isNewAssignment, navigate]);

  const handleSave = () => {
    if (isNewAssignment) {
      // 添加新作业
      dispatch(addAssignment(assignment));
    } else {
      // 更新已有作业
      dispatch(updateAssignment(assignment));
    }
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  // 如果不是 FACULTY，禁止编辑
  const isEditable = currentUser?.role === "FACULTY";

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
            onChange={(e) =>
              setAssignment({ ...assignment, title: e.target.value })
            }
            readOnly={!isEditable}
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
            onChange={(e) =>
              setAssignment({ ...assignment, description: e.target.value })
            }
            readOnly={!isEditable}
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
            onChange={(e) =>
              setAssignment({ ...assignment, points: parseInt(e.target.value) })
            }
            readOnly={!isEditable}
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
            <select
              id="wd-group"
              className="form-control"
              disabled={!isEditable}
              value={assignment.group || "ASSIGNMENTS"}
              onChange={(e) =>
                setAssignment({ ...assignment, group: e.target.value })
              }
            >
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
            <select
              id="wd-display-grade-as"
              className="form-control"
              disabled={!isEditable}
              value={assignment.displayGradeAs || "Percentage"}
              onChange={(e) =>
                setAssignment({ ...assignment, displayGradeAs: e.target.value })
              }
            >
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
                  onChange={(e) =>
                    setAssignment({ ...assignment, dueDate: e.target.value })
                  }
                  readOnly={!isEditable}
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
                  onChange={(e) =>
                    setAssignment({
                      ...assignment,
                      availableFrom: e.target.value,
                    })
                  }
                  readOnly={!isEditable}
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
                  onChange={(e) =>
                    setAssignment({
                      ...assignment,
                      availableUntil: e.target.value,
                    })
                  }
                  readOnly={!isEditable}
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
        {/* 仅当用户角色为 FACULTY 时，显示保存按钮 */}
        {isEditable && (
          <button className="btn btn-success" onClick={handleSave}>
            Save
          </button>
        )}
      </div>
    </div>
  );
}
