import { BrowserRouter } from 'react-router-dom';

import { useTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';

import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import Router from 'src/Router';

export default function App() {
  const theme = useTheme();

  return (
    <BrowserRouter>
      <Box
        sx={{
          backgroundColor: theme.palette.grey[100],
          minHeight: '100vh',
          position: 'relative',
        }}
      >
        <CssBaseline />
        <Header />
        <Router />
        <Footer />
      </Box>
    </BrowserRouter>
  );
}
