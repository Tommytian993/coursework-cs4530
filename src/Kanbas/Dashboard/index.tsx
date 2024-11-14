import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as db from "../Database";

export default function Dashboard() {
  const [courses, setCourses] = useState<any[]>(db.courses);
  const [course, setCourse] = useState<any>({
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "/images/reactjs.jpg",
    description: "New Description",
  });

  const addNewCourse = () => {
    const newCourse = {
      ...course,
      _id: new Date().getTime().toString(),
    };
    setCourses([...courses, newCourse]);
  };

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h5>
        New Course
        <button
          className="btn btn-primary float-end"
          id="wd-add-new-course-click"
          onClick={addNewCourse}
        >
          Add
        </button>
      </h5>
      <br />
      <input
        value={course.name}
        className="form-control mb-2"
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
      />
      <textarea
        value={course.description}
        className="form-control"
        onChange={(e) => setCourse({ ...course, description: e.target.value })}
      />
      <hr />
      <h2 id="wd-dashboard-published">
        Published Courses ({courses.length})
      </h2>{" "}
      <hr />
      <div
        id="wd-dashboard-courses"
        className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4"
      >
        {courses.map((courseItem) => (
          <div
            key={courseItem._id}
            className="wd-dashboard-course col"
            style={{ width: "260px" }}
          >
            <div className="card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to={`/Kanbas/Courses/${courseItem._id}/Home`}
              >
                <img
                  src={courseItem.image || "/images/reactjs.jpg"}
                  width="100%"
                  height={160}
                  alt={courseItem.name}
                  onError={(e) => {
                    e.currentTarget.src = "/images/reactjs.jpg";
                  }}
                />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    {courseItem.name}
                  </h5>
                  <p
                    className="wd-dashboard-course-title card-text overflow-y-hidden"
                    style={{ maxHeight: 100 }}
                  >
                    {courseItem.description}
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
