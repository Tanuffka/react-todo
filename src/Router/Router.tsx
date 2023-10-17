import { Route, Routes } from 'react-router-dom';

import ErrorPage from 'src/pages/ErrorPage';
import Settings from 'src/pages/Settings';

import Profile from '../pages/Profile';
import Home from '../pages/Home';
import TodoContextProvider from '../pages/Home/context/Todo';

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
