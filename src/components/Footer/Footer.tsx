import Typography from '@mui/material/Typography';

import { StyledFooter } from './styled';

const yearNow = new Date().getFullYear();

export default function Footer() {
  return (
    <StyledFooter>
      <Typography>{yearNow} &copy; Tanuffka</Typography>
    </StyledFooter>
  );
}
