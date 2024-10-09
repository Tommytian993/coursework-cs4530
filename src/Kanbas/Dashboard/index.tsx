import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2>
      <hr />
      <div
        id="wd-dashboard-courses"
        className="row row-cols-1 row-cols-md-5 g-4"
      >
        {/* First Course */}
        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <Link
            className="wd-dashboard-course-link text-decoration-none text-dark"
            to="/Kanbas/Courses/1234/Home"
          >
            <img src="/images/reactjs.jpg" width="100%" height={160} />
            <div className="card-body">
              <h5 className="wd-dashboard-course-title card-title">
                CS1234 React JS
              </h5>
              <p className="wd-dashboard-course-title card-text">
                Full Stack software developer
              </p>
              <button className="btn btn-primary"> Go </button>
            </div>
          </Link>
        </div>

        {/* Second Course */}
        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <Link
            className="wd-dashboard-course-link text-decoration-none text-dark"
            to="/Kanbas/Courses/1234/Home"
          >
            <img src="/images/chinese-course.jpg" width="100%" height={160} />
            <div className="card-body">
              <h5 className="wd-dashboard-course-title card-title">
                CN1234 Chinese
              </h5>
              <p className="wd-dashboard-course-title card-text">
                Elementary Mandarin
              </p>
              <button className="btn btn-primary"> Go </button>
            </div>
          </Link>
        </div>

        {/* Third Course */}
        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <Link
            className="wd-dashboard-course-link text-decoration-none text-dark"
            to="/Kanbas/Courses/1234/Home"
          >
            <img src="/images/japanese-course.jpg" width="100%" height={160} />
            <div className="card-body">
              <h5 className="wd-dashboard-course-title card-title">
                JPN1234 Japanese
              </h5>
              <p className="wd-dashboard-course-title card-text">
                Beginner Japanese
              </p>
              <button className="btn btn-primary"> Go </button>
            </div>
          </Link>
        </div>

        {/* Fourth Course */}
        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <Link
            className="wd-dashboard-course-link text-decoration-none text-dark"
            to="/Kanbas/Courses/1234/Home"
          >
            <img src="/images/spanish-course.jpg" width="100%" height={160} />
            <div className="card-body">
              <h5 className="wd-dashboard-course-title card-title">
                SPN1234 Spanish
              </h5>
              <p className="wd-dashboard-course-title card-text">
                Elementary Spanish
              </p>
              <button className="btn btn-primary"> Go </button>
            </div>
          </Link>
        </div>

        {/* Fifth Course */}
        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <Link
            className="wd-dashboard-course-link text-decoration-none text-dark"
            to="/Kanbas/Courses/1234/Home"
          >
            <img src="/images/french-course.jpg" width="100%" height={160} />
            <div className="card-body">
              <h5 className="wd-dashboard-course-title card-title">
                FRN1234 French
              </h5>
              <p className="wd-dashboard-course-title card-text">
                Beginner French
              </p>
              <button className="btn btn-primary"> Go </button>
            </div>
          </Link>
        </div>

        {/* Sixth Course */}
        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <Link
            className="wd-dashboard-course-link text-decoration-none text-dark"
            to="/Kanbas/Courses/1234/Home"
          >
            <img src="/images/arabic-course.jpg" width="100%" height={160} />
            <div className="card-body">
              <h5 className="wd-dashboard-course-title card-title">
                ARB1234 Arabic
              </h5>
              <p className="wd-dashboard-course-title card-text">
                Elementary Arabic
              </p>
              <button className="btn btn-primary"> Go </button>
            </div>
          </Link>
        </div>

        {/* Seventh Course */}
        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <Link
            className="wd-dashboard-course-link text-decoration-none text-dark"
            to="/Kanbas/Courses/1234/Home"
          >
            <img src="/images/russian-course.jpg" width="100%" height={160} />
            <div className="card-body">
              <h5 className="wd-dashboard-course-title card-title">
                RSN1234 Russian
              </h5>
              <p className="wd-dashboard-course-title card-text">
                Beginner Russian
              </p>
              <button className="btn btn-primary"> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
