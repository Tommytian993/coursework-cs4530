import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";

export default function ProtectedRoute({ children }: { children: any }) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  const { cid } = useParams();

  if (!currentUser) {
    return <Navigate to="/Kanbas/Account/Signin" />;
  }

  // If accessing a course, check if user is enrolled or is faculty
  if (cid) {
    const isEnrolled = enrollments.some(
      (enrollment: any) =>
        enrollment.user === currentUser._id && enrollment.course === cid
    );
    const isFaculty = currentUser.role === "FACULTY";

    if (!isEnrolled && !isFaculty) {
      return <Navigate to="/Kanbas/Dashboard" />;
    }
  }

  return children;
}
