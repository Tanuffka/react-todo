import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

export default function PageTitle({ title }) {
  return (
    <Paper sx={{ mb: 4, mt: 10, px: 4, py: 2 }}>
      <Typography variant="h6">{title}</Typography>
    </Paper>
  );
}
