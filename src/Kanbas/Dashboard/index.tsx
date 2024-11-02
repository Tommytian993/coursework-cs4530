import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div
        id="wd-dashboard-courses"
        className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4"
      >
        <div className="wd-dashboard-course col" style={{ width: "260px" }}>
          <div className="card rounded-3 overflow-hidden">
            <Link
              className="wd-dashboard-course-link text-decoration-none text-dark"
              to="/Kanbas/Courses/1234/Home"
            >
              <img src="/logo.svg" width="100%" height={160} />
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
        </div>

        <div className="wd-dashboard-course col" style={{ width: "260px" }}>
          <div className="card rounded-3 overflow-hidden">
            <Link
              className="wd-dashboard-course-link text-decoration-none text-dark"
              to="/Kanbas/Courses/2345/Home"
            >
              <img src="/logo.svg" width="100%" height={160} />
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  CS2345 Web Dev
                </h5>
                <p className="wd-dashboard-course-title card-text">
                  Frontend foundations
                </p>
                <button className="btn btn-primary"> Go </button>
              </div>
            </Link>
          </div>
        </div>

        <div className="wd-dashboard-course col" style={{ width: "260px" }}>
          <div className="card rounded-3 overflow-hidden">
            <Link
              className="wd-dashboard-course-link text-decoration-none text-dark"
              to="/Kanbas/Courses/3456/Home"
            >
              <img src="/logo.svg" width="100%" height={160} />
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  CS3456 Node.js
                </h5>
                <p className="wd-dashboard-course-title card-text">
                  Server-side with Express
                </p>
                <button className="btn btn-primary"> Go </button>
              </div>
            </Link>
          </div>
        </div>

        <div className="wd-dashboard-course col" style={{ width: "260px" }}>
          <div className="card rounded-3 overflow-hidden">
            <Link
              className="wd-dashboard-course-link text-decoration-none text-dark"
              to="/Kanbas/Courses/4567/Home"
            >
              <img src="/logo.svg" width="100%" height={160} />
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  CS4567 Databases
                </h5>
                <p className="wd-dashboard-course-title card-text">
                  SQL and NoSQL basics
                </p>
                <button className="btn btn-primary"> Go </button>
              </div>
            </Link>
          </div>
        </div>

        <div className="wd-dashboard-course col" style={{ width: "260px" }}>
          <div className="card rounded-3 overflow-hidden">
            <Link
              className="wd-dashboard-course-link text-decoration-none text-dark"
              to="/Kanbas/Courses/5678/Home"
            >
              <img src="/logo.svg" width="100%" height={160} />
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  CS5678 Algorithms
                </h5>
                <p className="wd-dashboard-course-title card-text">
                  Problem solving patterns
                </p>
                <button className="btn btn-primary"> Go </button>
              </div>
            </Link>
          </div>
        </div>

        <div className="wd-dashboard-course col" style={{ width: "260px" }}>
          <div className="card rounded-3 overflow-hidden">
            <Link
              className="wd-dashboard-course-link text-decoration-none text-dark"
              to="/Kanbas/Courses/6789/Home"
            >
              <img src="/logo.svg" width="100%" height={160} />
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  CS6789 Systems
                </h5>
                <p className="wd-dashboard-course-title card-text">
                  Operating systems intro
                </p>
                <button className="btn btn-primary"> Go </button>
              </div>
            </Link>
          </div>
        </div>

        <div className="wd-dashboard-course col" style={{ width: "260px" }}>
          <div className="card rounded-3 overflow-hidden">
            <Link
              className="wd-dashboard-course-link text-decoration-none text-dark"
              to="/Kanbas/Courses/7890/Home"
            >
              <img src="/logo.svg" width="100%" height={160} />
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                  CS7890 Networks
                </h5>
                <p className="wd-dashboard-course-title card-text">
                  Web and transport layers
                </p>
                <button className="btn btn-primary"> Go </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
