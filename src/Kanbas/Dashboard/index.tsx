import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { enrollStudent, unenrollStudent } from "../Enrollments/reducer";
import { addCourse, deleteCourse, updateCourse } from "../Courses/reducer";

export default function Dashboard({
  courses = [],
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  courses?: any[];
  course?: any;
  setCourse?: any;
  addNewCourse?: any;
  deleteCourse?: any;
  updateCourse?: any;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  const dispatch = useDispatch();

  const [showAllCourses, setShowAllCourses] = useState(false);

  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    e.currentTarget.src = "/logo192.png";
  };

  const isEnrolled = (courseId: string) => {
    return enrollments.some(
      (enrollment: any) =>
        enrollment.user === currentUser._id && enrollment.course === courseId
    );
  };

  const handleEnroll = (courseId: string) => {
    dispatch(enrollStudent({ userId: currentUser._id, courseId }));
  };

  const handleUnenroll = (courseId: string) => {
    dispatch(unenrollStudent({ userId: currentUser._id, courseId }));
  };

  const filteredCourses = showAllCourses
    ? courses
    : courses.filter((course: any) =>
        enrollments.some(
          (enrollment: any) =>
            enrollment.user === currentUser._id &&
            enrollment.course === course._id
        )
      );

  const isStudent = currentUser?.role === "STUDENT";
  const isFaculty = currentUser?.role === "FACULTY";

  return (
    <div id="wd-dashboard">
      <div className="d-flex justify-content-between align-items-center">
        <h1 id="wd-dashboard-title">Dashboard</h1>
        {isStudent && (
          <button
            className="btn btn-primary"
            onClick={() => setShowAllCourses(!showAllCourses)}
          >
            {showAllCourses ? "My Enrollments" : "Enrollments"}
          </button>
        )}
      </div>
      <hr />

      {isFaculty && (
        <>
          <h5>
            New Course
            <button
              className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={addNewCourse}
            >
              Add
            </button>
            <button
              className="btn btn-warning float-end me-2"
              onClick={updateCourse}
              id="wd-update-course-click"
            >
              Update
            </button>
          </h5>
          <br />
          <input
            value={course.name}
            className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
            placeholder="Course Name"
          />
          <textarea
            value={course.description}
            className="form-control"
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
            placeholder="Course Description"
            rows={3}
          />
          <hr />
        </>
      )}

      <h2 id="wd-dashboard-published">
        {showAllCourses ? "All Courses" : "Published Courses"} (
        {filteredCourses.length})
      </h2>
      <hr />
      <div
        id="wd-dashboard-courses"
        className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4"
      >
        {filteredCourses.map((courseItem: any) => (
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
                  onError={handleImageError}
                  style={{ objectFit: "cover" }}
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

                  {isFaculty && (
                    <>
                      <button
                        onClick={(event) => {
                          event.preventDefault();
                          deleteCourse(courseItem._id);
                        }}
                        className="btn btn-danger me-2 float-end"
                        id="wd-delete-course-click"
                      >
                        Delete
                      </button>
                      <button
                        id="wd-edit-course-click"
                        onClick={(event) => {
                          event.preventDefault();
                          setCourse(courseItem);
                        }}
                        className="btn btn-warning me-2 float-end"
                      >
                        Edit
                      </button>
                    </>
                  )}

                  {isStudent && showAllCourses && (
                    <button
                      onClick={(event) => {
                        event.preventDefault();
                        if (isEnrolled(courseItem._id)) {
                          handleUnenroll(courseItem._id);
                        } else {
                          handleEnroll(courseItem._id);
                        }
                      }}
                      className={`btn me-2 float-end ${
                        isEnrolled(courseItem._id)
                          ? "btn-danger"
                          : "btn-success"
                      }`}
                    >
                      {isEnrolled(courseItem._id) ? "Unenroll" : "Enroll"}
                    </button>
                  )}
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
