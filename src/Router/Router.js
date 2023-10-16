import { Routes, Route } from "react-router-dom";
import Profile from "../pages/Profile";
import Home from "../pages/Home";
import TodoContextProvider from "../pages/Home/context/Todo";
import ErrorPage from "../pages/ErrorPage";
import Settings from "../pages/Settings";

export default function Router() {
  return (
    <Routes>
      <Route path="/">
        <Route
          index
          element={
            <TodoContextProvider>
              <Home />
            </TodoContextProvider>
          }
        />
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}
