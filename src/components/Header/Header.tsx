import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import Avatar from 'src/components/Avatar';
import Logo from 'src//components/Logo';

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Logo />
        <Avatar />
      </Toolbar>
    </AppBar>
  );
}
