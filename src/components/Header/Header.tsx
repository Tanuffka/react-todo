import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import Avatar from '../Avatar';
import Logo from '../Logo';

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
