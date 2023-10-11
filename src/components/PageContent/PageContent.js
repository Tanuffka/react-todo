import PageTitle from "../PageTitle";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";

export default function PageContent({ children, title }) {
  return (
    <Container maxWidth="md">
      <PageTitle title={title} />
      <Paper sx={{ p: 4 }}>{children}</Paper>
    </Container>
  );
}
