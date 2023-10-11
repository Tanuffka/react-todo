import { Routes, Route } from "react-router-dom";
import Profile from "../pages/Profile";
import Home from "../pages/Home";

export default function Router() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}
