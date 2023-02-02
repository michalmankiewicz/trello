import { Route, Routes } from 'react-router';
import BoardDetails from './pages/BoardDetails';
import Boards from './pages/Boards';
import Homepage from './pages/Homepage';
import NotFound from './pages/NotFound';
import { ThemeProvider } from './utils/styledCompentsUtils/styled-components';
import GlobalStyles from './GlobalStyles';
import theme from './utils/styledCompentsUtils/theme';
import Layout from './components/UI/layout/Layout';
import EditProfile from './pages/EditProfile';
import RequireAuth from './components/auth/routeAuthorization/RequireAuth';
import DisableAuth from './components/auth/routeAuthorization/DisableAuth';
import { useAppDispatch, useAppSelector } from './types/redux';
import { useGetUserQuery } from './store/auth/authApiSlice';
import { useEffect } from 'react';
import { validateUser } from './store/auth/authSlice';
import { selectUser } from './store/auth/authSelectors';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';

function App() {
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const { currentData, isLoading } = useGetUserQuery(user?.userId, {});

  useEffect(() => {
    if (currentData) {
      dispatch(validateUser());
    }
  }, [currentData, dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout isLoading={isLoading}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route element={<DisableAuth />}>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<LogIn />} />
          </Route>
          <Route element={<RequireAuth />}>
            <Route path="/boards" element={<Boards />} />
            <Route path="/boards/:boardId" element={<BoardDetails />} />
            <Route path="/edit-profile" element={<EditProfile />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
