import { Link as RouterLink } from 'react-router-dom';

import Link from '@mui/material/Link';

export default function Logo() {
  return (
    <Link
      component={RouterLink}
      to="/"
      sx={{
        mr: 3,
        display: { xs: 'none', md: 'flex' },
        fontFamily: 'monospace',
        fontWeight: 700,
        fontSize: 20,
        color: 'inherit',
        textDecoration: 'none',
      }}
    >
      Todo list
    </Link>
  );
}
