import { useTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Footer from './components/Footer';
import Header from './components/Header';
import Content from './components/Content';

export default function App() {
  const theme = useTheme();

  return (
    <Box sx={{ backgroundColor: theme.palette.grey[100], minHeight: '100vh' }}>
      <CssBaseline />
      <Header />
      <Content />
      <Footer />
    </Box>
  );
}

