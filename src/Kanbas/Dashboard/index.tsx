import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1234/Home"
          >
            <img src="/logo512.png" width={200} />
            <div>
              <h5>CS1234 React JS</h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/2345/Home"
          >
            <img src="/logo512.png" width={200} />
            <div>
              <h5>CS2345 Web Dev</h5>
              <p className="wd-dashboard-course-title">Frontend foundations</p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/3456/Home"
          >
            <img src="/logo512.png" width={200} />
            <div>
              <h5>CS3456 Node.js</h5>
              <p className="wd-dashboard-course-title">
                Server-side with Express
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/4567/Home"
          >
            <img src="/logo512.png" width={200} />
            <div>
              <h5>CS4567 Databases</h5>
              <p className="wd-dashboard-course-title">SQL and NoSQL basics</p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/5678/Home"
          >
            <img src="/logo512.png" width={200} />
            <div>
              <h5>CS5678 Algorithms</h5>
              <p className="wd-dashboard-course-title">
                Problem solving patterns
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/6789/Home"
          >
            <img src="/logo512.png" width={200} />
            <div>
              <h5>CS6789 Systems</h5>
              <p className="wd-dashboard-course-title">
                Operating systems intro
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/7890/Home"
          >
            <img src="/logo512.png" width={200} />
            <div>
              <h5>CS7890 Networks</h5>
              <p className="wd-dashboard-course-title">
                Web and transport layers
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
