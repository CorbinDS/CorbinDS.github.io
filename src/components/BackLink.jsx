import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function BackLink({ to = "/", className = "" }) {
  return (
    <Link
      to={to}
      className={`absolute text-blue-500 hover:text-blue-700 ${className}`}
    >
      ← Back to Home
    </Link>
  );
}