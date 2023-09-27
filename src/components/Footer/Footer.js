import { StyledFooter } from "./styled";

const yearNow = new Date().getFullYear();

export default function Footer() {
  return <StyledFooter>{yearNow} &copy; Tanuffka</StyledFooter>;
}
