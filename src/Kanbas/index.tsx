import { Routes, Route, Navigate } from "react-router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import ProtectedRoute from "./Account/ProtectedRoute";
import Session from "./Account/Session";
import * as courseClient from "./Courses/client";
import "./styles.css";

export default function Kanbas() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [courses, setCourses] = useState<any[]>([]);

  // 从数据库获取课程列表
  const fetchCourses = async () => {
    try {
      const courses = await courseClient.fetchAllCourses();
      setCourses(courses);
    } catch (error) {
      console.error("获取课程失败:", error);
    }
  };

  // 当用户登录状态改变时获取课程
  useEffect(() => {
    if (currentUser) {
      fetchCourses();
    }
  }, [currentUser]);

  return (
    <Session>
      <div id="wd-kanbas">
        <KanbasNavigation />
        <div className="wd-main-content-offset p-3">
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="/Account/*" element={<Account />} />
            <Route
              path="/Dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard courses={courses} />
                </ProtectedRoute>
              }
            />
            <Route
              path="/Courses/:cid/*"
              element={
                <ProtectedRoute>
                  <Courses />
                </ProtectedRoute>
              }
            />
            <Route path="/Calendar" element={<h1>Calendar</h1>} />
            <Route path="/Inbox" element={<h1>Inbox</h1>} />
          </Routes>
        </div>
      </div>
    </Session>
  );
}
