import { Link } from "react-router-dom";
import * as db from "../Database";

export default function Dashboard() {
  const courses = db.courses;

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">
        Published Courses ({courses.length})
      </h2>{" "}
      <hr />
      <div
        id="wd-dashboard-courses"
        className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4"
      >
        {courses.map((course) => (
          <div
            key={course._id}
            className="wd-dashboard-course col"
            style={{ width: "260px" }}
          >
            <div className="card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to={`/Kanbas/Courses/${course._id}/Home`}
              >
                <img
                  src={course.image || "/logo.svg"}
                  width="100%"
                  height={160}
                  alt={course.name}
                  onError={(e) => {
                    e.currentTarget.src = "/logo.svg";
                  }}
                />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    {course.name}
                  </h5>
                  <p
                    className="wd-dashboard-course-title card-text overflow-y-hidden"
                    style={{ maxHeight: 100 }}
                  >
                    {course.description}
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
