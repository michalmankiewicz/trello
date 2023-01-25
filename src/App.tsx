import { Route, Routes } from 'react-router';
import Auth from './pages/Auth';
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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route element={<DisableAuth />}>
            <Route path="/signup" element={<Auth />} />
            <Route path="/login" element={<Auth />} />
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
