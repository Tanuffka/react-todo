import { StyledFooter } from "./styled";
import Typography from "@mui/material/Typography";

const yearNow = new Date().getFullYear();

export default function Footer() {
  return (
    <StyledFooter>
      <Typography>{yearNow} &copy; Tanuffka</Typography>
    </StyledFooter>
  );
}
